#!/bin/bash

HOME=/var/www/vapaee.io-source
force=false
NET=

# checking 'force' param
if [ "$1" == "force" ]; then
   force=true
fi

if [ "$2" == "force" ]; then
   force=true
fi


VAPAEETOKENS_HOME=$HOME/contracts/vapaeetokens

echo "-------- vapaeetokens ---------"
cd $VAPAEETOKENS_HOME
if [[ vapaeetokens.core.hpp -nt vapaeetokens.wasm || 
      vapaeetokens.stake.hpp -nt vapaeetokens.wasm ||
      vapaeetokens.exchange.hpp -nt vapaeetokens.wasm ||
      vapaeetokens.airdrop.hpp -nt vapaeetokens.wasm ||
      vapaeetokens.dispatcher.hpp -nt vapaeetokens.wasm || 
      vapaeetokens.cpp -nt vapaeetokens.wasm ||
      vapaeetokens.hpp -nt vapaeetokens.wasm || 
      $force == true ]]; then
    eosio-cpp -o vapaeetokens.wasm vapaeetokens.cpp --abigen -I ../includes
fi
echo "cleos $NET set contract vapaeetokens $PWD -p vapaeetokens@active"
cleos $NET set contract vapaeetokens $PWD -p vapaeetokens@active
