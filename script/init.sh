#!/bin/bash
IFS=$'\n';

### ### ###
#apt-get -y install curl
#apt-get -y install make
#apt-get -y install vim
#apt-get -y install git
#apt-get -y install gcc
#apt-get -y install wordnet
#apt-get -y install memcached
#apt-get -y install cpanminus
#curl -L https://cpanmin.us | perl - -M https://cpan.metacpan.org -n Mojolicious


cpanm Dist::Zilla;

git clone https://github.com/santex/AI-MicroStructure.git

cd AI-MicroStructure;
dzil build;
dzil test;
dzil install;


git clone https://github.com/santex/flower.git
cd flower;

perl Makefile.PL;
make;
make test;
make install;
