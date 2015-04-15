#!/bin/bash
IFS=$'\n';

xpath="~/flower/"

ip=$(echo 127.0.0.1); 
pwd=$(pwd);   

nohup  perl script/perl_peer --ip $ip --filepath "$pwd/data" &

tail nohup.out &
