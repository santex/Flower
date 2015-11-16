#!/bin/bash
IFS=$'\n';

xpath="~/flower/"

ip=$(echo 127.0.0.1);
pwd=$(pwd);

nohup  perl -I /home/$USER/perl5/lib/perl5 script/flower --ip $ip --filepath "$pwd/data" &

tail nohup.out &
