#pragma once
#include <vapaee/token/common.hpp>


using namespace eosio;
namespace vapaee {
    namespace token {

    class core {
        name _self;
    
    public:
        
        core():_self(vapaee::token::contract){}

        inline name get_self()const { return vapaee::token::contract; }

        // TOKEN --------------------------------------------------------------------------------------------
        
        void action_create_token(name owner, asset maximum_supply) {
            PRINT("vapaee::token::core::action_create_token()\n");
            PRINT(" owner: ", owner.to_string(), "\n");
            PRINT(" maximum_supply: ", maximum_supply.to_string(), "\n");

            require_auth( owner );

            auto sym = maximum_supply.symbol;
            check( sym.is_valid(), "invalid symbol name" );
            check( maximum_supply.is_valid(), "invalid supply");
            check( maximum_supply.amount > 0, "max-supply must be positive");

            stats statstable( _self, sym.code().raw() );
            auto existing = statstable.find( sym.code().raw() );
            check( existing == statstable.end(), "token with symbol already exists" );

            statstable.emplace( owner, [&]( auto& s ) {
                s.supply.symbol = maximum_supply.symbol;
                s.max_supply    = maximum_supply;
                s.issuer        = owner;
            });

            PRINT("vapaee::token::core::action_create_token() ...\n");
        }

        void action_add_token_issuer( name app, const symbol_code& sym_code, name ram_payer ) {
            PRINT("vapaee::token::core::action_add_token_issuer()\n");
            PRINT(" app: ", app.to_string(), "\n");
            PRINT(" sym_code: ", sym_code.to_string(), "\n");

            stats statstable( _self, sym_code.raw() );
            auto token_itr = statstable.find( sym_code.raw() );
            check( token_itr != statstable.end(), "token with symbol not exists" );

            require_auth ( token_itr->issuer );

            issuers issuerstable(get_self(), sym_code.raw() );
            auto issuer_itr = issuerstable.find( app.value );
            check( issuer_itr == issuerstable.end(), "issuer already registered" );
            issuerstable.emplace( ram_payer, [&]( auto& a ){
                a.issuer = app;
            });
            PRINT("vapaee::token::core::action_add_token_issuer() ...\n");
        }

        void action_remove_token_issuer( name app, const symbol_code& sym_code ) {
            PRINT("vapaee::token::core::action_remove_token_issuer()\n");
            PRINT(" app: ", app.to_string(), "\n");
            PRINT(" sym_code: ", sym_code.to_string(), "\n");

            stats statstable( _self, sym_code.raw() );
            auto token_itr = statstable.find( sym_code.raw() );
            check( token_itr != statstable.end(), "token with symbol not exists" );

            require_auth ( token_itr->issuer );

            issuers issuerstable(get_self(), sym_code.raw() );
            auto issuer_itr = issuerstable.find( app.value );
            check( issuer_itr != issuerstable.end(), "issuer is not registered" );
            issuerstable.erase( *issuer_itr );

            PRINT("vapaee::token::core::action_remove_token_issuer() ...\n");
        }

        void action_issue( name to, const asset& quantity, string memo ) {
            PRINT("vapaee::token::core::action_issue()\n");
            PRINT(" to: ", to.to_string(), "\n");
            PRINT(" quantity: ", quantity.to_string(), "\n");
            PRINT(" memo: ", memo.c_str(), "\n");

            // check on symbol
            auto sym = quantity.symbol;
            check( sym.is_valid(), "invalid symbol name" );
            check( memo.size() <= 256, "memo has more than 256 bytes" );

            // check token existance
            stats statstable( _self, sym.code().raw() );
            auto existing = statstable.find( sym.code().raw() );
            check( existing != statstable.end(), "token with symbol does not exist, create token before issue" );
            const auto& st = *existing;

            // getting currency's acosiated app contract account
            // vapaee::bgbox::apps apps_table(vapaee::bgbox::contract, vapaee::bgbox::contract.value);
            // auto app = apps_table.get(st.app, "app not found");
            // name appcontract = app.contract;
            // PRINT("  appid: ", std::to_string((int) st.app), "\n");
            // PRINT("  appcontract: ", appcontract.to_string(), "\n");

            // check authorization (issuer of appcontract)
            name everyone = "everyone"_n;
            name issuer = st.issuer;

            issuers issuerstable(get_self(), sym.code().raw() );
            for (auto issuer_itr = issuerstable.begin(); issuer_itr != issuerstable.end(); issuer_itr++) {
                // auto issuer_app = apps_table.get(st.issuers[i], (string("app ") + std::to_string((int)st.issuers[i]) + " not found in bgbox::apps").c_str());
                name issuer_app = issuer_itr->issuer;
                // if "everyone" is in issuers list then everyone is allowed to issue because this is a fake token
                if (has_auth(issuer_app) || issuer_app == everyone) {
                    issuer = issuer_app;
                    PRINT("   issuer_app: ", issuer.to_string(), "\n");                    
                }
            }

            if (issuer != everyone) {
                // we need sirius issuer signature
                PRINT( "require_auth( issuer )", issuer.to_string(), "\n");
                require_auth( issuer );
            } else {
                // for fake token, everyone can issue. No need for signature
                issuer = st.issuer;
            }

            
            check( quantity.is_valid(), "invalid quantity" );
            check( quantity.amount > 0, "must issue positive quantity" );

            check( quantity.symbol == st.supply.symbol, "symbol precision mismatch" );
            check( quantity.amount <= st.max_supply.amount - st.supply.amount, "quantity exceeds available supply");
            
            // update current supply
            statstable.modify( st, same_payer, [&]( auto& s ) {
                s.supply += quantity;
            });

            // update contract balance silently
            add_balance( get_self(), quantity, get_self() );

            // if target user is not the contract then send an inline action
            if( to != get_self() ) {
                action(
                    permission_level{get_self(),"active"_n},
                    get_self(),
                    "transfer"_n,
                    std::make_tuple(get_self(), to, quantity, memo)
                ).send();
            }
            PRINT("vapaee::token::core::action_issue() ...\n");
        }

        void action_burn(name owner, asset quantity, string memo ) {
            PRINT("vapaee::token::core::action_retire()\n");
            PRINT(" quantity: ", quantity.to_string(), "\n");
            PRINT(" memo: ", memo.c_str(), "\n");

            auto sym = quantity.symbol;
            check( sym.is_valid(), "invalid symbol name" );
            check( memo.size() <= 256, "memo has more than 256 bytes" );

            stats statstable( _self, sym.code().raw() );
            auto existing = statstable.find( sym.code().raw() );
            check( existing != statstable.end(), "token with symbol does not exist" );
            const auto& st = *existing;

            require_auth( owner );
            check( quantity.is_valid(), "invalid quantity" );
            check( quantity.amount > 0, "must retire positive quantity" );

            check( quantity.symbol == st.supply.symbol, "symbol precision mismatch" );

            statstable.modify( st, same_payer, [&]( auto& s ) {
                s.supply -= quantity;
            });

            sub_balance( owner, quantity );
            PRINT("vapaee::token::core::action_retire() ...\n");
        }

        void action_transfer(name from, name to, asset quantity, string memo) {
            PRINT("vapaee::token::core::action_transfer()\n");
            PRINT(" from: ", from.to_string(), "\n");
            PRINT(" to: ", to.to_string(), "\n");
            PRINT(" quantity: ", quantity.to_string(), "\n");
            PRINT(" memo: ", memo.c_str(), "\n");

            check( from != to, "cannot transfer to self" );

            check( is_account( to ), "to account does not exist");
            auto sym = quantity.symbol.code();
            stats statstable( _self, sym.raw() );
            const auto& st = statstable.get( sym.raw() );

            require_recipient( from );
            require_recipient( to );

            check( quantity.is_valid(), "invalid quantity" );
            check( quantity.amount > 0, "must transfer positive quantity" );
            check( quantity.symbol == st.supply.symbol, "symbol precision mismatch" );
            check( memo.size() <= 256, "memo has more than 256 bytes" );

            auto ram_payer = has_auth( to ) ? to : from;

            sub_balance( from, quantity );
            add_balance( to, quantity, ram_payer );

            PRINT("vapaee::token::core::action_transfer() ...\n");
        }

        void sub_balance( name owner, asset value ) {
            PRINT("vapaee::token::core::action_sub_balance()\n");
            PRINT(" owner: ", owner.to_string(), "\n");
            PRINT(" value: ", value.to_string(), "\n");

            accounts from_acnts( _self, owner.value );

            const auto& from = from_acnts.get( value.symbol.code().raw(), "no balance object found" );
            check( from.balance.amount >= value.amount, "overdrawn balance" );

            int64_t amount;
            from_acnts.modify( from, owner, [&]( auto& a ) {
                a.balance.amount -= value.amount;
                amount = a.balance.amount;
            });

            if (amount == 0) {
                action(
                    permission_level{get_self(),"active"_n},
                    get_self(),
                    "close"_n,
                    std::make_tuple(owner, value.symbol)
                ).send();
            }
            PRINT("vapaee::token::core::action_sub_balance() ...\n");
        }

        void add_balance( name owner, asset value, name ram_payer ) {
            PRINT("vapaee::token::core::action_add_balance()\n");
            PRINT(" owner: ", owner.to_string(), "\n");
            PRINT(" value: ", value.to_string(), "\n");
            PRINT(" ram_payer: ", ram_payer.to_string(), "\n");

            accounts to_acnts( _self, owner.value );
            auto to = to_acnts.find( value.symbol.code().raw() );
            if( to == to_acnts.end() ) {
                to_acnts.emplace( ram_payer, [&]( auto& a ){
                    a.balance = value;
                });
            } else {
                to_acnts.modify( to, same_payer, [&]( auto& a ) {
                    a.balance += value;
                });
            }
            PRINT("vapaee::token::core::action_add_balance() ...\n");
        }

        void action_open( name owner, const symbol& symbol, name ram_payer ) {
            PRINT("vapaee::token::core::action_open()\n");
            PRINT(" owner: ", owner.to_string(), "\n");
            PRINT(" symbol: ", symbol.code().to_string(), "\n");
            PRINT(" ram_payer: ", ram_payer.to_string(), "\n");

            require_auth( ram_payer );

            auto sym_code_raw = symbol.code().raw();

            stats statstable( _self, sym_code_raw );
            const auto& st = statstable.get( sym_code_raw, "symbol does not exist" );
            check( st.supply.symbol == symbol, "symbol precision mismatch" );

            accounts acnts( _self, owner.value );
            auto it = acnts.find( sym_code_raw );
            if( it == acnts.end() ) {
                acnts.emplace( ram_payer, [&]( auto& a ){
                    a.balance = asset{0, symbol};
                });
            }
            PRINT("vapaee::token::core::action_open() ...\n");    
        }

        void action_close( name owner, const symbol& symbol ) {
            PRINT("vapaee::token::core::action_close()\n");
            PRINT(" owner: ", owner.to_string(), "\n");
            PRINT(" symbol: ", symbol.code().to_string(), "\n");
            
            if (!has_auth(get_self())) {
                require_auth( owner );
            }
            accounts acnts( _self, owner.value );
            auto it = acnts.find( symbol.code().raw() );
            check( it != acnts.end(), "Balance row already deleted or never existed. Action won't have any effect." );
            check( it->balance.amount == 0, "Cannot close because the balance is not zero." );
            acnts.erase( it );
            PRINT("vapaee::token::core::action_close() ...\n");
        }        

        
    }; // class

}; // namespace

}; // namespace