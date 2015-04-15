#!/bin/bash
IFS=$'\n';


apt-get install memcached

apt-get install cpanm

curl -L https://cpanmin.us | perl - -M https://cpan.metacpan.org -n Mojolicious

git clone https://github.com/santex/AI-MicroStructure.git

git clone https://github.com/santex/flower.git


cd flower;

cpanm .
