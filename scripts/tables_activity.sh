#!/bin/bash

token=cnt
TOKEN=CNT
if [ "$1" != "" ]; then
if [ "$1" != "test" ]; then
if [ "$1" != "prod" ]; then
   token=$1
   token=${token,,}
   TOKEN=${token^^}
fi
fi
fi

NET=
if [ "$1" == "test" ]; then
   NET='--url https://testnet.telos.caleos.io'
fi

if [ "$2" == "test" ]; then
   NET='--url https://testnet.telos.caleos.io'
fi

if [ "$1" == "prod" ]; then
   NET='--url https://telos.eos.barcelona'
fi

if [ "$2" == "prod" ]; then
   NET='--url https://telos.eos.barcelona'
fi

show_balance() {
    user=$1
    echo "balances for $user -------------------------------------------------"
    cleos $NET get currency balance vapaeetokens $user $TOKEN
    cleos $NET get currency balance eosio.token $user TLOS
    cleos $NET get currency balance eosio.token $user ACORN
    cleos $NET get currency balance vapaeetokens $user BOX
    echo " -- deposits --"
    cleos $NET get table vapaeetokens $user deposits
    echo " -- userorders --"
    cleos $NET get table vapaeetokens $user userorders
}

show_table() {
    code=$1
    scope=$2
    table=$3

    echo "--------- $code::$table($scope) -------------------------------------------------"
    cleos $NET get table $code $scope $table -l 1000
}

show_table vapaeetokens vapaeetokens tokens
show_table vapaeetokens vapaeetokens depusers
show_table vapaeetokens vapaeetokens ordertables
show_table vapaeetokens vapaeetokens earnings
show_table vapaeetokens vapaeetokens events

