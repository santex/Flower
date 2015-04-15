

apt-get install memcached

apt-get install cpanm

curl -L https://cpanmin.us | perl - -M https://cpan.metacpan.org -n Mojolicious

git clone https://github.com/santex/AI-MicroStructure.git

git clone https://github.com/santex/flower.git


cd flower;
ip=$(echo 127.0.0.1); 
pwd=$(pwd);   

nohup  perl script/perl_peer --ip $ip --filepath "$pwd/data" &
