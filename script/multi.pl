#!/usr/bin/perl

use FindBin;
use lib "$FindBin::Bin/PerlPeer/lib";

use Mojolicious::Lite;
use Mojo::JSON;
use Mojo::ByteStream;
use Mojo::IOLoop;

my $ioloop = Mojo::IOLoop->singleton;

@ARGV = qw/daemon/ unless @ARGV;

my $PLAYERS = {};
my $BOMBS = {};

my $arena = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

websocket '/' => sub {
    my $self = shift;
    my $tx = $self->tx;
    Mojo::IOLoop->stream($tx->connection)->timeout(0);

    app->log->debug('Player connected');

    my $cid = _get_id($self);
    $PLAYERS->{$cid}->{tx} = $tx;

    my $player = $PLAYERS->{$cid};

    $player->{nick}  = 'Bomber' . int(rand(10000));
    $player->{pos}   = _get_random_pos();
    $player->{frags} = 0;

    app->log->debug('Send arena');
    _send_message($self, type => 'drawarena', arena => $arena);

    app->log->debug('Send self info');
    _send_message($self, type => 'player', _get_player_info($cid));

    app->log->debug('Send other players info');
    my $other_players = [grep { $_->{id} ne $cid } @{_get_players()}];
    _send_message($self, type => 'initplayers', players => $other_players);

    app->log->debug('Send bombs');
    _send_message($self, type => 'initbombs', bombs => _get_bombs());

    app->log->debug('Notify other players about a new player');
    _send_message_to_other(
        $self,
        type => 'new_player',
        _get_player_info($cid)
    );

    $self->on(message =>
        sub {
            my ($self, $message) = @_;

            my $json = Mojo::JSON->new;

            $message = $json->decode($message);
            return unless $message || $json->error;

            my $type = $message->{type};
            return unless $type;

            if ($type eq 'move') {
                _handle_move($self, $message);
            }
            elsif ($type eq 'bomb') {
                _handle_bomb($self, $message);
            }
        }
    );

    $self->on( finish =>
        sub {
            _send_message_to_other($self, type => 'old_player', id => $cid);

            app->log->debug('Player disconnected');
            delete $PLAYERS->{$cid};
        }
    );
};

get '/' => 'index';

sub _handle_move {
    my $self = shift;
    my $message = shift;

    my $id = _get_id($self);
    my $direction = $message->{direction};

    return unless $id && $direction;

    my $player = $PLAYERS->{$id};

    my $row = $player->{pos}->[0];
    my $col = $player->{pos}->[1];

    if ($direction eq 'up') {
        $row--;
    }
    elsif ($direction eq 'down') {
        $row++;
    }
    elsif ($direction eq 'left') {
        $col--;
    }
    elsif ($direction eq 'right') {
        $col++;
    }

    # Can't go through the wall
    return if $arena->[$row]->[$col];

    # Can't go through the bomb
    foreach my $id (keys %$BOMBS) {
        my ($r, $c) = @{$BOMBS->{$id}->{pos}};
        return if $row == $r && $col == $c;
    }

    $player->{pos}->[0] = $row;
    $player->{pos}->[1] = $col;
    _send_message_to_all(
        $self,
        type      => 'move',
        id        => $id,
        direction => $direction
    );
}

sub _get_id {
    my $self = shift;

    my $tx = $self->tx;
    return "$tx";
}

sub _handle_bomb {
    my $self = shift;
    my $message = shift;

    my $id = _get_id($self);

    my $player = $PLAYERS->{$id};

    if (!$player->{bomb}) {
        app->log->debug('Player set up a bomb');

        $player->{bomb} = 1;
        my $bomb = $BOMBS->{$id} = {pos => [@{$player->{pos}}]};

        _send_message_to_other(
            $self,
            type => 'bomb',
            id   => $id,
            pos  => $bomb->{pos}
        );

        $ioloop->timer(
            2,
            sub {
                my $player = $PLAYERS->{$id};
                my $bomb = delete $BOMBS->{$id};

                # If we are still connected
                if ($player) {
                    $player->{bomb} = 0;
                }

                # Get bomb position
                my ($row, $col) = @{$bomb->{pos}};

                my @dead;
                my $me;
                _walk_arena(
                    $arena, $row, $col, 3,
                    sub {
                        my ($row, $col) = @_;

                        foreach my $pid (keys %$PLAYERS) {
                            my ($p_row, $p_col) =
                              @{$PLAYERS->{$pid}->{pos}};

                            if ($p_row eq $row && $p_col eq $col) {

                                # If we are connected and dead
                                if ($PLAYERS->{$id} && $id eq $pid) {
                                    $me = 1;
                                }

                                push @dead, $pid;
                            }
                        }
                    }
                );

                _send_message_to_all($self, id => $id, type => 'explode');

                # If there are any dead players
                if (@dead) {

                    # If we killed ourself
                    if ($me) {
                        $player->{frags} -= 1;
                    }

                    # If not and connected
                    elsif ($player) {
                        $player->{frags} += @dead;
                    }

                    # Resurection
                    $ioloop->timer(
                        5,
                        sub {
                            my @players = map {
                                {id => $_, pos => _get_random_pos()}
                            } @dead;

                            foreach my $player (@players) {
                                $PLAYERS->{$player->{id}}->{pos} =
                                  $player->{pos};
                            }

                            _send_message_to_all(
                                $self,
                                type    => 'alive',
                                players => [@players]
                            );
                        }
                    );

                    _send_message_to_all(
                        $self,
                        type    => 'die',
                        players => [@dead]
                    );

                    # Update frags if we are connected
                    _send_message_to_all(
                        $self,
                        type  => 'frags',
                        id    => $id,
                        frags => $player->{frags}
                    ) if $player;
                }
            }
        );
    }
}

sub _walk_arena {
    my ($arena, $row, $col, $radius, $cb) = @_;

    my $mrow = @$arena;
    my $mcol = @{$arena->[0]};

    $cb->($row, $col);

    for (my $i = 1; $i < $radius; $i++) {
        if ($row + $i < $mrow) {
            last if $arena->[$row + $i]->[$col];

            $cb->($row + $i, $col);
        }
    }

    for (my $i = 1; $i < $radius; $i++) {
        if ($row - $i > 0) {
            last if $arena->[$row - $i]->[$col];

            $cb->($row - $i, $col);
        }
    }

    for (my $i = 1; $i < $radius; $i++) {
        if ($col + $i < $mcol) {
            last if $arena->[$row]->[$col + $i];

            $cb->($row, $col + $i);
        }
    }

    for (my $i = 1; $i < $radius; $i++) {
        if ($col - $i > 0) {
            last if $arena->[$row]->[$col - $i];

            $cb->($row, $col - $i);
        }
    }
}

sub _get_random_pos {
    my @pos;
    for (my $i = 0; $i < @$arena; $i++) {
        for (my $j = 0; $j < @{$arena->[0]}; $j++) {
            push @pos, [$i => $j] unless $arena->[$i]->[$j];
        }
    }

    my $rand = int(rand(@pos));

    return $pos[$rand];
}

sub _get_player_info {
    my $cid = shift;

    my $player = $PLAYERS->{$cid};
    return unless $player;

    return (
        id    => $cid,
        pos   => $player->{pos},
        frags => $player->{frags},
        nick  => $player->{nick}
    );
}

sub _get_players {
    return [] unless keys %$PLAYERS;

    return [map { { _get_player_info($_) } } keys %$PLAYERS];
}

sub _get_bombs {
    return [] unless keys %$BOMBS;

    return [map { {id => $_, pos => $BOMBS->{$_}->{pos}} } keys %$BOMBS];
}

sub _message_to_json {
    my %message = @_;

    my $json = Mojo::JSON->new;
    return $json->encode({%message});
}

sub _send_message {
    my $self = shift;

    $self->send(_message_to_json(@_));
}

sub _send_message_to_other {
    my $self = shift;
    my %message = @_;

    my $id = _get_id($self);

    my $message = _message_to_json(%message);

    foreach my $cid (keys %$PLAYERS) {
        next if $cid eq $id;

        my $player = $PLAYERS->{$cid};

        # If player is connected
        if ($player && $player->{tx}) {
            $PLAYERS->{$cid}->{tx}->send($message);
        }

        # Cleanup disconnected player
        else {
            delete $PLAYERS->{$cid};
        }
    }
}

sub _send_message_to_all {
    _send_message_to_other(@_);
    _send_message(@_);
}

print "Remember, you need to also run 'sudo perl mojo/examples/flash-policy-server.pl' as root for this to work...\n";

app->start;

1;

__DATA__
@@ index.html.ep
% my $url = $self->req->url->to_abs->scheme($self->req->is_secure ? 'wss' : 'ws')->path('/');
<!doctype html><html>
    <head>
        <title></title>
        <meta charset="utf-8" />
        <script type="text/javascript" src="/js/jquery.min.js"></script>
        <script type="text/javascript" src="/js/jquery.json.min.js"></script>
        <script type="text/javascript" src="/js/mojomber.js"></script>
        <script type="text/javascript">
            // Only load the flash fallback when needed
            if (!('WebSocket' in window)) {
                document.write([
                    '<scr'+'ipt type="text/javascript" src="http://localhost/public/web-socket-js/swfobject.js"></scr'+'ipt>',
                    '<scr'+'ipt type="text/javascript" src="http://localhost/public/web-socket-js/FABridge.js"></scr'+'ipt>',
                    '<scr'+'ipt type="text/javascript" src="http://localhost/public/web-socket-js/web_socket.js"></scr'+'ipt>'
                ].join(''));
            }
        </script>
        <script type="text/javascript">
            if (WebSocket.__initialize) {
                // Set URL of your WebSocketMain.swf here:
                WebSocket.__swfLocation = '/web-socket-js/WebSocketMain.swf';
            }

            $(document).ready(function() {
                $('#content').mojomber({"url":"<%= $url %>"});
            });
        </script>
    </head>
    <body>
        <div class="container">
            <table border="0" height="100%" style="margin:auto">
            <tr>
            <td style="vertical-align:top"><div id="top"></div></td>
            <td style="vertical-align:middle">
                <div id="content">
                
                
  <div id="page" class="hfeed site">
  <header id="masthead" class="site-header" role="banner">
    <div class="container">

    <div id="logo" class="site-logo text-center">
      <a href="index.html" rel="home"><img src="  img/logo.png" alt="NowKnow | Knowledge Base HTML Template" /></a>
    </div><!-- #logo -->
    
    <div id="navbar" class="navbar-wrapper text-center">
      <nav class="navbar navbar-default site-navigation" role="navigation">

      <ul class="nav navbar-nav navbar-menu">
        <li class="active"><a href="index.html">Home</a></li>
        <li><a href="faq.html">FAQ</a></li>
        <li><a href="archive.html">Articles</a>
        <ul class="dropdown-menu">
          <li><a href="archive.html">Article Archive</a></li>
          <li><a href="detail.html">Article Detail</a>
          <ul class="dropdown-menu">
            <li><a href="detail.html">Visitor</a></li>
            <li><a href="detail-login.html">User Login</a></li>
          </ul>
          </li>
        </ul>
        </li>
        <li><a href="news.html">News</a>
        <ul class="dropdown-menu">
          <li><a href="news.html">News Archive</a></li>
          <li><a href="news-detail.html">News Detail</a></li>
        </ul>
        </li>
        <li><a href="#">Pages</a>
        <ul class="dropdown-menu">
          <li><a href="contact.html">Contact</a></li>
          <li><a href="404.html">404</a></li>
        </ul>
        </li>
      </ul><!-- .navbar-menu -->

      <ul class="nav navbar-nav navbar-login">
        <li><a href="#" class="collapsed" data-toggle="collapse" data-target="#login-form">Login <i class="sub-indicator fa fa-chevron-circle-down fa-fw text-muted"></i></a></li>
      </ul><!-- .navbar-login -->

      <div id="login-form" class="login-form collapse fade clearfix">
        <form action="" method="">
        <div class="form-group">
          <input type="text" class="form-control" id="username" title="Username" placeholder="Username" />
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="password" title="Password" placeholder="Password" />
        </div>
        <ul class="list-unstyled pull-left">
          <li><a href="#">Lost password?</a></li>
          <li><a href="#">Create Account</a></li>
        </ul>
        <button type="submit" class="btn btn-custom pull-right">Login</button>
        </form>
      </div><!-- #login-form -->

      </nav><!-- #site-navigation -->
    </div><!-- #navbar -->

    <div id="header-search" class="site-search clearfix"><!-- #header-search -->
      <form action="" method="get" class="search-form" role="search">
      <div class="form-border">

        <div class="form-inline">
        <div class="form-group">
          <input type="text" name="s" class="search-field form-control input-lg" title="Enter search term" placeholder="Have a question? Type your search term here..." />
        </div>
        <button type="submit" class="search-submit btn btn-custom btn-lg pull-right">Search</button>
        </div>

        <div class="search-advance">
        <div class="row">

          <div class="col-sm-6">
          <div class="form-horizontal">
            <div class="form-group">
            <label for="#" class="col-sm-3 control-label">Category</label>
            <div class="col-sm-9">
              <select name="category" class="form-control">
              <option value="">-- All Categories --</option>
              <option value="">Account Settings</option>
              <option value="">API Questions</option>
              <option value="">Customization</option>
              <option value="">Mobile Apps</option>
              </select>
            </div>
            </div>
          </div>
          </div>

          <div class="col-sm-6">
          <div class="form-horizontal">
            <div class="form-group">
            <label for="#" class="col-sm-3 control-label">Format</label>
            <div class="col-sm-9">
              <select name="format" class="form-control">
              <option value="">-- All Formats --</option>
              <option value="">Text</option>
              <option value="">Image</option>
              <option value="">Video</option>
              </select>
            </div>
            </div>
          </div>
          </div>

        </div>
        </div><!-- .search-advance -->

        <a href="#" class="search-advance-button text-center"><i class="fa fa-chevron-circle-up fa-2x"></i></a>

      </div>
      </form>
    </div><!-- #header-search -->
    </div>
  </header><!-- #masthead -->
  
                </div>
            </td></tr>
            </table>
        </div>
    </body>
</html>
