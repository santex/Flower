package Flower::Chronos::Logger::Stdout;

use strict;
use warnings;

use base 'Flower::Chronos::Logger::Base';

use JSON ();

sub log {
    my $self = shift;
    my ($info) = @_;

    print JSON::encode_json($info), "\n";
}

1;
