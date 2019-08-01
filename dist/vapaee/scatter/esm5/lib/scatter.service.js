/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Feedback } from '@vapaee/feedback';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';
import { Asset } from './asset.class';
import { SmartContract } from './contract.class';
import { ScatterUtils } from './utils.class';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function RPC() { }
/** @type {?} */
RPC.prototype.endpoint;
/** @type {?} */
RPC.prototype.fetchBuiltin;
/** @type {?} */
RPC.prototype.fetch;
/** @type {?} */
RPC.prototype.get_abi;
/** @type {?} */
RPC.prototype.get_account;
/** @type {?} */
RPC.prototype.get_block_header_state;
/** @type {?} */
RPC.prototype.get_block;
/** @type {?} */
RPC.prototype.get_code;
/** @type {?} */
RPC.prototype.get_currency_balance;
/** @type {?} */
RPC.prototype.get_currency_stats;
/** @type {?} */
RPC.prototype.get_info;
/** @type {?} */
RPC.prototype.get_producer_schedule;
/** @type {?} */
RPC.prototype.get_producers;
/** @type {?} */
RPC.prototype.get_raw_code_and_abi;
/** @type {?} */
RPC.prototype.getRawAbi;
/** @type {?} */
RPC.prototype.get_table_rows;
/** @type {?} */
RPC.prototype.getRequiredKeys;
/** @type {?} */
RPC.prototype.push_transaction;
/** @type {?} */
RPC.prototype.db_size_get;
/** @type {?} */
RPC.prototype.history_get_actions;
/** @type {?} */
RPC.prototype.history_get_transaction;
/** @type {?} */
RPC.prototype.history_get_key_accounts;
/** @type {?} */
RPC.prototype.history_get_controlled_accounts;
/**
 * @record
 */
export function EOS() { }
/** @type {?} */
EOS.prototype.getInfo;
/** @type {?} */
EOS.prototype.getAccount;
/** @type {?} */
EOS.prototype.getCode;
/** @type {?} */
EOS.prototype.getCodeHash;
/** @type {?} */
EOS.prototype.getAbi;
/** @type {?} */
EOS.prototype.getRawCodeAndAbi;
/** @type {?} */
EOS.prototype.abiJsonToBin;
/** @type {?} */
EOS.prototype.abiBinToJson;
/** @type {?} */
EOS.prototype.getRequiredKeys;
/** @type {?} */
EOS.prototype.getBlock;
/** @type {?} */
EOS.prototype.getBlockHeaderState;
/** @type {?} */
EOS.prototype.getTableRows;
/** @type {?} */
EOS.prototype.getCurrencyBalance;
/** @type {?} */
EOS.prototype.getCurrencyStats;
/** @type {?} */
EOS.prototype.getProducers;
/** @type {?} */
EOS.prototype.getProducerSchedule;
/** @type {?} */
EOS.prototype.getScheduledTransactions;
/** @type {?} */
EOS.prototype.pushBlock;
/** @type {?} */
EOS.prototype.pushTransaction;
/** @type {?} */
EOS.prototype.pushTransactions;
/** @type {?} */
EOS.prototype.getActions;
/** @type {?} */
EOS.prototype.getTransaction;
/** @type {?} */
EOS.prototype.getKeyAccounts;
/** @type {?} */
EOS.prototype.getControlledAccounts;
/** @type {?} */
EOS.prototype.createTransaction;
/** @type {?} */
EOS.prototype.transaction;
/** @type {?} */
EOS.prototype.nonce;
/** @type {?} */
EOS.prototype.transfer;
/** @type {?} */
EOS.prototype.create;
/** @type {?} */
EOS.prototype.issue;
/** @type {?} */
EOS.prototype.bidname;
/** @type {?} */
EOS.prototype.newaccount;
/** @type {?} */
EOS.prototype.setcode;
/** @type {?} */
EOS.prototype.setabi;
/** @type {?} */
EOS.prototype.updateauth;
/** @type {?} */
EOS.prototype.deleteauth;
/** @type {?} */
EOS.prototype.linkauth;
/** @type {?} */
EOS.prototype.unlinkauth;
/** @type {?} */
EOS.prototype.canceldelay;
/** @type {?} */
EOS.prototype.onerror;
/** @type {?} */
EOS.prototype.buyrambytes;
/** @type {?} */
EOS.prototype.sellram;
/** @type {?} */
EOS.prototype.buyram;
/** @type {?} */
EOS.prototype.delegatebw;
/** @type {?} */
EOS.prototype.undelegatebw;
/** @type {?} */
EOS.prototype.refund;
/** @type {?} */
EOS.prototype.regproducer;
/** @type {?} */
EOS.prototype.unregprod;
/** @type {?} */
EOS.prototype.setram;
/** @type {?} */
EOS.prototype.regproxy;
/** @type {?} */
EOS.prototype.voteproducer;
/** @type {?} */
EOS.prototype.claimrewards;
/** @type {?} */
EOS.prototype.setpriv;
/** @type {?} */
EOS.prototype.rmvproducer;
/** @type {?} */
EOS.prototype.setalimits;
/** @type {?} */
EOS.prototype.setglimits;
/** @type {?} */
EOS.prototype.setprods;
/** @type {?} */
EOS.prototype.reqauth;
/** @type {?} */
EOS.prototype.setparams;
/** @type {?} */
EOS.prototype.contract;
/**
 * @record
 */
export function Scatter() { }
/** @type {?} */
Scatter.prototype.identity;
/** @type {?} */
Scatter.prototype.eosHook;
/** @type {?|undefined} */
Scatter.prototype.eos;
/** @type {?} */
Scatter.prototype.network;
/** @type {?|undefined} */
Scatter.prototype.forgotten;
/** @type {?} */
Scatter.prototype.isExtension;
/** @type {?} */
Scatter.prototype.authenticate;
/** @type {?} */
Scatter.prototype.connect;
/** @type {?} */
Scatter.prototype.constructor;
/** @type {?} */
Scatter.prototype.createTransaction;
/** @type {?} */
Scatter.prototype.disconnect;
/** @type {?} */
Scatter.prototype.forgetIdentity;
/** @type {?} */
Scatter.prototype.getArbitrarySignature;
/** @type {?} */
Scatter.prototype.getIdentity;
/** @type {?} */
Scatter.prototype.getIdentityFromPermissions;
/** @type {?} */
Scatter.prototype.getPublicKey;
/** @type {?} */
Scatter.prototype.getVersion;
/** @type {?} */
Scatter.prototype.hasAccountFor;
/** @type {?} */
Scatter.prototype.isConnected;
/** @type {?} */
Scatter.prototype.isPaired;
/** @type {?} */
Scatter.prototype.linkAccount;
/** @type {?} */
Scatter.prototype.loadPlugin;
/** @type {?} */
Scatter.prototype.requestSignature;
/** @type {?} */
Scatter.prototype.requestTransfer;
/** @type {?} */
Scatter.prototype.suggestNetwork;
/**
 * @record
 */
export function AccountData() { }
/** @type {?|undefined} */
AccountData.prototype.account_name;
/** @type {?|undefined} */
AccountData.prototype.head_block_num;
/** @type {?|undefined} */
AccountData.prototype.head_block_time;
/** @type {?|undefined} */
AccountData.prototype.privileged;
/** @type {?|undefined} */
AccountData.prototype.last_code_update;
/** @type {?|undefined} */
AccountData.prototype.created;
/** @type {?|undefined} */
AccountData.prototype.core_liquid_balance;
/** @type {?|undefined} */
AccountData.prototype.core_liquid_balance_asset;
/** @type {?|undefined} */
AccountData.prototype.ram_quota;
/** @type {?|undefined} */
AccountData.prototype.net_weight;
/** @type {?|undefined} */
AccountData.prototype.cpu_weight;
/** @type {?} */
AccountData.prototype.total_balance;
/** @type {?} */
AccountData.prototype.total_balance_asset;
/** @type {?|undefined} */
AccountData.prototype.ram_limit;
/** @type {?|undefined} */
AccountData.prototype.net_limit;
/** @type {?|undefined} */
AccountData.prototype.cpu_limit;
/** @type {?|undefined} */
AccountData.prototype.ram_usage;
/** @type {?|undefined} */
AccountData.prototype.permissions;
/** @type {?|undefined} */
AccountData.prototype.total_resources;
/** @type {?|undefined} */
AccountData.prototype.self_delegated_bandwidth;
/** @type {?|undefined} */
AccountData.prototype.refund_request;
/** @type {?|undefined} */
AccountData.prototype.voter_info;
/** @type {?|undefined} */
AccountData.prototype.returnedFields;
/**
 * @record
 */
export function Account() { }
/** @type {?|undefined} */
Account.prototype.authority;
/** @type {?|undefined} */
Account.prototype.blockchain;
/** @type {?} */
Account.prototype.name;
/** @type {?|undefined} */
Account.prototype.publicKey;
/** @type {?|undefined} */
Account.prototype.data;
/**
 * @record
 */
export function Endpoint() { }
/** @type {?} */
Endpoint.prototype.protocol;
/** @type {?} */
Endpoint.prototype.host;
/** @type {?} */
Endpoint.prototype.port;
/**
 * @record
 */
export function Eosconf() { }
/** @type {?} */
Eosconf.prototype.blockchain;
/** @type {?} */
Eosconf.prototype.protocol;
/** @type {?} */
Eosconf.prototype.host;
/** @type {?} */
Eosconf.prototype.port;
/** @type {?} */
Eosconf.prototype.chainId;
/**
 * @record
 */
export function Network() { }
/** @type {?|undefined} */
Network.prototype.slug;
/** @type {?|undefined} */
Network.prototype.index;
/** @type {?|undefined} */
Network.prototype.eosconf;
/** @type {?|undefined} */
Network.prototype.explorer;
/** @type {?} */
Network.prototype.symbol;
/** @type {?} */
Network.prototype.name;
/** @type {?} */
Network.prototype.chainId;
/** @type {?} */
Network.prototype.endpoints;
/**
 * @record
 */
export function NetworkMap() { }
;
/**
 * @record
 */
export function ScatterJSDef() { }
/** @type {?|undefined} */
ScatterJSDef.prototype.plugins;
/** @type {?|undefined} */
ScatterJSDef.prototype.scatter;
var VapaeeScatter = /** @class */ (function () {
    function VapaeeScatter() {
        var _this = this;
        this.scatterutils = new ScatterUtils();
        this.onNetworkChange = new Subject();
        this.onLogggedStateChange = new Subject();
        this.waitReady = new Promise(function (resolve) {
            _this.setReady = resolve;
        });
        this.waitLogged = new Promise(function (resolve) {
            _this.setLogged = resolve;
        });
        this.waitConnected = new Promise(function (resolve) {
            _this.setConnected = resolve;
        });
        this.waitEosjs = new Promise(function (resolve) {
            _this.setEosjs = resolve;
        });
        this.waitEndpoints = new Promise(function (resolve) {
            _this.setEndpointsReady = resolve;
        });
        this.reconnectTime = 100;
        this.feed = new Feedback();
        this._networks_slugs = [];
        this._networks = {};
        this._network = {
            "name": "EOS MainNet",
            "symbol": "EOS",
            "explorer": "https://www.bloks.io",
            "chainId": "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
            "endpoints": [{
                    "protocol": "https",
                    "host": "nodes.get-scatter.com",
                    "port": 443
                }]
        };
        this.symbol = "EOS";
        // this.waitReady.then(() => console.log("ScatterService.setReady()"));
        // console.error("scatter interrumpido --------------------------------");
        this._account_queries = {};
    }
    Object.defineProperty(VapaeeScatter.prototype, "utils", {
        get: /**
         * @return {?}
         */
        function () {
            return this.scatterutils;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VapaeeScatter.prototype, "account", {
        // Acount, Identity and authentication -----------------
        get: /**
         * @return {?}
         */
        function () {
            if (!this._account || !this._account.name) {
                if (this.lib && this.lib.identity && this.lib.identity.accounts) {
                    this._account = this.lib.identity.accounts.find(function (x) { return x.blockchain === "eos" || x.blockchain === "tlos"; });
                }
            }
            return this._account;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VapaeeScatter.prototype, "default", {
        get: /**
         * @return {?}
         */
        function () {
            // default data before loading data
            // TODO: fill out with better default data.
            return {
                name: 'guest',
                data: {
                    total_balance: "",
                    total_balance_asset: new Asset(),
                    cpu_limit: {},
                    net_limit: {},
                    ram_limit: {},
                    refund_request: {},
                    total_resources: {}
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    VapaeeScatter.prototype.resetIdentity = /**
     * @return {?}
     */
    function () {
        console.log("ScatterService.resetIdentity()");
        this.error = "";
        if (this.lib) {
            this.lib.identity = null;
            if (!this.lib.forgotten) {
                this.lib.forgotten = true;
                this.lib.forgetIdentity();
            }
        }
        this.onLogggedStateChange.next(true);
    };
    /**
     * @param {?} identity
     * @return {?}
     */
    VapaeeScatter.prototype.setIdentity = /**
     * @param {?} identity
     * @return {?}
     */
    function (identity) {
        var _this = this;
        console.log("ScatterService.setIdentity()", [identity]);
        console.assert(!!this.lib, "ERROR: no instance of scatter found");
        this.error = "";
        this.lib.identity = identity;
        this.lib.forgotten = false;
        this._account = this.lib.identity.accounts.find(function (x) { return x.blockchain === "eos" || x.blockchain === "tlos"; });
        if (!this.account) {
            console.error("ScatterService.setIdentity()", [identity]);
        }
        // console.log("ScatterService.setIdentity() -> ScatterService.queryAccountData() : " , [this.account.name]);
        this.queryAccountData(this.account.name).then(function (account) {
            _this.account.data = account;
            _this.onLogggedStateChange.next(true);
        }).catch(function (_) {
            _this.account.data = _this.default.data;
            _this.onLogggedStateChange.next(true);
        });
    };
    /**
     * @param {?} endpoints
     * @return {?}
     */
    VapaeeScatter.prototype.setEndpoints = /**
     * @param {?} endpoints
     * @return {?}
     */
    function (endpoints) {
        this._networks = endpoints || this._networks;
        for (var i in this._networks) {
            this._networks_slugs.push(i);
        }
        this.setEndpointsReady();
    };
    /**
     * @param {?} name
     * @param {?=} index
     * @return {?}
     */
    VapaeeScatter.prototype.setNetwork = /**
     * @param {?} name
     * @param {?=} index
     * @return {?}
     */
    function (name, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        console.log("ScatterService.setNetwork(" + name + "," + index + ")");
        return this.waitEndpoints.then(function () {
            /** @type {?} */
            var n = _this.getNetwork(name, index);
            if (n) {
                if (_this._network.name != n.name) {
                    _this._network = n;
                    _this.resetIdentity();
                    _this.initScatter();
                    _this.onNetworkChange.next(_this.getNetwork(name));
                }
            }
            else {
                console.error("ERROR: Scatter.setNetwork() unknown network name-index. Got ("
                    + name + ", " + index + "). Availables are:", _this._networks);
                console.error("Falling back to eos mainnet");
                return _this.setNetwork("eos");
            }
        });
    };
    /**
     * @param {?} slug
     * @param {?=} index
     * @return {?}
     */
    VapaeeScatter.prototype.getNetwork = /**
     * @param {?} slug
     * @param {?=} index
     * @return {?}
     */
    function (slug, index) {
        if (index === void 0) { index = 0; }
        if (this._networks[slug]) {
            if (this._networks[slug].endpoints.length > index && index >= 0) {
                /** @type {?} */
                var network = this._networks[slug];
                /** @type {?} */
                var endpoint = network.endpoints[index];
                network.slug = slug;
                network.index = index;
                network.eosconf = {
                    blockchain: "eos",
                    chainId: network.chainId,
                    host: endpoint.host,
                    port: endpoint.port,
                    protocol: endpoint.protocol,
                };
                return network;
            }
            else {
                console.error("ERROR: Scatter.getNetwork() index out of range. Got "
                    + index + " expected number between [0.." + this._networks[slug].endpoints.length + "]");
            }
        }
        else {
            console.error("ERROR: Scatter.getNetwork() unknown network slug. Got "
                + slug + " expected one of", this.networks);
        }
        return null;
    };
    Object.defineProperty(VapaeeScatter.prototype, "networks", {
        get: /**
         * @return {?}
         */
        function () {
            return this._networks_slugs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VapaeeScatter.prototype, "network", {
        get: /**
         * @return {?}
         */
        function () {
            return this._network;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    VapaeeScatter.prototype.resetPromises = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.error("ScatterService.resetPromises()");
        this.waitEosjs.then(function (r) {
            _this.waitEosjs = null;
            /** @type {?} */
            var p = new Promise(function (resolve) {
                if (_this.waitEosjs)
                    return;
                _this.waitEosjs = p;
                _this.setEosjs = resolve;
                _this.resetPromises();
            });
        });
        this.waitConnected.then(function (r) {
            _this.waitConnected = null;
            /** @type {?} */
            var p = new Promise(function (resolve) {
                if (_this.waitConnected)
                    return;
                _this.waitConnected = p;
                _this.setConnected = resolve;
                _this.resetPromises();
            });
        });
        this.waitReady.then(function (r) {
            _this.waitReady = null;
            /** @type {?} */
            var p = new Promise(function (resolve) {
                if (_this.waitReady)
                    return;
                _this.waitReady = p;
                _this.setReady = resolve;
                _this.resetPromises();
                //this.waitReady.then(() => console.log("ScatterService.setReady()"));
            });
        });
        this.waitLogged.then(function (r) {
            _this.waitLogged = null;
            /** @type {?} */
            var p = new Promise(function (resolve) {
                if (_this.waitLogged)
                    return;
                _this.waitLogged = p;
                _this.setLogged = resolve;
                _this.resetPromises();
            });
        });
    };
    // ----------------------------------------------------------
    // Scatter initialization and AppConnection -----------------
    /**
     * @return {?}
     */
    VapaeeScatter.prototype.initScatter = /**
     * @return {?}
     */
    function () {
        console.log("ScatterService.initScatter()");
        /*/
                // eosjs2
                this.error = "";
                if ((<any>window).ScatterJS) {
                    this.ScatterJS = (<any>window).ScatterJS;
                    (<any>window).ScatterJS = null;
                }
        
                try {
                    ScatterJS.plugins( new ScatterEOS() );
                } catch (e) {
                    console.error("ERROR:", e.message, [e]);
                    console.error("Falling back to normal ScatterEOS plugin");
                    ScatterJS.plugins( new ScatterEOS() );
                }
                 
                this.lib = ScatterJS.scatter;
        
                const network = ScatterJS.Network.fromJson(this.network.eosconf);
                this.rpc = new JsonRpc(network.fullhost());
                this.eos = this.lib.eos(network, Api, {rpc:this.rpc});
        
                this.setEosjs("eosjs");
                /*/
        // eosjs
        console.log("ScatterService.initScatter()");
        this.error = "";
        if ((/** @type {?} */ (window)).ScatterJS) {
            this.ScatterJS = (/** @type {?} */ (window)).ScatterJS;
            this.ScatterJS.plugins(new ScatterEOS());
            this.lib = this.ScatterJS.scatter;
            (/** @type {?} */ (window)).ScatterJS = null;
        }
        console.log("EOSJS()", [this.network.eosconf]);
        this.eos = this.lib.eos(this.network.eosconf, Eos, { expireInSeconds: 60 });
        this.setEosjs("eosjs");
        //*/
    };
    /**
     * @return {?}
     */
    VapaeeScatter.prototype.retryConnectingApp = /**
     * @return {?}
     */
    function () {
        var _this = this;
        clearInterval(this.reconnectTimer);
        this.reconnectTimer = setInterval(function (_) {
            // console.log("ScatterService.reconnectTimer()");
            if (_this._connected) {
                // console.error("ScatterService.retryConnectingApp() limpio el intervalo");
                clearInterval(_this.reconnectTimer);
            }
            else {
                if (_this.account) {
                    // console.error("ScatterService.retryConnectingApp()  existe account pero no está conectado");
                    // console.error("ScatterService.retryConnectingApp()  existe account pero no está conectado");
                    _this.connectApp();
                }
            }
        }, this.reconnectTime);
        this.reconnectTime += 1000 * Math.random();
        if (this.reconnectTime > 4000)
            this.reconnectTime = 4000;
    };
    /**
     * @param {?=} appTitle
     * @return {?}
     */
    VapaeeScatter.prototype.connectApp = /**
     * @param {?=} appTitle
     * @return {?}
     */
    function (appTitle) {
        var _this = this;
        if (appTitle === void 0) { appTitle = ""; }
        // this.connect_count++;
        // var resolve_num = this.connect_count;
        this.feed.setLoading("connect", true);
        if (appTitle != "")
            this.appTitle = appTitle;
        console.log("ScatterService.connectApp(" + this.appTitle + ")");
        /** @type {?} */
        var connectionOptions = { initTimeout: 1800 };
        if (this._connected)
            return Promise.resolve();
        /** @type {?} */
        var promise = new Promise(function (resolve, reject) {
            _this.waitConnected.then(resolve);
            if (_this._connected)
                return; // <---- avoids a loop
            _this.waitEosjs.then(function () {
                console.log("ScatterService.waitEosjs() eos OK");
                _this.lib.connect(_this.appTitle, connectionOptions).then(function (connected) {
                    // si está logueado this.lib.identity se carga sólo y ya está disponible
                    console.log("ScatterService.lib.connect()", connected);
                    _this._connected = connected;
                    if (!connected) {
                        _this.feed.setError("connect", "ERROR: can not connect to Scatter. Is it up and running?");
                        console.error(_this.feed.error("connect"));
                        reject(_this.feed.error("connect"));
                        _this.feed.setLoading("connect", false);
                        _this.retryConnectingApp();
                        return false;
                    }
                    // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
                    console.log("ScatterService.setConnected()");
                    _this.setConnected("connected");
                    _this.feed.setLoading("connect", false);
                    if (_this.logged) {
                        _this.login().then(function () {
                            console.log("ScatterService.setReady()");
                            _this.setReady("ready");
                        }).catch(reject);
                    }
                    else {
                        console.log("ScatterService.setReady()");
                        _this.setReady("ready");
                    }
                }).catch(function (e) {
                    console.error(e);
                    _this.feed.setLoading("connect", false);
                    throw e;
                });
            });
        });
        return promise;
    };
    // ----------------------------------------------------------
    // AccountData and Balances ---------------------------------
    /**
     * @param {?} account
     * @return {?}
     */
    VapaeeScatter.prototype.calculateTotalBalance = /**
     * @param {?} account
     * @return {?}
     */
    function (account) {
        return new Asset("0.0000 " + this.symbol)
            .plus(account.core_liquid_balance_asset)
            .plus(account.refund_request.net_amount_asset)
            .plus(account.refund_request.cpu_amount_asset)
            .plus(account.self_delegated_bandwidth.cpu_weight_asset)
            .plus(account.self_delegated_bandwidth.net_weight_asset);
    };
    /**
     * @param {?} limit
     * @return {?}
     */
    VapaeeScatter.prototype.calculateResourceLimit = /**
     * @param {?} limit
     * @return {?}
     */
    function (limit) {
        limit = Object.assign({
            max: 0, used: 0
        }, limit);
        if (limit.max != 0) {
            limit.percent = 1 - (Math.min(limit.used, limit.max) / limit.max);
        }
        else {
            limit.percent = 0;
        }
        limit.percentStr = Math.round(limit.percent * 100) + "%";
        return limit;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    VapaeeScatter.prototype.queryAccountData = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        /*
                // get_table_rows
                    code: "eosio"
                    index_position: 1
                    json: true
                    key_type: "i64"
                    limit: -1
                    lower_bound: null
                    scope: "gqydoobuhege"
                    table: "delband"
                    table_key: ""
                */
        console.log("ScatterService.queryAccountData(" + name + ") ");
        this._account_queries[name] = this._account_queries[name] || new Promise(function (resolve, reject) {
            // console.log("PASO 1 ------", [this._account_queries])
            // console.log("PASO 1 ------", [this._account_queries])
            _this.waitEosjs.then(function () {
                // console.log("PASO 2 (eosjs) ------");
                /*
                                // eosjs2
                                this.rpc.get_account(name).
                                /*/
                // eosjs
                // console.log("PASO 2 (eosjs) ------");
                /*
                // eosjs2
                this.rpc.get_account(name).
                /*/
                // eosjs
                _this.eos.getAccount({ account_name: name }).
                    then(function (response) {
                    /** @type {?} */
                    var account_data = /** @type {?} */ (response);
                    if (account_data.core_liquid_balance) {
                        _this.symbol = account_data.core_liquid_balance.split(" ")[1];
                    }
                    else {
                        account_data.core_liquid_balance = "0.0000 " + _this.symbol;
                    }
                    account_data.core_liquid_balance_asset = new Asset(account_data.core_liquid_balance);
                    // ----- refund_request -----
                    account_data.refund_request = account_data.refund_request || {
                        total: "0.0000 " + _this.symbol,
                        net_amount: "0.0000 " + _this.symbol,
                        cpu_amount: "0.0000 " + _this.symbol,
                        request_time: "2018-11-18T18:09:53"
                    };
                    account_data.refund_request.cpu_amount_asset = new Asset(account_data.refund_request.cpu_amount);
                    account_data.refund_request.net_amount_asset = new Asset(account_data.refund_request.net_amount);
                    account_data.refund_request.total_asset =
                        account_data.refund_request.cpu_amount_asset.plus(account_data.refund_request.net_amount_asset);
                    account_data.refund_request.total = account_data.refund_request.total_asset.toString();
                    // ----- self_delegated_bandwidth ----
                    account_data.self_delegated_bandwidth = account_data.self_delegated_bandwidth || {
                        total: "0.0000 " + _this.symbol,
                        net_weight: "0.0000 " + _this.symbol,
                        cpu_weight: "0.0000 " + _this.symbol
                    };
                    account_data.self_delegated_bandwidth.net_weight_asset = new Asset(account_data.self_delegated_bandwidth.net_weight);
                    account_data.self_delegated_bandwidth.cpu_weight_asset = new Asset(account_data.self_delegated_bandwidth.cpu_weight);
                    account_data.self_delegated_bandwidth.total_asset =
                        account_data.self_delegated_bandwidth.cpu_weight_asset.plus(account_data.self_delegated_bandwidth.net_weight_asset);
                    account_data.self_delegated_bandwidth.total = account_data.self_delegated_bandwidth.total_asset.toString();
                    // ----- total_resources -----
                    account_data.total_resources = account_data.total_resources || {
                        net_weight: "0.0000 " + _this.symbol,
                        cpu_weight: "0.0000 " + _this.symbol
                    };
                    account_data.total_resources.net_weight_asset = new Asset(account_data.total_resources.net_weight);
                    account_data.total_resources.cpu_weight_asset = new Asset(account_data.total_resources.cpu_weight);
                    account_data.total_balance_asset = _this.calculateTotalBalance(account_data);
                    account_data.total_balance = account_data.total_balance_asset.toString();
                    account_data.cpu_limit = _this.calculateResourceLimit(account_data.cpu_limit);
                    account_data.net_limit = _this.calculateResourceLimit(account_data.net_limit);
                    account_data.ram_limit = _this.calculateResourceLimit({
                        max: account_data.ram_quota, used: account_data.ram_usage
                    });
                    // console.log("-------------------------------");
                    // console.log("account_data: ", account_data);
                    // console.log("-------------------------------");
                    resolve(account_data);
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (error) {
                console.error(error);
                reject(error);
            });
        });
        /** @type {?} */
        var promise = this._account_queries[name];
        promise.then(function (r) {
            setTimeout(function () {
                delete _this._account_queries[r.account_name];
            });
        });
        return promise;
    };
    /*
    // eosjs2
    async executeTransaction(contract:string, action:string, data:any) {
        return new Promise((resolve, reject) => {
            this.login().then(_ => {
                this.waitReady.then(() => {
                    
                    this.eos.transact(
                        {
                            actions: [{
                                account: contract,
                                name: action,
                                data: data,
                                authorization: [{
                                    actor: this.account.name,
                                    permission: this.account.authority
                                }],
                            }]
                        },
                        {
                            blocksBehind: 3,
                            expireSeconds: 30
                        }
                    ).then(result => {
                        console.log("EXITO !!!!", result);
                        resolve(result);
                    }).catch((error) => {
                        console.error("ERROR !!!!", error);
                        reject(error);
                    });


                });
            }).catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
    */
    /*
    
    {
        actions: [{
            account: this.contractAccount,
            name: action,
            authorization: [{
                actor: this.account.name,
                permission: this.account.authority
            }],
            data: {
              ...data
            }
        }]
    },
    {
        blocksBehind: 3,
        expireSeconds: 30
    }
    */
    /**
     * @param {?} account_name
     * @return {?}
     */
    VapaeeScatter.prototype.getSmartContract = /**
     * @param {?} account_name
     * @return {?}
     */
    function (account_name) {
        return new SmartContract(account_name, this);
    };
    /**
     * @param {?} account_name
     * @return {?}
     */
    VapaeeScatter.prototype.getContractWrapper = /**
     * @param {?} account_name
     * @return {?}
     */
    function (account_name) {
        var _this = this;
        console.log("ScatterService.getContract(" + account_name + ")");
        return new Promise(function (resolve, reject) {
            _this.login().then(function (a) {
                console.log("this.login().then((a) => { -->", a);
                _this.waitReady.then(function () {
                    _this.eos.contract(account_name).then(function (contract) {
                        console.log("-- contract " + account_name + " --");
                        for (var i in contract) {
                            if (typeof contract[i] == "function")
                                console.log("contract." + i + "()", [contract[i]]);
                        }
                        resolve(contract);
                    }).catch(function (error) {
                        console.error(error);
                    });
                });
            }).catch(function (error) {
                console.error(error);
                reject(error);
            });
        });
    };
    /*
    transfer(from:string, to:string, amount:string, memo:string) {
        console.log("ScatterService.transfer()", from, to, amount, memo);
        return new Promise((resolve, reject) => {
            this.waitEosjs.then(() => {
                console.log("Scatter.transfer():", from, to, amount, memo, this.authorization);
                
                this.eos.transfer(from, to, amount, memo, this.authorization).then(trx => {
                    // That's it!
                    console.log(`Transaction ID: ${trx.transaction_id}`, trx);
                    // en Notas está el json que describe el objeto trx
                    resolve(trx);
                }).catch(error => {
                    console.error(error);
                });
                
            }).catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
    */
    // loginTimer;
    /**
     * @return {?}
     */
    VapaeeScatter.prototype.login = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log("ScatterService.login()");
        this.feed.setLoading("login", true);
        return new Promise(function (resolve, reject) {
            if (_this.lib.identity) {
                _this.setIdentity(_this.lib.identity);
                resolve(_this.lib.identity);
            }
            else {
                /** @type {?} */
                var loginTimer = setTimeout(function (_) {
                    _this.feed.setLoading("login", false);
                    reject("connection timeout");
                }, 5000);
                _this.connectApp().then(function () {
                    _this.lib.getIdentity({ "accounts": [_this.network.eosconf] })
                        .then(function (identity) {
                        clearTimeout(loginTimer);
                        _this.setIdentity(identity);
                        _this.setLogged();
                        _this.feed.setLoading("login", false);
                        resolve(identity);
                    })
                        .catch(reject);
                }).catch(reject);
            }
        });
    };
    /**
     * @return {?}
     */
    VapaeeScatter.prototype.logout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log("ScatterService.logout()");
        this.feed.setLoading("login", false);
        return new Promise(function (resolve, reject) {
            _this.connectApp().then(function () {
                _this.lib.forgotten = true;
                _this.lib.forgetIdentity()
                    .then(function (err) {
                    console.log("disconnect", err);
                    _this.resetIdentity();
                    _this.feed.setLoading("login", false);
                    resolve("logout");
                })
                    .catch(reject);
            }).catch(reject);
        });
    };
    Object.defineProperty(VapaeeScatter.prototype, "logged", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.lib)
                return false;
            return !!this.lib.identity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VapaeeScatter.prototype, "username", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.lib)
                return "";
            return this.lib.identity ? this.lib.identity.name : "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VapaeeScatter.prototype, "authorization", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.account) {
                console.error("ScatterService.authorization()");
                return { authorization: ["unknown@unknown"] };
            }
            return {
                authorization: [this.account.name + "@" + this.account.authority]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VapaeeScatter.prototype, "connected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._connected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} contract
     * @param {?} scope
     * @param {?} table
     * @param {?} tkey
     * @param {?} lowerb
     * @param {?} upperb
     * @param {?} limit
     * @param {?} ktype
     * @param {?} ipos
     * @return {?}
     */
    VapaeeScatter.prototype.getTableRows = /**
     * @param {?} contract
     * @param {?} scope
     * @param {?} table
     * @param {?} tkey
     * @param {?} lowerb
     * @param {?} upperb
     * @param {?} limit
     * @param {?} ktype
     * @param {?} ipos
     * @return {?}
     */
    function (contract, scope, table, tkey, lowerb, upperb, limit, ktype, ipos) {
        var _this = this;
        /*
                // console.log("ScatterService.getTableRows()");
                // https://github.com/EOSIO/eosjs-api/blob/master/docs/api.md#eos.getTableRows
                return new Promise<any>((resolve, reject) => {
                    this.waitEosjs.then(() => {
                        var json = {
                            code: contract,
                            index_position: ipos,
                            json: true,
                            key_type: ktype,
                            limit: limit,
                            lower_bound: lowerb,
                            scope: scope,
                            table: table,
                            table_key: tkey,
                            upper_bound: upperb
                        }
                        
                        this.rpc.get_table_rows(json).then(_data => {
                            resolve(_data);
                        }).catch(error => {
                            console.error(error);
                        });
        
                        
                    }).catch((error) => {
                        console.error(error);
                        reject(error);
                    });
                });
                /*/
        // console.log("ScatterService.getTableRows()");
        // https://github.com/EOSIO/eosjs-api/blob/master/docs/api.md#eos.getTableRows
        return new Promise(function (resolve, reject) {
            _this.waitEosjs.then(function () {
                _this.eos.getTableRows(true, contract, scope, table, tkey, lowerb, upperb, limit, ktype, ipos).then(function (_data) {
                    resolve(_data);
                }).catch(function (error) {
                    console.error(error);
                });
            }).catch(function (error) {
                console.error(error);
                reject(error);
            });
        });
        //*/
    };
    VapaeeScatter.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    VapaeeScatter.ctorParameters = function () { return []; };
    /** @nocollapse */ VapaeeScatter.ngInjectableDef = i0.defineInjectable({ factory: function VapaeeScatter_Factory() { return new VapaeeScatter(); }, token: VapaeeScatter, providedIn: "root" });
    return VapaeeScatter;
}());
export { VapaeeScatter };
if (false) {
    /** @type {?} */
    VapaeeScatter.prototype.scatterutils;
    /** @type {?} */
    VapaeeScatter.prototype.error;
    /** @type {?} */
    VapaeeScatter.prototype.appTitle;
    /** @type {?} */
    VapaeeScatter.prototype.symbol;
    /** @type {?} */
    VapaeeScatter.prototype._connected;
    /** @type {?} */
    VapaeeScatter.prototype.lib;
    /** @type {?} */
    VapaeeScatter.prototype.rpc;
    /** @type {?} */
    VapaeeScatter.prototype.feed;
    /** @type {?} */
    VapaeeScatter.prototype.ScatterJS;
    /** @type {?} */
    VapaeeScatter.prototype._network;
    /** @type {?} */
    VapaeeScatter.prototype._networks;
    /** @type {?} */
    VapaeeScatter.prototype._networks_slugs;
    /** @type {?} */
    VapaeeScatter.prototype._account_queries;
    /** @type {?} */
    VapaeeScatter.prototype.eos;
    /** @type {?} */
    VapaeeScatter.prototype.onNetworkChange;
    /** @type {?} */
    VapaeeScatter.prototype.onLogggedStateChange;
    /** @type {?} */
    VapaeeScatter.prototype._account;
    /** @type {?} */
    VapaeeScatter.prototype.setReady;
    /** @type {?} */
    VapaeeScatter.prototype.waitReady;
    /** @type {?} */
    VapaeeScatter.prototype.setLogged;
    /** @type {?} */
    VapaeeScatter.prototype.waitLogged;
    /** @type {?} */
    VapaeeScatter.prototype.setConnected;
    /** @type {?} */
    VapaeeScatter.prototype.waitConnected;
    /** @type {?} */
    VapaeeScatter.prototype.setEosjs;
    /** @type {?} */
    VapaeeScatter.prototype.waitEosjs;
    /** @type {?} */
    VapaeeScatter.prototype.setEndpointsReady;
    /** @type {?} */
    VapaeeScatter.prototype.waitEndpoints;
    /** @type {?} */
    VapaeeScatter.prototype.reconnectTimer;
    /** @type {?} */
    VapaeeScatter.prototype.reconnectTime;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhdHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZhcGFlZS9zY2F0dGVyLyIsInNvdXJjZXMiOlsibGliL3NjYXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVc1QyxPQUFPLFVBQVUsTUFBTSx3QkFBd0IsQ0FBQTtBQUMvQyxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUM7QUFDeEIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeVI1QyxDQUFDOzs7Ozs7Ozs7O0lBbURFO1FBQUEsaUJBc0JDOzRCQTVEc0IsSUFBSSxZQUFZLEVBQUU7K0JBY0MsSUFBSSxPQUFPLEVBQUU7b0NBQ1IsSUFBSSxPQUFPLEVBQUU7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LEtBQUs7Z0JBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pCLENBQUMsQ0FBQztTQUNOLENBQUMsQ0FBQzs7S0FHTjs7Z0JBNXNCSixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7Ozt3QkFyVEQ7O1NBc1RhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG4vLyBpbXBvcnQgeyBFb3Npb1Rva2VuTWF0aFNlcnZpY2UgfSBmcm9tICcuL2Vvc2lvLnRva2VuLW1hdGguc2VydmljZSc7XG5pbXBvcnQgeyBGZWVkYmFjayB9IGZyb20gJ0B2YXBhZWUvZmVlZGJhY2snO1xuXG4vLyBzY2F0dGVyIGxpYnJhcmllc1xuLyovXG4vLyBlb3NqczJcbmltcG9ydCBTY2F0dGVySlMgZnJvbSAnQHNjYXR0ZXJqcy9jb3JlJztcbmltcG9ydCBTY2F0dGVyRU9TIGZyb20gJ0BzY2F0dGVyanMvZW9zanMyJztcbmltcG9ydCBTY2F0dGVyTHlueCBmcm9tICdAc2NhdHRlcmpzL2x5bngnO1xuaW1wb3J0IHtKc29uUnBjLCBBcGl9IGZyb20gJ2Vvc2pzJztcbi8qL1xuaW1wb3J0IFNjYXR0ZXJKUyBmcm9tICdzY2F0dGVyanMtY29yZSc7XG5pbXBvcnQgU2NhdHRlckVPUyBmcm9tICdzY2F0dGVyanMtcGx1Z2luLWVvc2pzJ1xuaW1wb3J0IEVvcyBmcm9tICdlb3Nqcyc7XG5pbXBvcnQgeyBBc3NldCB9IGZyb20gJy4vYXNzZXQuY2xhc3MnO1xuaW1wb3J0IHsgU21hcnRDb250cmFjdCB9IGZyb20gJy4vY29udHJhY3QuY2xhc3MnO1xuaW1wb3J0IHsgU2NhdHRlclV0aWxzIH0gZnJvbSAnLi91dGlscy5jbGFzcyc7XG4vLyovXG5cbi8vIGRlY2xhcmUgdmFyIFNjYXR0ZXJKUzphbnk7XG5cbi8vIGVvc2pzIC8gZW9zanMyXG5leHBvcnQgaW50ZXJmYWNlIFJQQyB7XG4gICAgZW5kcG9pbnQ6IHN0cmluZztcbiAgICBmZXRjaEJ1aWx0aW46IEZ1bmN0aW9uO1xuICAgIGZldGNoOiBGdW5jdGlvbjtcbiAgICBnZXRfYWJpOiBGdW5jdGlvbjtcbiAgICBnZXRfYWNjb3VudDogRnVuY3Rpb247XG4gICAgZ2V0X2Jsb2NrX2hlYWRlcl9zdGF0ZTogRnVuY3Rpb247XG4gICAgZ2V0X2Jsb2NrOiBGdW5jdGlvbjtcbiAgICBnZXRfY29kZTogRnVuY3Rpb247XG4gICAgZ2V0X2N1cnJlbmN5X2JhbGFuY2U6IEZ1bmN0aW9uO1xuICAgIGdldF9jdXJyZW5jeV9zdGF0czogRnVuY3Rpb247XG4gICAgZ2V0X2luZm86IEZ1bmN0aW9uO1xuICAgIGdldF9wcm9kdWNlcl9zY2hlZHVsZTogRnVuY3Rpb247XG4gICAgZ2V0X3Byb2R1Y2VyczogRnVuY3Rpb247XG4gICAgZ2V0X3Jhd19jb2RlX2FuZF9hYmk6IEZ1bmN0aW9uO1xuICAgIGdldFJhd0FiaTogRnVuY3Rpb247XG4gICAgZ2V0X3RhYmxlX3Jvd3M6IEZ1bmN0aW9uO1xuICAgIGdldFJlcXVpcmVkS2V5czogRnVuY3Rpb247XG4gICAgcHVzaF90cmFuc2FjdGlvbjogRnVuY3Rpb247XG4gICAgZGJfc2l6ZV9nZXQ6IEZ1bmN0aW9uO1xuICAgIGhpc3RvcnlfZ2V0X2FjdGlvbnM6IEZ1bmN0aW9uO1xuICAgIGhpc3RvcnlfZ2V0X3RyYW5zYWN0aW9uOiBGdW5jdGlvbjtcbiAgICBoaXN0b3J5X2dldF9rZXlfYWNjb3VudHM6IEZ1bmN0aW9uO1xuICAgIGhpc3RvcnlfZ2V0X2NvbnRyb2xsZWRfYWNjb3VudHM6IEZ1bmN0aW9uOyAgICBcbn1cblxuLypcbi8vIGVvc2pzMlxuZXhwb3J0IGludGVyZmFjZSBFT1Mge1xuICAgIGNvbnRyYWN0czogRnVuY3Rpb247XG4gICAgY2FjaGVkQWJpczogRnVuY3Rpb247XG4gICAgcnBjOiBGdW5jdGlvbjtcbiAgICBhdXRob3JpdHlQcm92aWRlcjogRnVuY3Rpb247XG4gICAgYWJpUHJvdmlkZXI6IEZ1bmN0aW9uO1xuICAgIHNpZ25hdHVyZVByb3ZpZGVyOiBGdW5jdGlvbjtcbiAgICBjaGFpbklkOiBGdW5jdGlvbjtcbiAgICB0ZXh0RW5jb2RlcjogRnVuY3Rpb247XG4gICAgdGV4dERlY29kZXI6IEZ1bmN0aW9uO1xuICAgIGFiaVR5cGVzOiBGdW5jdGlvbjtcbiAgICB0cmFuc2FjdGlvblR5cGVzOiBGdW5jdGlvbjtcbiAgICByYXdBYmlUb0pzb246IEZ1bmN0aW9uO1xuICAgIGdldENhY2hlZEFiaTogRnVuY3Rpb247XG4gICAgZ2V0QWJpOiBGdW5jdGlvbjtcbiAgICBnZXRUcmFuc2FjdGlvbkFiaXM6IEZ1bmN0aW9uO1xuICAgIGdldENvbnRyYWN0OiBGdW5jdGlvbjtcbiAgICBzZXJpYWxpemU6IEZ1bmN0aW9uO1xuICAgIGRlc2VyaWFsaXplOiBGdW5jdGlvbjtcbiAgICBzZXJpYWxpemVUcmFuc2FjdGlvbjogRnVuY3Rpb247XG4gICAgZGVzZXJpYWxpemVUcmFuc2FjdGlvbjogRnVuY3Rpb247XG4gICAgc2VyaWFsaXplQWN0aW9uczogRnVuY3Rpb247XG4gICAgZGVzZXJpYWxpemVBY3Rpb25zOiBGdW5jdGlvbjtcbiAgICBkZXNlcmlhbGl6ZVRyYW5zYWN0aW9uV2l0aEFjdGlvbnM6IEZ1bmN0aW9uO1xuICAgIHRyYW5zYWN0OiBGdW5jdGlvbjtcbiAgICBwdXNoU2lnbmVkVHJhbnNhY3Rpb246IEZ1bmN0aW9uO1xuICAgIGhhc1JlcXVpcmVkVGFwb3NGaWVsZHM6IEZ1bmN0aW9uOyAgICBcbn1cbi8qL1xuLy8gZW9zanNcbmV4cG9ydCBpbnRlcmZhY2UgRU9TIHtcbiAgICBnZXRJbmZvOkZ1bmN0aW9uLFxuICAgIGdldEFjY291bnQ6RnVuY3Rpb24sXG4gICAgZ2V0Q29kZTpGdW5jdGlvbixcbiAgICBnZXRDb2RlSGFzaDpGdW5jdGlvbixcbiAgICBnZXRBYmk6RnVuY3Rpb24sXG4gICAgZ2V0UmF3Q29kZUFuZEFiaTpGdW5jdGlvbixcbiAgICBhYmlKc29uVG9CaW46RnVuY3Rpb24sXG4gICAgYWJpQmluVG9Kc29uOkZ1bmN0aW9uLFxuICAgIGdldFJlcXVpcmVkS2V5czpGdW5jdGlvbixcbiAgICBnZXRCbG9jazpGdW5jdGlvbixcbiAgICBnZXRCbG9ja0hlYWRlclN0YXRlOkZ1bmN0aW9uLFxuICAgIGdldFRhYmxlUm93czpGdW5jdGlvbixcbiAgICBnZXRDdXJyZW5jeUJhbGFuY2U6RnVuY3Rpb24sXG4gICAgZ2V0Q3VycmVuY3lTdGF0czpGdW5jdGlvbixcbiAgICBnZXRQcm9kdWNlcnM6RnVuY3Rpb24sXG4gICAgZ2V0UHJvZHVjZXJTY2hlZHVsZTpGdW5jdGlvbixcbiAgICBnZXRTY2hlZHVsZWRUcmFuc2FjdGlvbnM6RnVuY3Rpb24sXG4gICAgcHVzaEJsb2NrOkZ1bmN0aW9uLFxuICAgIHB1c2hUcmFuc2FjdGlvbjpGdW5jdGlvbixcbiAgICBwdXNoVHJhbnNhY3Rpb25zOkZ1bmN0aW9uLFxuICAgIGdldEFjdGlvbnM6RnVuY3Rpb24sXG4gICAgZ2V0VHJhbnNhY3Rpb246RnVuY3Rpb24sXG4gICAgZ2V0S2V5QWNjb3VudHM6RnVuY3Rpb24sXG4gICAgZ2V0Q29udHJvbGxlZEFjY291bnRzOkZ1bmN0aW9uLFxuICAgIGNyZWF0ZVRyYW5zYWN0aW9uOkZ1bmN0aW9uLFxuICAgIHRyYW5zYWN0aW9uOkZ1bmN0aW9uLFxuICAgIG5vbmNlOkZ1bmN0aW9uLFxuICAgIHRyYW5zZmVyOkZ1bmN0aW9uLFxuICAgIGNyZWF0ZTpGdW5jdGlvbixcbiAgICBpc3N1ZTpGdW5jdGlvbixcbiAgICBiaWRuYW1lOkZ1bmN0aW9uLFxuICAgIG5ld2FjY291bnQ6RnVuY3Rpb24sXG4gICAgc2V0Y29kZTpGdW5jdGlvbixcbiAgICBzZXRhYmk6RnVuY3Rpb24sXG4gICAgdXBkYXRlYXV0aDpGdW5jdGlvbixcbiAgICBkZWxldGVhdXRoOkZ1bmN0aW9uLFxuICAgIGxpbmthdXRoOkZ1bmN0aW9uLFxuICAgIHVubGlua2F1dGg6RnVuY3Rpb24sXG4gICAgY2FuY2VsZGVsYXk6RnVuY3Rpb24sXG4gICAgb25lcnJvcjpGdW5jdGlvbixcbiAgICBidXlyYW1ieXRlczpGdW5jdGlvbixcbiAgICBzZWxscmFtOkZ1bmN0aW9uLFxuICAgIGJ1eXJhbTpGdW5jdGlvbixcbiAgICBkZWxlZ2F0ZWJ3OkZ1bmN0aW9uLFxuICAgIHVuZGVsZWdhdGVidzpGdW5jdGlvbixcbiAgICByZWZ1bmQ6RnVuY3Rpb24sXG4gICAgcmVncHJvZHVjZXI6RnVuY3Rpb24sXG4gICAgdW5yZWdwcm9kOkZ1bmN0aW9uLFxuICAgIHNldHJhbTpGdW5jdGlvbixcbiAgICByZWdwcm94eTpGdW5jdGlvbixcbiAgICB2b3RlcHJvZHVjZXI6RnVuY3Rpb24sXG4gICAgY2xhaW1yZXdhcmRzOkZ1bmN0aW9uLFxuICAgIHNldHByaXY6RnVuY3Rpb24sXG4gICAgcm12cHJvZHVjZXI6RnVuY3Rpb24sXG4gICAgc2V0YWxpbWl0czpGdW5jdGlvbixcbiAgICBzZXRnbGltaXRzOkZ1bmN0aW9uLFxuICAgIHNldHByb2RzOkZ1bmN0aW9uLFxuICAgIHJlcWF1dGg6RnVuY3Rpb24sXG4gICAgc2V0cGFyYW1zOkZ1bmN0aW9uLFxuICAgIGNvbnRyYWN0OkZ1bmN0aW9uXG59XG4vLyovXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NhdHRlciB7XG4gICAgaWRlbnRpdHk6IGFueSxcbiAgICBlb3NIb29rOiBGdW5jdGlvbjtcbiAgICBlb3M/OkZ1bmN0aW9uLFxuICAgIG5ldHdvcms6IGFueTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIGZvcmdvdHRlbj86Ym9vbGVhbiwgLy8gd2FzIGZvcmdldElkZW50aXR5IGV4ZWN1dGVkP1xuICAgIFxuICAgIGlzRXh0ZW5zaW9uOiBib29sZWFuLFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYXV0aGVudGljYXRlOiBGdW5jdGlvbixcbiAgICBjb25uZWN0OiBGdW5jdGlvbixcbiAgICBjb25zdHJ1Y3RvcjogRnVuY3Rpb24sXG4gICAgY3JlYXRlVHJhbnNhY3Rpb246IEZ1bmN0aW9uLFxuICAgIGRpc2Nvbm5lY3Q6IEZ1bmN0aW9uLFxuICAgIGZvcmdldElkZW50aXR5OiBGdW5jdGlvbixcbiAgICBnZXRBcmJpdHJhcnlTaWduYXR1cmU6IEZ1bmN0aW9uLFxuICAgIGdldElkZW50aXR5OiBGdW5jdGlvbixcbiAgICBnZXRJZGVudGl0eUZyb21QZXJtaXNzaW9uczogRnVuY3Rpb24sXG4gICAgZ2V0UHVibGljS2V5OiBGdW5jdGlvbixcbiAgICBnZXRWZXJzaW9uOiBGdW5jdGlvbixcbiAgICBoYXNBY2NvdW50Rm9yOiBGdW5jdGlvbixcbiAgICBpc0Nvbm5lY3RlZDogRnVuY3Rpb24sXG4gICAgaXNQYWlyZWQ6IEZ1bmN0aW9uLFxuICAgIGxpbmtBY2NvdW50OiBGdW5jdGlvbixcbiAgICBsb2FkUGx1Z2luOiBGdW5jdGlvbixcbiAgICByZXF1ZXN0U2lnbmF0dXJlOiBGdW5jdGlvbixcbiAgICByZXF1ZXN0VHJhbnNmZXI6IEZ1bmN0aW9uLFxuICAgIHN1Z2dlc3ROZXR3b3JrOiBGdW5jdGlvblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnREYXRhIHtcbiAgICBhY2NvdW50X25hbWU/OiBzdHJpbmcsXG4gICAgaGVhZF9ibG9ja19udW0/OiBudW1iZXIsXG4gICAgaGVhZF9ibG9ja190aW1lPzogc3RyaW5nLFxuICAgIHByaXZpbGVnZWQ/OiBmYWxzZSxcbiAgICBsYXN0X2NvZGVfdXBkYXRlPzogc3RyaW5nLFxuICAgIGNyZWF0ZWQ/OiBzdHJpbmcsXG4gICAgY29yZV9saXF1aWRfYmFsYW5jZT86IHN0cmluZyxcbiAgICBjb3JlX2xpcXVpZF9iYWxhbmNlX2Fzc2V0PzogQXNzZXQsXG4gICAgcmFtX3F1b3RhPzogbnVtYmVyLFxuICAgIG5ldF93ZWlnaHQ/OiBudW1iZXIsXG4gICAgY3B1X3dlaWdodD86IG51bWJlcixcbiAgICB0b3RhbF9iYWxhbmNlOiBzdHJpbmcsXG4gICAgdG90YWxfYmFsYW5jZV9hc3NldDogQXNzZXQsXG4gICAgcmFtX2xpbWl0Pzoge1xuICAgICAgICBwZXJjZW50U3RyPzogc3RyaW5nLFxuICAgICAgICB1c2VkPzogbnVtYmVyLFxuICAgICAgICBhdmFpbGFibGU/OiBudW1iZXIsXG4gICAgICAgIG1heD86IG51bWJlclxuICAgIH0sXG4gICAgbmV0X2xpbWl0Pzoge1xuICAgICAgICBwZXJjZW50U3RyPzogc3RyaW5nLFxuICAgICAgICB1c2VkPzogbnVtYmVyLFxuICAgICAgICBhdmFpbGFibGU/OiBudW1iZXIsXG4gICAgICAgIG1heD86IG51bWJlclxuICAgIH0sXG4gICAgY3B1X2xpbWl0Pzoge1xuICAgICAgICBwZXJjZW50U3RyPzogc3RyaW5nLFxuICAgICAgICB1c2VkPzogbnVtYmVyLFxuICAgICAgICBhdmFpbGFibGU/OiBudW1iZXIsXG4gICAgICAgIG1heD86IG51bWJlclxuICAgIH0sXG4gICAgcmFtX3VzYWdlPzogbnVtYmVyLFxuICAgIHBlcm1pc3Npb25zPzoge1xuICAgICAgICBwZXJtX25hbWU/OiBzdHJpbmcsXG4gICAgICAgIHBhcmVudD86IHN0cmluZyxcbiAgICAgICAgcmVxdWlyZWRfYXV0aD86IHtcbiAgICAgICAgICAgIHRocmVzaG9sZD86IDEsXG4gICAgICAgICAgICBrZXlzPzoge1xuICAgICAgICAgICAgICAgIGtleT86IHN0cmluZyxcbiAgICAgICAgICAgICAgICB3ZWlnaHQ/OiAxXG4gICAgICAgICAgICB9W10sXG4gICAgICAgICAgICBhY2NvdW50cz86IGFueVtdLFxuICAgICAgICAgICAgd2FpdHM/OiBhbnlbXVxuICAgICAgICB9XG4gICAgfVtdLFxuICAgIHRvdGFsX3Jlc291cmNlcz86IHtcbiAgICAgICAgb3duZXI/OiBzdHJpbmcsXG4gICAgICAgIG5ldF93ZWlnaHQ/OiBzdHJpbmcsXG4gICAgICAgIG5ldF93ZWlnaHRfYXNzZXQ/OiBBc3NldCxcbiAgICAgICAgY3B1X3dlaWdodD86IHN0cmluZyxcbiAgICAgICAgY3B1X3dlaWdodF9hc3NldD86IEFzc2V0LFxuICAgICAgICByYW1fYnl0ZXM/OiBudW1iZXJcbiAgICB9LFxuICAgIHNlbGZfZGVsZWdhdGVkX2JhbmR3aWR0aD86IHtcbiAgICAgICAgZnJvbT86IHN0cmluZyxcbiAgICAgICAgdG8/OiBzdHJpbmcsXG4gICAgICAgIHRvdGFsPzogc3RyaW5nLFxuICAgICAgICB0b3RhbF9hc3NldD86IEFzc2V0LFxuICAgICAgICBuZXRfd2VpZ2h0Pzogc3RyaW5nLFxuICAgICAgICBuZXRfd2VpZ2h0X2Fzc2V0PzogQXNzZXQsXG4gICAgICAgIGNwdV93ZWlnaHQ/OiBzdHJpbmcsXG4gICAgICAgIGNwdV93ZWlnaHRfYXNzZXQ/OiBBc3NldCxcbiAgICB9LFxuICAgIHJlZnVuZF9yZXF1ZXN0Pzoge1xuICAgICAgICBvd25lcj86IHN0cmluZyxcbiAgICAgICAgcmVxdWVzdF90aW1lPzogc3RyaW5nLFxuICAgICAgICB0b3RhbD86IHN0cmluZyxcbiAgICAgICAgdG90YWxfYXNzZXQ/OiBBc3NldCxcbiAgICAgICAgbmV0X2Ftb3VudD86IHN0cmluZyxcbiAgICAgICAgbmV0X2Ftb3VudF9hc3NldD86IEFzc2V0LFxuICAgICAgICBjcHVfYW1vdW50Pzogc3RyaW5nLFxuICAgICAgICBjcHVfYW1vdW50X2Fzc2V0PzogQXNzZXRcbiAgICB9LFxuICAgIHZvdGVyX2luZm8/OiB7XG4gICAgICAgIG93bmVyPzogc3RyaW5nLFxuICAgICAgICBwcm94eT86IHN0cmluZyxcbiAgICAgICAgcHJvZHVjZXJzPzogc3RyaW5nW10sXG4gICAgICAgIHN0YWtlZD86IG51bWJlcixcbiAgICAgICAgbGFzdF92b3RlX3dlaWdodD86IHN0cmluZyxcbiAgICAgICAgcHJveGllZF92b3RlX3dlaWdodD86IHN0cmluZyxcbiAgICAgICAgaXNfcHJveHk/OiBudW1iZXJcbiAgICB9LFxuICAgIHJldHVybmVkRmllbGRzPzogbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnQge1xuICAgIGF1dGhvcml0eT86IHN0cmluZyxcbiAgICBibG9ja2NoYWluPzogc3RyaW5nLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWNLZXk/OiBzdHJpbmcsXG4gICAgZGF0YT86IEFjY291bnREYXRhXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW5kcG9pbnQge1xuICAgIHByb3RvY29sOnN0cmluZyxcbiAgICBob3N0OnN0cmluZyxcbiAgICBwb3J0Om51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVvc2NvbmYge1xuICAgIGJsb2NrY2hhaW46c3RyaW5nLFxuICAgIHByb3RvY29sOnN0cmluZyxcbiAgICBob3N0OnN0cmluZyxcbiAgICBwb3J0Om51bWJlcixcbiAgICBjaGFpbklkOnN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmsge1xuICAgIHNsdWc/OiBzdHJpbmcsXG4gICAgaW5kZXg/OiBudW1iZXIsXG4gICAgZW9zY29uZj86IEVvc2NvbmYsXG4gICAgZXhwbG9yZXI/OiBzdHJpbmcsXG4gICAgc3ltYm9sOiBzdHJpbmcsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGNoYWluSWQ6c3RyaW5nLFxuICAgIGVuZHBvaW50czogRW5kcG9pbnRbXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtNYXAge1xuICAgIFtrZXk6c3RyaW5nXTpOZXR3b3JrXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjYXR0ZXJKU0RlZiB7XG4gICAgcGx1Z2lucz86YW55LFxuICAgIHNjYXR0ZXI/OmFueVxufVxuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBWYXBhZWVTY2F0dGVyIHtcbiAgICBcbiAgICBwcml2YXRlIHNjYXR0ZXJ1dGlscyA9IG5ldyBTY2F0dGVyVXRpbHMoKTtcbiAgICBwdWJsaWMgZXJyb3I6IHN0cmluZztcbiAgICBwcml2YXRlIGFwcFRpdGxlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzeW1ib2w6IHN0cmluZztcbiAgICBwcml2YXRlIF9jb25uZWN0ZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBsaWI6IFNjYXR0ZXI7XG4gICAgcHJpdmF0ZSBycGM6IFJQQzsgLy8gZW9zanMyXG4gICAgcHVibGljIGZlZWQ6IEZlZWRiYWNrO1xuICAgIHByaXZhdGUgU2NhdHRlckpTOiBTY2F0dGVySlNEZWY7XG4gICAgcHJpdmF0ZSBfbmV0d29yazogTmV0d29yaztcbiAgICBwcml2YXRlIF9uZXR3b3JrczogTmV0d29ya01hcDtcbiAgICBwcml2YXRlIF9uZXR3b3Jrc19zbHVnczogc3RyaW5nW107XG4gICAgcHJpdmF0ZSBfYWNjb3VudF9xdWVyaWVzOiB7W2tleTpzdHJpbmddOlByb21pc2U8QWNjb3VudERhdGE+fTtcbiAgICBwcml2YXRlIGVvczogRU9TO1xuICAgIHB1YmxpYyBvbk5ldHdvcmtDaGFuZ2U6U3ViamVjdDxOZXR3b3JrPiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgcHVibGljIG9uTG9nZ2dlZFN0YXRlQ2hhbmdlOlN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICAgIHB1YmxpYyBfYWNjb3VudDogQWNjb3VudDtcbiAgICBwcml2YXRlIHNldFJlYWR5OiBGdW5jdGlvbjtcbiAgICBwdWJsaWMgd2FpdFJlYWR5OiBQcm9taXNlPGFueT4gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFJlYWR5ID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBwcml2YXRlIHNldExvZ2dlZDogRnVuY3Rpb247XG4gICAgcHVibGljIHdhaXRMb2dnZWQ6IFByb21pc2U8YW55PiA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0TG9nZ2VkID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBwcml2YXRlIHNldENvbm5lY3RlZDogRnVuY3Rpb247XG4gICAgcHVibGljIHdhaXRDb25uZWN0ZWQ6IFByb21pc2U8YW55PiA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0Q29ubmVjdGVkID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBwcml2YXRlIHNldEVvc2pzOiBGdW5jdGlvbjtcbiAgICBwdWJsaWMgd2FpdEVvc2pzOiBQcm9taXNlPGFueT4gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICB0aGlzLnNldEVvc2pzID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBwcml2YXRlIHNldEVuZHBvaW50c1JlYWR5OiBGdW5jdGlvbjtcbiAgICBwdWJsaWMgd2FpdEVuZHBvaW50czogUHJvbWlzZTxhbnk+ID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRFbmRwb2ludHNSZWFkeSA9IHJlc29sdmU7XG4gICAgfSk7ICAgIFxuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICkge1xuICAgICAgICB0aGlzLmZlZWQgPSBuZXcgRmVlZGJhY2soKTtcbiAgICAgICAgdGhpcy5fbmV0d29ya3Nfc2x1Z3MgPSBbXTtcbiAgICAgICAgdGhpcy5fbmV0d29ya3MgPSB7fTtcbiAgICAgICAgdGhpcy5fbmV0d29yayA9IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkVPUyBNYWluTmV0XCIsXG4gICAgICAgICAgICBcInN5bWJvbFwiOiBcIkVPU1wiLFxuICAgICAgICAgICAgXCJleHBsb3JlclwiOiBcImh0dHBzOi8vd3d3LmJsb2tzLmlvXCIsXG4gICAgICAgICAgICBcImNoYWluSWRcIjpcImFjYTM3NmYyMDZiOGZjMjVhNmVkNDRkYmRjNjY1NDdjMzZjNmMzM2UzYTExOWZmYmVhZWY5NDM2NDJmMGU5MDZcIixcbiAgICAgICAgICAgIFwiZW5kcG9pbnRzXCI6IFt7XG4gICAgICAgICAgICAgICAgXCJwcm90b2NvbFwiOlwiaHR0cHNcIixcbiAgICAgICAgICAgICAgICBcImhvc3RcIjpcIm5vZGVzLmdldC1zY2F0dGVyLmNvbVwiLFxuICAgICAgICAgICAgICAgIFwicG9ydFwiOjQ0M1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3ltYm9sID0gXCJFT1NcIjtcbiAgICAgICAgLy8gdGhpcy53YWl0UmVhZHkudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIlNjYXR0ZXJTZXJ2aWNlLnNldFJlYWR5KClcIikpO1xuICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwic2NhdHRlciBpbnRlcnJ1bXBpZG8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9hY2NvdW50X3F1ZXJpZXMgPSB7fTtcbiAgICB9XG5cbiAgICBnZXQgdXRpbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYXR0ZXJ1dGlscztcbiAgICB9XG5cbiAgICAvLyBBY291bnQsIElkZW50aXR5IGFuZCBhdXRoZW50aWNhdGlvbiAtLS0tLS0tLS0tLS0tLS0tLVxuICAgIGdldCBhY2NvdW50KCk6IEFjY291bnQge1xuICAgICAgICBpZiAoIXRoaXMuX2FjY291bnQgfHwgIXRoaXMuX2FjY291bnQubmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGliICYmIHRoaXMubGliLmlkZW50aXR5ICYmIHRoaXMubGliLmlkZW50aXR5LmFjY291bnRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjb3VudCA9IHRoaXMubGliLmlkZW50aXR5LmFjY291bnRzLmZpbmQoeCA9PiB4LmJsb2NrY2hhaW4gPT09IFwiZW9zXCIgfHwgeC5ibG9ja2NoYWluID09PSBcInRsb3NcIik7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5fYWNjb3VudDtcbiAgICB9XG5cbiAgICBnZXQgZGVmYXVsdCgpOiBBY2NvdW50IHtcbiAgICAgICAgLy8gZGVmYXVsdCBkYXRhIGJlZm9yZSBsb2FkaW5nIGRhdGFcbiAgICAgICAgLy8gVE9ETzogZmlsbCBvdXQgd2l0aCBiZXR0ZXIgZGVmYXVsdCBkYXRhLlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTonZ3Vlc3QnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHRvdGFsX2JhbGFuY2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgdG90YWxfYmFsYW5jZV9hc3NldDogbmV3IEFzc2V0KCksXG4gICAgICAgICAgICAgICAgY3B1X2xpbWl0OiB7fSxcbiAgICAgICAgICAgICAgICBuZXRfbGltaXQ6IHt9LFxuICAgICAgICAgICAgICAgIHJhbV9saW1pdDoge30sXG4gICAgICAgICAgICAgICAgcmVmdW5kX3JlcXVlc3Q6IHt9LFxuICAgICAgICAgICAgICAgIHRvdGFsX3Jlc291cmNlczoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0SWRlbnRpdHkoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2NhdHRlclNlcnZpY2UucmVzZXRJZGVudGl0eSgpXCIpO1xuICAgICAgICB0aGlzLmVycm9yID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMubGliKSB7XG4gICAgICAgICAgICB0aGlzLmxpYi5pZGVudGl0eSA9IG51bGw7XG4gICAgICAgICAgICBpZiAoIXRoaXMubGliLmZvcmdvdHRlbikge1xuICAgICAgICAgICAgICAgIHRoaXMubGliLmZvcmdvdHRlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5saWIuZm9yZ2V0SWRlbnRpdHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uTG9nZ2dlZFN0YXRlQ2hhbmdlLm5leHQodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJZGVudGl0eShpZGVudGl0eTphbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTY2F0dGVyU2VydmljZS5zZXRJZGVudGl0eSgpXCIsIFtpZGVudGl0eV0pO1xuICAgICAgICBjb25zb2xlLmFzc2VydCghIXRoaXMubGliLCBcIkVSUk9SOiBubyBpbnN0YW5jZSBvZiBzY2F0dGVyIGZvdW5kXCIpO1xuICAgICAgICB0aGlzLmVycm9yID0gXCJcIjtcbiAgICAgICAgdGhpcy5saWIuaWRlbnRpdHkgPSBpZGVudGl0eTtcbiAgICAgICAgdGhpcy5saWIuZm9yZ290dGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2FjY291bnQgPSB0aGlzLmxpYi5pZGVudGl0eS5hY2NvdW50cy5maW5kKHggPT4geC5ibG9ja2NoYWluID09PSBcImVvc1wiIHx8IHguYmxvY2tjaGFpbiA9PT0gXCJ0bG9zXCIpO1xuICAgICAgICBpZiAoIXRoaXMuYWNjb3VudCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlNjYXR0ZXJTZXJ2aWNlLnNldElkZW50aXR5KClcIiwgW2lkZW50aXR5XSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTY2F0dGVyU2VydmljZS5zZXRJZGVudGl0eSgpIC0+IFNjYXR0ZXJTZXJ2aWNlLnF1ZXJ5QWNjb3VudERhdGEoKSA6IFwiICwgW3RoaXMuYWNjb3VudC5uYW1lXSk7XG4gICAgICAgIHRoaXMucXVlcnlBY2NvdW50RGF0YSh0aGlzLmFjY291bnQubmFtZSkudGhlbihhY2NvdW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudC5kYXRhID0gYWNjb3VudDtcbiAgICAgICAgICAgIHRoaXMub25Mb2dnZ2VkU3RhdGVDaGFuZ2UubmV4dCh0cnVlKTtcbiAgICAgICAgfSkuY2F0Y2goXyA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnQuZGF0YSA9IHRoaXMuZGVmYXVsdC5kYXRhO1xuICAgICAgICAgICAgdGhpcy5vbkxvZ2dnZWRTdGF0ZUNoYW5nZS5uZXh0KHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9ICAgIFxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE5ldHdvcmtzIChlb3NpbyBibG9ja2NoYWlucykgJiBFbmRwb2ludHMgLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBwdWJsaWMgc2V0RW5kcG9pbnRzKGVuZHBvaW50czogTmV0d29ya01hcCkge1xuICAgICAgICB0aGlzLl9uZXR3b3JrcyA9IGVuZHBvaW50cyB8fCB0aGlzLl9uZXR3b3JrcztcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLl9uZXR3b3Jrcykge1xuICAgICAgICAgICAgdGhpcy5fbmV0d29ya3Nfc2x1Z3MucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEVuZHBvaW50c1JlYWR5KCk7XG4gICAgfVxuXG4gICAgc2V0TmV0d29yayhuYW1lOnN0cmluZywgaW5kZXg6IG51bWJlciA9IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTY2F0dGVyU2VydmljZS5zZXROZXR3b3JrKFwiK25hbWUrXCIsXCIraW5kZXgrXCIpXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0RW5kcG9pbnRzLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLmdldE5ldHdvcmsobmFtZSwgaW5kZXgpO1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmV0d29yay5uYW1lICE9IG4ubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9uZXR3b3JrID0gbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldElkZW50aXR5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFNjYXR0ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk5ldHdvcmtDaGFuZ2UubmV4dCh0aGlzLmdldE5ldHdvcmsobmFtZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVSUk9SOiBTY2F0dGVyLnNldE5ldHdvcmsoKSB1bmtub3duIG5ldHdvcmsgbmFtZS1pbmRleC4gR290IChcIlxuICAgICAgICAgICAgICAgICAgICArIG5hbWUgKyBcIiwgXCIgKyBpbmRleCArIFwiKS4gQXZhaWxhYmxlcyBhcmU6XCIsIHRoaXMuX25ldHdvcmtzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFsbGluZyBiYWNrIHRvIGVvcyBtYWlubmV0XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldE5ldHdvcmsoXCJlb3NcIik7XG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXROZXR3b3JrKHNsdWc6c3RyaW5nLCBpbmRleDogbnVtYmVyID0gMCk6IE5ldHdvcmsge1xuICAgICAgICBpZiAodGhpcy5fbmV0d29ya3Nbc2x1Z10pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9uZXR3b3Jrc1tzbHVnXS5lbmRwb2ludHMubGVuZ3RoID4gaW5kZXggJiYgaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXR3b3JrOiBOZXR3b3JrID0gdGhpcy5fbmV0d29ya3Nbc2x1Z107XG4gICAgICAgICAgICAgICAgdmFyIGVuZHBvaW50OkVuZHBvaW50ID0gbmV0d29yay5lbmRwb2ludHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIG5ldHdvcmsuc2x1ZyA9IHNsdWc7XG4gICAgICAgICAgICAgICAgbmV0d29yay5pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIG5ldHdvcmsuZW9zY29uZiA9IHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tjaGFpbjogXCJlb3NcIixcbiAgICAgICAgICAgICAgICAgICAgY2hhaW5JZDogbmV0d29yay5jaGFpbklkLFxuICAgICAgICAgICAgICAgICAgICBob3N0OiBlbmRwb2ludC5ob3N0LFxuICAgICAgICAgICAgICAgICAgICBwb3J0OiBlbmRwb2ludC5wb3J0LFxuICAgICAgICAgICAgICAgICAgICBwcm90b2NvbDogZW5kcG9pbnQucHJvdG9jb2wsXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV0d29yaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVSUk9SOiBTY2F0dGVyLmdldE5ldHdvcmsoKSBpbmRleCBvdXQgb2YgcmFuZ2UuIEdvdCBcIlxuICAgICAgICAgICAgICAgICAgICArIGluZGV4ICsgXCIgZXhwZWN0ZWQgbnVtYmVyIGJldHdlZW4gWzAuLlwiK3RoaXMuX25ldHdvcmtzW3NsdWddLmVuZHBvaW50cy5sZW5ndGgrXCJdXCIsICk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRVJST1I6IFNjYXR0ZXIuZ2V0TmV0d29yaygpIHVua25vd24gbmV0d29yayBzbHVnLiBHb3QgXCJcbiAgICAgICAgICAgICAgICArIHNsdWcgKyBcIiBleHBlY3RlZCBvbmUgb2ZcIiwgdGhpcy5uZXR3b3Jrcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0IG5ldHdvcmtzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9uZXR3b3Jrc19zbHVncztcbiAgICB9XG5cbiAgICBnZXQgbmV0d29yaygpOiBOZXR3b3JrIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25ldHdvcms7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldFByb21pc2VzKCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiU2NhdHRlclNlcnZpY2UucmVzZXRQcm9taXNlcygpXCIpO1xuICAgICAgICB0aGlzLndhaXRFb3Nqcy50aGVuKHIgPT4ge1xuICAgICAgICAgICAgdGhpcy53YWl0RW9zanMgPSBudWxsO1xuICAgICAgICAgICAgdmFyIHAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLndhaXRFb3NqcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMud2FpdEVvc2pzID0gcDtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVvc2pzID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UHJvbWlzZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy53YWl0Q29ubmVjdGVkLnRoZW4ociA9PiB7XG4gICAgICAgICAgICB0aGlzLndhaXRDb25uZWN0ZWQgPSBudWxsO1xuICAgICAgICAgICAgdmFyIHAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLndhaXRDb25uZWN0ZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLndhaXRDb25uZWN0ZWQgPSBwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29ubmVjdGVkID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UHJvbWlzZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy53YWl0UmVhZHkudGhlbihyID0+IHtcbiAgICAgICAgICAgIHRoaXMud2FpdFJlYWR5ID0gbnVsbDtcbiAgICAgICAgICAgIHZhciBwID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy53YWl0UmVhZHkpIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLndhaXRSZWFkeSA9IHA7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSZWFkeSA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFByb21pc2VzKCk7XG4gICAgICAgICAgICAgICAgLy90aGlzLndhaXRSZWFkeS50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiU2NhdHRlclNlcnZpY2Uuc2V0UmVhZHkoKVwiKSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLndhaXRMb2dnZWQudGhlbihyID0+IHtcbiAgICAgICAgICAgIHRoaXMud2FpdExvZ2dlZCA9IG51bGw7XG4gICAgICAgICAgICB2YXIgcCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud2FpdExvZ2dlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMud2FpdExvZ2dlZCA9IHA7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMb2dnZWQgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQcm9taXNlcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTY2F0dGVyIGluaXRpYWxpemF0aW9uIGFuZCBBcHBDb25uZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaW5pdFNjYXR0ZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2NhdHRlclNlcnZpY2UuaW5pdFNjYXR0ZXIoKVwiKTtcbiAgICAgICAgLyovXG4gICAgICAgIC8vIGVvc2pzMlxuICAgICAgICB0aGlzLmVycm9yID0gXCJcIjtcbiAgICAgICAgaWYgKCg8YW55PndpbmRvdykuU2NhdHRlckpTKSB7XG4gICAgICAgICAgICB0aGlzLlNjYXR0ZXJKUyA9ICg8YW55PndpbmRvdykuU2NhdHRlckpTO1xuICAgICAgICAgICAgKDxhbnk+d2luZG93KS5TY2F0dGVySlMgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFNjYXR0ZXJKUy5wbHVnaW5zKCBuZXcgU2NhdHRlckVPUygpICk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUjpcIiwgZS5tZXNzYWdlLCBbZV0pO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhbGxpbmcgYmFjayB0byBub3JtYWwgU2NhdHRlckVPUyBwbHVnaW5cIik7XG4gICAgICAgICAgICBTY2F0dGVySlMucGx1Z2lucyggbmV3IFNjYXR0ZXJFT1MoKSApO1xuICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgdGhpcy5saWIgPSBTY2F0dGVySlMuc2NhdHRlcjtcblxuICAgICAgICBjb25zdCBuZXR3b3JrID0gU2NhdHRlckpTLk5ldHdvcmsuZnJvbUpzb24odGhpcy5uZXR3b3JrLmVvc2NvbmYpO1xuICAgICAgICB0aGlzLnJwYyA9IG5ldyBKc29uUnBjKG5ldHdvcmsuZnVsbGhvc3QoKSk7XG4gICAgICAgIHRoaXMuZW9zID0gdGhpcy5saWIuZW9zKG5ldHdvcmssIEFwaSwge3JwYzp0aGlzLnJwY30pO1xuXG4gICAgICAgIHRoaXMuc2V0RW9zanMoXCJlb3Nqc1wiKTtcbiAgICAgICAgLyovXG4gICAgICAgIC8vIGVvc2pzXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2NhdHRlclNlcnZpY2UuaW5pdFNjYXR0ZXIoKVwiKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IFwiXCI7XG4gICAgICAgIGlmICgoPGFueT53aW5kb3cpLlNjYXR0ZXJKUykge1xuICAgICAgICAgICAgdGhpcy5TY2F0dGVySlMgPSAoPGFueT53aW5kb3cpLlNjYXR0ZXJKUztcbiAgICAgICAgICAgIHRoaXMuU2NhdHRlckpTLnBsdWdpbnMoIG5ldyBTY2F0dGVyRU9TKCkgKTtcbiAgICAgICAgICAgIHRoaXMubGliID0gdGhpcy5TY2F0dGVySlMuc2NhdHRlcjsgIFxuICAgICAgICAgICAgKDxhbnk+d2luZG93KS5TY2F0dGVySlMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRU9TSlMoKVwiLFt0aGlzLm5ldHdvcmsuZW9zY29uZl0pO1xuICAgICAgICB0aGlzLmVvcyA9IHRoaXMubGliLmVvcyh0aGlzLm5ldHdvcmsuZW9zY29uZiwgRW9zLCB7IGV4cGlyZUluU2Vjb25kczo2MCB9KTtcbiAgICAgICAgdGhpcy5zZXRFb3NqcyhcImVvc2pzXCIpO1xuICAgICAgICAvLyovXG4gICAgfVxuXG4gICAgcmVjb25uZWN0VGltZXI7XG4gICAgcmVjb25uZWN0VGltZSA9IDEwMDtcbiAgICByZXRyeUNvbm5lY3RpbmdBcHAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yZWNvbm5lY3RUaW1lcik7XG4gICAgICAgIHRoaXMucmVjb25uZWN0VGltZXIgPSBzZXRJbnRlcnZhbChfID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2NhdHRlclNlcnZpY2UucmVjb25uZWN0VGltZXIoKVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwiU2NhdHRlclNlcnZpY2UucmV0cnlDb25uZWN0aW5nQXBwKCkgbGltcGlvIGVsIGludGVydmFsb1wiKTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucmVjb25uZWN0VGltZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJTY2F0dGVyU2VydmljZS5yZXRyeUNvbm5lY3RpbmdBcHAoKSAgZXhpc3RlIGFjY291bnQgcGVybyBubyBlc3TDoSBjb25lY3RhZG9cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdEFwcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSx0aGlzLnJlY29ubmVjdFRpbWUpO1xuICAgICAgICB0aGlzLnJlY29ubmVjdFRpbWUgKz0gMTAwMCpNYXRoLnJhbmRvbSgpO1xuICAgICAgICBpZiAodGhpcy5yZWNvbm5lY3RUaW1lID4gNDAwMCkgdGhpcy5yZWNvbm5lY3RUaW1lID0gNDAwMDtcbiAgICB9XG5cbiAgICBjb25uZWN0QXBwKGFwcFRpdGxlOnN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgLy8gdGhpcy5jb25uZWN0X2NvdW50Kys7XG4gICAgICAgIC8vIHZhciByZXNvbHZlX251bSA9IHRoaXMuY29ubmVjdF9jb3VudDtcbiAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJjb25uZWN0XCIsIHRydWUpO1xuICAgICAgICBpZiAoYXBwVGl0bGUgIT0gXCJcIikgdGhpcy5hcHBUaXRsZSA9IGFwcFRpdGxlO1xuICAgICAgICBjb25zb2xlLmxvZyhgU2NhdHRlclNlcnZpY2UuY29ubmVjdEFwcCgke3RoaXMuYXBwVGl0bGV9KWApO1xuICAgICAgICBjb25zdCBjb25uZWN0aW9uT3B0aW9ucyA9IHtpbml0VGltZW91dDoxODAwfVxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGVkKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IC8vIDwtLS0tIGF2b2lkcyBhIGxvb3BcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMud2FpdENvbm5lY3RlZC50aGVuKHJlc29sdmUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkgcmV0dXJuOyAvLyA8LS0tLSBhdm9pZHMgYSBsb29wXG4gICAgICAgICAgICB0aGlzLndhaXRFb3Nqcy50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNjYXR0ZXJTZXJ2aWNlLndhaXRFb3NqcygpIGVvcyBPS1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpYi5jb25uZWN0KHRoaXMuYXBwVGl0bGUsIGNvbm5lY3Rpb25PcHRpb25zKS50aGVuKGNvbm5lY3RlZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNpIGVzdMOhIGxvZ3VlYWRvIHRoaXMubGliLmlkZW50aXR5IHNlIGNhcmdhIHPDs2xvIHkgeWEgZXN0w6EgZGlzcG9uaWJsZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNjYXR0ZXJTZXJ2aWNlLmxpYi5jb25uZWN0KClcIiwgY29ubmVjdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkID0gY29ubmVjdGVkO1xuICAgICAgICAgICAgICAgICAgICBpZighY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZlZWQuc2V0RXJyb3IoXCJjb25uZWN0XCIsIFwiRVJST1I6IGNhbiBub3QgY29ubmVjdCB0byBTY2F0dGVyLiBJcyBpdCB1cCBhbmQgcnVubmluZz9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMuZmVlZC5lcnJvcihcImNvbm5lY3RcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMuZmVlZC5lcnJvcihcImNvbm5lY3RcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJjb25uZWN0XCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmV0cnlDb25uZWN0aW5nQXBwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IGEgcHJveHkgcmVmZXJlbmNlIHRvIGVvc2pzIHdoaWNoIHlvdSBjYW4gdXNlIHRvIHNpZ24gdHJhbnNhY3Rpb25zIHdpdGggYSB1c2VyJ3MgU2NhdHRlci5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTY2F0dGVyU2VydmljZS5zZXRDb25uZWN0ZWQoKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb25uZWN0ZWQoXCJjb25uZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiY29ubmVjdFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvZ2dlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2NhdHRlclNlcnZpY2Uuc2V0UmVhZHkoKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFJlYWR5KFwicmVhZHlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTY2F0dGVyU2VydmljZS5zZXRSZWFkeSgpXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRSZWFkeShcInJlYWR5XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiY29ubmVjdFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfSk7ICAgIFxuICAgICAgICAgICAgfSk7ICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQWNjb3VudERhdGEgYW5kIEJhbGFuY2VzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNhbGN1bGF0ZVRvdGFsQmFsYW5jZShhY2NvdW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgQXNzZXQoXCIwLjAwMDAgXCIgKyB0aGlzLnN5bWJvbClcbiAgICAgICAgICAgIC5wbHVzKGFjY291bnQuY29yZV9saXF1aWRfYmFsYW5jZV9hc3NldClcbiAgICAgICAgICAgIC5wbHVzKGFjY291bnQucmVmdW5kX3JlcXVlc3QubmV0X2Ftb3VudF9hc3NldClcbiAgICAgICAgICAgIC5wbHVzKGFjY291bnQucmVmdW5kX3JlcXVlc3QuY3B1X2Ftb3VudF9hc3NldClcbiAgICAgICAgICAgIC5wbHVzKGFjY291bnQuc2VsZl9kZWxlZ2F0ZWRfYmFuZHdpZHRoLmNwdV93ZWlnaHRfYXNzZXQpXG4gICAgICAgICAgICAucGx1cyhhY2NvdW50LnNlbGZfZGVsZWdhdGVkX2JhbmR3aWR0aC5uZXRfd2VpZ2h0X2Fzc2V0KTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVSZXNvdXJjZUxpbWl0KGxpbWl0KSB7XG4gICAgICAgIGxpbWl0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBtYXg6IDAsIHVzZWQ6IDBcbiAgICAgICAgfSwgbGltaXQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGxpbWl0Lm1heCAhPSAwKSB7XG4gICAgICAgICAgICBsaW1pdC5wZXJjZW50ID0gMSAtIChNYXRoLm1pbihsaW1pdC51c2VkLCBsaW1pdC5tYXgpIC8gbGltaXQubWF4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbWl0LnBlcmNlbnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGxpbWl0LnBlcmNlbnRTdHIgPSBNYXRoLnJvdW5kKGxpbWl0LnBlcmNlbnQqMTAwKSArIFwiJVwiO1xuICAgICAgICByZXR1cm4gbGltaXQ7XG4gICAgfVxuXG4gICAgcXVlcnlBY2NvdW50RGF0YShuYW1lOnN0cmluZyk6IFByb21pc2U8QWNjb3VudERhdGE+IHtcbiAgICAgICAgLypcbiAgICAgICAgLy8gZ2V0X3RhYmxlX3Jvd3NcbiAgICAgICAgICAgIGNvZGU6IFwiZW9zaW9cIlxuICAgICAgICAgICAgaW5kZXhfcG9zaXRpb246IDFcbiAgICAgICAgICAgIGpzb246IHRydWVcbiAgICAgICAgICAgIGtleV90eXBlOiBcImk2NFwiXG4gICAgICAgICAgICBsaW1pdDogLTFcbiAgICAgICAgICAgIGxvd2VyX2JvdW5kOiBudWxsXG4gICAgICAgICAgICBzY29wZTogXCJncXlkb29idWhlZ2VcIlxuICAgICAgICAgICAgdGFibGU6IFwiZGVsYmFuZFwiXG4gICAgICAgICAgICB0YWJsZV9rZXk6IFwiXCJcbiAgICAgICAgKi9cbiAgICAgICAgY29uc29sZS5sb2coXCJTY2F0dGVyU2VydmljZS5xdWVyeUFjY291bnREYXRhKFwiK25hbWUrXCIpIFwiKTtcbiAgICAgICAgdGhpcy5fYWNjb3VudF9xdWVyaWVzW25hbWVdID0gdGhpcy5fYWNjb3VudF9xdWVyaWVzW25hbWVdIHx8IG5ldyBQcm9taXNlPEFjY291bnREYXRhPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBBU08gMSAtLS0tLS1cIiwgW3RoaXMuX2FjY291bnRfcXVlcmllc10pXG4gICAgICAgICAgICB0aGlzLndhaXRFb3Nqcy50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBBU08gMiAoZW9zanMpIC0tLS0tLVwiKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIC8vIGVvc2pzMlxuICAgICAgICAgICAgICAgIHRoaXMucnBjLmdldF9hY2NvdW50KG5hbWUpLlxuICAgICAgICAgICAgICAgIC8qL1xuICAgICAgICAgICAgICAgIC8vIGVvc2pzXG4gICAgICAgICAgICAgICAgdGhpcy5lb3MuZ2V0QWNjb3VudCh7YWNjb3VudF9uYW1lOiBuYW1lfSkuXG4gICAgICAgICAgICAgICAgLy8qL1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUEFTTyAzIChlb3Nqcy5nZXRBY2NvdW50KSAtLS0tLS1cIiwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWNjb3VudF9kYXRhOiBBY2NvdW50RGF0YSA9IDxBY2NvdW50RGF0YT5yZXNwb25zZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudF9kYXRhLmNvcmVfbGlxdWlkX2JhbGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sID0gYWNjb3VudF9kYXRhLmNvcmVfbGlxdWlkX2JhbGFuY2Uuc3BsaXQoXCIgXCIpWzFdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9kYXRhLmNvcmVfbGlxdWlkX2JhbGFuY2UgPSBcIjAuMDAwMCBcIiArIHRoaXMuc3ltYm9sO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfZGF0YS5jb3JlX2xpcXVpZF9iYWxhbmNlX2Fzc2V0ID0gbmV3IEFzc2V0KGFjY291bnRfZGF0YS5jb3JlX2xpcXVpZF9iYWxhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gLS0tLS0gcmVmdW5kX3JlcXVlc3QgLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9kYXRhLnJlZnVuZF9yZXF1ZXN0ID0gYWNjb3VudF9kYXRhLnJlZnVuZF9yZXF1ZXN0IHx8IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiBcIjAuMDAwMCBcIiArIHRoaXMuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV0X2Ftb3VudDogXCIwLjAwMDAgXCIgKyB0aGlzLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNwdV9hbW91bnQ6IFwiMC4wMDAwIFwiICsgdGhpcy5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0X3RpbWU6IFwiMjAxOC0xMS0xOFQxODowOTo1M1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9kYXRhLnJlZnVuZF9yZXF1ZXN0LmNwdV9hbW91bnRfYXNzZXQgPSBuZXcgQXNzZXQoYWNjb3VudF9kYXRhLnJlZnVuZF9yZXF1ZXN0LmNwdV9hbW91bnQpO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2RhdGEucmVmdW5kX3JlcXVlc3QubmV0X2Ftb3VudF9hc3NldCA9IG5ldyBBc3NldChhY2NvdW50X2RhdGEucmVmdW5kX3JlcXVlc3QubmV0X2Ftb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfZGF0YS5yZWZ1bmRfcmVxdWVzdC50b3RhbF9hc3NldCA9IFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9kYXRhLnJlZnVuZF9yZXF1ZXN0LmNwdV9hbW91bnRfYXNzZXQucGx1cyhhY2NvdW50X2RhdGEucmVmdW5kX3JlcXVlc3QubmV0X2Ftb3VudF9hc3NldClcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9kYXRhLnJlZnVuZF9yZXF1ZXN0LnRvdGFsID0gYWNjb3VudF9kYXRhLnJlZnVuZF9yZXF1ZXN0LnRvdGFsX2Fzc2V0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gLS0tLS0gc2VsZl9kZWxlZ2F0ZWRfYmFuZHdpZHRoIC0tLS1cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9kYXRhLnNlbGZfZGVsZWdhdGVkX2JhbmR3aWR0aCA9IGFjY291bnRfZGF0YS5zZWxmX2RlbGVnYXRlZF9iYW5kd2lkdGggfHwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IFwiMC4wMDAwIFwiICsgdGhpcy5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXRfd2VpZ2h0OiBcIjAuMDAwMCBcIiArIHRoaXMuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3B1X3dlaWdodDogXCIwLjAwMDAgXCIgKyB0aGlzLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9kYXRhLnNlbGZfZGVsZWdhdGVkX2JhbmR3aWR0aC5uZXRfd2VpZ2h0X2Fzc2V0ID0gbmV3IEFzc2V0KGFjY291bnRfZGF0YS5zZWxmX2RlbGVnYXRlZF9iYW5kd2lkdGgubmV0X3dlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfZGF0YS5zZWxmX2RlbGVnYXRlZF9iYW5kd2lkdGguY3B1X3dlaWdodF9hc3NldCA9IG5ldyBBc3NldChhY2NvdW50X2RhdGEuc2VsZl9kZWxlZ2F0ZWRfYmFuZHdpZHRoLmNwdV93ZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2RhdGEuc2VsZl9kZWxlZ2F0ZWRfYmFuZHdpZHRoLnRvdGFsX2Fzc2V0ID0gXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2RhdGEuc2VsZl9kZWxlZ2F0ZWRfYmFuZHdpZHRoLmNwdV93ZWlnaHRfYXNzZXQucGx1cyhhY2NvdW50X2RhdGEuc2VsZl9kZWxlZ2F0ZWRfYmFuZHdpZHRoLm5ldF93ZWlnaHRfYXNzZXQpO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2RhdGEuc2VsZl9kZWxlZ2F0ZWRfYmFuZHdpZHRoLnRvdGFsID0gYWNjb3VudF9kYXRhLnNlbGZfZGVsZWdhdGVkX2JhbmR3aWR0aC50b3RhbF9hc3NldC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAvLyAtLS0tLSB0b3RhbF9yZXNvdXJjZXMgLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9kYXRhLnRvdGFsX3Jlc291cmNlcyA9IGFjY291bnRfZGF0YS50b3RhbF9yZXNvdXJjZXMgfHwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV0X3dlaWdodDogXCIwLjAwMDAgXCIgKyB0aGlzLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNwdV93ZWlnaHQ6IFwiMC4wMDAwIFwiICsgdGhpcy5zeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2RhdGEudG90YWxfcmVzb3VyY2VzLm5ldF93ZWlnaHRfYXNzZXQgPSBuZXcgQXNzZXQoYWNjb3VudF9kYXRhLnRvdGFsX3Jlc291cmNlcy5uZXRfd2VpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9kYXRhLnRvdGFsX3Jlc291cmNlcy5jcHVfd2VpZ2h0X2Fzc2V0ID0gbmV3IEFzc2V0KGFjY291bnRfZGF0YS50b3RhbF9yZXNvdXJjZXMuY3B1X3dlaWdodCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9kYXRhLnRvdGFsX2JhbGFuY2VfYXNzZXQgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsQmFsYW5jZShhY2NvdW50X2RhdGEpO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2RhdGEudG90YWxfYmFsYW5jZSA9IGFjY291bnRfZGF0YS50b3RhbF9iYWxhbmNlX2Fzc2V0LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9kYXRhLmNwdV9saW1pdCA9IHRoaXMuY2FsY3VsYXRlUmVzb3VyY2VMaW1pdChhY2NvdW50X2RhdGEuY3B1X2xpbWl0KTtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9kYXRhLm5ldF9saW1pdCA9IHRoaXMuY2FsY3VsYXRlUmVzb3VyY2VMaW1pdChhY2NvdW50X2RhdGEubmV0X2xpbWl0KTtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9kYXRhLnJhbV9saW1pdCA9IHRoaXMuY2FsY3VsYXRlUmVzb3VyY2VMaW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IGFjY291bnRfZGF0YS5yYW1fcXVvdGEsIHVzZWQ6IGFjY291bnRfZGF0YS5yYW1fdXNhZ2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWNjb3VudF9kYXRhOiBcIiwgYWNjb3VudF9kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYWNjb3VudF9kYXRhKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX2FjY291bnRfcXVlcmllc1tuYW1lXTtcbiAgICAgICAgcHJvbWlzZS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fYWNjb3VudF9xdWVyaWVzW3IuYWNjb3VudF9uYW1lXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIC8qXG4gICAgLy8gZW9zanMyXG4gICAgYXN5bmMgZXhlY3V0ZVRyYW5zYWN0aW9uKGNvbnRyYWN0OnN0cmluZywgYWN0aW9uOnN0cmluZywgZGF0YTphbnkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9naW4oKS50aGVuKF8gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud2FpdFJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lb3MudHJhbnNhY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudDogY29udHJhY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdG9yOiB0aGlzLmFjY291bnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb246IHRoaXMuYWNjb3VudC5hdXRob3JpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0sICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrc0JlaGluZDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVTZWNvbmRzOiAzMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICApLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVhJVE8gISEhIVwiLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUiAhISEhXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pOyBcblxuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7ICAgXG4gICAgICAgIH0pOyBcbiAgICB9XG4gICAgKi9cblxuXG4gICAgLypcbiAgICBcbiAgICB7XG4gICAgICAgIGFjdGlvbnM6IFt7XG4gICAgICAgICAgICBhY2NvdW50OiB0aGlzLmNvbnRyYWN0QWNjb3VudCxcbiAgICAgICAgICAgIG5hbWU6IGFjdGlvbixcbiAgICAgICAgICAgIGF1dGhvcml6YXRpb246IFt7XG4gICAgICAgICAgICAgICAgYWN0b3I6IHRoaXMuYWNjb3VudC5uYW1lLFxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb246IHRoaXMuYWNjb3VudC5hdXRob3JpdHlcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAuLi5kYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJsb2Nrc0JlaGluZDogMyxcbiAgICAgICAgZXhwaXJlU2Vjb25kczogMzBcbiAgICB9ICAgIFxuICAgICovXG5cbiAgICBnZXRTbWFydENvbnRyYWN0KGFjY291bnRfbmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFNtYXJ0Q29udHJhY3QoYWNjb3VudF9uYW1lLCB0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0Q29udHJhY3RXcmFwcGVyKGFjY291bnRfbmFtZSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTY2F0dGVyU2VydmljZS5nZXRDb250cmFjdCgke2FjY291bnRfbmFtZX0pYCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luKCkudGhlbigoYSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5sb2dpbigpLnRoZW4oKGEpID0+IHsgLS0+XCIsIGEgKTtcbiAgICAgICAgICAgICAgICB0aGlzLndhaXRSZWFkeS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW9zLmNvbnRyYWN0KGFjY291bnRfbmFtZSkudGhlbihjb250cmFjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgLS0gY29udHJhY3QgJHthY2NvdW50X25hbWV9IC0tYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGNvbnRyYWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGNvbnRyYWN0W2ldID09IFwiZnVuY3Rpb25cIikgY29uc29sZS5sb2coXCJjb250cmFjdC5cIitpK1wiKClcIiwgW2NvbnRyYWN0W2ldXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNvbnRyYWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTsgICBcbiAgICAgICAgfSk7IFxuICAgIH1cbiAgICBcblxuICAgIC8qXG4gICAgdHJhbnNmZXIoZnJvbTpzdHJpbmcsIHRvOnN0cmluZywgYW1vdW50OnN0cmluZywgbWVtbzpzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTY2F0dGVyU2VydmljZS50cmFuc2ZlcigpXCIsIGZyb20sIHRvLCBhbW91bnQsIG1lbW8pO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53YWl0RW9zanMudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTY2F0dGVyLnRyYW5zZmVyKCk6XCIsIGZyb20sIHRvLCBhbW91bnQsIG1lbW8sIHRoaXMuYXV0aG9yaXphdGlvbik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5lb3MudHJhbnNmZXIoZnJvbSwgdG8sIGFtb3VudCwgbWVtbywgdGhpcy5hdXRob3JpemF0aW9uKS50aGVuKHRyeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoYXQncyBpdCFcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRyYW5zYWN0aW9uIElEOiAke3RyeC50cmFuc2FjdGlvbl9pZH1gLCB0cngpO1xuICAgICAgICAgICAgICAgICAgICAvLyBlbiBOb3RhcyBlc3TDoSBlbCBqc29uIHF1ZSBkZXNjcmliZSBlbCBvYmpldG8gdHJ4XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ4KTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pOyAgIFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgKi9cblxuICAgIC8vIGxvZ2luVGltZXI7XG4gICAgbG9naW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2NhdHRlclNlcnZpY2UubG9naW4oKVwiKTtcbiAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJsb2dpblwiLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubGliLmlkZW50aXR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJZGVudGl0eSh0aGlzLmxpYi5pZGVudGl0eSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmxpYi5pZGVudGl0eSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBsb2dpblRpbWVyID0gc2V0VGltZW91dCggXyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwibG9naW5cIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJjb25uZWN0aW9uIHRpbWVvdXRcIik7XG4gICAgICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0QXBwKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGliLmdldElkZW50aXR5KHtcImFjY291bnRzXCI6W3RoaXMubmV0d29yay5lb3Njb25mXX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbiggKGlkZW50aXR5KSAgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChsb2dpblRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldElkZW50aXR5KGlkZW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExvZ2dlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwibG9naW5cIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaWRlbnRpdHkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChyZWplY3QpOyAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNjYXR0ZXJTZXJ2aWNlLmxvZ291dCgpXCIpO1xuICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcImxvZ2luXCIsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0QXBwKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saWIuZm9yZ290dGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpYi5mb3JnZXRJZGVudGl0eSgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCAoZXJyKSAgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXNjb25uZWN0XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0SWRlbnRpdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwibG9naW5cIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShcImxvZ291dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICAgICAgICB9KS5jYXRjaChyZWplY3QpOyAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IGxvZ2dlZCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpYikgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gISF0aGlzLmxpYi5pZGVudGl0eTtcbiAgICB9XG5cbiAgICBnZXQgdXNlcm5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpYikgcmV0dXJuIFwiXCI7XG4gICAgICAgIHJldHVybiB0aGlzLmxpYi5pZGVudGl0eSA/IHRoaXMubGliLmlkZW50aXR5Lm5hbWUgOiBcIlwiO1xuICAgIH1cblxuICAgIGdldCBhdXRob3JpemF0aW9uKCk6IGFueSB7XG4gICAgICAgIGlmICghdGhpcy5hY2NvdW50KSAge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlNjYXR0ZXJTZXJ2aWNlLmF1dGhvcml6YXRpb24oKVwiKTtcbiAgICAgICAgICAgIHJldHVybiB7IGF1dGhvcml6YXRpb246W1widW5rbm93bkB1bmtub3duXCJdIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjpbYCR7dGhpcy5hY2NvdW50Lm5hbWV9QCR7dGhpcy5hY2NvdW50LmF1dGhvcml0eX1gXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBjb25uZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWQ7XG4gICAgfVxuXG4gICAgZ2V0VGFibGVSb3dzKGNvbnRyYWN0LCBzY29wZSwgdGFibGUsIHRrZXksIGxvd2VyYiwgdXBwZXJiLCBsaW1pdCwga3R5cGUsIGlwb3MpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICAvKlxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNjYXR0ZXJTZXJ2aWNlLmdldFRhYmxlUm93cygpXCIpO1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vRU9TSU8vZW9zanMtYXBpL2Jsb2IvbWFzdGVyL2RvY3MvYXBpLm1kI2Vvcy5nZXRUYWJsZVJvd3NcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53YWl0RW9zanMudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGpzb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IGNvbnRyYWN0LFxuICAgICAgICAgICAgICAgICAgICBpbmRleF9wb3NpdGlvbjogaXBvcyxcbiAgICAgICAgICAgICAgICAgICAganNvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAga2V5X3R5cGU6IGt0eXBlLFxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogbGltaXQsXG4gICAgICAgICAgICAgICAgICAgIGxvd2VyX2JvdW5kOiBsb3dlcmIsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgICAgICAgICAgICAgdGFibGU6IHRhYmxlLFxuICAgICAgICAgICAgICAgICAgICB0YWJsZV9rZXk6IHRrZXksXG4gICAgICAgICAgICAgICAgICAgIHVwcGVyX2JvdW5kOiB1cHBlcmJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5ycGMuZ2V0X3RhYmxlX3Jvd3MoanNvbikudGhlbihfZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX2RhdGEpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTsgICBcbiAgICAgICAgfSk7XG4gICAgICAgIC8qL1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNjYXR0ZXJTZXJ2aWNlLmdldFRhYmxlUm93cygpXCIpO1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vRU9TSU8vZW9zanMtYXBpL2Jsb2IvbWFzdGVyL2RvY3MvYXBpLm1kI2Vvcy5nZXRUYWJsZVJvd3NcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53YWl0RW9zanMudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lb3MuZ2V0VGFibGVSb3dzKHRydWUsIGNvbnRyYWN0LCBzY29wZSwgdGFibGUsIHRrZXksIGxvd2VyYiwgdXBwZXJiLCBsaW1pdCwga3R5cGUsIGlwb3MpLnRoZW4oZnVuY3Rpb24gKF9kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX2RhdGEpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7ICAgXG4gICAgICAgIH0pO1xuICAgICAgICAvLyovXG5cbiAgICB9XG5cbn1cbiJdfQ==