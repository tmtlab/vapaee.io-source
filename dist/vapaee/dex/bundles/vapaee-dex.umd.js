(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@vapaee/scatter'), require('bignumber.js'), require('@angular/core'), require('rxjs'), require('ngx-cookie-service'), require('@angular/common'), require('@vapaee/feedback'), require('ngx-cookie-service/cookie-service/cookie.service')) :
    typeof define === 'function' && define.amd ? define('@vapaee/dex', ['exports', '@vapaee/scatter', 'bignumber.js', '@angular/core', 'rxjs', 'ngx-cookie-service', '@angular/common', '@vapaee/feedback', 'ngx-cookie-service/cookie-service/cookie.service'], factory) :
    (factory((global.vapaee = global.vapaee || {}, global.vapaee.dex = {}),null,null,global.ng.core,global.rxjs,null,global.ng.common,null,null));
}(this, (function (exports,i1,BigNumber,i0,rxjs,ngxCookieService,i3,feedback,i2) { 'use strict';

    BigNumber = BigNumber && BigNumber.hasOwnProperty('default') ? BigNumber['default'] : BigNumber;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TokenDEX = (function (_super) {
        __extends(TokenDEX, _super);
        function TokenDEX(obj) {
            if (obj === void 0) {
                obj = null;
            }
            var _this = _super.call(this, obj) || this;
            if (typeof obj == "object") {
                delete obj.symbol;
                delete obj.precision;
                delete obj.contract;
                Object.assign(_this, obj);
            }
            _this.toString();
            return _this;
        }
        return TokenDEX;
    }(i1.Token));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AssetDEX = (function (_super) {
        __extends(AssetDEX, _super);
        function AssetDEX(a, b) {
            if (a === void 0) {
                a = null;
            }
            if (b === void 0) {
                b = null;
            }
            var _this = _super.call(this, a, b) || this;
            if (a instanceof AssetDEX) {
                _this.amount = a.amount;
                _this.token = b;
                return _this;
            }
            if (!!b && b['getTokenNow']) {
                _this.parseDex(a, b);
            }
            return _this;
        }
        /**
         * @return {?}
         */
        AssetDEX.prototype.clone = /**
         * @return {?}
         */
            function () {
                return new AssetDEX(this.amount, this.token);
            };
        /**
         * @param {?} b
         * @return {?}
         */
        AssetDEX.prototype.plus = /**
         * @param {?} b
         * @return {?}
         */
            function (b) {
                console.assert(!!b, "ERROR: b is not an Asset", b, this.str);
                console.assert(b.token.symbol == this.token.symbol, "ERROR: trying to sum assets with different tokens: " + this.str + " and " + b.str);
                /** @type {?} */
                var amount = this.amount.plus(b.amount);
                return new AssetDEX(amount, this.token);
            };
        /**
         * @param {?} b
         * @return {?}
         */
        AssetDEX.prototype.minus = /**
         * @param {?} b
         * @return {?}
         */
            function (b) {
                console.assert(!!b, "ERROR: b is not an Asset", b, this.str);
                console.assert(b.token.symbol == this.token.symbol, "ERROR: trying to substract assets with different tokens: " + this.str + " and " + b.str);
                /** @type {?} */
                var amount = this.amount.minus(b.amount);
                return new AssetDEX(amount, this.token);
            };
        /**
         * @param {?} text
         * @param {?} dex
         * @return {?}
         */
        AssetDEX.prototype.parseDex = /**
         * @param {?} text
         * @param {?} dex
         * @return {?}
         */
            function (text, dex) {
                if (text == "")
                    return;
                /** @type {?} */
                var sym = text.split(" ")[1];
                this.token = dex.getTokenNow(sym);
                /** @type {?} */
                var amount_str = text.split(" ")[0];
                this.amount = new BigNumber(amount_str);
            };
        /**
         * @param {?=} decimals
         * @return {?}
         */
        AssetDEX.prototype.toString = /**
         * @param {?=} decimals
         * @return {?}
         */
            function (decimals) {
                if (decimals === void 0) {
                    decimals = -1;
                }
                if (!this.token)
                    return "0.0000";
                return this.valueToString(decimals) + " " + this.token.symbol.toUpperCase();
            };
        /**
         * @param {?} token
         * @return {?}
         */
        AssetDEX.prototype.inverse = /**
         * @param {?} token
         * @return {?}
         */
            function (token) {
                /** @type {?} */
                var result = new BigNumber(1).dividedBy(this.amount);
                /** @type {?} */
                var asset = new AssetDEX(result, token);
                return asset;
            };
        return AssetDEX;
    }(i1.Asset));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var VapaeeDEX = (function () {
        function VapaeeDEX(scatter, cookies, datePipe) {
            var _this = this;
            this.scatter = scatter;
            this.cookies = cookies;
            this.datePipe = datePipe;
            this.onLoggedAccountChange = new rxjs.Subject();
            this.onCurrentAccountChange = new rxjs.Subject();
            this.onHistoryChange = new rxjs.Subject();
            this.onMarketSummary = new rxjs.Subject();
            this.onTokensReady = new rxjs.Subject();
            this.onMarketReady = new rxjs.Subject();
            this.onTradeUpdated = new rxjs.Subject();
            this.vapaeetokens = "vapaeetokens";
            this.activityPagesize = 10;
            this.waitOrderSummary = new Promise(function (resolve) {
                _this.setOrderSummary = resolve;
            });
            this.waitTokenStats = new Promise(function (resolve) {
                _this.setTokenStats = resolve;
            });
            this.waitMarketSummary = new Promise(function (resolve) {
                _this.setMarketSummary = resolve;
            });
            this.waitTokenSummary = new Promise(function (resolve) {
                _this.setTokenSummary = resolve;
            });
            this.waitTokensLoaded = new Promise(function (resolve) {
                _this.setTokensLoaded = resolve;
            });
            this._markets = {};
            this._reverse = {};
            this.activity = { total: 0, events: {}, list: [] };
            this.current = this.default;
            this.contract_name = this.vapaeetokens;
            this.contract = this.scatter.getSmartContract(this.contract_name);
            this.feed = new feedback.Feedback();
            this.scatter.onLogggedStateChange.subscribe(this.onLoggedChange.bind(this));
            this.updateLogState();
            this.fetchTokens().then(function (data) {
                _this.tokens = data.tokens;
                _this.tokens.push(new TokenDEX({
                    appname: "Viitasphere",
                    contract: "viitasphere1",
                    logo: "/assets/logos/viitasphere.png",
                    logolg: "/assets/logos/viitasphere-lg.png",
                    precision: 4,
                    scope: "viitct.tlos",
                    symbol: "VIITA",
                    verified: false,
                    website: "https://viitasphere.com"
                }));
                _this.tokens.push(new TokenDEX({
                    appname: "Viitasphere",
                    contract: "viitasphere1",
                    logo: "/assets/logos/viitasphere.png",
                    logolg: "/assets/logos/viitasphere-lg.png",
                    precision: 0,
                    scope: "viitct.tlos",
                    symbol: "VIICT",
                    verified: false,
                    website: "https://viitasphere.com"
                }));
                _this.zero_telos = new AssetDEX("0.0000 TLOS", _this);
                _this.setTokensLoaded();
                _this.fetchTokensStats();
                _this.getOrderSummary();
                _this.getAllTablesSumaries();
            });
            /** @type {?} */
            var timer;
            this.onMarketSummary.subscribe(function (summary) {
                clearTimeout(timer);
                timer = setTimeout(function (_) {
                    _this.updateTokensSummary();
                    _this.updateTokensMarkets();
                }, 100);
            });
        }
        Object.defineProperty(VapaeeDEX.prototype, "default", {
            // getters -------------------------------------------------------------
            get: /**
             * @return {?}
             */ function () {
                return this.scatter.default;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VapaeeDEX.prototype, "logged", {
            get: /**
             * @return {?}
             */ function () {
                if (this.scatter.logged && !this.scatter.account) ;
                return this.scatter.logged ?
                    (this.scatter.account ? this.scatter.account.name : this.scatter.default.name) :
                    null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VapaeeDEX.prototype, "account", {
            get: /**
             * @return {?}
             */ function () {
                return this.scatter.logged ?
                    this.scatter.account :
                    this.scatter.default;
            },
            enumerable: true,
            configurable: true
        });
        // -- User Log State ---------------------------------------------------
        /**
         * @return {?}
         */
        VapaeeDEX.prototype.login = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.feed.setLoading("login", true);
                this.feed.setLoading("log-state", true);
                console.log("VapaeeDEX.login() this.feed.loading('log-state')", this.feed.loading('log-state'));
                this.logout();
                this.updateLogState();
                console.log("VapaeeDEX.login() this.feed.loading('log-state')", this.feed.loading('log-state'));
                this.feed.setLoading("logout", false);
                return this.scatter.login().then(function () {
                    _this.updateLogState();
                    _this.feed.setLoading("login", false);
                }).catch(function (e) {
                    _this.feed.setLoading("login", false);
                    throw e;
                });
            };
        /**
         * @return {?}
         */
        VapaeeDEX.prototype.logout = /**
         * @return {?}
         */
            function () {
                this.feed.setLoading("logout", true);
                this.scatter.logout();
            };
        /**
         * @return {?}
         */
        VapaeeDEX.prototype.onLogout = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.feed.setLoading("logout", false);
                console.log("VapaeeDEX.onLogout()");
                this.resetCurrentAccount(this.default.name);
                this.updateLogState();
                this.onLoggedAccountChange.next(this.logged);
                this.cookies.delete("login");
                setTimeout(function (_) { _this.last_logged = _this.logged; }, 400);
            };
        /**
         * @param {?} name
         * @return {?}
         */
        VapaeeDEX.prototype.onLogin = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                console.log("VapaeeDEX.onLogin()", name);
                this.resetCurrentAccount(name);
                this.getDeposits();
                this.getBalances();
                this.updateLogState();
                this.getUserOrders();
                this.onLoggedAccountChange.next(this.logged);
                this.last_logged = this.logged;
                this.cookies.set("login", this.logged);
            };
        /**
         * @return {?}
         */
        VapaeeDEX.prototype.onLoggedChange = /**
         * @return {?}
         */
            function () {
                console.log("VapaeeDEX.onLoggedChange()");
                if (this.scatter.logged) {
                    this.onLogin(this.scatter.account.name);
                }
                else {
                    this.onLogout();
                }
            };
        /**
         * @param {?} profile
         * @return {?}
         */
        VapaeeDEX.prototype.resetCurrentAccount = /**
         * @param {?} profile
         * @return {?}
         */
            function (profile) {
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                console.log("VapaeeDEX.resetCurrentAccount()", this.current.name, "->", profile);
                                if (!(this.current.name != profile && (this.current.name == this.last_logged || profile != "guest")))
                                    return [3 /*break*/, 4];
                                this.feed.setLoading("account", true);
                                this.current = this.default;
                                this.current.name = profile;
                                if (!(profile != "guest"))
                                    return [3 /*break*/, 2];
                                _a = this.current;
                                return [4 /*yield*/, this.getAccountData(this.current.name)];
                            case 1:
                                _a.data = _b.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                console.error("------------------------------------------");
                                console.error("------------------------------------------");
                                console.error("WARNING!!! current is guest", [profile, this.account, this.current]);
                                console.error("------------------------------------------");
                                console.error("------------------------------------------");
                                _b.label = 3;
                            case 3:
                                // this.scopes = {};
                                this.balances = [];
                                this.userorders = {};
                                // console.log("this.onCurrentAccountChange.next(this.current.name) !!!!!!");
                                this.onCurrentAccountChange.next(this.current.name);
                                this.updateCurrentUser();
                                this.feed.setLoading("account", false);
                                _b.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        VapaeeDEX.prototype.updateLogState = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.loginState = "no-scatter";
                this.feed.setLoading("log-state", true);
                console.log("VapaeeDEX.updateLogState() ", this.loginState, this.feed.loading("log-state"));
                this.scatter.waitConnected.then(function () {
                    _this.loginState = "no-logged";
                    // console.log("VapaeeDEX.updateLogState()   ", this.loginState);
                    if (_this.scatter.logged) {
                        _this.loginState = "account-ok";
                        // console.log("VapaeeDEX.updateLogState()     ", this.loginState);
                    }
                    _this.feed.setLoading("log-state", false);
                    console.log("VapaeeDEX.updateLogState() ", _this.loginState, _this.feed.loading("log-state"));
                });
                /** @type {?} */
                var timer2;
                /** @type {?} */
                var timer1 = setInterval(function (_) {
                    if (!_this.scatter.feed.loading("connect")) {
                        _this.feed.setLoading("log-state", false);
                        clearInterval(timer1);
                        clearInterval(timer2);
                    }
                }, 200);
                timer2 = setTimeout(function (_) {
                    clearInterval(timer1);
                    _this.feed.setLoading("log-state", false);
                }, 6000);
            };
        /**
         * @param {?} name
         * @return {?}
         */
        VapaeeDEX.prototype.getAccountData = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.scatter.queryAccountData(name).catch(function (_) {
                                return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        return [2 /*return*/, this.default.data];
                                    });
                                });
                            })];
                    });
                });
            };
        // Actions --------------------------------------------------------------
        /**
         * @param {?} type
         * @param {?} amount
         * @param {?} price
         * @return {?}
         */
        VapaeeDEX.prototype.createOrder = /**
         * @param {?} type
         * @param {?} amount
         * @param {?} price
         * @return {?}
         */
            function (type, amount, price) {
                var _this = this;
                // "alice", "buy", "2.50000000 CNT", "0.40000000 TLOS"
                // name owner, name type, const asset & total, const asset & price
                this.feed.setLoading("order-" + type, true);
                return this.contract.excecute("order", {
                    owner: this.scatter.account.name,
                    type: type,
                    total: amount.toString(8),
                    price: price.toString(8)
                }).then(function (result) {
                    return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.updateTrade(amount.token, price.token);
                            this.feed.setLoading("order-" + type, false);
                            return [2 /*return*/, result];
                        });
                    });
                }).catch(function (e) {
                    _this.feed.setLoading("order-" + type, false);
                    console.error(e);
                    throw e;
                });
            };
        /**
         * @param {?} type
         * @param {?} comodity
         * @param {?} currency
         * @param {?} orders
         * @return {?}
         */
        VapaeeDEX.prototype.cancelOrder = /**
         * @param {?} type
         * @param {?} comodity
         * @param {?} currency
         * @param {?} orders
         * @return {?}
         */
            function (type, comodity, currency, orders) {
                var _this = this;
                // '["alice", "buy", "CNT", "TLOS", [1,0]]'
                // name owner, name type, const asset & total, const asset & price
                this.feed.setLoading("cancel-" + type, true);
                for (var i in orders) {
                    this.feed.setLoading("cancel-" + type + "-" + orders[i], true);
                }
                return this.contract.excecute("cancel", {
                    owner: this.scatter.account.name,
                    type: type,
                    comodity: comodity.symbol,
                    currency: currency.symbol,
                    orders: orders
                }).then(function (result) {
                    return __awaiter(_this, void 0, void 0, function () {
                        var i;
                        return __generator(this, function (_a) {
                            this.updateTrade(comodity, currency);
                            this.feed.setLoading("cancel-" + type, false);
                            for (i in orders) {
                                this.feed.setLoading("cancel-" + type + "-" + orders[i], false);
                            }
                            return [2 /*return*/, result];
                        });
                    });
                }).catch(function (e) {
                    _this.feed.setLoading("cancel-" + type, false);
                    for (var i in orders) {
                        _this.feed.setLoading("cancel-" + type + "-" + orders[i], false);
                    }
                    console.error(e);
                    throw e;
                });
            };
        /**
         * @param {?} quantity
         * @return {?}
         */
        VapaeeDEX.prototype.deposit = /**
         * @param {?} quantity
         * @return {?}
         */
            function (quantity) {
                var _this = this;
                /** @type {?} */
                var contract = this.scatter.getSmartContract(quantity.token.contract);
                this.feed.setError("deposit", null);
                this.feed.setLoading("deposit", true);
                this.feed.setLoading("deposit-" + quantity.token.symbol.toLowerCase(), true);
                return contract.excecute("transfer", {
                    from: this.scatter.account.name,
                    to: this.vapaeetokens,
                    quantity: quantity.toString(),
                    memo: "deposit"
                }).then(function (result) {
                    return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.feed.setLoading("deposit", false);
                            this.feed.setLoading("deposit-" + quantity.token.symbol.toLowerCase(), false);
                            /*await*/ this.getDeposits();
                            /*await*/ this.getBalances();
                            return [2 /*return*/, result];
                        });
                    });
                }).catch(function (e) {
                    _this.feed.setLoading("deposit", false);
                    _this.feed.setLoading("deposit-" + quantity.token.symbol.toLowerCase(), false);
                    _this.feed.setError("deposit", typeof e == "string" ? e : JSON.stringify(e, null, 4));
                    console.error(e);
                    throw e;
                });
            };
        /**
         * @param {?} quantity
         * @return {?}
         */
        VapaeeDEX.prototype.withdraw = /**
         * @param {?} quantity
         * @return {?}
         */
            function (quantity) {
                var _this = this;
                this.feed.setError("withdraw", null);
                this.feed.setLoading("withdraw", true);
                this.feed.setLoading("withdraw-" + quantity.token.symbol.toLowerCase(), true);
                return this.contract.excecute("withdraw", {
                    owner: this.scatter.account.name,
                    quantity: quantity.toString()
                }).then(function (result) {
                    return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.feed.setLoading("withdraw", false);
                            this.feed.setLoading("withdraw-" + quantity.token.symbol.toLowerCase(), false);
                            /*await*/ this.getDeposits();
                            /*await*/ this.getBalances();
                            return [2 /*return*/, result];
                        });
                    });
                }).catch(function (e) {
                    _this.feed.setLoading("withdraw", false);
                    _this.feed.setLoading("withdraw-" + quantity.token.symbol.toLowerCase(), false);
                    _this.feed.setError("withdraw", typeof e == "string" ? e : JSON.stringify(e, null, 4));
                    throw e;
                });
            };
        // Tokens --------------------------------------------------------------
        /**
         * @param {?} offchain
         * @return {?}
         */
        VapaeeDEX.prototype.addOffChainToken = /**
         * @param {?} offchain
         * @return {?}
         */
            function (offchain) {
                var _this = this;
                this.waitTokensLoaded.then(function (_) {
                    _this.tokens.push(new TokenDEX({
                        symbol: offchain.symbol,
                        precision: offchain.precision || 4,
                        contract: "nocontract",
                        appname: offchain.appname,
                        website: "",
                        logo: "",
                        logolg: "",
                        scope: "",
                        stat: null,
                        verified: false,
                        offchain: true
                    }));
                });
            };
        /**
         * @return {?}
         */
        VapaeeDEX.prototype.hasScopes = /**
         * @return {?}
         */
            function () {
                return !!this._markets;
            };
        /**
         * @param {?} scope
         * @return {?}
         */
        VapaeeDEX.prototype.market = /**
         * @param {?} scope
         * @return {?}
         */
            function (scope) {
                if (this._markets[scope])
                    return this._markets[scope];
                /** @type {?} */
                var reverse = this.inverseScope(scope);
                if (this._reverse[reverse])
                    return this._reverse[reverse]; // ---> reverse
                if (!this._markets[reverse])
                    return null; // ---> table does not exist (or has not been loaded yet)
                return this.reverse(scope);
            };
        /**
         * @param {?} scope
         * @return {?}
         */
        VapaeeDEX.prototype.table = /**
         * @param {?} scope
         * @return {?}
         */
            function (scope) {
                //console.error("table("+scope+") DEPRECATED");
                return this.market(scope);
            };
        /**
         * @param {?} scope
         * @return {?}
         */
        VapaeeDEX.prototype.reverse = /**
         * @param {?} scope
         * @return {?}
         */
            function (scope) {
                /** @type {?} */
                var canonical = this.canonicalScope(scope);
                /** @type {?} */
                var reverse_scope = this.inverseScope(canonical);
                console.assert(canonical != reverse_scope, "ERROR: ", canonical, reverse_scope);
                /** @type {?} */
                var reverse_table = this._reverse[reverse_scope];
                if (!reverse_table && this._markets[canonical]) {
                    this._reverse[reverse_scope] = this.createReverseTableFor(reverse_scope);
                }
                return this._reverse[reverse_scope];
            };
        /**
         * @param {?} comodity
         * @param {?} currency
         * @return {?}
         */
        VapaeeDEX.prototype.marketFor = /**
         * @param {?} comodity
         * @param {?} currency
         * @return {?}
         */
            function (comodity, currency) {
                /** @type {?} */
                var scope = this.getScopeFor(comodity, currency);
                return this.table(scope);
            };
        /**
         * @param {?} comodity
         * @param {?} currency
         * @return {?}
         */
        VapaeeDEX.prototype.tableFor = /**
         * @param {?} comodity
         * @param {?} currency
         * @return {?}
         */
            function (comodity, currency) {
                console.error("tableFor()", comodity.symbol, currency.symbol, " DEPRECATED");
                return this.marketFor(comodity, currency);
            };
        /**
         * @param {?} scope
         * @return {?}
         */
        VapaeeDEX.prototype.createReverseTableFor = /**
         * @param {?} scope
         * @return {?}
         */
            function (scope) {
                /** @type {?} */
                var canonical = this.canonicalScope(scope);
                /** @type {?} */
                var reverse_scope = this.inverseScope(canonical);
                /** @type {?} */
                var table = this._markets[canonical];
                /** @type {?} */
                var inverse_history = [];
                for (var i in table.history) {
                    /** @type {?} */
                    var hTx = {
                        id: table.history[i].id,
                        str: "",
                        price: table.history[i].inverse.clone(),
                        inverse: table.history[i].price.clone(),
                        amount: table.history[i].payment.clone(),
                        payment: table.history[i].amount.clone(),
                        buyer: table.history[i].seller,
                        seller: table.history[i].buyer,
                        buyfee: table.history[i].sellfee.clone(),
                        sellfee: table.history[i].buyfee.clone(),
                        date: table.history[i].date,
                        isbuy: !table.history[i].isbuy,
                    };
                    hTx.str = hTx.price.str + " " + hTx.amount.str;
                    inverse_history.push(hTx);
                }
                /** @type {?} */
                var inverse_orders = {
                    buy: [], sell: []
                };
                for (var type in { buy: "buy", sell: "sell" }) {
                    /** @type {?} */
                    var row_orders;
                    /** @type {?} */
                    var row_order;
                    for (var i in table.orders[type]) {
                        /** @type {?} */
                        var row = table.orders[type][i];
                        row_orders = [];
                        for (var j = 0; j < row.orders.length; j++) {
                            row_order = {
                                deposit: row.orders[j].deposit.clone(),
                                id: row.orders[j].id,
                                inverse: row.orders[j].price.clone(),
                                price: row.orders[j].inverse.clone(),
                                owner: row.orders[j].owner,
                                telos: row.orders[j].total,
                                total: row.orders[j].telos
                            };
                            row_orders.push(row_order);
                        }
                        /** @type {?} */
                        var newrow = {
                            inverse: row.price.clone(),
                            orders: row_orders,
                            owners: row.owners,
                            price: row.inverse.clone(),
                            str: row.inverse.str,
                            sum: row.sumtelos.clone(),
                            sumtelos: row.sum.clone(),
                            telos: row.total.clone(),
                            total: row.telos.clone(),
                        };
                        inverse_orders[type].push(newrow);
                    }
                }
                /** @type {?} */
                var reverse = {
                    scope: reverse_scope,
                    comodity: table.currency,
                    currency: table.comodity,
                    block: table.block,
                    blocklist: table.reverseblocks,
                    reverseblocks: table.blocklist,
                    blocklevels: table.reverselevels,
                    reverselevels: table.blocklevels,
                    blocks: table.blocks,
                    deals: table.deals,
                    header: {
                        sell: {
                            total: table.header.buy.total.clone(),
                            orders: table.header.buy.orders
                        },
                        buy: {
                            total: table.header.sell.total.clone(),
                            orders: table.header.sell.orders
                        }
                    },
                    history: inverse_history,
                    orders: {
                        sell: inverse_orders.buy,
                        // <<-- esto funciona así como está?
                        buy: inverse_orders.sell // <<-- esto funciona así como está?
                    },
                    summary: {
                        scope: this.inverseScope(table.summary.scope),
                        price: table.summary.inverse,
                        price_24h_ago: table.summary.inverse_24h_ago,
                        inverse: table.summary.price,
                        inverse_24h_ago: table.summary.price_24h_ago,
                        max_inverse: table.summary.max_price,
                        max_price: table.summary.max_inverse,
                        min_inverse: table.summary.min_price,
                        min_price: table.summary.min_inverse,
                        records: table.summary.records,
                        volume: table.summary.amount,
                        amount: table.summary.volume,
                        percent: table.summary.ipercent,
                        ipercent: table.summary.percent,
                        percent_str: table.summary.ipercent_str,
                        ipercent_str: table.summary.percent_str,
                    },
                    tx: table.tx
                };
                return reverse;
            };
        /**
         * @param {?} comodity
         * @param {?} currency
         * @return {?}
         */
        VapaeeDEX.prototype.getScopeFor = /**
         * @param {?} comodity
         * @param {?} currency
         * @return {?}
         */
            function (comodity, currency) {
                if (!comodity || !currency)
                    return "";
                return comodity.symbol.toLowerCase() + "." + currency.symbol.toLowerCase();
            };
        /**
         * @param {?} scope
         * @return {?}
         */
        VapaeeDEX.prototype.inverseScope = /**
         * @param {?} scope
         * @return {?}
         */
            function (scope) {
                if (!scope)
                    return scope;
                console.assert(typeof scope == "string", "ERROR: string scope expected, got ", typeof scope, scope);
                /** @type {?} */
                var parts = scope.split(".");
                console.assert(parts.length == 2, "ERROR: scope format expected is xxx.yyy, got: ", typeof scope, scope);
                /** @type {?} */
                var inverse = parts[1] + "." + parts[0];
                return inverse;
            };
        /**
         * @param {?} scope
         * @return {?}
         */
        VapaeeDEX.prototype.canonicalScope = /**
         * @param {?} scope
         * @return {?}
         */
            function (scope) {
                if (!scope)
                    return scope;
                console.assert(typeof scope == "string", "ERROR: string scope expected, got ", typeof scope, scope);
                /** @type {?} */
                var parts = scope.split(".");
                console.assert(parts.length == 2, "ERROR: scope format expected is xxx.yyy, got: ", typeof scope, scope);
                /** @type {?} */
                var inverse = parts[1] + "." + parts[0];
                if (parts[1] == "tlos") {
                    return scope;
                }
                if (parts[0] == "tlos") {
                    return inverse;
                }
                if (parts[0] < parts[1]) {
                    return scope;
                }
                else {
                    return inverse;
                }
            };
        /**
         * @param {?} scope
         * @return {?}
         */
        VapaeeDEX.prototype.isCanonical = /**
         * @param {?} scope
         * @return {?}
         */
            function (scope) {
                return this.canonicalScope(scope) == scope;
            };
        // --------------------------------------------------------------
        // Getters 
        /**
         * @param {?} token
         * @return {?}
         */
        VapaeeDEX.prototype.getBalance = /**
         * @param {?} token
         * @return {?}
         */
            function (token) {
                for (var i in this.balances) {
                    if (this.balances[i].token.symbol == token.symbol) {
                        return this.balances[i];
                    }
                }
                return new AssetDEX("0 " + token.symbol, this);
            };
        /**
         * @param {?=} symbol
         * @return {?}
         */
        VapaeeDEX.prototype.getSomeFreeFakeTokens = /**
         * @param {?=} symbol
         * @return {?}
         */
            function (symbol) {
                if (symbol === void 0) {
                    symbol = null;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    var _token;
                    return __generator(this, function (_a) {
                        console.log("VapaeeDEX.getSomeFreeFakeTokens()");
                        _token = symbol;
                        this.feed.setLoading("freefake-" + _token || "token", true);
                        return [2 /*return*/, this.waitTokenStats.then(function (_) {
                                /** @type {?} */
                                var token = null;
                                for (var i = 0; i < 100; i++) {
                                    if (symbol) {
                                        if (_this.tokens[i].symbol == symbol) {
                                            token = _this.tokens[i];
                                        }
                                    }
                                    /** @type {?} */
                                    var random = Math.random();
                                    // console.log(i, "Random: ", random);
                                    if (!token && random > 0.5) {
                                        token = _this.tokens[i % _this.tokens.length];
                                        if (token.fake) {
                                            random = Math.random();
                                            if (random > 0.5) {
                                                token = _this.telos;
                                            }
                                        }
                                        else {
                                            token = null;
                                        }
                                    }
                                    if (i < 100 && token && _this.getBalance(token).amount.toNumber() > 0) {
                                        token = null;
                                    }
                                    // console.log(i, "token: ", token);
                                    if (token) {
                                        random = Math.random();
                                        /** @type {?} */
                                        var monto = Math.floor(10000 * random) / 100;
                                        /** @type {?} */
                                        var quantity = new AssetDEX("" + monto + " " + token.symbol, _this);
                                        /** @type {?} */
                                        var memo = "you get " + quantity.valueToString() + " free fake " + token.symbol + " tokens to play on vapaee.io DEX";
                                        return _this.contract.excecute("issue", {
                                            to: _this.scatter.account.name,
                                            quantity: quantity.toString(),
                                            memo: memo
                                        }).then(function (_) {
                                            _this.getBalances();
                                            _this.feed.setLoading("freefake-" + _token || "token", false);
                                            return memo;
                                        }).catch(function (e) {
                                            _this.feed.setLoading("freefake-" + _token || "token", false);
                                            throw e;
                                        });
                                    }
                                }
                            })];
                    });
                });
            };
        /**
         * @param {?} sym
         * @return {?}
         */
        VapaeeDEX.prototype.getTokenNow = /**
         * @param {?} sym
         * @return {?}
         */
            function (sym) {
                if (!sym)
                    return null;
                for (var i in this.tokens) {
                    // there's a little bug. This is a justa  work arround
                    if (this.tokens[i].symbol.toUpperCase() == "TLOS" && this.tokens[i].offchain) {
                        // this solves attaching wrong tlos token to asset
                        continue;
                    }
                    if (this.tokens[i].symbol.toUpperCase() == sym.toUpperCase()) {
                        return this.tokens[i];
                    }
                }
                return null;
            };
        /**
         * @param {?} sym
         * @return {?}
         */
        VapaeeDEX.prototype.getToken = /**
         * @param {?} sym
         * @return {?}
         */
            function (sym) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.waitTokensLoaded.then(function (_) {
                                return _this.getTokenNow(sym);
                            })];
                    });
                });
            };
        /**
         * @param {?=} account
         * @return {?}
         */
        VapaeeDEX.prototype.getDeposits = /**
         * @param {?=} account
         * @return {?}
         */
            function (account) {
                if (account === void 0) {
                    account = null;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        console.log("VapaeeDEX.getDeposits()");
                        this.feed.setLoading("deposits", true);
                        return [2 /*return*/, this.waitTokensLoaded.then(function (_) {
                                return __awaiter(_this, void 0, void 0, function () {
                                    var deposits, result, i;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                deposits = [];
                                                if (!account && this.current.name) {
                                                    account = this.current.name;
                                                }
                                                if (!account)
                                                    return [3 /*break*/, 2];
                                                return [4 /*yield*/, this.fetchDeposits(account)];
                                            case 1:
                                                result = _a.sent();
                                                for (i in result.rows) {
                                                    deposits.push(new AssetDEX(result.rows[i].amount, this));
                                                }
                                                _a.label = 2;
                                            case 2:
                                                this.deposits = deposits;
                                                this.feed.setLoading("deposits", false);
                                                return [2 /*return*/, this.deposits];
                                        }
                                    });
                                });
                            })];
                    });
                });
            };
        /**
         * @param {?=} account
         * @return {?}
         */
        VapaeeDEX.prototype.getBalances = /**
         * @param {?=} account
         * @return {?}
         */
            function (account) {
                if (account === void 0) {
                    account = null;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        console.log("VapaeeDEX.getBalances()");
                        this.feed.setLoading("balances", true);
                        return [2 /*return*/, this.waitTokensLoaded.then(function (_) {
                                return __awaiter(_this, void 0, void 0, function () {
                                    var _balances;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!account && this.current.name) {
                                                    account = this.current.name;
                                                }
                                                if (!account)
                                                    return [3 /*break*/, 2];
                                                return [4 /*yield*/, this.fetchBalances(account)];
                                            case 1:
                                                _balances = _a.sent();
                                                _a.label = 2;
                                            case 2:
                                                this.balances = _balances;
                                                // console.log("VapaeeDEX balances updated");
                                                this.feed.setLoading("balances", false);
                                                return [2 /*return*/, this.balances];
                                        }
                                    });
                                });
                            })];
                    });
                });
            };
        /**
         * @param {?} table
         * @param {?} ids
         * @return {?}
         */
        VapaeeDEX.prototype.getThisSellOrders = /**
         * @param {?} table
         * @param {?} ids
         * @return {?}
         */
            function (table, ids) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        this.feed.setLoading("thisorders", true);
                        return [2 /*return*/, this.waitTokensLoaded.then(function (_) {
                                return __awaiter(_this, void 0, void 0, function () {
                                    var result, _a, _b, _i, i, id, gotit, j, res;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                result = [];
                                                _a = [];
                                                for (_b in ids)
                                                    _a.push(_b);
                                                _i = 0;
                                                _c.label = 1;
                                            case 1:
                                                if (!(_i < _a.length))
                                                    return [3 /*break*/, 4];
                                                i = _a[_i];
                                                id = ids[i];
                                                gotit = false;
                                                for (j in result) {
                                                    if (result[j].id == id) {
                                                        gotit = true;
                                                        break;
                                                    }
                                                }
                                                if (gotit) {
                                                    return [3 /*break*/, 3];
                                                }
                                                return [4 /*yield*/, this.fetchOrders({ scope: table, limit: 1, lower_bound: id.toString() })];
                                            case 2:
                                                res = _c.sent();
                                                result = result.concat(res.rows);
                                                _c.label = 3;
                                            case 3:
                                                _i++;
                                                return [3 /*break*/, 1];
                                            case 4:
                                                this.feed.setLoading("thisorders", false);
                                                return [2 /*return*/, result];
                                        }
                                    });
                                });
                            })];
                    });
                });
            };
        /**
         * @param {?=} account
         * @return {?}
         */
        VapaeeDEX.prototype.getUserOrders = /**
         * @param {?=} account
         * @return {?}
         */
            function (account) {
                if (account === void 0) {
                    account = null;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        console.log("VapaeeDEX.getUserOrders()");
                        this.feed.setLoading("userorders", true);
                        return [2 /*return*/, this.waitTokensLoaded.then(function (_) {
                                return __awaiter(_this, void 0, void 0, function () {
                                    var userorders, list, map, i, ids, table, orders;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!account && this.current.name) {
                                                    account = this.current.name;
                                                }
                                                if (!account)
                                                    return [3 /*break*/, 2];
                                                return [4 /*yield*/, this.fetchUserOrders(account)];
                                            case 1:
                                                userorders = _a.sent();
                                                _a.label = 2;
                                            case 2:
                                                list = /** @type {?} */ (userorders.rows);
                                                map = {};
                                                i = 0;
                                                _a.label = 3;
                                            case 3:
                                                if (!(i < list.length))
                                                    return [3 /*break*/, 6];
                                                ids = list[i].ids;
                                                table = list[i].table;
                                                return [4 /*yield*/, this.getThisSellOrders(table, ids)];
                                            case 4:
                                                orders = _a.sent();
                                                map[table] = {
                                                    table: table,
                                                    orders: this.auxProcessRowsToOrders(orders),
                                                    ids: ids
                                                };
                                                _a.label = 5;
                                            case 5:
                                                i++;
                                                return [3 /*break*/, 3];
                                            case 6:
                                                this.userorders = map;
                                                // console.log(this.userorders);
                                                this.feed.setLoading("userorders", false);
                                                return [2 /*return*/, this.userorders];
                                        }
                                    });
                                });
                            })];
                    });
                });
            };
        /**
         * @return {?}
         */
        VapaeeDEX.prototype.updateActivity = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var pagesize, pages;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.feed.setLoading("activity", true);
                                pagesize = this.activityPagesize;
                                return [4 /*yield*/, this.getActivityTotalPages(pagesize)];
                            case 1:
                                pages = _a.sent();
                                return [4 /*yield*/, Promise.all([
                                        this.fetchActivity(pages - 2, pagesize),
                                        this.fetchActivity(pages - 1, pagesize),
                                        this.fetchActivity(pages - 0, pagesize)
                                    ])];
                            case 2:
                                _a.sent();
                                this.feed.setLoading("activity", false);
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        VapaeeDEX.prototype.loadMoreActivity = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var pagesize, first, id, page;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (this.activity.list.length == 0)
                                    return [2 /*return*/];
                                this.feed.setLoading("activity", true);
                                pagesize = this.activityPagesize;
                                first = this.activity.list[this.activity.list.length - 1];
                                id = first.id - pagesize;
                                page = Math.floor((id - 1) / pagesize);
                                return [4 /*yield*/, this.fetchActivity(page, pagesize)];
                            case 1:
                                _a.sent();
                                this.feed.setLoading("activity", false);
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} comodity
         * @param {?} currency
         * @param {?=} updateUser
         * @return {?}
         */
        VapaeeDEX.prototype.updateTrade = /**
         * @param {?} comodity
         * @param {?} currency
         * @param {?=} updateUser
         * @return {?}
         */
            function (comodity, currency, updateUser) {
                if (updateUser === void 0) {
                    updateUser = true;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    var chrono_key;
                    return __generator(this, function (_a) {
                        console.log("VapaeeDEX.updateTrade()");
                        chrono_key = "updateTrade";
                        this.feed.startChrono(chrono_key);
                        if (updateUser)
                            this.updateCurrentUser();
                        return [2 /*return*/, Promise.all([
                                this.getTransactionHistory(comodity, currency, -1, -1, true).then(function (_) { return _this.feed.setMarck(chrono_key, "getTransactionHistory()"); }),
                                this.getBlockHistory(comodity, currency, -1, -1, true).then(function (_) { return _this.feed.setMarck(chrono_key, "getBlockHistory()"); }),
                                this.getSellOrders(comodity, currency, true).then(function (_) { return _this.feed.setMarck(chrono_key, "getSellOrders()"); }),
                                this.getBuyOrders(comodity, currency, true).then(function (_) { return _this.feed.setMarck(chrono_key, "getBuyOrders()"); }),
                                this.getTableSummary(comodity, currency, true).then(function (_) { return _this.feed.setMarck(chrono_key, "getTableSummary()"); }),
                                this.getOrderSummary().then(function (_) { return _this.feed.setMarck(chrono_key, "getOrderSummary()"); }),
                            ]).then(function (r) {
                                _this._reverse = {};
                                _this.resortTokens();
                                // this.feed.printChrono(chrono_key);
                                // this.feed.printChrono(chrono_key);
                                _this.onTradeUpdated.next(null);
                                return r;
                            })];
                    });
                });
            };
        /**
         * @return {?}
         */
        VapaeeDEX.prototype.updateCurrentUser = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        // console.log("VapaeeDEX.updateCurrentUser()");
                        this.feed.setLoading("current", true);
                        return [2 /*return*/, Promise.all([
                                this.getUserOrders(),
                                this.getDeposits(),
                                this.getBalances()
                            ]).then(function (_) {
                                _this.feed.setLoading("current", false);
                                return _;
                            }).catch(function (e) {
                                _this.feed.setLoading("current", false);
                                throw e;
                            })];
                    });
                });
            };
        /**
         * @param {?} scope
         * @param {?} pagesize
         * @return {?}
         */
        VapaeeDEX.prototype.getBlockHistoryTotalPagesFor = /**
         * @param {?} scope
         * @param {?} pagesize
         * @return {?}
         */
            function (scope, pagesize) {
                if (!this._markets)
                    return 0;
                /** @type {?} */
                var market = this.market(scope);
                if (!market)
                    return 0;
                /** @type {?} */
                var total = market.blocks;
                /** @type {?} */
                var mod = total % pagesize;
                /** @type {?} */
                var dif = total - mod;
                /** @type {?} */
                var pages = dif / pagesize;
                if (mod > 0) {
                    pages += 1;
                }
                // console.log("getBlockHistoryTotalPagesFor() total:", total, " pages:", pages);
                return pages;
            };
        /**
         * @param {?} scope
         * @param {?} pagesize
         * @return {?}
         */
        VapaeeDEX.prototype.getHistoryTotalPagesFor = /**
         * @param {?} scope
         * @param {?} pagesize
         * @return {?}
         */
            function (scope, pagesize) {
                if (!this._markets)
                    return 0;
                /** @type {?} */
                var market = this.market(scope);
                if (!market)
                    return 0;
                /** @type {?} */
                var total = market.deals;
                /** @type {?} */
                var mod = total % pagesize;
                /** @type {?} */
                var dif = total - mod;
                /** @type {?} */
                var pages = dif / pagesize;
                if (mod > 0) {
                    pages += 1;
                }
                return pages;
            };
        /**
         * @param {?} pagesize
         * @return {?}
         */
        VapaeeDEX.prototype.getActivityTotalPages = /**
         * @param {?} pagesize
         * @return {?}
         */
            function (pagesize) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.getTable("events", {
                                limit: 1
                            }).then(function (result) {
                                /** @type {?} */
                                var params = result.rows[0].params;
                                /** @type {?} */
                                var total = parseInt(params.split(" ")[0]) - 1;
                                /** @type {?} */
                                var mod = total % pagesize;
                                /** @type {?} */
                                var dif = total - mod;
                                /** @type {?} */
                                var pages = dif / pagesize;
                                if (mod > 0) {
                                    pages += 1;
                                }
                                _this.activity.total = total;
                                console.log("VapaeeDEX.getActivityTotalPages() total: ", total, " pages: ", pages);
                                return pages;
                            })];
                    });
                });
            };
        /**
         * @param {?} comodity
         * @param {?} currency
         * @param {?=} page
         * @param {?=} pagesize
         * @param {?=} force
         * @return {?}
         */
        VapaeeDEX.prototype.getTransactionHistory = /**
         * @param {?} comodity
         * @param {?} currency
         * @param {?=} page
         * @param {?=} pagesize
         * @param {?=} force
         * @return {?}
         */
            function (comodity, currency, page, pagesize, force) {
                if (page === void 0) {
                    page = -1;
                }
                if (pagesize === void 0) {
                    pagesize = -1;
                }
                if (force === void 0) {
                    force = false;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    var scope, aux, result;
                    return __generator(this, function (_a) {
                        scope = this.canonicalScope(this.getScopeFor(comodity, currency));
                        aux = null;
                        result = null;
                        this.feed.setLoading("history." + scope, true);
                        aux = this.waitOrderSummary.then(function (_) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var pages;
                                return __generator(this, function (_a) {
                                    if (pagesize == -1) {
                                        pagesize = 10;
                                    }
                                    if (page == -1) {
                                        pages = this.getHistoryTotalPagesFor(scope, pagesize);
                                        page = pages - 3;
                                        if (page < 0)
                                            page = 0;
                                    }
                                    return [2 /*return*/, Promise.all([
                                            this.fetchHistory(scope, page + 0, pagesize),
                                            this.fetchHistory(scope, page + 1, pagesize),
                                            this.fetchHistory(scope, page + 2, pagesize)
                                        ]).then(function (_) {
                                            _this.feed.setLoading("history." + scope, false);
                                            return _this.market(scope).history;
                                        }).catch(function (e) {
                                            _this.feed.setLoading("history." + scope, false);
                                            throw e;
                                        })];
                                });
                            });
                        });
                        if (this.market(scope) && !force) {
                            result = this.market(scope).history;
                        }
                        else {
                            result = aux;
                        }
                        this.onHistoryChange.next(result);
                        return [2 /*return*/, result];
                    });
                });
            };
        /**
         * @param {?} hour
         * @return {?}
         */
        VapaeeDEX.prototype.auxHourToLabel = /**
         * @param {?} hour
         * @return {?}
         */
            function (hour) {
                /** @type {?} */
                var d = new Date(hour * 1000 * 60 * 60);
                /** @type {?} */
                var label = d.getHours() == 0 ? this.datePipe.transform(d, 'dd/MM') : d.getHours() + "h";
                return label;
            };
        /**
         * @param {?} comodity
         * @param {?} currency
         * @param {?=} page
         * @param {?=} pagesize
         * @param {?=} force
         * @return {?}
         */
        VapaeeDEX.prototype.getBlockHistory = /**
         * @param {?} comodity
         * @param {?} currency
         * @param {?=} page
         * @param {?=} pagesize
         * @param {?=} force
         * @return {?}
         */
            function (comodity, currency, page, pagesize, force) {
                if (page === void 0) {
                    page = -1;
                }
                if (pagesize === void 0) {
                    pagesize = -1;
                }
                if (force === void 0) {
                    force = false;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    var scope, aux, result;
                    return __generator(this, function (_a) {
                        console.log("VapaeeDEX.getBlockHistory()", comodity.symbol, page, pagesize);
                        scope = this.canonicalScope(this.getScopeFor(comodity, currency));
                        aux = null;
                        result = null;
                        this.feed.setLoading("block-history." + scope, true);
                        aux = this.waitOrderSummary.then(function (_) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var pages, promises, i, promise;
                                return __generator(this, function (_a) {
                                    if (pagesize == -1) {
                                        pagesize = 10;
                                    }
                                    if (page == -1) {
                                        pages = this.getBlockHistoryTotalPagesFor(scope, pagesize);
                                        page = pages - 3;
                                        if (page < 0)
                                            page = 0;
                                    }
                                    promises = [];
                                    for (i = 0; i <= pages; i++) {
                                        promise = this.fetchBlockHistory(scope, i, pagesize);
                                        promises.push(promise);
                                    }
                                    return [2 /*return*/, Promise.all(promises).then(function (_) {
                                            // // elapsed time
                                            // var fetchBlockHistoryTime:Date = new Date();
                                            // diff = fetchBlockHistoryTime.getTime() - fetchBlockHistoryStart.getTime();
                                            // sec = diff / 1000;
                                            // console.log("** VapaeeDEX.getBlockHistory() fetchBlockHistoryTime sec: ", sec, "(",diff,")");
                                            // // elapsed time
                                            // var fetchBlockHistoryTime:Date = new Date();
                                            // diff = fetchBlockHistoryTime.getTime() - fetchBlockHistoryStart.getTime();
                                            // sec = diff / 1000;
                                            // console.log("** VapaeeDEX.getBlockHistory() fetchBlockHistoryTime sec: ", sec, "(",diff,")");
                                            _this.feed.setLoading("block-history." + scope, false);
                                            /** @type {?} */
                                            var market = _this.market(scope);
                                            market.blocklist = [];
                                            market.reverseblocks = [];
                                            /** @type {?} */
                                            var now = new Date();
                                            /** @type {?} */
                                            var hora = 1000 * 60 * 60;
                                            /** @type {?} */
                                            var hour = Math.floor(now.getTime() / hora);
                                            /** @type {?} */
                                            var last_block = null;
                                            /** @type {?} */
                                            var ordered_blocks = [];
                                            for (var i in market.block) {
                                                ordered_blocks.push(market.block[i]);
                                            }
                                            ordered_blocks.sort(function (a, b) {
                                                if (a.hour < b.hour)
                                                    return -11;
                                                return 1;
                                            });
                                            for (var i in ordered_blocks) {
                                                /** @type {?} */
                                                var block = ordered_blocks[i];
                                                /** @type {?} */
                                                var label = _this.auxHourToLabel(block.hour);
                                                /*
                                                                    // console.log("->", i, label, block);
                                                                    var date = block.date;
                                                                    var dif = now.getTime() - block.date.getTime();
                                                                    var mes = 30 * 24 * hora;
                                                                    var elapsed_months = dif / mes;
                                                                    if (elapsed_months > 3) {
                                                                        console.log("dropping block too old", [block, block.date.toUTCString()]);
                                                                        continue;
                                                                    }
                                                                    */
                                                if (last_block) {
                                                    /** @type {?} */
                                                    var dif = block.hour - last_block.hour;
                                                    for (var j = 1; j < dif; j++) {
                                                        /** @type {?} */
                                                        var label_i = _this.auxHourToLabel(last_block.hour + j);
                                                        /** @type {?} */
                                                        var price = last_block.price.amount.toNumber();
                                                        /** @type {?} */
                                                        var aux = [label_i, price, price, price, price];
                                                        market.blocklist.push(aux);
                                                        /** @type {?} */
                                                        var inverse = last_block.inverse.amount.toNumber();
                                                        /** @type {?} */
                                                        var aux = [label_i, inverse, inverse, inverse, inverse];
                                                        market.reverseblocks.push(aux);
                                                    }
                                                }
                                                /** @type {?} */
                                                var obj;
                                                // coninical ----------------------------
                                                obj = [label];
                                                obj.push(block.max.amount.toNumber());
                                                obj.push(block.entrance.amount.toNumber());
                                                obj.push(block.price.amount.toNumber());
                                                obj.push(block.min.amount.toNumber());
                                                market.blocklist.push(obj);
                                                // reverse ----------------------------
                                                obj = [label];
                                                obj.push(1.0 / block.max.amount.toNumber());
                                                obj.push(1.0 / block.entrance.amount.toNumber());
                                                obj.push(1.0 / block.price.amount.toNumber());
                                                obj.push(1.0 / block.min.amount.toNumber());
                                                market.reverseblocks.push(obj);
                                                last_block = block;
                                            }
                                            if (last_block && hour != last_block.hour) {
                                                /** @type {?} */
                                                var dif = hour - last_block.hour;
                                                for (var j = 1; j <= dif; j++) {
                                                    /** @type {?} */
                                                    var label_i = _this.auxHourToLabel(last_block.hour + j);
                                                    /** @type {?} */
                                                    var price = last_block.price.amount.toNumber();
                                                    /** @type {?} */
                                                    var aux = [label_i, price, price, price, price];
                                                    market.blocklist.push(aux);
                                                    /** @type {?} */
                                                    var inverse = last_block.inverse.amount.toNumber();
                                                    /** @type {?} */
                                                    var aux = [label_i, inverse, inverse, inverse, inverse];
                                                    market.reverseblocks.push(aux);
                                                }
                                            }
                                            // // elapsed time
                                            // var firstLevelTime:Date = new Date();
                                            // diff = firstLevelTime.getTime() - fetchBlockHistoryTime.getTime();
                                            // sec = diff / 1000;
                                            // console.log("** VapaeeDEX.getBlockHistory() firstLevelTime sec: ", sec, "(",diff,")");
                                            // console.log("---------------->", market.blocklist);
                                            // this.onBlocklistChange.next(market.blocklist);
                                            return market;
                                        }).then(function (market) {
                                            /** @type {?} */
                                            var limit = 256;
                                            /** @type {?} */
                                            var levels = [market.blocklist];
                                            /** @type {?} */
                                            var reverses = [market.reverseblocks];
                                            for (var current = 0; levels[current].length > limit; current++) {
                                                /** @type {?} */
                                                var newlevel = [];
                                                /** @type {?} */
                                                var newreverse = [];
                                                /** @type {?} */
                                                var merged = [];
                                                for (var i = 0; i < levels[current].length; i += 2) {
                                                    /** @type {?} */
                                                    var v_1 = levels[current][i];
                                                    /** @type {?} */
                                                    var v_2 = levels[current][i + 1];
                                                    /** @type {?} */
                                                    var merged = [];
                                                    for (var x = 0; x < 5; x++)
                                                        merged[x] = v_1[x]; // clean copy
                                                    if (v_2) {
                                                        merged[0] = v_1[0].split("/").length > 1 ? v_1[0] : v_2[0];
                                                        merged[1] = Math.max(v_1[1], v_2[1]);
                                                        merged[2] = v_1[2];
                                                        merged[3] = v_2[3];
                                                        merged[4] = Math.min(v_1[4], v_2[4]);
                                                    }
                                                    newlevel.push(merged);
                                                    // reverse ------------------------------
                                                    v_1 = reverses[current][i];
                                                    v_2 = reverses[current][i + 1];
                                                    merged = [];
                                                    for (var x = 0; x < 5; x++)
                                                        merged[x] = v_1[x]; // clean copy
                                                    if (v_2) {
                                                        merged[0] = v_1[0].split("/").length > 1 ? v_1[0] : v_2[0];
                                                        merged[1] = Math.min(v_1[1], v_2[1]);
                                                        merged[2] = v_1[2];
                                                        merged[3] = v_2[3];
                                                        merged[4] = Math.max(v_1[4], v_2[4]);
                                                    }
                                                    newreverse.push(merged);
                                                }
                                                levels.push(newlevel);
                                                reverses.push(newreverse);
                                            }
                                            market.blocklevels = levels;
                                            market.reverselevels = reverses;
                                            // ---------------------
                                            // market.blocklevels = [market.blocklist];
                                            // market.reverselevels = [market.reverseblocks];
                                            // // elapsed time
                                            // var allLevelsTime:Date = new Date();
                                            // diff = allLevelsTime.getTime() - allLevelsStart.getTime();
                                            // sec = diff / 1000;
                                            // console.log("** VapaeeDEX.getBlockHistory() allLevelsTime sec: ", sec, "(",diff,")");
                                            // // console.log("***************************************************************************", market.blocklevels);
                                            return market.block;
                                        }).catch(function (e) {
                                            _this.feed.setLoading("block-history." + scope, false);
                                            throw e;
                                        })];
                                });
                            });
                        });
                        if (this.market(scope) && !force) {
                            result = this.market(scope).block;
                        }
                        else {
                            result = aux;
                        }
                        this.onHistoryChange.next(result);
                        return [2 /*return*/, result];
                    });
                });
            };
        /**
         * @param {?} comodity
         * @param {?} currency
         * @param {?=} force
         * @return {?}
         */
        VapaeeDEX.prototype.getSellOrders = /**
         * @param {?} comodity
         * @param {?} currency
         * @param {?=} force
         * @return {?}
         */
            function (comodity, currency, force) {
                if (force === void 0) {
                    force = false;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    var scope, canonical, reverse, aux, result;
                    return __generator(this, function (_a) {
                        scope = this.getScopeFor(comodity, currency);
                        canonical = this.canonicalScope(scope);
                        reverse = this.inverseScope(canonical);
                        aux = null;
                        result = null;
                        this.feed.setLoading("sellorders", true);
                        aux = this.waitTokensLoaded.then(function (_) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var orders, sell, list, row, i, order, sum, sumtelos, j, order_row;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.fetchOrders({ scope: canonical, limit: 100, index_position: "2", key_type: "i64" })];
                                        case 1:
                                            orders = _a.sent();
                                            this._markets[canonical] = this.auxAssertScope(canonical);
                                            sell = this.auxProcessRowsToOrders(orders.rows);
                                            sell.sort(function (a, b) {
                                                if (a.price.amount.isLessThan(b.price.amount))
                                                    return -11;
                                                if (a.price.amount.isGreaterThan(b.price.amount))
                                                    return 1;
                                                return 0;
                                            });
                                            list = [];
                                            if (sell.length > 0) {
                                                for (i = 0; i < sell.length; i++) {
                                                    order = sell[i];
                                                    if (list.length > 0) {
                                                        row = list[list.length - 1];
                                                        if (row.price.amount.eq(order.price.amount)) {
                                                            row.total.amount = row.total.amount.plus(order.total.amount);
                                                            row.telos.amount = row.telos.amount.plus(order.telos.amount);
                                                            row.owners[order.owner] = true;
                                                            row.orders.push(order);
                                                            continue;
                                                        }
                                                    }
                                                    row = {
                                                        str: order.price.toString(),
                                                        price: order.price,
                                                        orders: [],
                                                        total: order.total.clone(),
                                                        telos: order.telos.clone(),
                                                        inverse: order.inverse,
                                                        sum: null,
                                                        sumtelos: null,
                                                        owners: {}
                                                    };
                                                    row.owners[order.owner] = true;
                                                    row.orders.push(order);
                                                    list.push(row);
                                                }
                                            }
                                            sum = new BigNumber(0);
                                            sumtelos = new BigNumber(0);
                                            for (j in list) {
                                                order_row = list[j];
                                                sumtelos = sumtelos.plus(order_row.telos.amount);
                                                sum = sum.plus(order_row.total.amount);
                                                order_row.sumtelos = new AssetDEX(sumtelos, order_row.telos.token);
                                                order_row.sum = new AssetDEX(sum, order_row.total.token);
                                            }
                                            this._markets[canonical].orders.sell = list;
                                            // if(scope=="vpe.tlos" || scope=="cnt.tlos")console.log("Sell final:", this.scopes[scope].orders.sell);
                                            // if(scope=="vpe.tlos" || scope=="cnt.tlos")console.log("-------------");
                                            this.feed.setLoading("sellorders", false);
                                            return [2 /*return*/, this._markets[canonical].orders.sell];
                                    }
                                });
                            });
                        });
                        if (this._markets[canonical] && !force) {
                            result = this._markets[canonical].orders.sell;
                        }
                        else {
                            result = aux;
                        }
                        return [2 /*return*/, result];
                    });
                });
            };
        /**
         * @param {?} comodity
         * @param {?} currency
         * @param {?=} force
         * @return {?}
         */
        VapaeeDEX.prototype.getBuyOrders = /**
         * @param {?} comodity
         * @param {?} currency
         * @param {?=} force
         * @return {?}
         */
            function (comodity, currency, force) {
                if (force === void 0) {
                    force = false;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    var scope, canonical, reverse, aux, result;
                    return __generator(this, function (_a) {
                        scope = this.getScopeFor(comodity, currency);
                        canonical = this.canonicalScope(scope);
                        reverse = this.inverseScope(canonical);
                        aux = null;
                        result = null;
                        this.feed.setLoading("buyorders", true);
                        aux = this.waitTokensLoaded.then(function (_) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var orders, buy, list, row, i, order, sum, sumtelos, j, order_row;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.fetchOrders({ scope: reverse, limit: 50, index_position: "2", key_type: "i64" })];
                                        case 1: return [4 /*yield*/, _a.sent()];
                                        case 2:
                                            orders = _a.sent();
                                            this._markets[canonical] = this.auxAssertScope(canonical);
                                            buy = this.auxProcessRowsToOrders(orders.rows);
                                            buy.sort(function (a, b) {
                                                if (a.price.amount.isLessThan(b.price.amount))
                                                    return 1;
                                                if (a.price.amount.isGreaterThan(b.price.amount))
                                                    return -1;
                                                return 0;
                                            });
                                            list = [];
                                            if (buy.length > 0) {
                                                for (i = 0; i < buy.length; i++) {
                                                    order = buy[i];
                                                    if (list.length > 0) {
                                                        row = list[list.length - 1];
                                                        if (row.price.amount.eq(order.price.amount)) {
                                                            row.total.amount = row.total.amount.plus(order.total.amount);
                                                            row.telos.amount = row.telos.amount.plus(order.telos.amount);
                                                            row.owners[order.owner] = true;
                                                            row.orders.push(order);
                                                            continue;
                                                        }
                                                    }
                                                    row = {
                                                        str: order.price.toString(),
                                                        price: order.price,
                                                        orders: [],
                                                        total: order.total.clone(),
                                                        telos: order.telos.clone(),
                                                        inverse: order.inverse,
                                                        sum: null,
                                                        sumtelos: null,
                                                        owners: {}
                                                    };
                                                    row.owners[order.owner] = true;
                                                    row.orders.push(order);
                                                    list.push(row);
                                                }
                                            }
                                            sum = new BigNumber(0);
                                            sumtelos = new BigNumber(0);
                                            for (j in list) {
                                                order_row = list[j];
                                                sumtelos = sumtelos.plus(order_row.telos.amount);
                                                sum = sum.plus(order_row.total.amount);
                                                order_row.sumtelos = new AssetDEX(sumtelos, order_row.telos.token);
                                                order_row.sum = new AssetDEX(sum, order_row.total.token);
                                            }
                                            this._markets[canonical].orders.buy = list;
                                            // console.log("Buy final:", this.scopes[scope].orders.buy);
                                            // console.log("-------------");
                                            this.feed.setLoading("buyorders", false);
                                            return [2 /*return*/, this._markets[canonical].orders.buy];
                                    }
                                });
                            });
                        });
                        if (this._markets[canonical] && !force) {
                            result = this._markets[canonical].orders.buy;
                        }
                        else {
                            result = aux;
                        }
                        return [2 /*return*/, result];
                    });
                });
            };
        /**
         * @return {?}
         */
        VapaeeDEX.prototype.getOrderSummary = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var tables, i, scope, canonical, comodity, currency;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("VapaeeDEX.getOrderSummary()");
                                return [4 /*yield*/, this.fetchOrderSummary()];
                            case 1:
                                tables = _a.sent();
                                for (i in tables.rows) {
                                    scope = tables.rows[i].table;
                                    canonical = this.canonicalScope(scope);
                                    console.assert(scope == canonical, "ERROR: scope is not canonical", scope, [i, tables]);
                                    comodity = scope.split(".")[0].toUpperCase();
                                    currency = scope.split(".")[1].toUpperCase();
                                    this._markets[scope] = this.auxAssertScope(scope);
                                    // console.log(i, tables.rows[i]);
                                    this._markets[scope].header.sell.total = new AssetDEX(tables.rows[i].supply.total, this);
                                    this._markets[scope].header.sell.orders = tables.rows[i].supply.orders;
                                    this._markets[scope].header.buy.total = new AssetDEX(tables.rows[i].demand.total, this);
                                    this._markets[scope].header.buy.orders = tables.rows[i].demand.orders;
                                    this._markets[scope].deals = tables.rows[i].deals;
                                    this._markets[scope].blocks = tables.rows[i].blocks;
                                }
                                this.setOrderSummary();
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} comodity
         * @param {?} currency
         * @param {?=} force
         * @return {?}
         */
        VapaeeDEX.prototype.getTableSummary = /**
         * @param {?} comodity
         * @param {?} currency
         * @param {?=} force
         * @return {?}
         */
            function (comodity, currency, force) {
                if (force === void 0) {
                    force = false;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    var scope, canonical, inverse, ZERO_COMODITY, ZERO_CURRENCY, aux, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                scope = this.getScopeFor(comodity, currency);
                                canonical = this.canonicalScope(scope);
                                inverse = this.inverseScope(canonical);
                                ZERO_COMODITY = "0.00000000 " + comodity.symbol;
                                ZERO_CURRENCY = "0.00000000 " + currency.symbol;
                                this.feed.setLoading("summary." + canonical, true);
                                this.feed.setLoading("summary." + inverse, true);
                                aux = null;
                                result = null;
                                aux = this.waitTokensLoaded.then(function (_) {
                                    return __awaiter(_this, void 0, void 0, function () {
                                        var summary, now, now_sec, now_hour, start_hour, price, inverse, crude, last_hh, i, hh, last_24h, volume, amount, price_asset, inverse_asset, max_price, min_price, max_inverse, min_inverse, price_fst, inverse_fst, i, current, current_date, nuevo, s_price, s_inverse, s_volume, s_amount, vol, amo, last_price, diff, ratio, percent, last_inverse, idiff, ipercent;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.fetchSummary(canonical)];
                                                case 1:
                                                    summary = _a.sent();
                                                    // if(scope=="olive.tlos")console.log(scope, "---------------------------------------------------");
                                                    // if(scope=="olive.tlos")console.log("Summary crudo:", summary.rows);
                                                    this._markets[canonical] = this.auxAssertScope(canonical);
                                                    this._markets[canonical].summary = {
                                                        scope: canonical,
                                                        price: new AssetDEX(new BigNumber(0), currency),
                                                        price_24h_ago: new AssetDEX(new BigNumber(0), currency),
                                                        inverse: new AssetDEX(new BigNumber(0), comodity),
                                                        inverse_24h_ago: new AssetDEX(new BigNumber(0), comodity),
                                                        volume: new AssetDEX(new BigNumber(0), currency),
                                                        amount: new AssetDEX(new BigNumber(0), comodity),
                                                        percent: 0.3,
                                                        records: summary.rows
                                                    };
                                                    now = new Date();
                                                    now_sec = Math.floor(now.getTime() / 1000);
                                                    now_hour = Math.floor(now_sec / 3600);
                                                    start_hour = now_hour - 23;
                                                    price = ZERO_CURRENCY;
                                                    inverse = ZERO_COMODITY;
                                                    crude = {};
                                                    last_hh = 0;
                                                    for (i = 0; i < summary.rows.length; i++) {
                                                        hh = summary.rows[i].hour;
                                                        if (summary.rows[i].label == "lastone") ;
                                                        else {
                                                            crude[hh] = summary.rows[i];
                                                            if (last_hh < hh && hh < start_hour) {
                                                                last_hh = hh;
                                                                price = (scope == canonical) ? summary.rows[i].price : summary.rows[i].inverse;
                                                                inverse = (scope == canonical) ? summary.rows[i].inverse : summary.rows[i].price;
                                                                // if(canonical=="acorn.tlos")console.log("hh:", hh, "last_hh:", last_hh, "price:", price);
                                                            }
                                                        }
                                                        /*
                                                                        */
                                                    }
                                                    last_24h = {};
                                                    volume = new AssetDEX(ZERO_CURRENCY, this);
                                                    amount = new AssetDEX(ZERO_COMODITY, this);
                                                    price_asset = new AssetDEX(price, this);
                                                    inverse_asset = new AssetDEX(inverse, this);
                                                    max_price = price_asset.clone();
                                                    min_price = price_asset.clone();
                                                    max_inverse = inverse_asset.clone();
                                                    min_inverse = inverse_asset.clone();
                                                    price_fst = null;
                                                    inverse_fst = null;
                                                    for (i = 0; i < 24; i++) {
                                                        current = start_hour + i;
                                                        current_date = new Date(current * 3600 * 1000);
                                                        nuevo = crude[current];
                                                        if (nuevo) {
                                                            s_price = (scope == canonical) ? nuevo.price : nuevo.inverse;
                                                            s_inverse = (scope == canonical) ? nuevo.inverse : nuevo.price;
                                                            s_volume = (scope == canonical) ? nuevo.volume : nuevo.amount;
                                                            s_amount = (scope == canonical) ? nuevo.amount : nuevo.volume;
                                                            nuevo.price = s_price;
                                                            nuevo.inverse = s_inverse;
                                                            nuevo.volume = s_volume;
                                                            nuevo.amount = s_amount;
                                                        }
                                                        else {
                                                            nuevo = {
                                                                label: this.auxGetLabelForHour(current % 24),
                                                                price: price,
                                                                inverse: inverse,
                                                                volume: ZERO_CURRENCY,
                                                                amount: ZERO_COMODITY,
                                                                date: current_date.toISOString().split(".")[0],
                                                                hour: current
                                                            };
                                                        }
                                                        last_24h[current] = crude[current] || nuevo;
                                                        // if(canonical=="acorn.tlos")console.log("current_date:", current_date.toISOString(), current, last_24h[current]);
                                                        // coninical ----------------------------
                                                        price = last_24h[current].price;
                                                        vol = new AssetDEX(last_24h[current].volume, this);
                                                        console.assert(vol.token.symbol == volume.token.symbol, "ERROR: different tokens", vol.str, volume.str);
                                                        volume.amount = volume.amount.plus(vol.amount);
                                                        if (price != ZERO_CURRENCY && !price_fst) {
                                                            price_fst = new AssetDEX(price, this);
                                                        }
                                                        price_asset = new AssetDEX(price, this);
                                                        console.assert(price_asset.token.symbol == max_price.token.symbol, "ERROR: different tokens", price_asset.str, max_price.str);
                                                        if (price_asset.amount.isGreaterThan(max_price.amount)) {
                                                            max_price = price_asset.clone();
                                                        }
                                                        console.assert(price_asset.token.symbol == min_price.token.symbol, "ERROR: different tokens", price_asset.str, min_price.str);
                                                        if (min_price.amount.isEqualTo(0) || price_asset.amount.isLessThan(min_price.amount)) {
                                                            min_price = price_asset.clone();
                                                        }
                                                        // reverse ----------------------------
                                                        inverse = last_24h[current].inverse;
                                                        amo = new AssetDEX(last_24h[current].amount, this);
                                                        console.assert(amo.token.symbol == amount.token.symbol, "ERROR: different tokens", amo.str, amount.str);
                                                        amount.amount = amount.amount.plus(amo.amount);
                                                        if (inverse != ZERO_COMODITY && !inverse_fst) {
                                                            inverse_fst = new AssetDEX(inverse, this);
                                                        }
                                                        inverse_asset = new AssetDEX(inverse, this);
                                                        console.assert(inverse_asset.token.symbol == max_inverse.token.symbol, "ERROR: different tokens", inverse_asset.str, max_inverse.str);
                                                        if (inverse_asset.amount.isGreaterThan(max_inverse.amount)) {
                                                            max_inverse = inverse_asset.clone();
                                                        }
                                                        console.assert(inverse_asset.token.symbol == min_inverse.token.symbol, "ERROR: different tokens", inverse_asset.str, min_inverse.str);
                                                        if (min_inverse.amount.isEqualTo(0) || inverse_asset.amount.isLessThan(min_inverse.amount)) {
                                                            min_inverse = inverse_asset.clone();
                                                        }
                                                    }
                                                    // coninical ----------------------------
                                                    if (!price_fst) {
                                                        price_fst = new AssetDEX(last_24h[start_hour].price, this);
                                                    }
                                                    last_price = new AssetDEX(last_24h[now_hour].price, this);
                                                    diff = last_price.clone();
                                                    // diff.amount
                                                    diff.amount = last_price.amount.minus(price_fst.amount);
                                                    ratio = 0;
                                                    if (price_fst.amount.toNumber() != 0) {
                                                        ratio = diff.amount.dividedBy(price_fst.amount).toNumber();
                                                    }
                                                    percent = Math.floor(ratio * 10000) / 100;
                                                    // reverse ----------------------------
                                                    if (!inverse_fst) {
                                                        inverse_fst = new AssetDEX(last_24h[start_hour].inverse, this);
                                                    }
                                                    last_inverse = new AssetDEX(last_24h[now_hour].inverse, this);
                                                    idiff = last_inverse.clone();
                                                    // diff.amount
                                                    idiff.amount = last_inverse.amount.minus(inverse_fst.amount);
                                                    ratio = 0;
                                                    if (inverse_fst.amount.toNumber() != 0) {
                                                        ratio = diff.amount.dividedBy(inverse_fst.amount).toNumber();
                                                    }
                                                    ipercent = Math.floor(ratio * 10000) / 100;
                                                    // if(canonical=="acorn.tlos")console.log("price_fst:", price_fst.str);
                                                    // if(canonical=="acorn.tlos")console.log("inverse_fst:", inverse_fst.str);
                                                    // if(canonical=="acorn.tlos")console.log("last_24h:", [last_24h]);
                                                    // if(canonical=="acorn.tlos")console.log("diff:", diff.toString(8));
                                                    // if(canonical=="acorn.tlos")console.log("percent:", percent);
                                                    // if(canonical=="acorn.tlos")console.log("ratio:", ratio);
                                                    // if(canonical=="acorn.tlos")console.log("volume:", volume.str);
                                                    this._markets[canonical].summary.price = last_price;
                                                    this._markets[canonical].summary.inverse = last_inverse;
                                                    this._markets[canonical].summary.price_24h_ago = price_fst || last_price;
                                                    this._markets[canonical].summary.inverse_24h_ago = inverse_fst;
                                                    this._markets[canonical].summary.percent_str = (isNaN(percent) ? 0 : percent) + "%";
                                                    this._markets[canonical].summary.percent = isNaN(percent) ? 0 : percent;
                                                    this._markets[canonical].summary.ipercent_str = (isNaN(ipercent) ? 0 : ipercent) + "%";
                                                    this._markets[canonical].summary.ipercent = isNaN(ipercent) ? 0 : ipercent;
                                                    this._markets[canonical].summary.volume = volume;
                                                    this._markets[canonical].summary.amount = amount;
                                                    this._markets[canonical].summary.min_price = min_price;
                                                    this._markets[canonical].summary.max_price = max_price;
                                                    this._markets[canonical].summary.min_inverse = min_inverse;
                                                    this._markets[canonical].summary.max_inverse = max_inverse;
                                                    // if(canonical=="acorn.tlos")console.log("Summary final:", this._markets[canonical].summary);
                                                    // if(canonical=="acorn.tlos")console.log("---------------------------------------------------");
                                                    this.feed.setLoading("summary." + canonical, false);
                                                    this.feed.setLoading("summary." + inverse, false);
                                                    return [2 /*return*/, this._markets[canonical].summary];
                                            }
                                        });
                                    });
                                });
                                if (!(this._markets[canonical] && !force))
                                    return [3 /*break*/, 1];
                                result = this._markets[canonical].summary;
                                return [3 /*break*/, 3];
                            case 1: return [4 /*yield*/, aux];
                            case 2:
                                result = _a.sent();
                                _a.label = 3;
                            case 3:
                                this.setMarketSummary();
                                this.onMarketSummary.next(result);
                                return [2 /*return*/, result];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        VapaeeDEX.prototype.getAllTablesSumaries = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.waitOrderSummary.then(function (_) {
                                return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    var promises, i, p;
                                    return __generator(this, function (_a) {
                                        promises = [];
                                        for (i in this._markets) {
                                            if (i.indexOf(".") == -1)
                                                continue;
                                            p = this.getTableSummary(this._markets[i].comodity, this._markets[i].currency, true);
                                            promises.push(p);
                                        }
                                        return [2 /*return*/, Promise.all(promises).then(function (_) {
                                                _this.updateTokensSummary();
                                            })];
                                    });
                                });
                            })];
                    });
                });
            };
        /**
         * @param {?} rows
         * @return {?}
         */
        VapaeeDEX.prototype.auxProcessRowsToOrders = /**
         * @param {?} rows
         * @return {?}
         */
            function (rows) {
                /** @type {?} */
                var result = [];
                for (var i = 0; i < rows.length; i++) {
                    /** @type {?} */
                    var price = new AssetDEX(rows[i].price, this);
                    /** @type {?} */
                    var inverse = new AssetDEX(rows[i].inverse, this);
                    /** @type {?} */
                    var selling = new AssetDEX(rows[i].selling, this);
                    /** @type {?} */
                    var total = new AssetDEX(rows[i].total, this);
                    /** @type {?} */
                    var order;
                    /** @type {?} */
                    var scope = this.getScopeFor(price.token, inverse.token);
                    /** @type {?} */
                    var canonical = this.canonicalScope(scope);
                    /** @type {?} */
                    var reverse_scope = this.inverseScope(canonical);
                    if (reverse_scope == scope) {
                        order = {
                            id: rows[i].id,
                            price: price,
                            inverse: inverse,
                            total: selling,
                            deposit: selling,
                            telos: total,
                            owner: rows[i].owner
                        };
                    }
                    else {
                        order = {
                            id: rows[i].id,
                            price: inverse,
                            inverse: price,
                            total: total,
                            deposit: selling,
                            telos: selling,
                            owner: rows[i].owner
                        };
                    }
                    result.push(order);
                }
                return result;
            };
        /**
         * @param {?} hh
         * @return {?}
         */
        VapaeeDEX.prototype.auxGetLabelForHour = /**
         * @param {?} hh
         * @return {?}
         */
            function (hh) {
                /** @type {?} */
                var hours = [
                    "h.zero",
                    "h.one",
                    "h.two",
                    "h.three",
                    "h.four",
                    "h.five",
                    "h.six",
                    "h.seven",
                    "h.eight",
                    "h.nine",
                    "h.ten",
                    "h.eleven",
                    "h.twelve",
                    "h.thirteen",
                    "h.fourteen",
                    "h.fifteen",
                    "h.sixteen",
                    "h.seventeen",
                    "h.eighteen",
                    "h.nineteen",
                    "h.twenty",
                    "h.twentyone",
                    "h.twentytwo",
                    "h.twentythree"
                ];
                return hours[hh];
            };
        /**
         * @param {?} scope
         * @return {?}
         */
        VapaeeDEX.prototype.auxAssertScope = /**
         * @param {?} scope
         * @return {?}
         */
            function (scope) {
                /** @type {?} */
                var comodity_sym = scope.split(".")[0].toUpperCase();
                /** @type {?} */
                var currency_sym = scope.split(".")[1].toUpperCase();
                /** @type {?} */
                var comodity = this.getTokenNow(comodity_sym);
                /** @type {?} */
                var currency = this.getTokenNow(currency_sym);
                /** @type {?} */
                var aux_asset_com = new AssetDEX(0, comodity);
                /** @type {?} */
                var aux_asset_cur = new AssetDEX(0, currency);
                /** @type {?} */
                var market_summary = {
                    scope: scope,
                    price: aux_asset_cur,
                    price_24h_ago: aux_asset_cur,
                    inverse: aux_asset_com,
                    inverse_24h_ago: aux_asset_com,
                    max_inverse: aux_asset_com,
                    max_price: aux_asset_cur,
                    min_inverse: aux_asset_com,
                    min_price: aux_asset_cur,
                    records: [],
                    volume: aux_asset_cur,
                    amount: aux_asset_com,
                    percent: 0,
                    ipercent: 0,
                    percent_str: "0%",
                    ipercent_str: "0%",
                };
                return this._markets[scope] || {
                    scope: scope,
                    comodity: comodity,
                    currency: currency,
                    orders: { sell: [], buy: [] },
                    deals: 0,
                    history: [],
                    tx: {},
                    blocks: 0,
                    block: {},
                    blocklist: [],
                    blocklevels: [[]],
                    reverseblocks: [],
                    reverselevels: [[]],
                    summary: market_summary,
                    header: {
                        sell: { total: aux_asset_com, orders: 0 },
                        buy: { total: aux_asset_cur, orders: 0 }
                    },
                };
            };
        /**
         * @param {?} account
         * @return {?}
         */
        VapaeeDEX.prototype.fetchDeposits = /**
         * @param {?} account
         * @return {?}
         */
            function (account) {
                return this.contract.getTable("deposits", { scope: account }).then(function (result) {
                    return result;
                });
            };
        /**
         * @param {?} account
         * @return {?}
         */
        VapaeeDEX.prototype.fetchBalances = /**
         * @param {?} account
         * @return {?}
         */
            function (account) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.waitTokensLoaded.then(function (_) {
                                return __awaiter(_this, void 0, void 0, function () {
                                    var contracts, balances, i, contract, _a, _b, _i, contract, result, i;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                contracts = {};
                                                balances = [];
                                                for (i in this.tokens) {
                                                    if (this.tokens[i].offchain)
                                                        continue;
                                                    contracts[this.tokens[i].contract] = true;
                                                }
                                                for (contract in contracts) {
                                                    this.feed.setLoading("balances-" + contract, true);
                                                }
                                                _a = [];
                                                for (_b in contracts)
                                                    _a.push(_b);
                                                _i = 0;
                                                _c.label = 1;
                                            case 1:
                                                if (!(_i < _a.length))
                                                    return [3 /*break*/, 4];
                                                contract = _a[_i];
                                                return [4 /*yield*/, this.contract.getTable("accounts", {
                                                        contract: contract,
                                                        scope: account || this.current.name
                                                    })];
                                            case 2:
                                                result = _c.sent();
                                                for (i in result.rows) {
                                                    balances.push(new AssetDEX(result.rows[i].balance, this));
                                                }
                                                this.feed.setLoading("balances-" + contract, false);
                                                _c.label = 3;
                                            case 3:
                                                _i++;
                                                return [3 /*break*/, 1];
                                            case 4: return [2 /*return*/, balances];
                                        }
                                    });
                                });
                            })];
                    });
                });
            };
        /**
         * @param {?} params
         * @return {?}
         */
        VapaeeDEX.prototype.fetchOrders = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                return this.contract.getTable("sellorders", params).then(function (result) {
                    return result;
                });
            };
        /**
         * @return {?}
         */
        VapaeeDEX.prototype.fetchOrderSummary = /**
         * @return {?}
         */
            function () {
                return this.contract.getTable("ordersummary").then(function (result) {
                    return result;
                });
            };
        /**
         * @param {?} scope
         * @param {?=} page
         * @param {?=} pagesize
         * @return {?}
         */
        VapaeeDEX.prototype.fetchBlockHistory = /**
         * @param {?} scope
         * @param {?=} page
         * @param {?=} pagesize
         * @return {?}
         */
            function (scope, page, pagesize) {
                var _this = this;
                if (page === void 0) {
                    page = 0;
                }
                if (pagesize === void 0) {
                    pagesize = 25;
                }
                /** @type {?} */
                var canonical = this.canonicalScope(scope);
                /** @type {?} */
                var pages = this.getBlockHistoryTotalPagesFor(canonical, pagesize);
                /** @type {?} */
                var id = page * pagesize;
                // console.log("VapaeeDEX.fetchBlockHistory(", scope, ",",page,",",pagesize,"): id:", id, "pages:", pages);
                if (page < pages) {
                    if (this._markets && this._markets[canonical] && this._markets[canonical].block["id-" + id]) {
                        /** @type {?} */
                        var result = { more: false, rows: [] };
                        for (var i = 0; i < pagesize; i++) {
                            /** @type {?} */
                            var id_i = id + i;
                            /** @type {?} */
                            var block = this._markets[canonical].block["id-" + id_i];
                            if (block) {
                                result.rows.push(block);
                            }
                            else {
                                break;
                            }
                        }
                        if (result.rows.length == pagesize) {
                            // we have the complete page in memory
                            // console.log("VapaeeDEX.fetchHistory(", scope, ",",page,",",pagesize,"): result:", result.rows.map(({ id }) => id));
                            return Promise.resolve(result);
                        }
                    }
                }
                return this.contract.getTable("blockhistory", { scope: canonical, limit: pagesize, lower_bound: "" + (page * pagesize) }).then(function (result) {
                    // console.log("**************");
                    // console.log("block History crudo:", result);
                    // console.log("**************");
                    // console.log("block History crudo:", result);
                    _this._markets[canonical] = _this.auxAssertScope(canonical);
                    _this._markets[canonical].block = _this._markets[canonical].block || {};
                    // console.log("this._markets[scope].block:", this._markets[scope].block);
                    for (var i = 0; i < result.rows.length; i++) {
                        /** @type {?} */
                        var block = {
                            id: result.rows[i].id,
                            hour: result.rows[i].hour,
                            str: "",
                            price: new AssetDEX(result.rows[i].price, _this),
                            inverse: new AssetDEX(result.rows[i].inverse, _this),
                            entrance: new AssetDEX(result.rows[i].entrance, _this),
                            max: new AssetDEX(result.rows[i].max, _this),
                            min: new AssetDEX(result.rows[i].min, _this),
                            volume: new AssetDEX(result.rows[i].volume, _this),
                            amount: new AssetDEX(result.rows[i].amount, _this),
                            date: new Date(result.rows[i].date)
                        };
                        block.str = JSON.stringify([block.max.str, block.entrance.str, block.price.str, block.min.str]);
                        _this._markets[canonical].block["id-" + block.id] = block;
                    }
                    // console.log("block History final:", this._markets[scope].block);
                    // console.log("-------------");
                    return result;
                });
            };
        /**
         * @param {?} scope
         * @param {?=} page
         * @param {?=} pagesize
         * @return {?}
         */
        VapaeeDEX.prototype.fetchHistory = /**
         * @param {?} scope
         * @param {?=} page
         * @param {?=} pagesize
         * @return {?}
         */
            function (scope, page, pagesize) {
                var _this = this;
                if (page === void 0) {
                    page = 0;
                }
                if (pagesize === void 0) {
                    pagesize = 25;
                }
                /** @type {?} */
                var canonical = this.canonicalScope(scope);
                /** @type {?} */
                var pages = this.getHistoryTotalPagesFor(canonical, pagesize);
                /** @type {?} */
                var id = page * pagesize;
                // console.log("VapaeeDEX.fetchHistory(", scope, ",",page,",",pagesize,"): id:", id, "pages:", pages);
                if (page < pages) {
                    if (this._markets && this._markets[canonical] && this._markets[canonical].tx["id-" + id]) {
                        /** @type {?} */
                        var result = { more: false, rows: [] };
                        for (var i = 0; i < pagesize; i++) {
                            /** @type {?} */
                            var id_i = id + i;
                            /** @type {?} */
                            var trx = this._markets[canonical].tx["id-" + id_i];
                            if (trx) {
                                result.rows.push(trx);
                            }
                            else {
                                break;
                            }
                        }
                        if (result.rows.length == pagesize) {
                            // we have the complete page in memory
                            // console.log("VapaeeDEX.fetchHistory(", scope, ",",page,",",pagesize,"): result:", result.rows.map(({ id }) => id));
                            return Promise.resolve(result);
                        }
                    }
                }
                return this.contract.getTable("history", { scope: scope, limit: pagesize, lower_bound: "" + (page * pagesize) }).then(function (result) {
                    // console.log("**************");
                    // console.log("History crudo:", result);
                    // console.log("**************");
                    // console.log("History crudo:", result);
                    _this._markets[canonical] = _this.auxAssertScope(canonical);
                    _this._markets[canonical].history = [];
                    _this._markets[canonical].tx = _this._markets[canonical].tx || {};
                    // console.log("this.scopes[scope].tx:", this.scopes[scope].tx);
                    for (var i = 0; i < result.rows.length; i++) {
                        /** @type {?} */
                        var transaction = {
                            id: result.rows[i].id,
                            str: "",
                            amount: new AssetDEX(result.rows[i].amount, _this),
                            payment: new AssetDEX(result.rows[i].payment, _this),
                            buyfee: new AssetDEX(result.rows[i].buyfee, _this),
                            sellfee: new AssetDEX(result.rows[i].sellfee, _this),
                            price: new AssetDEX(result.rows[i].price, _this),
                            inverse: new AssetDEX(result.rows[i].inverse, _this),
                            buyer: result.rows[i].buyer,
                            seller: result.rows[i].seller,
                            date: new Date(result.rows[i].date),
                            isbuy: !!result.rows[i].isbuy
                        };
                        transaction.str = transaction.price.str + " " + transaction.amount.str;
                        _this._markets[canonical].tx["id-" + transaction.id] = transaction;
                    }
                    for (var j in _this._markets[canonical].tx) {
                        _this._markets[canonical].history.push(_this._markets[canonical].tx[j]);
                    }
                    _this._markets[canonical].history.sort(function (a, b) {
                        if (a.date < b.date)
                            return 1;
                        if (a.date > b.date)
                            return -1;
                        if (a.id < b.id)
                            return 1;
                        if (a.id > b.id)
                            return -1;
                    });
                    // console.log("History final:", this.scopes[scope].history);
                    // console.log("-------------");
                    return result;
                });
            };
        /**
         * @param {?=} page
         * @param {?=} pagesize
         * @return {?}
         */
        VapaeeDEX.prototype.fetchActivity = /**
         * @param {?=} page
         * @param {?=} pagesize
         * @return {?}
         */
            function (page, pagesize) {
                if (page === void 0) {
                    page = 0;
                }
                if (pagesize === void 0) {
                    pagesize = 25;
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    var id, pageEvents, i, id_i, event;
                    return __generator(this, function (_a) {
                        id = page * pagesize + 1;
                        // console.log("VapaeeDEX.fetchActivity(", page,",",pagesize,"): id:", id);
                        if (this.activity.events["id-" + id]) {
                            pageEvents = [];
                            for (i = 0; i < pagesize; i++) {
                                id_i = id + i;
                                event = this.activity.events["id-" + id_i];
                                if (!event) {
                                    break;
                                }
                            }
                            if (pageEvents.length == pagesize) {
                                return [2 /*return*/];
                            }
                        }
                        return [2 /*return*/, this.contract.getTable("events", { limit: pagesize, lower_bound: "" + id }).then(function (result) {
                                /** @type {?} */
                                var list = [];
                                for (var i = 0; i < result.rows.length; i++) {
                                    /** @type {?} */
                                    var id = result.rows[i].id;
                                    /** @type {?} */
                                    var event = (result.rows[i]);
                                    if (!_this.activity.events["id-" + id]) {
                                        _this.activity.events["id-" + id] = event;
                                        list.push(event);
                                        // console.log("**************>>>>>", id);
                                    }
                                }
                                _this.activity.list = [].concat(_this.activity.list).concat(list);
                                _this.activity.list.sort(function (a, b) {
                                    if (a.date < b.date)
                                        return 1;
                                    if (a.date > b.date)
                                        return -1;
                                    if (a.id < b.id)
                                        return 1;
                                    if (a.id > b.id)
                                        return -1;
                                });
                            })];
                    });
                });
            };
        /**
         * @param {?} user
         * @return {?}
         */
        VapaeeDEX.prototype.fetchUserOrders = /**
         * @param {?} user
         * @return {?}
         */
            function (user) {
                return this.contract.getTable("userorders", { scope: user, limit: 200 }).then(function (result) {
                    return result;
                });
            };
        /**
         * @param {?} scope
         * @return {?}
         */
        VapaeeDEX.prototype.fetchSummary = /**
         * @param {?} scope
         * @return {?}
         */
            function (scope) {
                return this.contract.getTable("tablesummary", { scope: scope }).then(function (result) {
                    return result;
                });
            };
        /**
         * @param {?} token
         * @return {?}
         */
        VapaeeDEX.prototype.fetchTokenStats = /**
         * @param {?} token
         * @return {?}
         */
            function (token) {
                var _this = this;
                this.feed.setLoading("token-stat-" + token.symbol, true);
                return this.contract.getTable("stat", { contract: token.contract, scope: token.symbol }).then(function (result) {
                    token.stat = result.rows[0];
                    if (token.stat.issuers && token.stat.issuers[0] == "everyone") {
                        token.fake = true;
                    }
                    _this.feed.setLoading("token-stat-" + token.symbol, false);
                    return token;
                });
            };
        /**
         * @param {?=} extended
         * @return {?}
         */
        VapaeeDEX.prototype.fetchTokensStats = /**
         * @param {?=} extended
         * @return {?}
         */
            function (extended) {
                var _this = this;
                if (extended === void 0) {
                    extended = true;
                }
                console.log("Vapaee.fetchTokens()");
                this.feed.setLoading("token-stats", true);
                return this.waitTokensLoaded.then(function (_) {
                    /** @type {?} */
                    var priomises = [];
                    for (var i in _this.tokens) {
                        if (_this.tokens[i].offchain)
                            continue;
                        priomises.push(_this.fetchTokenStats(_this.tokens[i]));
                    }
                    return Promise.all(priomises).then(function (result) {
                        _this.setTokenStats(_this.tokens);
                        _this.feed.setLoading("token-stats", false);
                        return _this.tokens;
                    });
                });
            };
        /**
         * @return {?}
         */
        VapaeeDEX.prototype.updateTokensMarkets = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return Promise.all([
                    this.waitTokensLoaded,
                    this.waitMarketSummary
                ]).then(function (_) {
                    // a cada token le asigno un price que sale de verificar su price en el mercado principal XXX/TLOS
                    for (var i in _this.tokens) {
                        if (_this.tokens[i].offchain)
                            continue;
                        /** @type {?} */
                        var token = _this.tokens[i];
                        /** @type {?} */
                        var quantity = new AssetDEX(0, token);
                        token.markets = [];
                        for (var scope in _this._markets) {
                            if (scope.indexOf(".") == -1)
                                continue;
                            /** @type {?} */
                            var table = _this._markets[scope];
                            if (table.currency.symbol == token.symbol) {
                                table = _this.market(_this.inverseScope(scope));
                            }
                            if (table.comodity.symbol == token.symbol) {
                                token.markets.push(table);
                            }
                        }
                    }
                    token.markets.sort(function (a, b) {
                        /** @type {?} */
                        var a_vol = a.summary ? a.summary.volume : new AssetDEX();
                        /** @type {?} */
                        var b_vol = b.summary ? b.summary.volume : new AssetDEX();
                        if (a_vol.amount.isGreaterThan(b_vol.amount))
                            return -1;
                        if (a_vol.amount.isLessThan(b_vol.amount))
                            return 1;
                        return 0;
                    });
                });
            };
        /**
         * @param {?=} times
         * @return {?}
         */
        VapaeeDEX.prototype.updateTokensSummary = /**
         * @param {?=} times
         * @return {?}
         */
            function (times) {
                var _this = this;
                if (times === void 0) {
                    times = 20;
                }
                if (times > 1) {
                    for (var i = times; i > 0; i--)
                        this.updateTokensSummary(1);
                    return;
                }
                return Promise.all([
                    this.waitTokensLoaded,
                    this.waitMarketSummary
                ]).then(function (_) {
                    /** @type {?} */
                    var amount_map = {};
                    // a cada token le asigno un price que sale de verificar su price en el mercado principal XXX/TLOS
                    for (var i in _this.tokens) {
                        if (_this.tokens[i].offchain)
                            continue;
                        /** @type {?} */
                        var token = _this.tokens[i];
                        /** @type {?} */
                        var quantity = new AssetDEX(0, token);
                        for (var j in _this._markets) {
                            if (j.indexOf(".") == -1)
                                continue;
                            /** @type {?} */
                            var table = _this._markets[j];
                            if (table.comodity.symbol == token.symbol) {
                                quantity = quantity.plus(table.summary.amount);
                            }
                            if (table.currency.symbol == token.symbol) {
                                quantity = quantity.plus(table.summary.volume);
                            }
                            if (table.comodity.symbol == token.symbol && table.currency.symbol == _this.telos.symbol) {
                                if (token.summary && token.summary.price.amount.toNumber() == 0) {
                                    delete token.summary;
                                }
                                token.summary = token.summary || {
                                    price: table.summary.price.clone(),
                                    price_24h_ago: table.summary.price_24h_ago.clone(),
                                    volume: table.summary.volume.clone(),
                                    percent: table.summary.percent,
                                    percent_str: table.summary.percent_str,
                                };
                            }
                        }
                        amount_map[token.symbol] = quantity;
                    }
                    _this.telos.summary = {
                        price: new AssetDEX(1, _this.telos),
                        price_24h_ago: new AssetDEX(1, _this.telos),
                        volume: new AssetDEX(-1, _this.telos),
                        percent: 0,
                        percent_str: "0%"
                    };
                    /** @type {?} */
                    var ONE = new BigNumber(1);
                    for (var i in _this.tokens) {
                        /** @type {?} */
                        var token = _this.tokens[i];
                        if (token.offchain)
                            continue;
                        if (!token.summary)
                            continue;
                        if (token.symbol == _this.telos.symbol)
                            continue;
                        /** @type {?} */
                        var volume = new AssetDEX(0, _this.telos);
                        /** @type {?} */
                        var price = new AssetDEX(0, _this.telos);
                        /** @type {?} */
                        var price_init = new AssetDEX(0, _this.telos);
                        /** @type {?} */
                        var total_quantity = amount_map[token.symbol];
                        if (total_quantity.toNumber() == 0)
                            continue;
                        // if (token.symbol == "ACORN") console.log("TOKEN: -------- ", token.symbol, token.summary.price.str, token.summary.price_24h_ago.str );
                        for (var j in _this._markets) {
                            if (j.indexOf(".") == -1)
                                continue;
                            /** @type {?} */
                            var table = _this._markets[j];
                            /** @type {?} */
                            var currency_price = table.currency.symbol == "TLOS" ? ONE : table.currency.summary.price.amount;
                            /** @type {?} */
                            var currency_price_24h_ago = table.currency.symbol == "TLOS" ? ONE : table.currency.summary.price_24h_ago.amount;
                            if (table.comodity.symbol == token.symbol || table.currency.symbol == token.symbol) {
                                /** @type {?} */
                                var quantity = new AssetDEX();
                                if (table.comodity.symbol == token.symbol) {
                                    quantity = table.summary.amount.clone();
                                }
                                else if (table.currency.symbol == token.symbol) {
                                    quantity = table.summary.volume.clone();
                                }
                                /** @type {?} */
                                var weight = quantity.amount.dividedBy(total_quantity.amount);
                                /** @type {?} */
                                var price_amount;
                                if (table.comodity.symbol == token.symbol) {
                                    price_amount = table.summary.price.amount.multipliedBy(table.currency.summary.price.amount);
                                }
                                else if (table.currency.symbol == token.symbol) {
                                    price_amount = table.summary.inverse.amount.multipliedBy(table.comodity.summary.price.amount);
                                }
                                /** @type {?} */
                                var price_i = new AssetDEX(price_amount.multipliedBy(weight), _this.telos);
                                /** @type {?} */
                                var price_init_amount;
                                if (table.comodity.symbol == token.symbol) {
                                    price_init_amount = table.summary.price_24h_ago.amount.multipliedBy(table.currency.summary.price_24h_ago.amount);
                                }
                                else if (table.currency.symbol == token.symbol) {
                                    price_init_amount = table.summary.inverse_24h_ago.amount.multipliedBy(table.comodity.summary.price_24h_ago.amount);
                                }
                                /** @type {?} */
                                var price_init_i = new AssetDEX(price_init_amount.multipliedBy(weight), _this.telos);
                                /** @type {?} */
                                var volume_i;
                                if (table.comodity.symbol == token.symbol) {
                                    volume_i = table.summary.volume.clone();
                                }
                                else if (table.currency.symbol == token.symbol) {
                                    volume_i = table.summary.amount.clone();
                                }
                                // if this market does not mesure the volume in TLOS, then convert quantity to TLOS by multiplied By volume's token price
                                if (volume_i.token.symbol != _this.telos.symbol) {
                                    volume_i = new AssetDEX(quantity.amount.multipliedBy(quantity.token.summary.price.amount), _this.telos);
                                }
                                price = price.plus(new AssetDEX(price_i, _this.telos));
                                price_init = price_init.plus(new AssetDEX(price_init_i, _this.telos));
                                volume = volume.plus(new AssetDEX(volume_i, _this.telos));
                                // console.log("-i",i, table);
                                // console.log("- weight:", weight.toNumber());
                                // console.log("- table.summary.price.str", table.summary.price.str);
                                // console.log("- table.summary.price.amount.multipliedBy(weight).toNumber()", table.summary.price.amount.multipliedBy(weight).toNumber());
                                // console.log("- currency_price.toNumber()", currency_price.toNumber());
                                // console.log("- price_i:", price_i.toNumber());
                                // console.log("- price ->", price.str);
                                // console.log("- currency_price_24h_ago:", currency_price_24h_ago.toNumber());
                                // console.log("- table.summary.price_24h_ago:", table.summary.price_24h_ago.str);
                                // console.log("- price_init_i:", price_init_i.toNumber());
                                // console.log("- price_init ->", price_init.str);
                            }
                        }
                        /** @type {?} */
                        var diff = price.minus(price_init);
                        /** @type {?} */
                        var ratio = 0;
                        if (price_init.amount.toNumber() != 0) {
                            ratio = diff.amount.dividedBy(price_init.amount).toNumber();
                        }
                        /** @type {?} */
                        var percent = Math.floor(ratio * 10000) / 100;
                        /** @type {?} */
                        var percent_str = (isNaN(percent) ? 0 : percent) + "%";
                        // console.log("price", price.str);
                        // console.log("price_24h_ago", price_init.str);
                        // console.log("volume", volume.str);
                        // console.log("percent", percent);
                        // console.log("percent_str", percent_str);
                        // console.log("ratio", ratio);
                        // console.log("diff", diff.str);
                        token.summary.price = price;
                        token.summary.price_24h_ago = price_init;
                        token.summary.percent = percent;
                        token.summary.percent_str = percent_str;
                        token.summary.volume = volume;
                    }
                    // console.log("(end) ---------------------------------------------");
                    // console.log("(end) ---------------------------------------------");
                    _this.resortTokens();
                    _this.setTokenSummary();
                });
            };
        /**
         * @param {?=} extended
         * @return {?}
         */
        VapaeeDEX.prototype.fetchTokens = /**
         * @param {?=} extended
         * @return {?}
         */
            function (extended) {
                var _this = this;
                if (extended === void 0) {
                    extended = true;
                }
                console.log("Vapaee.fetchTokens()");
                return this.contract.getTable("tokens").then(function (result) {
                    /** @type {?} */
                    var data = {
                        tokens: /** @type {?} */ (result.rows)
                    };
                    for (var i in data.tokens) {
                        data.tokens[i].scope = data.tokens[i].symbol.toLowerCase() + ".tlos";
                        if (data.tokens[i].symbol == "TLOS") {
                            _this.telos = data.tokens[i];
                        }
                    }
                    return data;
                });
            };
        /**
         * @return {?}
         */
        VapaeeDEX.prototype.resortTokens = /**
         * @return {?}
         */
            function () {
                // console.log("(ini) ------------------------------------------------------------");
                // console.log("resortTokens()");
                // console.log("this.tokens[0]", this.tokens[0].summary);
                this.tokens.sort(function (a, b) {
                    // push offchain tokens to the end of the token list
                    if (a.offchain)
                        return 1;
                    if (b.offchain)
                        return -1;
                    /** @type {?} */
                    var a_vol = a.summary ? a.summary.volume : new AssetDEX();
                    /** @type {?} */
                    var b_vol = b.summary ? b.summary.volume : new AssetDEX();
                    if (a_vol.amount.isGreaterThan(b_vol.amount))
                        return -1;
                    if (a_vol.amount.isLessThan(b_vol.amount))
                        return 1;
                    if (a.appname < b.appname)
                        return -1;
                    if (a.appname > b.appname)
                        return 1;
                    return 0;
                });
                // console.log("resortTokens()", this.tokens);
                // console.log("(end) ------------------------------------------------------------");
                this.onTokensReady.next(this.tokens);
            };
        VapaeeDEX.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        VapaeeDEX.ctorParameters = function () {
            return [
                { type: i1.VapaeeScatter },
                { type: ngxCookieService.CookieService },
                { type: i3.DatePipe }
            ];
        };
        /** @nocollapse */ VapaeeDEX.ngInjectableDef = i0.defineInjectable({ factory: function VapaeeDEX_Factory() { return new VapaeeDEX(i0.inject(i1.VapaeeScatter), i0.inject(i2.CookieService), i0.inject(i3.DatePipe)); }, token: VapaeeDEX, providedIn: "root" });
        return VapaeeDEX;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var VapaeeDexModule = (function () {
        function VapaeeDexModule() {
        }
        VapaeeDexModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [],
                        providers: [VapaeeDEX],
                        exports: []
                    },] },
        ];
        return VapaeeDexModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.VapaeeDEX = VapaeeDEX;
    exports.VapaeeDexModule = VapaeeDexModule;
    exports.TokenDEX = TokenDEX;
    exports.AssetDEX = AssetDEX;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFwYWVlLWRleC51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vQHZhcGFlZS9kZXgvbGliL3Rva2VuLWRleC5jbGFzcy50cyIsIm5nOi8vQHZhcGFlZS9kZXgvbGliL2Fzc2V0LWRleC5jbGFzcy50cyIsIm5nOi8vQHZhcGFlZS9kZXgvbGliL2RleC5zZXJ2aWNlLnRzIiwibmc6Ly9AdmFwYWVlL2RleC9saWIvZGV4Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IFRva2VuIH0gZnJvbSAnQHZhcGFlZS9zY2F0dGVyJztcbmltcG9ydCB7IEFzc2V0REVYIH0gZnJvbSBcIi4vYXNzZXQtZGV4LmNsYXNzXCI7XG5pbXBvcnQgeyBNYXJrZXQgfSBmcm9tICcuL3R5cGVzLWRleCc7XG5cbi8qXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuIHtcbiAgICBzeW1ib2w6IHN0cmluZyxcbiAgICBwcmVjaXNpb24/OiBudW1iZXIsXG4gICAgY29udHJhY3Q/OiBzdHJpbmcsXG4gICAgYXBwbmFtZT86IHN0cmluZyxcbiAgICB3ZWJzaXRlPzogc3RyaW5nLFxuICAgIGxvZ28/OiBzdHJpbmcsXG4gICAgbG9nb2xnPzogc3RyaW5nLFxuICAgIHZlcmlmaWVkPzogYm9vbGVhbixcbiAgICBmYWtlPzogYm9vbGVhbixcbiAgICBvZmZjaGFpbj86IGJvb2xlYW4sXG4gICAgc2NvcGU/OiBzdHJpbmcsXG4gICAgc3RhdD86IHtcbiAgICAgICAgc3VwcGx5OiBzdHJpbmcsXG4gICAgICAgIG1heF9zdXBwbHk6IHN0cmluZyxcbiAgICAgICAgaXNzdWVyPzogc3RyaW5nLFxuICAgICAgICBvd25lcj86IHN0cmluZyxcbiAgICAgICAgaXNzdWVycz86IHN0cmluZ1tdXG4gICAgfSxcbiAgICBzdW1tYXJ5Pzoge1xuICAgICAgICB2b2x1bWU6IEFzc2V0LFxuICAgICAgICBwcmljZTogQXNzZXQsXG4gICAgICAgIHByaWNlXzI0aF9hZ286IEFzc2V0LFxuICAgICAgICBwZXJjZW50PzpudW1iZXIsXG4gICAgICAgIHBlcmNlbnRfc3RyPzpzdHJpbmdcbiAgICB9XG5cbn1cbiovXG5leHBvcnQgY2xhc3MgVG9rZW5ERVggZXh0ZW5kcyBUb2tlbiB7XG4gICAgLy8gcHJpdmF0ZSBfc3RyOiBzdHJpbmc7XG4gICAgLy8gcHJpdmF0ZSBfc3ltYm9sOiBzdHJpbmc7XG4gICAgLy8gcHJpdmF0ZSBfcHJlY2lzaW9uOiBudW1iZXI7XG4gICAgLy8gcHJpdmF0ZSBfY29udHJhY3Q6IHN0cmluZztcblxuICAgIHB1YmxpYyBhcHBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIHdlYnNpdGU6IHN0cmluZztcbiAgICBwdWJsaWMgbG9nbzogc3RyaW5nO1xuICAgIHB1YmxpYyBsb2dvbGc6IHN0cmluZztcbiAgICBwdWJsaWMgdmVyaWZpZWQ6IGJvb2xlYW47XG4gICAgcHVibGljIGZha2U6IGJvb2xlYW47XG4gICAgcHVibGljIG9mZmNoYWluOiBib29sZWFuO1xuICAgIHB1YmxpYyBzY29wZTogc3RyaW5nO1xuXG4gICAgc3RhdD86IHtcbiAgICAgICAgc3VwcGx5OiBzdHJpbmcsXG4gICAgICAgIG1heF9zdXBwbHk6IHN0cmluZyxcbiAgICAgICAgaXNzdWVyPzogc3RyaW5nLFxuICAgICAgICBvd25lcj86IHN0cmluZyxcbiAgICAgICAgaXNzdWVycz86IHN0cmluZ1tdXG4gICAgfTtcblxuICAgIHN1bW1hcnk/OiB7XG4gICAgICAgIHZvbHVtZTogQXNzZXRERVgsXG4gICAgICAgIHByaWNlOiBBc3NldERFWCxcbiAgICAgICAgcHJpY2VfMjRoX2FnbzogQXNzZXRERVgsXG4gICAgICAgIHBlcmNlbnQ/Om51bWJlcixcbiAgICAgICAgcGVyY2VudF9zdHI/OnN0cmluZ1xuICAgIH1cbiAgICBcbiAgICBtYXJrZXRzOiBNYXJrZXRbXTtcblxuICAgIGNvbnN0cnVjdG9yKG9iajphbnkgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKG9iaik7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmouc3ltYm9sO1xuICAgICAgICAgICAgZGVsZXRlIG9iai5wcmVjaXNpb247XG4gICAgICAgICAgICBkZWxldGUgb2JqLmNvbnRyYWN0O1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmopO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9XG5cblxufSIsImltcG9ydCBCaWdOdW1iZXIgZnJvbSAnYmlnbnVtYmVyLmpzJztcbmltcG9ydCB7IFRva2VuREVYIH0gZnJvbSAnLi90b2tlbi1kZXguY2xhc3MnO1xuaW1wb3J0IHsgQXNzZXQgfSBmcm9tICdAdmFwYWVlL3NjYXR0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElWYXBhZWVERVgge1xuICAgIGdldFRva2VuTm93KHN5bWJvbDpzdHJpbmcpOiBUb2tlbkRFWDtcbn1cblxuZXhwb3J0IGNsYXNzIEFzc2V0REVYIGV4dGVuZHMgQXNzZXQge1xuICAgIGFtb3VudDpCaWdOdW1iZXI7XG4gICAgdG9rZW46VG9rZW5ERVg7XG4gICAgXG4gICAgY29uc3RydWN0b3IoYTogYW55ID0gbnVsbCwgYjogYW55ID0gbnVsbCkge1xuICAgICAgICBzdXBlcihhLGIpO1xuXG4gICAgICAgIGlmIChhIGluc3RhbmNlb2YgQXNzZXRERVgpIHtcbiAgICAgICAgICAgIHRoaXMuYW1vdW50ID0gYS5hbW91bnQ7XG4gICAgICAgICAgICB0aGlzLnRva2VuID0gYjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghIWIgJiYgYlsnZ2V0VG9rZW5Ob3cnXSkge1xuICAgICAgICAgICAgdGhpcy5wYXJzZURleChhLGIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjbG9uZSgpOiBBc3NldERFWCB7XG4gICAgICAgIHJldHVybiBuZXcgQXNzZXRERVgodGhpcy5hbW91bnQsIHRoaXMudG9rZW4pO1xuICAgIH1cblxuICAgIHBsdXMoYjpBc3NldERFWCkge1xuICAgICAgICBjb25zb2xlLmFzc2VydCghIWIsIFwiRVJST1I6IGIgaXMgbm90IGFuIEFzc2V0XCIsIGIsIHRoaXMuc3RyKTtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoYi50b2tlbi5zeW1ib2wgPT0gdGhpcy50b2tlbi5zeW1ib2wsIFwiRVJST1I6IHRyeWluZyB0byBzdW0gYXNzZXRzIHdpdGggZGlmZmVyZW50IHRva2VuczogXCIgKyB0aGlzLnN0ciArIFwiIGFuZCBcIiArIGIuc3RyKTtcbiAgICAgICAgdmFyIGFtb3VudCA9IHRoaXMuYW1vdW50LnBsdXMoYi5hbW91bnQpO1xuICAgICAgICByZXR1cm4gbmV3IEFzc2V0REVYKGFtb3VudCwgdGhpcy50b2tlbik7XG4gICAgfVxuXG4gICAgbWludXMoYjpBc3NldERFWCkge1xuICAgICAgICBjb25zb2xlLmFzc2VydCghIWIsIFwiRVJST1I6IGIgaXMgbm90IGFuIEFzc2V0XCIsIGIsIHRoaXMuc3RyKTtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoYi50b2tlbi5zeW1ib2wgPT0gdGhpcy50b2tlbi5zeW1ib2wsIFwiRVJST1I6IHRyeWluZyB0byBzdWJzdHJhY3QgYXNzZXRzIHdpdGggZGlmZmVyZW50IHRva2VuczogXCIgKyB0aGlzLnN0ciArIFwiIGFuZCBcIiArIGIuc3RyKTtcbiAgICAgICAgdmFyIGFtb3VudCA9IHRoaXMuYW1vdW50Lm1pbnVzKGIuYW1vdW50KTtcbiAgICAgICAgcmV0dXJuIG5ldyBBc3NldERFWChhbW91bnQsIHRoaXMudG9rZW4pO1xuICAgIH0gICAgXG5cbiAgICBwYXJzZURleCh0ZXh0OiBzdHJpbmcsIGRleDogSVZhcGFlZURFWCkge1xuICAgICAgICBpZiAodGV4dCA9PSBcIlwiKSByZXR1cm47XG4gICAgICAgIHZhciBzeW0gPSB0ZXh0LnNwbGl0KFwiIFwiKVsxXTtcbiAgICAgICAgdGhpcy50b2tlbiA9IGRleC5nZXRUb2tlbk5vdyhzeW0pO1xuICAgICAgICB2YXIgYW1vdW50X3N0ciA9IHRleHQuc3BsaXQoXCIgXCIpWzBdO1xuICAgICAgICB0aGlzLmFtb3VudCA9IG5ldyBCaWdOdW1iZXIoYW1vdW50X3N0cik7XG4gICAgfVxuXG4gICAgXG4gICAgdG9TdHJpbmcoZGVjaW1hbHM6bnVtYmVyID0gLTEpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRoaXMudG9rZW4pIHJldHVybiBcIjAuMDAwMFwiO1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZVRvU3RyaW5nKGRlY2ltYWxzKSArIFwiIFwiICsgdGhpcy50b2tlbi5zeW1ib2wudG9VcHBlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpbnZlcnNlKHRva2VuOiBUb2tlbkRFWCk6IEFzc2V0REVYIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBCaWdOdW1iZXIoMSkuZGl2aWRlZEJ5KHRoaXMuYW1vdW50KTtcbiAgICAgICAgdmFyIGFzc2V0ID0gIG5ldyBBc3NldERFWChyZXN1bHQsIHRva2VuKTtcbiAgICAgICAgcmV0dXJuIGFzc2V0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVG9rZW5ERVggfSBmcm9tICcuL3Rva2VuLWRleC5jbGFzcyc7XG5pbXBvcnQgeyBBc3NldERFWCB9IGZyb20gJy4vYXNzZXQtZGV4LmNsYXNzJztcbmltcG9ydCB7IEZlZWRiYWNrIH0gZnJvbSAnQHZhcGFlZS9mZWVkYmFjayc7XG5pbXBvcnQgeyBWYXBhZWVTY2F0dGVyLCBBY2NvdW50LCBBY2NvdW50RGF0YSwgU21hcnRDb250cmFjdCwgVGFibGVSZXN1bHQsIFRhYmxlUGFyYW1zIH0gZnJvbSAnQHZhcGFlZS9zY2F0dGVyJztcbmltcG9ydCB7IE1hcmtldE1hcCwgVXNlck9yZGVyc01hcCwgTWFya2V0U3VtbWFyeSwgRXZlbnRMb2csIE1hcmtldCwgSGlzdG9yeVR4LCBUb2tlbk9yZGVycywgT3JkZXIsIFVzZXJPcmRlcnMsIE9yZGVyUm93LCBIaXN0b3J5QmxvY2sgfSBmcm9tICcuL3R5cGVzLWRleCc7XG5cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIFZhcGFlZURFWCB7XG5cbiAgICBwdWJsaWMgbG9naW5TdGF0ZTogc3RyaW5nO1xuICAgIC8qXG4gICAgcHVibGljIGxvZ2luU3RhdGU6IHN0cmluZztcbiAgICAtICduby1zY2F0dGVyJzogU2NhdHRlciBubyBkZXRlY3RlZFxuICAgIC0gJ25vLWxvZ2dlZCc6IFNjYXR0ZXIgZGV0ZWN0ZWQgYnV0IHVzZXIgaXMgbm90IGxvZ2dlZFxuICAgIC0gJ2FjY291bnQtb2snOiB1c2VyIGxvZ2dlciB3aXRoIHNjYXR0ZXJcbiAgICAqL1xuICAgIHByaXZhdGUgX21hcmtldHM6IE1hcmtldE1hcDtcbiAgICBwcml2YXRlIF9yZXZlcnNlOiBNYXJrZXRNYXA7XG5cbiAgICBwdWJsaWMgemVyb190ZWxvczogQXNzZXRERVg7XG4gICAgcHVibGljIHRlbG9zOiBUb2tlbkRFWDtcbiAgICBwdWJsaWMgdG9rZW5zOiBUb2tlbkRFWFtdO1xuICAgIHB1YmxpYyBjb250cmFjdDogU21hcnRDb250cmFjdDtcbiAgICBwdWJsaWMgZmVlZDogRmVlZGJhY2s7XG4gICAgcHVibGljIGN1cnJlbnQ6IEFjY291bnQ7XG4gICAgcHVibGljIGxhc3RfbG9nZ2VkOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbnRyYWN0X25hbWU6IHN0cmluZzsgICBcbiAgICBwdWJsaWMgZGVwb3NpdHM6IEFzc2V0REVYW107XG4gICAgcHVibGljIGJhbGFuY2VzOiBBc3NldERFWFtdO1xuICAgIHB1YmxpYyB1c2Vyb3JkZXJzOiBVc2VyT3JkZXJzTWFwO1xuICAgIHB1YmxpYyBvbkxvZ2dlZEFjY291bnRDaGFuZ2U6U3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgICBwdWJsaWMgb25DdXJyZW50QWNjb3VudENoYW5nZTpTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuICAgIHB1YmxpYyBvbkhpc3RvcnlDaGFuZ2U6U3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgICBwdWJsaWMgb25NYXJrZXRTdW1tYXJ5OlN1YmplY3Q8TWFya2V0U3VtbWFyeT4gPSBuZXcgU3ViamVjdCgpO1xuICAgIC8vIHB1YmxpYyBvbkJsb2NrbGlzdENoYW5nZTpTdWJqZWN0PGFueVtdW10+ID0gbmV3IFN1YmplY3QoKTtcbiAgICBwdWJsaWMgb25Ub2tlbnNSZWFkeTpTdWJqZWN0PFRva2VuREVYW10+ID0gbmV3IFN1YmplY3QoKTtcbiAgICBwdWJsaWMgb25NYXJrZXRSZWFkeTpTdWJqZWN0PFRva2VuREVYW10+ID0gbmV3IFN1YmplY3QoKTtcbiAgICBwdWJsaWMgb25UcmFkZVVwZGF0ZWQ6U3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgICB2YXBhZWV0b2tlbnM6c3RyaW5nID0gXCJ2YXBhZWV0b2tlbnNcIjtcblxuICAgIGFjdGl2aXR5UGFnZXNpemU6bnVtYmVyID0gMTA7XG4gICAgXG4gICAgYWN0aXZpdHk6e1xuICAgICAgICB0b3RhbDpudW1iZXI7XG4gICAgICAgIGV2ZW50czp7W2lkOnN0cmluZ106RXZlbnRMb2d9O1xuICAgICAgICBsaXN0OkV2ZW50TG9nW107XG4gICAgfTtcbiAgICBcbiAgICBwcml2YXRlIHNldE9yZGVyU3VtbWFyeTogRnVuY3Rpb247XG4gICAgcHVibGljIHdhaXRPcmRlclN1bW1hcnk6IFByb21pc2U8YW55PiA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0T3JkZXJTdW1tYXJ5ID0gcmVzb2x2ZTtcbiAgICB9KTtcblxuICAgIHByaXZhdGUgc2V0VG9rZW5TdGF0czogRnVuY3Rpb247XG4gICAgcHVibGljIHdhaXRUb2tlblN0YXRzOiBQcm9taXNlPGFueT4gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFRva2VuU3RhdHMgPSByZXNvbHZlO1xuICAgIH0pO1xuXG4gICAgcHJpdmF0ZSBzZXRNYXJrZXRTdW1tYXJ5OiBGdW5jdGlvbjtcbiAgICBwdWJsaWMgd2FpdE1hcmtldFN1bW1hcnk6IFByb21pc2U8YW55PiA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0TWFya2V0U3VtbWFyeSA9IHJlc29sdmU7XG4gICAgfSk7XG5cbiAgICBwcml2YXRlIHNldFRva2VuU3VtbWFyeTogRnVuY3Rpb247XG4gICAgcHVibGljIHdhaXRUb2tlblN1bW1hcnk6IFByb21pc2U8YW55PiA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VG9rZW5TdW1tYXJ5ID0gcmVzb2x2ZTtcbiAgICB9KTtcblxuICAgIHByaXZhdGUgc2V0VG9rZW5zTG9hZGVkOiBGdW5jdGlvbjtcbiAgICBwdWJsaWMgd2FpdFRva2Vuc0xvYWRlZDogUHJvbWlzZTxhbnk+ID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRUb2tlbnNMb2FkZWQgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHNjYXR0ZXI6IFZhcGFlZVNjYXR0ZXIsXG4gICAgICAgIHByaXZhdGUgY29va2llczogQ29va2llU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGVcbiAgICApIHtcbiAgICAgICAgdGhpcy5fbWFya2V0cyA9IHt9O1xuICAgICAgICB0aGlzLl9yZXZlcnNlID0ge307XG4gICAgICAgIHRoaXMuYWN0aXZpdHkgPSB7dG90YWw6MCwgZXZlbnRzOnt9LCBsaXN0OltdfTtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5kZWZhdWx0O1xuICAgICAgICB0aGlzLmNvbnRyYWN0X25hbWUgPSB0aGlzLnZhcGFlZXRva2VucztcbiAgICAgICAgdGhpcy5jb250cmFjdCA9IHRoaXMuc2NhdHRlci5nZXRTbWFydENvbnRyYWN0KHRoaXMuY29udHJhY3RfbmFtZSk7XG4gICAgICAgIHRoaXMuZmVlZCA9IG5ldyBGZWVkYmFjaygpO1xuICAgICAgICB0aGlzLnNjYXR0ZXIub25Mb2dnZ2VkU3RhdGVDaGFuZ2Uuc3Vic2NyaWJlKHRoaXMub25Mb2dnZWRDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudXBkYXRlTG9nU3RhdGUoKTtcbiAgICAgICAgdGhpcy5mZXRjaFRva2VucygpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRva2VucyA9IGRhdGEudG9rZW5zO1xuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaChuZXcgVG9rZW5ERVgoe1xuICAgICAgICAgICAgICAgIGFwcG5hbWU6IFwiVmlpdGFzcGhlcmVcIixcbiAgICAgICAgICAgICAgICBjb250cmFjdDogXCJ2aWl0YXNwaGVyZTFcIixcbiAgICAgICAgICAgICAgICBsb2dvOiBcIi9hc3NldHMvbG9nb3MvdmlpdGFzcGhlcmUucG5nXCIsXG4gICAgICAgICAgICAgICAgbG9nb2xnOiBcIi9hc3NldHMvbG9nb3MvdmlpdGFzcGhlcmUtbGcucG5nXCIsXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiA0LFxuICAgICAgICAgICAgICAgIHNjb3BlOiBcInZpaXRjdC50bG9zXCIsXG4gICAgICAgICAgICAgICAgc3ltYm9sOiBcIlZJSVRBXCIsXG4gICAgICAgICAgICAgICAgdmVyaWZpZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdlYnNpdGU6IFwiaHR0cHM6Ly92aWl0YXNwaGVyZS5jb21cIlxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaChuZXcgVG9rZW5ERVgoe1xuICAgICAgICAgICAgICAgIGFwcG5hbWU6IFwiVmlpdGFzcGhlcmVcIixcbiAgICAgICAgICAgICAgICBjb250cmFjdDogXCJ2aWl0YXNwaGVyZTFcIixcbiAgICAgICAgICAgICAgICBsb2dvOiBcIi9hc3NldHMvbG9nb3MvdmlpdGFzcGhlcmUucG5nXCIsXG4gICAgICAgICAgICAgICAgbG9nb2xnOiBcIi9hc3NldHMvbG9nb3MvdmlpdGFzcGhlcmUtbGcucG5nXCIsXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiAwLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBcInZpaXRjdC50bG9zXCIsXG4gICAgICAgICAgICAgICAgc3ltYm9sOiBcIlZJSUNUXCIsXG4gICAgICAgICAgICAgICAgdmVyaWZpZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdlYnNpdGU6IFwiaHR0cHM6Ly92aWl0YXNwaGVyZS5jb21cIlxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdGhpcy56ZXJvX3RlbG9zID0gbmV3IEFzc2V0REVYKFwiMC4wMDAwIFRMT1NcIiwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnNldFRva2Vuc0xvYWRlZCgpO1xuICAgICAgICAgICAgdGhpcy5mZXRjaFRva2Vuc1N0YXRzKCk7XG4gICAgICAgICAgICB0aGlzLmdldE9yZGVyU3VtbWFyeSgpO1xuICAgICAgICAgICAgdGhpcy5nZXRBbGxUYWJsZXNTdW1hcmllcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aGlzLndhaXRUb2tlbnNMb2FkZWQudGhlbihfID0+IHtcbiAgICAgICAgLy8gfSlcblxuXG4gICAgICAgIHZhciB0aW1lcjtcbiAgICAgICAgdGhpcy5vbk1hcmtldFN1bW1hcnkuc3Vic2NyaWJlKHN1bW1hcnkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChfID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRva2Vuc1N1bW1hcnkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRva2Vuc01hcmtldHMoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pOyAgICBcblxuXG5cbiAgICB9XG5cbiAgICAvLyBnZXR0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnZXQgZGVmYXVsdCgpOiBBY2NvdW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhdHRlci5kZWZhdWx0O1xuICAgIH1cblxuICAgIGdldCBsb2dnZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjYXR0ZXIubG9nZ2VkICYmICF0aGlzLnNjYXR0ZXIuYWNjb3VudCkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJXQVJOSU5HISEhXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zY2F0dGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2NhdHRlci51c2VybmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiKioqKioqKioqKioqKioqKioqKlwiKTtcbiAgICAgICAgICAgICovXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhdHRlci5sb2dnZWQgP1xuICAgICAgICAgICAgKHRoaXMuc2NhdHRlci5hY2NvdW50ID8gdGhpcy5zY2F0dGVyLmFjY291bnQubmFtZSA6IHRoaXMuc2NhdHRlci5kZWZhdWx0Lm5hbWUpIDpcbiAgICAgICAgICAgIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0IGFjY291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYXR0ZXIubG9nZ2VkID8gXG4gICAgICAgIHRoaXMuc2NhdHRlci5hY2NvdW50IDpcbiAgICAgICAgdGhpcy5zY2F0dGVyLmRlZmF1bHQ7XG4gICAgfVxuXG4gICAgLy8gLS0gVXNlciBMb2cgU3RhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwibG9naW5cIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwibG9nLXN0YXRlXCIsIHRydWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlZhcGFlZURFWC5sb2dpbigpIHRoaXMuZmVlZC5sb2FkaW5nKCdsb2ctc3RhdGUnKVwiLCB0aGlzLmZlZWQubG9hZGluZygnbG9nLXN0YXRlJykpO1xuICAgICAgICB0aGlzLmxvZ291dCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxvZ1N0YXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmFwYWVlREVYLmxvZ2luKCkgdGhpcy5mZWVkLmxvYWRpbmcoJ2xvZy1zdGF0ZScpXCIsIHRoaXMuZmVlZC5sb2FkaW5nKCdsb2ctc3RhdGUnKSk7XG4gICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwibG9nb3V0XCIsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhdHRlci5sb2dpbigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMb2dTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJsb2dpblwiLCBmYWxzZSk7XG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJsb2dpblwiLCBmYWxzZSk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwibG9nb3V0XCIsIHRydWUpO1xuICAgICAgICB0aGlzLnNjYXR0ZXIubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgb25Mb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwibG9nb3V0XCIsIGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJWYXBhZWVERVgub25Mb2dvdXQoKVwiKTtcbiAgICAgICAgdGhpcy5yZXNldEN1cnJlbnRBY2NvdW50KHRoaXMuZGVmYXVsdC5uYW1lKTtcbiAgICAgICAgdGhpcy51cGRhdGVMb2dTdGF0ZSgpO1xuICAgICAgICB0aGlzLm9uTG9nZ2VkQWNjb3VudENoYW5nZS5uZXh0KHRoaXMubG9nZ2VkKTtcbiAgICAgICAgdGhpcy5jb29raWVzLmRlbGV0ZShcImxvZ2luXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KF8gID0+IHsgdGhpcy5sYXN0X2xvZ2dlZCA9IHRoaXMubG9nZ2VkOyB9LCA0MDApO1xuICAgIH1cbiAgICBcbiAgICBvbkxvZ2luKG5hbWU6c3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmFwYWVlREVYLm9uTG9naW4oKVwiLCBuYW1lKTtcbiAgICAgICAgdGhpcy5yZXNldEN1cnJlbnRBY2NvdW50KG5hbWUpO1xuICAgICAgICB0aGlzLmdldERlcG9zaXRzKCk7XG4gICAgICAgIHRoaXMuZ2V0QmFsYW5jZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVMb2dTdGF0ZSgpO1xuICAgICAgICB0aGlzLmdldFVzZXJPcmRlcnMoKTtcbiAgICAgICAgdGhpcy5vbkxvZ2dlZEFjY291bnRDaGFuZ2UubmV4dCh0aGlzLmxvZ2dlZCk7XG4gICAgICAgIHRoaXMubGFzdF9sb2dnZWQgPSB0aGlzLmxvZ2dlZDtcbiAgICAgICAgdGhpcy5jb29raWVzLnNldChcImxvZ2luXCIsIHRoaXMubG9nZ2VkKTtcbiAgICB9XG5cbiAgICBvbkxvZ2dlZENoYW5nZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJWYXBhZWVERVgub25Mb2dnZWRDaGFuZ2UoKVwiKTtcbiAgICAgICAgaWYgKHRoaXMuc2NhdHRlci5sb2dnZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25Mb2dpbih0aGlzLnNjYXR0ZXIuYWNjb3VudC5uYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Mb2dvdXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHJlc2V0Q3VycmVudEFjY291bnQocHJvZmlsZTpzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJWYXBhZWVERVgucmVzZXRDdXJyZW50QWNjb3VudCgpXCIsIHRoaXMuY3VycmVudC5uYW1lLCBcIi0+XCIsIHByb2ZpbGUpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Lm5hbWUgIT0gcHJvZmlsZSAmJiAodGhpcy5jdXJyZW50Lm5hbWUgPT0gdGhpcy5sYXN0X2xvZ2dlZCB8fCBwcm9maWxlICE9IFwiZ3Vlc3RcIikpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiYWNjb3VudFwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuZGVmYXVsdDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudC5uYW1lID0gcHJvZmlsZTtcbiAgICAgICAgICAgIGlmIChwcm9maWxlICE9IFwiZ3Vlc3RcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudC5kYXRhID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50RGF0YSh0aGlzLmN1cnJlbnQubmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiV0FSTklORyEhISBjdXJyZW50IGlzIGd1ZXN0XCIsIFtwcm9maWxlLCB0aGlzLmFjY291bnQsIHRoaXMuY3VycmVudF0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMuc2NvcGVzID0ge307XG4gICAgICAgICAgICB0aGlzLmJhbGFuY2VzID0gW107XG4gICAgICAgICAgICB0aGlzLnVzZXJvcmRlcnMgPSB7fTsgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5vbkN1cnJlbnRBY2NvdW50Q2hhbmdlLm5leHQodGhpcy5jdXJyZW50Lm5hbWUpICEhISEhIVwiKTtcbiAgICAgICAgICAgIHRoaXMub25DdXJyZW50QWNjb3VudENoYW5nZS5uZXh0KHRoaXMuY3VycmVudC5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFVzZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiYWNjb3VudFwiLCBmYWxzZSk7XG4gICAgICAgIH0gICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVMb2dTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5sb2dpblN0YXRlID0gXCJuby1zY2F0dGVyXCI7XG4gICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwibG9nLXN0YXRlXCIsIHRydWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlZhcGFlZURFWC51cGRhdGVMb2dTdGF0ZSgpIFwiLCB0aGlzLmxvZ2luU3RhdGUsIHRoaXMuZmVlZC5sb2FkaW5nKFwibG9nLXN0YXRlXCIpKTtcbiAgICAgICAgdGhpcy5zY2F0dGVyLndhaXRDb25uZWN0ZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luU3RhdGUgPSBcIm5vLWxvZ2dlZFwiO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJWYXBhZWVERVgudXBkYXRlTG9nU3RhdGUoKSAgIFwiLCB0aGlzLmxvZ2luU3RhdGUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2NhdHRlci5sb2dnZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU3RhdGUgPSBcImFjY291bnQtb2tcIjtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlZhcGFlZURFWC51cGRhdGVMb2dTdGF0ZSgpICAgICBcIiwgdGhpcy5sb2dpblN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwibG9nLXN0YXRlXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmFwYWVlREVYLnVwZGF0ZUxvZ1N0YXRlKCkgXCIsIHRoaXMubG9naW5TdGF0ZSwgdGhpcy5mZWVkLmxvYWRpbmcoXCJsb2ctc3RhdGVcIikpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgdGltZXIyO1xuICAgICAgICB2YXIgdGltZXIxID0gc2V0SW50ZXJ2YWwoXyA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2NhdHRlci5mZWVkLmxvYWRpbmcoXCJjb25uZWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJsb2ctc3RhdGVcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIxKTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgdGltZXIyID0gc2V0VGltZW91dChfID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIxKTtcbiAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwibG9nLXN0YXRlXCIsIGZhbHNlKTtcbiAgICAgICAgfSwgNjAwMCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZ2V0QWNjb3VudERhdGEobmFtZTogc3RyaW5nKTogUHJvbWlzZTxBY2NvdW50RGF0YT4gIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhdHRlci5xdWVyeUFjY291bnREYXRhKG5hbWUpLmNhdGNoKGFzeW5jIF8gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdC5kYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY3JlYXRlT3JkZXIodHlwZTpzdHJpbmcsIGFtb3VudDpBc3NldERFWCwgcHJpY2U6QXNzZXRERVgpIHtcbiAgICAgICAgLy8gXCJhbGljZVwiLCBcImJ1eVwiLCBcIjIuNTAwMDAwMDAgQ05UXCIsIFwiMC40MDAwMDAwMCBUTE9TXCJcbiAgICAgICAgLy8gbmFtZSBvd25lciwgbmFtZSB0eXBlLCBjb25zdCBhc3NldCAmIHRvdGFsLCBjb25zdCBhc3NldCAmIHByaWNlXG4gICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwib3JkZXItXCIrdHlwZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyYWN0LmV4Y2VjdXRlKFwib3JkZXJcIiwge1xuICAgICAgICAgICAgb3duZXI6ICB0aGlzLnNjYXR0ZXIuYWNjb3VudC5uYW1lLFxuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIHRvdGFsOiBhbW91bnQudG9TdHJpbmcoOCksXG4gICAgICAgICAgICBwcmljZTogcHJpY2UudG9TdHJpbmcoOClcbiAgICAgICAgfSkudGhlbihhc3luYyByZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUcmFkZShhbW91bnQudG9rZW4sIHByaWNlLnRva2VuKTtcbiAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwib3JkZXItXCIrdHlwZSwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcIm9yZGVyLVwiK3R5cGUsIGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYW5jZWxPcmRlcih0eXBlOnN0cmluZywgY29tb2RpdHk6VG9rZW5ERVgsIGN1cnJlbmN5OlRva2VuREVYLCBvcmRlcnM6bnVtYmVyW10pIHtcbiAgICAgICAgLy8gJ1tcImFsaWNlXCIsIFwiYnV5XCIsIFwiQ05UXCIsIFwiVExPU1wiLCBbMSwwXV0nXG4gICAgICAgIC8vIG5hbWUgb3duZXIsIG5hbWUgdHlwZSwgY29uc3QgYXNzZXQgJiB0b3RhbCwgY29uc3QgYXNzZXQgJiBwcmljZVxuICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcImNhbmNlbC1cIit0eXBlLCB0cnVlKTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvcmRlcnMpIHsgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJjYW5jZWwtXCIrdHlwZStcIi1cIitvcmRlcnNbaV0sIHRydWUpOyB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyYWN0LmV4Y2VjdXRlKFwiY2FuY2VsXCIsIHtcbiAgICAgICAgICAgIG93bmVyOiAgdGhpcy5zY2F0dGVyLmFjY291bnQubmFtZSxcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBjb21vZGl0eTogY29tb2RpdHkuc3ltYm9sLFxuICAgICAgICAgICAgY3VycmVuY3k6IGN1cnJlbmN5LnN5bWJvbCxcbiAgICAgICAgICAgIG9yZGVyczogb3JkZXJzXG4gICAgICAgIH0pLnRoZW4oYXN5bmMgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVHJhZGUoY29tb2RpdHksIGN1cnJlbmN5KTtcbiAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiY2FuY2VsLVwiK3R5cGUsIGZhbHNlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gb3JkZXJzKSB7IHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiY2FuY2VsLVwiK3R5cGUrXCItXCIrb3JkZXJzW2ldLCBmYWxzZSk7IH0gICAgXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiY2FuY2VsLVwiK3R5cGUsIGZhbHNlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gb3JkZXJzKSB7IHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiY2FuY2VsLVwiK3R5cGUrXCItXCIrb3JkZXJzW2ldLCBmYWxzZSk7IH0gICAgXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVwb3NpdChxdWFudGl0eTpBc3NldERFWCkge1xuICAgICAgICAvLyBuYW1lIG93bmVyLCBuYW1lIHR5cGUsIGNvbnN0IGFzc2V0ICYgdG90YWwsIGNvbnN0IGFzc2V0ICYgcHJpY2VcbiAgICAgICAgdmFyIGNvbnRyYWN0ID0gdGhpcy5zY2F0dGVyLmdldFNtYXJ0Q29udHJhY3QocXVhbnRpdHkudG9rZW4uY29udHJhY3QpO1xuICAgICAgICB0aGlzLmZlZWQuc2V0RXJyb3IoXCJkZXBvc2l0XCIsIG51bGwpO1xuICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcImRlcG9zaXRcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiZGVwb3NpdC1cIitxdWFudGl0eS50b2tlbi5zeW1ib2wudG9Mb3dlckNhc2UoKSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBjb250cmFjdC5leGNlY3V0ZShcInRyYW5zZmVyXCIsIHtcbiAgICAgICAgICAgIGZyb206ICB0aGlzLnNjYXR0ZXIuYWNjb3VudC5uYW1lLFxuICAgICAgICAgICAgdG86IHRoaXMudmFwYWVldG9rZW5zLFxuICAgICAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICBtZW1vOiBcImRlcG9zaXRcIlxuICAgICAgICB9KS50aGVuKGFzeW5jIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcImRlcG9zaXRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJkZXBvc2l0LVwiK3F1YW50aXR5LnRva2VuLnN5bWJvbC50b0xvd2VyQ2FzZSgpLCBmYWxzZSk7ICAgIFxuICAgICAgICAgICAgLyphd2FpdCovIHRoaXMuZ2V0RGVwb3NpdHMoKTtcbiAgICAgICAgICAgIC8qYXdhaXQqLyB0aGlzLmdldEJhbGFuY2VzKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiZGVwb3NpdFwiLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcImRlcG9zaXQtXCIrcXVhbnRpdHkudG9rZW4uc3ltYm9sLnRvTG93ZXJDYXNlKCksIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRFcnJvcihcImRlcG9zaXRcIiwgdHlwZW9mIGUgPT0gXCJzdHJpbmdcIiA/IGUgOiBKU09OLnN0cmluZ2lmeShlLG51bGwsNCkpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgIH0gICAgXG5cbiAgICB3aXRoZHJhdyhxdWFudGl0eTpBc3NldERFWCkge1xuICAgICAgICB0aGlzLmZlZWQuc2V0RXJyb3IoXCJ3aXRoZHJhd1wiLCBudWxsKTtcbiAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJ3aXRoZHJhd1wiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJ3aXRoZHJhdy1cIitxdWFudGl0eS50b2tlbi5zeW1ib2wudG9Mb3dlckNhc2UoKSwgdHJ1ZSk7ICAgXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyYWN0LmV4Y2VjdXRlKFwid2l0aGRyYXdcIiwge1xuICAgICAgICAgICAgb3duZXI6ICB0aGlzLnNjYXR0ZXIuYWNjb3VudC5uYW1lLFxuICAgICAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5LnRvU3RyaW5nKClcbiAgICAgICAgfSkudGhlbihhc3luYyByZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJ3aXRoZHJhd1wiLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcIndpdGhkcmF3LVwiK3F1YW50aXR5LnRva2VuLnN5bWJvbC50b0xvd2VyQ2FzZSgpLCBmYWxzZSk7XG4gICAgICAgICAgICAvKmF3YWl0Ki8gdGhpcy5nZXREZXBvc2l0cygpO1xuICAgICAgICAgICAgLyphd2FpdCovIHRoaXMuZ2V0QmFsYW5jZXMoKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJ3aXRoZHJhd1wiLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcIndpdGhkcmF3LVwiK3F1YW50aXR5LnRva2VuLnN5bWJvbC50b0xvd2VyQ2FzZSgpLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmZlZWQuc2V0RXJyb3IoXCJ3aXRoZHJhd1wiLCB0eXBlb2YgZSA9PSBcInN0cmluZ1wiID8gZSA6IEpTT04uc3RyaW5naWZ5KGUsbnVsbCw0KSk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBUb2tlbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBhZGRPZmZDaGFpblRva2VuKG9mZmNoYWluOiBUb2tlbkRFWCkge1xuICAgICAgICB0aGlzLndhaXRUb2tlbnNMb2FkZWQudGhlbihfID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2gobmV3IFRva2VuREVYKHtcbiAgICAgICAgICAgICAgICBzeW1ib2w6IG9mZmNoYWluLnN5bWJvbCxcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IG9mZmNoYWluLnByZWNpc2lvbiB8fCA0LFxuICAgICAgICAgICAgICAgIGNvbnRyYWN0OiBcIm5vY29udHJhY3RcIixcbiAgICAgICAgICAgICAgICBhcHBuYW1lOiBvZmZjaGFpbi5hcHBuYW1lLFxuICAgICAgICAgICAgICAgIHdlYnNpdGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgbG9nbzpcIlwiLFxuICAgICAgICAgICAgICAgIGxvZ29sZzogXCJcIixcbiAgICAgICAgICAgICAgICBzY29wZTogXCJcIixcbiAgICAgICAgICAgICAgICBzdGF0OiBudWxsLFxuICAgICAgICAgICAgICAgIHZlcmlmaWVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvZmZjaGFpbjogdHJ1ZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU2NvcGVzIC8gVGFibGVzIFxuICAgIHB1YmxpYyBoYXNTY29wZXMoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX21hcmtldHM7XG4gICAgfVxuXG4gICAgcHVibGljIG1hcmtldChzY29wZTpzdHJpbmcpOiBNYXJrZXQge1xuICAgICAgICBpZiAodGhpcy5fbWFya2V0c1tzY29wZV0pIHJldHVybiB0aGlzLl9tYXJrZXRzW3Njb3BlXTsgICAgICAgIC8vIC0tLT4gZGlyZWN0XG4gICAgICAgIHZhciByZXZlcnNlID0gdGhpcy5pbnZlcnNlU2NvcGUoc2NvcGUpO1xuICAgICAgICBpZiAodGhpcy5fcmV2ZXJzZVtyZXZlcnNlXSkgcmV0dXJuIHRoaXMuX3JldmVyc2VbcmV2ZXJzZV07ICAgIC8vIC0tLT4gcmV2ZXJzZVxuICAgICAgICBpZiAoIXRoaXMuX21hcmtldHNbcmV2ZXJzZV0pIHJldHVybiBudWxsOyAgICAgICAgICAgICAgICAgICAgIC8vIC0tLT4gdGFibGUgZG9lcyBub3QgZXhpc3QgKG9yIGhhcyBub3QgYmVlbiBsb2FkZWQgeWV0KVxuICAgICAgICByZXR1cm4gdGhpcy5yZXZlcnNlKHNjb3BlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGFibGUoc2NvcGU6c3RyaW5nKTogTWFya2V0IHtcbiAgICAgICAgLy9jb25zb2xlLmVycm9yKFwidGFibGUoXCIrc2NvcGUrXCIpIERFUFJFQ0FURURcIik7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtldChzY29wZSk7XG4gICAgfSAgICBcblxuICAgIHByaXZhdGUgcmV2ZXJzZShzY29wZTpzdHJpbmcpOiBNYXJrZXQge1xuICAgICAgICB2YXIgY2Fub25pY2FsID0gdGhpcy5jYW5vbmljYWxTY29wZShzY29wZSk7XG4gICAgICAgIHZhciByZXZlcnNlX3Njb3BlID0gdGhpcy5pbnZlcnNlU2NvcGUoY2Fub25pY2FsKTtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoY2Fub25pY2FsICE9IHJldmVyc2Vfc2NvcGUsIFwiRVJST1I6IFwiLCBjYW5vbmljYWwsIHJldmVyc2Vfc2NvcGUpO1xuICAgICAgICB2YXIgcmV2ZXJzZV90YWJsZTpNYXJrZXQgPSB0aGlzLl9yZXZlcnNlW3JldmVyc2Vfc2NvcGVdO1xuICAgICAgICBpZiAoIXJldmVyc2VfdGFibGUgJiYgdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXZlcnNlW3JldmVyc2Vfc2NvcGVdID0gdGhpcy5jcmVhdGVSZXZlcnNlVGFibGVGb3IocmV2ZXJzZV9zY29wZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JldmVyc2VbcmV2ZXJzZV9zY29wZV07XG4gICAgfVxuXG4gICAgcHVibGljIG1hcmtldEZvcihjb21vZGl0eTpUb2tlbkRFWCwgY3VycmVuY3k6VG9rZW5ERVgpOiBNYXJrZXQge1xuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzLmdldFNjb3BlRm9yKGNvbW9kaXR5LCBjdXJyZW5jeSk7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlKHNjb3BlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGFibGVGb3IoY29tb2RpdHk6VG9rZW5ERVgsIGN1cnJlbmN5OlRva2VuREVYKTogTWFya2V0IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcInRhYmxlRm9yKClcIixjb21vZGl0eS5zeW1ib2wsY3VycmVuY3kuc3ltYm9sLFwiIERFUFJFQ0FURURcIik7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtldEZvcihjb21vZGl0eSwgY3VycmVuY3kpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVSZXZlcnNlVGFibGVGb3Ioc2NvcGU6c3RyaW5nKTogTWFya2V0IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIiwgc2NvcGUpO1xuICAgICAgICB2YXIgY2Fub25pY2FsID0gdGhpcy5jYW5vbmljYWxTY29wZShzY29wZSk7XG4gICAgICAgIHZhciByZXZlcnNlX3Njb3BlID0gdGhpcy5pbnZlcnNlU2NvcGUoY2Fub25pY2FsKTtcbiAgICAgICAgdmFyIHRhYmxlOk1hcmtldCA9IHRoaXMuX21hcmtldHNbY2Fub25pY2FsXTtcblxuICAgICAgICB2YXIgaW52ZXJzZV9oaXN0b3J5Okhpc3RvcnlUeFtdID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSBpbiB0YWJsZS5oaXN0b3J5KSB7XG4gICAgICAgICAgICB2YXIgaFR4Okhpc3RvcnlUeCA9IHtcbiAgICAgICAgICAgICAgICBpZDogdGFibGUuaGlzdG9yeVtpXS5pZCxcbiAgICAgICAgICAgICAgICBzdHI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcHJpY2U6IHRhYmxlLmhpc3RvcnlbaV0uaW52ZXJzZS5jbG9uZSgpLFxuICAgICAgICAgICAgICAgIGludmVyc2U6IHRhYmxlLmhpc3RvcnlbaV0ucHJpY2UuY2xvbmUoKSxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRhYmxlLmhpc3RvcnlbaV0ucGF5bWVudC5jbG9uZSgpLFxuICAgICAgICAgICAgICAgIHBheW1lbnQ6IHRhYmxlLmhpc3RvcnlbaV0uYW1vdW50LmNsb25lKCksXG4gICAgICAgICAgICAgICAgYnV5ZXI6IHRhYmxlLmhpc3RvcnlbaV0uc2VsbGVyLFxuICAgICAgICAgICAgICAgIHNlbGxlcjogdGFibGUuaGlzdG9yeVtpXS5idXllcixcbiAgICAgICAgICAgICAgICBidXlmZWU6IHRhYmxlLmhpc3RvcnlbaV0uc2VsbGZlZS5jbG9uZSgpLFxuICAgICAgICAgICAgICAgIHNlbGxmZWU6IHRhYmxlLmhpc3RvcnlbaV0uYnV5ZmVlLmNsb25lKCksXG4gICAgICAgICAgICAgICAgZGF0ZTogdGFibGUuaGlzdG9yeVtpXS5kYXRlLFxuICAgICAgICAgICAgICAgIGlzYnV5OiAhdGFibGUuaGlzdG9yeVtpXS5pc2J1eSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBoVHguc3RyID0gaFR4LnByaWNlLnN0ciArIFwiIFwiICsgaFR4LmFtb3VudC5zdHI7XG4gICAgICAgICAgICBpbnZlcnNlX2hpc3RvcnkucHVzaChoVHgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIFxuICAgICAgICB2YXIgaW52ZXJzZV9vcmRlcnM6VG9rZW5PcmRlcnMgPSB7XG4gICAgICAgICAgICBidXk6IFtdLCBzZWxsOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIHR5cGUgaW4ge2J1eTpcImJ1eVwiLCBzZWxsOlwic2VsbFwifSkge1xuICAgICAgICAgICAgdmFyIHJvd19vcmRlcnM6T3JkZXJbXTtcbiAgICAgICAgICAgIHZhciByb3dfb3JkZXI6T3JkZXI7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGFibGUub3JkZXJzW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJvdyA9IHRhYmxlLm9yZGVyc1t0eXBlXVtpXTtcblxuICAgICAgICAgICAgICAgIHJvd19vcmRlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8cm93Lm9yZGVycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICByb3dfb3JkZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBvc2l0OiByb3cub3JkZXJzW2pdLmRlcG9zaXQuY2xvbmUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByb3cub3JkZXJzW2pdLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJzZTogcm93Lm9yZGVyc1tqXS5wcmljZS5jbG9uZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHJvdy5vcmRlcnNbal0uaW52ZXJzZS5jbG9uZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI6IHJvdy5vcmRlcnNbal0ub3duZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWxvczogcm93Lm9yZGVyc1tqXS50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiByb3cub3JkZXJzW2pdLnRlbG9zXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm93X29yZGVycy5wdXNoKHJvd19vcmRlcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIG5ld3JvdzpPcmRlclJvdyA9IHtcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJzZTogcm93LnByaWNlLmNsb25lKCksXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyczogcm93X29yZGVycyxcbiAgICAgICAgICAgICAgICAgICAgb3duZXJzOiByb3cub3duZXJzLFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogcm93LmludmVyc2UuY2xvbmUoKSxcbiAgICAgICAgICAgICAgICAgICAgc3RyOiByb3cuaW52ZXJzZS5zdHIsXG4gICAgICAgICAgICAgICAgICAgIHN1bTogcm93LnN1bXRlbG9zLmNsb25lKCksXG4gICAgICAgICAgICAgICAgICAgIHN1bXRlbG9zOiByb3cuc3VtLmNsb25lKCksXG4gICAgICAgICAgICAgICAgICAgIHRlbG9zOiByb3cudG90YWwuY2xvbmUoKSxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IHJvdy50ZWxvcy5jbG9uZSgpLFxuICAgICAgICAgICAgICAgICAgICAvLyBhbW91bnQ6IHJvdy5zdW10ZWxvcy50b3RhbCgpLCAvLyA8LS0gZXh0cmFcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGludmVyc2Vfb3JkZXJzW3R5cGVdLnB1c2gobmV3cm93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXZlcnNlOk1hcmtldCA9IHtcbiAgICAgICAgICAgIHNjb3BlOiByZXZlcnNlX3Njb3BlLFxuICAgICAgICAgICAgY29tb2RpdHk6IHRhYmxlLmN1cnJlbmN5LFxuICAgICAgICAgICAgY3VycmVuY3k6IHRhYmxlLmNvbW9kaXR5LFxuICAgICAgICAgICAgYmxvY2s6IHRhYmxlLmJsb2NrLFxuICAgICAgICAgICAgYmxvY2tsaXN0OiB0YWJsZS5yZXZlcnNlYmxvY2tzLFxuICAgICAgICAgICAgcmV2ZXJzZWJsb2NrczogdGFibGUuYmxvY2tsaXN0LFxuICAgICAgICAgICAgYmxvY2tsZXZlbHM6IHRhYmxlLnJldmVyc2VsZXZlbHMsXG4gICAgICAgICAgICByZXZlcnNlbGV2ZWxzOiB0YWJsZS5ibG9ja2xldmVscyxcbiAgICAgICAgICAgIGJsb2NrczogdGFibGUuYmxvY2tzLFxuICAgICAgICAgICAgZGVhbHM6IHRhYmxlLmRlYWxzLFxuICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgc2VsbDoge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbDp0YWJsZS5oZWFkZXIuYnV5LnRvdGFsLmNsb25lKCksXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyczp0YWJsZS5oZWFkZXIuYnV5Lm9yZGVyc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYnV5OiB7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOnRhYmxlLmhlYWRlci5zZWxsLnRvdGFsLmNsb25lKCksXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyczp0YWJsZS5oZWFkZXIuc2VsbC5vcmRlcnNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlzdG9yeTogaW52ZXJzZV9oaXN0b3J5LFxuICAgICAgICAgICAgb3JkZXJzOiB7XG4gICAgICAgICAgICAgICAgc2VsbDogaW52ZXJzZV9vcmRlcnMuYnV5LCAgLy8gPDwtLSBlc3RvIGZ1bmNpb25hIGFzw4PCrSBjb21vIGVzdMODwqE/XG4gICAgICAgICAgICAgICAgYnV5OiBpbnZlcnNlX29yZGVycy5zZWxsICAgLy8gPDwtLSBlc3RvIGZ1bmNpb25hIGFzw4PCrSBjb21vIGVzdMODwqE/XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VtbWFyeToge1xuICAgICAgICAgICAgICAgIHNjb3BlOiB0aGlzLmludmVyc2VTY29wZSh0YWJsZS5zdW1tYXJ5LnNjb3BlKSxcbiAgICAgICAgICAgICAgICBwcmljZTogdGFibGUuc3VtbWFyeS5pbnZlcnNlLFxuICAgICAgICAgICAgICAgIHByaWNlXzI0aF9hZ286IHRhYmxlLnN1bW1hcnkuaW52ZXJzZV8yNGhfYWdvLFxuICAgICAgICAgICAgICAgIGludmVyc2U6IHRhYmxlLnN1bW1hcnkucHJpY2UsXG4gICAgICAgICAgICAgICAgaW52ZXJzZV8yNGhfYWdvOiB0YWJsZS5zdW1tYXJ5LnByaWNlXzI0aF9hZ28sXG4gICAgICAgICAgICAgICAgbWF4X2ludmVyc2U6IHRhYmxlLnN1bW1hcnkubWF4X3ByaWNlLFxuICAgICAgICAgICAgICAgIG1heF9wcmljZTogdGFibGUuc3VtbWFyeS5tYXhfaW52ZXJzZSxcbiAgICAgICAgICAgICAgICBtaW5faW52ZXJzZTogdGFibGUuc3VtbWFyeS5taW5fcHJpY2UsXG4gICAgICAgICAgICAgICAgbWluX3ByaWNlOiB0YWJsZS5zdW1tYXJ5Lm1pbl9pbnZlcnNlLFxuICAgICAgICAgICAgICAgIHJlY29yZHM6IHRhYmxlLnN1bW1hcnkucmVjb3JkcyxcbiAgICAgICAgICAgICAgICB2b2x1bWU6IHRhYmxlLnN1bW1hcnkuYW1vdW50LFxuICAgICAgICAgICAgICAgIGFtb3VudDogdGFibGUuc3VtbWFyeS52b2x1bWUsXG4gICAgICAgICAgICAgICAgcGVyY2VudDogdGFibGUuc3VtbWFyeS5pcGVyY2VudCxcbiAgICAgICAgICAgICAgICBpcGVyY2VudDogdGFibGUuc3VtbWFyeS5wZXJjZW50LFxuICAgICAgICAgICAgICAgIHBlcmNlbnRfc3RyOiB0YWJsZS5zdW1tYXJ5LmlwZXJjZW50X3N0cixcbiAgICAgICAgICAgICAgICBpcGVyY2VudF9zdHI6IHRhYmxlLnN1bW1hcnkucGVyY2VudF9zdHIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHg6IHRhYmxlLnR4XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldmVyc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNjb3BlRm9yKGNvbW9kaXR5OlRva2VuREVYLCBjdXJyZW5jeTpUb2tlbkRFWCkge1xuICAgICAgICBpZiAoIWNvbW9kaXR5IHx8ICFjdXJyZW5jeSkgcmV0dXJuIFwiXCI7XG4gICAgICAgIHJldHVybiBjb21vZGl0eS5zeW1ib2wudG9Mb3dlckNhc2UoKSArIFwiLlwiICsgY3VycmVuY3kuc3ltYm9sLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGludmVyc2VTY29wZShzY29wZTpzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFzY29wZSkgcmV0dXJuIHNjb3BlO1xuICAgICAgICBjb25zb2xlLmFzc2VydCh0eXBlb2Ygc2NvcGUgPT1cInN0cmluZ1wiLCBcIkVSUk9SOiBzdHJpbmcgc2NvcGUgZXhwZWN0ZWQsIGdvdCBcIiwgdHlwZW9mIHNjb3BlLCBzY29wZSk7XG4gICAgICAgIHZhciBwYXJ0cyA9IHNjb3BlLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgY29uc29sZS5hc3NlcnQocGFydHMubGVuZ3RoID09IDIsIFwiRVJST1I6IHNjb3BlIGZvcm1hdCBleHBlY3RlZCBpcyB4eHgueXl5LCBnb3Q6IFwiLCB0eXBlb2Ygc2NvcGUsIHNjb3BlKTtcbiAgICAgICAgdmFyIGludmVyc2UgPSBwYXJ0c1sxXSArIFwiLlwiICsgcGFydHNbMF07XG4gICAgICAgIHJldHVybiBpbnZlcnNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYW5vbmljYWxTY29wZShzY29wZTpzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFzY29wZSkgcmV0dXJuIHNjb3BlO1xuICAgICAgICBjb25zb2xlLmFzc2VydCh0eXBlb2Ygc2NvcGUgPT1cInN0cmluZ1wiLCBcIkVSUk9SOiBzdHJpbmcgc2NvcGUgZXhwZWN0ZWQsIGdvdCBcIiwgdHlwZW9mIHNjb3BlLCBzY29wZSk7XG4gICAgICAgIHZhciBwYXJ0cyA9IHNjb3BlLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgY29uc29sZS5hc3NlcnQocGFydHMubGVuZ3RoID09IDIsIFwiRVJST1I6IHNjb3BlIGZvcm1hdCBleHBlY3RlZCBpcyB4eHgueXl5LCBnb3Q6IFwiLCB0eXBlb2Ygc2NvcGUsIHNjb3BlKTtcbiAgICAgICAgdmFyIGludmVyc2UgPSBwYXJ0c1sxXSArIFwiLlwiICsgcGFydHNbMF07XG4gICAgICAgIGlmIChwYXJ0c1sxXSA9PSBcInRsb3NcIikge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0c1swXSA9PSBcInRsb3NcIikge1xuICAgICAgICAgICAgcmV0dXJuIGludmVyc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnRzWzBdIDwgcGFydHNbMV0pIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbnZlcnNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgcHVibGljIGlzQ2Fub25pY2FsKHNjb3BlOnN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW5vbmljYWxTY29wZShzY29wZSkgPT0gc2NvcGU7XG4gICAgfVxuXG4gICAgXG4gICAgXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBHZXR0ZXJzIFxuXG4gICAgZ2V0QmFsYW5jZSh0b2tlbjpUb2tlbkRFWCkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuYmFsYW5jZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJhbGFuY2VzW2ldLnRva2VuLnN5bWJvbCA9PSB0b2tlbi5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iYWxhbmNlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEFzc2V0REVYKFwiMCBcIiArIHRva2VuLnN5bWJvbCwgdGhpcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U29tZUZyZWVGYWtlVG9rZW5zKHN5bWJvbDpzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmFwYWVlREVYLmdldFNvbWVGcmVlRmFrZVRva2VucygpXCIpO1xuICAgICAgICB2YXIgX3Rva2VuID0gc3ltYm9sOyAgICBcbiAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJmcmVlZmFrZS1cIitfdG9rZW4gfHwgXCJ0b2tlblwiLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdFRva2VuU3RhdHMudGhlbihfID0+IHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IG51bGw7XG4gICAgICAgICAgICB2YXIgY291bnRzID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTwxMDA7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG9rZW5zW2ldLnN5bWJvbCA9PSBzeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy50b2tlbnNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSwgXCJSYW5kb206IFwiLCByYW5kb20pO1xuICAgICAgICAgICAgICAgIGlmICghdG9rZW4gJiYgcmFuZG9tID4gMC41KSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy50b2tlbnNbaSAlIHRoaXMudG9rZW5zLmxlbmd0aF07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5mYWtlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmRvbSA+IDAuNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy50ZWxvcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpPDEwMCAmJiB0b2tlbiAmJiB0aGlzLmdldEJhbGFuY2UodG9rZW4pLmFtb3VudC50b051bWJlcigpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSwgXCJ0b2tlbjogXCIsIHRva2VuKTtcblxuICAgICAgICAgICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgICAgICAgICByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9udG8gPSBNYXRoLmZsb29yKDEwMDAwICogcmFuZG9tKSAvIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHF1YW50aXR5ID0gbmV3IEFzc2V0REVYKFwiXCIgKyBtb250byArIFwiIFwiICsgdG9rZW4uc3ltYm9sICx0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lbW8gPSBcInlvdSBnZXQgXCIgKyBxdWFudGl0eS52YWx1ZVRvU3RyaW5nKCkrIFwiIGZyZWUgZmFrZSBcIiArIHRva2VuLnN5bWJvbCArIFwiIHRva2VucyB0byBwbGF5IG9uIHZhcGFlZS5pbyBERVhcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udHJhY3QuZXhjZWN1dGUoXCJpc3N1ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogIHRoaXMuc2NhdHRlci5hY2NvdW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogcXVhbnRpdHkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbW86IG1lbW9cbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihfID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QmFsYW5jZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiZnJlZWZha2UtXCIrX3Rva2VuIHx8IFwidG9rZW5cIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJmcmVlZmFrZS1cIitfdG9rZW4gfHwgXCJ0b2tlblwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldFRva2VuTm93KHN5bTpzdHJpbmcpOiBUb2tlbkRFWCB7XG4gICAgICAgIGlmICghc3ltKSByZXR1cm4gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnRva2Vucykge1xuICAgICAgICAgICAgLy8gdGhlcmUncyBhIGxpdHRsZSBidWcuIFRoaXMgaXMgYSBqdXN0YSAgd29yayBhcnJvdW5kXG4gICAgICAgICAgICBpZiAodGhpcy50b2tlbnNbaV0uc3ltYm9sLnRvVXBwZXJDYXNlKCkgPT0gXCJUTE9TXCIgJiYgdGhpcy50b2tlbnNbaV0ub2ZmY2hhaW4pIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHNvbHZlcyBhdHRhY2hpbmcgd3JvbmcgdGxvcyB0b2tlbiB0byBhc3NldFxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMudG9rZW5zW2ldLnN5bWJvbC50b1VwcGVyQ2FzZSgpID09IHN5bS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFRva2VuKHN5bTpzdHJpbmcpOiBQcm9taXNlPFRva2VuREVYPiB7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRUb2tlbnNMb2FkZWQudGhlbihfID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRva2VuTm93KHN5bSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldERlcG9zaXRzKGFjY291bnQ6c3RyaW5nID0gbnVsbCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmFwYWVlREVYLmdldERlcG9zaXRzKClcIik7XG4gICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiZGVwb3NpdHNcIiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRUb2tlbnNMb2FkZWQudGhlbihhc3luYyBfID0+IHtcbiAgICAgICAgICAgIHZhciBkZXBvc2l0czogQXNzZXRERVhbXSA9IFtdO1xuICAgICAgICAgICAgaWYgKCFhY2NvdW50ICYmIHRoaXMuY3VycmVudC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgYWNjb3VudCA9IHRoaXMuY3VycmVudC5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgdGhpcy5mZXRjaERlcG9zaXRzKGFjY291bnQpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gcmVzdWx0LnJvd3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVwb3NpdHMucHVzaChuZXcgQXNzZXRERVgocmVzdWx0LnJvd3NbaV0uYW1vdW50LCB0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kZXBvc2l0cyA9IGRlcG9zaXRzO1xuICAgICAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJkZXBvc2l0c1wiLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZXBvc2l0cztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QmFsYW5jZXMoYWNjb3VudDpzdHJpbmcgPSBudWxsKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJWYXBhZWVERVguZ2V0QmFsYW5jZXMoKVwiKTtcbiAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJiYWxhbmNlc1wiLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdFRva2Vuc0xvYWRlZC50aGVuKGFzeW5jIF8gPT4ge1xuICAgICAgICAgICAgdmFyIF9iYWxhbmNlczogQXNzZXRERVhbXTtcbiAgICAgICAgICAgIGlmICghYWNjb3VudCAmJiB0aGlzLmN1cnJlbnQubmFtZSkge1xuICAgICAgICAgICAgICAgIGFjY291bnQgPSB0aGlzLmN1cnJlbnQubmFtZTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChhY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgX2JhbGFuY2VzID0gYXdhaXQgdGhpcy5mZXRjaEJhbGFuY2VzKGFjY291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5iYWxhbmNlcyA9IF9iYWxhbmNlcztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVmFwYWVlREVYIGJhbGFuY2VzIHVwZGF0ZWRcIik7XG4gICAgICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcImJhbGFuY2VzXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJhbGFuY2VzO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRUaGlzU2VsbE9yZGVycyh0YWJsZTpzdHJpbmcsIGlkczpudW1iZXJbXSk6IFByb21pc2U8YW55W10+IHtcbiAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJ0aGlzb3JkZXJzXCIsIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0VG9rZW5zTG9hZGVkLnRoZW4oYXN5bmMgXyA9PiB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIGlkcykge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGlkc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgZ290aXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0W2pdLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnb3RpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ290aXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByZXM6VGFibGVSZXN1bHQgPSBhd2FpdCB0aGlzLmZldGNoT3JkZXJzKHtzY29wZTp0YWJsZSwgbGltaXQ6MSwgbG93ZXJfYm91bmQ6aWQudG9TdHJpbmcoKX0pO1xuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChyZXMucm93cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcInRoaXNvcmRlcnNcIiwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7ICAgIFxuICAgIH1cblxuICAgIGFzeW5jIGdldFVzZXJPcmRlcnMoYWNjb3VudDpzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmFwYWVlREVYLmdldFVzZXJPcmRlcnMoKVwiKTtcbiAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJ1c2Vyb3JkZXJzXCIsIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0VG9rZW5zTG9hZGVkLnRoZW4oYXN5bmMgXyA9PiB7XG4gICAgICAgICAgICB2YXIgdXNlcm9yZGVyczogVGFibGVSZXN1bHQ7XG4gICAgICAgICAgICBpZiAoIWFjY291bnQgJiYgdGhpcy5jdXJyZW50Lm5hbWUpIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50ID0gdGhpcy5jdXJyZW50Lm5hbWU7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgICAgICAgIHVzZXJvcmRlcnMgPSBhd2FpdCB0aGlzLmZldGNoVXNlck9yZGVycyhhY2NvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsaXN0OiBVc2VyT3JkZXJzW10gPSA8VXNlck9yZGVyc1tdPnVzZXJvcmRlcnMucm93cztcbiAgICAgICAgICAgIHZhciBtYXA6IFVzZXJPcmRlcnNNYXAgPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkcyA9IGxpc3RbaV0uaWRzO1xuICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IGxpc3RbaV0udGFibGU7XG4gICAgICAgICAgICAgICAgdmFyIG9yZGVycyA9IGF3YWl0IHRoaXMuZ2V0VGhpc1NlbGxPcmRlcnModGFibGUsIGlkcyk7XG4gICAgICAgICAgICAgICAgbWFwW3RhYmxlXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGU6IHRhYmxlLFxuICAgICAgICAgICAgICAgICAgICBvcmRlcnM6IHRoaXMuYXV4UHJvY2Vzc1Jvd3NUb09yZGVycyhvcmRlcnMpLFxuICAgICAgICAgICAgICAgICAgICBpZHM6aWRzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXNlcm9yZGVycyA9IG1hcDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudXNlcm9yZGVycyk7XG4gICAgICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcInVzZXJvcmRlcnNcIiwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcm9yZGVycztcbiAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlQWN0aXZpdHkoKSB7XG4gICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiYWN0aXZpdHlcIiwgdHJ1ZSk7XG4gICAgICAgIHZhciBwYWdlc2l6ZSA9IHRoaXMuYWN0aXZpdHlQYWdlc2l6ZTtcbiAgICAgICAgdmFyIHBhZ2VzID0gYXdhaXQgdGhpcy5nZXRBY3Rpdml0eVRvdGFsUGFnZXMocGFnZXNpemUpO1xuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLmZldGNoQWN0aXZpdHkocGFnZXMtMiwgcGFnZXNpemUpLFxuICAgICAgICAgICAgdGhpcy5mZXRjaEFjdGl2aXR5KHBhZ2VzLTEsIHBhZ2VzaXplKSxcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hBY3Rpdml0eShwYWdlcy0wLCBwYWdlc2l6ZSlcbiAgICAgICAgXSk7XG4gICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiYWN0aXZpdHlcIiwgZmFsc2UpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWRNb3JlQWN0aXZpdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXR5Lmxpc3QubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJhY3Rpdml0eVwiLCB0cnVlKTtcbiAgICAgICAgdmFyIHBhZ2VzaXplID0gdGhpcy5hY3Rpdml0eVBhZ2VzaXplO1xuICAgICAgICB2YXIgZmlyc3QgPSB0aGlzLmFjdGl2aXR5Lmxpc3RbdGhpcy5hY3Rpdml0eS5saXN0Lmxlbmd0aC0xXTtcbiAgICAgICAgdmFyIGlkID0gZmlyc3QuaWQgLSBwYWdlc2l6ZTtcbiAgICAgICAgdmFyIHBhZ2UgPSBNYXRoLmZsb29yKChpZC0xKSAvIHBhZ2VzaXplKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmZldGNoQWN0aXZpdHkocGFnZSwgcGFnZXNpemUpO1xuICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcImFjdGl2aXR5XCIsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVUcmFkZShjb21vZGl0eTpUb2tlbkRFWCwgY3VycmVuY3k6VG9rZW5ERVgsIHVwZGF0ZVVzZXI6Ym9vbGVhbiA9IHRydWUpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlZhcGFlZURFWC51cGRhdGVUcmFkZSgpXCIpO1xuICAgICAgICB2YXIgY2hyb25vX2tleSA9IFwidXBkYXRlVHJhZGVcIjtcbiAgICAgICAgdGhpcy5mZWVkLnN0YXJ0Q2hyb25vKGNocm9ub19rZXkpO1xuXG4gICAgICAgIGlmKHVwZGF0ZVVzZXIpIHRoaXMudXBkYXRlQ3VycmVudFVzZXIoKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMuZ2V0VHJhbnNhY3Rpb25IaXN0b3J5KGNvbW9kaXR5LCBjdXJyZW5jeSwgLTEsIC0xLCB0cnVlKS50aGVuKF8gPT4gdGhpcy5mZWVkLnNldE1hcmNrKGNocm9ub19rZXksIFwiZ2V0VHJhbnNhY3Rpb25IaXN0b3J5KClcIikpLFxuICAgICAgICAgICAgdGhpcy5nZXRCbG9ja0hpc3RvcnkoY29tb2RpdHksIGN1cnJlbmN5LCAtMSwgLTEsIHRydWUpLnRoZW4oXyA9PiB0aGlzLmZlZWQuc2V0TWFyY2soY2hyb25vX2tleSwgXCJnZXRCbG9ja0hpc3RvcnkoKVwiKSksXG4gICAgICAgICAgICB0aGlzLmdldFNlbGxPcmRlcnMoY29tb2RpdHksIGN1cnJlbmN5LCB0cnVlKS50aGVuKF8gPT4gdGhpcy5mZWVkLnNldE1hcmNrKGNocm9ub19rZXksIFwiZ2V0U2VsbE9yZGVycygpXCIpKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0QnV5T3JkZXJzKGNvbW9kaXR5LCBjdXJyZW5jeSwgdHJ1ZSkudGhlbihfID0+IHRoaXMuZmVlZC5zZXRNYXJjayhjaHJvbm9fa2V5LCBcImdldEJ1eU9yZGVycygpXCIpKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0VGFibGVTdW1tYXJ5KGNvbW9kaXR5LCBjdXJyZW5jeSwgdHJ1ZSkudGhlbihfID0+IHRoaXMuZmVlZC5zZXRNYXJjayhjaHJvbm9fa2V5LCBcImdldFRhYmxlU3VtbWFyeSgpXCIpKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0T3JkZXJTdW1tYXJ5KCkudGhlbihfID0+IHRoaXMuZmVlZC5zZXRNYXJjayhjaHJvbm9fa2V5LCBcImdldE9yZGVyU3VtbWFyeSgpXCIpKSxcbiAgICAgICAgXSkudGhlbihyID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JldmVyc2UgPSB7fTtcbiAgICAgICAgICAgIHRoaXMucmVzb3J0VG9rZW5zKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmZlZWQucHJpbnRDaHJvbm8oY2hyb25vX2tleSk7XG4gICAgICAgICAgICB0aGlzLm9uVHJhZGVVcGRhdGVkLm5leHQobnVsbCk7XG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlQ3VycmVudFVzZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJWYXBhZWVERVgudXBkYXRlQ3VycmVudFVzZXIoKVwiKTtcbiAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJjdXJyZW50XCIsIHRydWUpOyAgICAgICAgXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLmdldFVzZXJPcmRlcnMoKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0RGVwb3NpdHMoKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0QmFsYW5jZXMoKVxuICAgICAgICBdKS50aGVuKF8gPT4ge1xuICAgICAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJjdXJyZW50XCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiBfO1xuICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiY3VycmVudFwiLCBmYWxzZSk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEJsb2NrSGlzdG9yeVRvdGFsUGFnZXNGb3Ioc2NvcGU6c3RyaW5nLCBwYWdlc2l6ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5fbWFya2V0cykgcmV0dXJuIDA7XG4gICAgICAgIHZhciBtYXJrZXQgPSB0aGlzLm1hcmtldChzY29wZSk7XG4gICAgICAgIGlmICghbWFya2V0KSByZXR1cm4gMDtcbiAgICAgICAgdmFyIHRvdGFsID0gbWFya2V0LmJsb2NrcztcbiAgICAgICAgdmFyIG1vZCA9IHRvdGFsICUgcGFnZXNpemU7XG4gICAgICAgIHZhciBkaWYgPSB0b3RhbCAtIG1vZDtcbiAgICAgICAgdmFyIHBhZ2VzID0gZGlmIC8gcGFnZXNpemU7XG4gICAgICAgIGlmIChtb2QgPiAwKSB7XG4gICAgICAgICAgICBwYWdlcyArPTE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXRCbG9ja0hpc3RvcnlUb3RhbFBhZ2VzRm9yKCkgdG90YWw6XCIsIHRvdGFsLCBcIiBwYWdlczpcIiwgcGFnZXMpO1xuICAgICAgICByZXR1cm4gcGFnZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRIaXN0b3J5VG90YWxQYWdlc0ZvcihzY29wZTpzdHJpbmcsIHBhZ2VzaXplOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tYXJrZXRzKSByZXR1cm4gMDtcbiAgICAgICAgdmFyIG1hcmtldCA9IHRoaXMubWFya2V0KHNjb3BlKTtcbiAgICAgICAgaWYgKCFtYXJrZXQpIHJldHVybiAwO1xuICAgICAgICB2YXIgdG90YWwgPSBtYXJrZXQuZGVhbHM7XG4gICAgICAgIHZhciBtb2QgPSB0b3RhbCAlIHBhZ2VzaXplO1xuICAgICAgICB2YXIgZGlmID0gdG90YWwgLSBtb2Q7XG4gICAgICAgIHZhciBwYWdlcyA9IGRpZiAvIHBhZ2VzaXplO1xuICAgICAgICBpZiAobW9kID4gMCkge1xuICAgICAgICAgICAgcGFnZXMgKz0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYWdlcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldEFjdGl2aXR5VG90YWxQYWdlcyhwYWdlc2l6ZTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyYWN0LmdldFRhYmxlKFwiZXZlbnRzXCIsIHtcbiAgICAgICAgICAgIGxpbWl0OiAxXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSByZXN1bHQucm93c1swXS5wYXJhbXM7XG4gICAgICAgICAgICB2YXIgdG90YWwgPSBwYXJzZUludChwYXJhbXMuc3BsaXQoXCIgXCIpWzBdKS0xO1xuICAgICAgICAgICAgdmFyIG1vZCA9IHRvdGFsICUgcGFnZXNpemU7XG4gICAgICAgICAgICB2YXIgZGlmID0gdG90YWwgLSBtb2Q7XG4gICAgICAgICAgICB2YXIgcGFnZXMgPSBkaWYgLyBwYWdlc2l6ZTtcbiAgICAgICAgICAgIGlmIChtb2QgPiAwKSB7XG4gICAgICAgICAgICAgICAgcGFnZXMgKz0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eS50b3RhbCA9IHRvdGFsO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJWYXBhZWVERVguZ2V0QWN0aXZpdHlUb3RhbFBhZ2VzKCkgdG90YWw6IFwiLCB0b3RhbCwgXCIgcGFnZXM6IFwiLCBwYWdlcyk7XG4gICAgICAgICAgICByZXR1cm4gcGFnZXM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFRyYW5zYWN0aW9uSGlzdG9yeShjb21vZGl0eTpUb2tlbkRFWCwgY3VycmVuY3k6VG9rZW5ERVgsIHBhZ2U6bnVtYmVyID0gLTEsIHBhZ2VzaXplOm51bWJlciA9IC0xLCBmb3JjZTpib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICB2YXIgc2NvcGU6c3RyaW5nID0gdGhpcy5jYW5vbmljYWxTY29wZSh0aGlzLmdldFNjb3BlRm9yKGNvbW9kaXR5LCBjdXJyZW5jeSkpO1xuICAgICAgICB2YXIgYXV4ID0gbnVsbDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiaGlzdG9yeS5cIitzY29wZSwgdHJ1ZSk7XG4gICAgICAgIGF1eCA9IHRoaXMud2FpdE9yZGVyU3VtbWFyeS50aGVuKGFzeW5jIF8gPT4ge1xuICAgICAgICAgICAgaWYgKHBhZ2VzaXplID09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGFnZXNpemUgPSAxMDsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFnZSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IHRoaXMuZ2V0SGlzdG9yeVRvdGFsUGFnZXNGb3Ioc2NvcGUsIHBhZ2VzaXplKTtcbiAgICAgICAgICAgICAgICBwYWdlID0gcGFnZXMtMztcbiAgICAgICAgICAgICAgICBpZiAocGFnZSA8IDApIHBhZ2UgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hIaXN0b3J5KHNjb3BlLCBwYWdlKzAsIHBhZ2VzaXplKSxcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoSGlzdG9yeShzY29wZSwgcGFnZSsxLCBwYWdlc2l6ZSksXG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaEhpc3Rvcnkoc2NvcGUsIHBhZ2UrMiwgcGFnZXNpemUpXG4gICAgICAgICAgICBdKS50aGVuKF8gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiaGlzdG9yeS5cIitzY29wZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcmtldChzY29wZSkuaGlzdG9yeTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiaGlzdG9yeS5cIitzY29wZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMubWFya2V0KHNjb3BlKSAmJiAhZm9yY2UpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMubWFya2V0KHNjb3BlKS5oaXN0b3J5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXV4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkhpc3RvcnlDaGFuZ2UubmV4dChyZXN1bHQpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhdXhIb3VyVG9MYWJlbChob3VyOm51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoaG91ciAqIDEwMDAgKiA2MCAqIDYwKTtcbiAgICAgICAgdmFyIGxhYmVsID0gZC5nZXRIb3VycygpID09IDAgPyB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShkLCAnZGQvTU0nKSA6IGQuZ2V0SG91cnMoKSArIFwiaFwiO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEJsb2NrSGlzdG9yeShjb21vZGl0eTpUb2tlbkRFWCwgY3VycmVuY3k6VG9rZW5ERVgsIHBhZ2U6bnVtYmVyID0gLTEsIHBhZ2VzaXplOm51bWJlciA9IC0xLCBmb3JjZTpib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlZhcGFlZURFWC5nZXRCbG9ja0hpc3RvcnkoKVwiLCBjb21vZGl0eS5zeW1ib2wsIHBhZ2UsIHBhZ2VzaXplKTtcbiAgICAgICAgLy8gLy8gZWxhcHNlZCB0aW1lXG4gICAgICAgIC8vIHZhciBzdGFydFRpbWU6RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIC8vIHZhciBkaWZmOm51bWJlcjtcbiAgICAgICAgLy8gdmFyIHNlYzpudW1iZXI7XG5cbiAgICAgICAgdmFyIHNjb3BlOnN0cmluZyA9IHRoaXMuY2Fub25pY2FsU2NvcGUodGhpcy5nZXRTY29wZUZvcihjb21vZGl0eSwgY3VycmVuY3kpKTtcbiAgICAgICAgdmFyIGF1eCA9IG51bGw7XG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcImJsb2NrLWhpc3RvcnkuXCIrc2NvcGUsIHRydWUpO1xuXG4gICAgICAgIGF1eCA9IHRoaXMud2FpdE9yZGVyU3VtbWFyeS50aGVuKGFzeW5jIF8gPT4ge1xuICAgICAgICAgICAgdmFyIGZldGNoQmxvY2tIaXN0b3J5U3RhcnQ6RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgIGlmIChwYWdlc2l6ZSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhZ2VzaXplID0gMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFnZSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IHRoaXMuZ2V0QmxvY2tIaXN0b3J5VG90YWxQYWdlc0ZvcihzY29wZSwgcGFnZXNpemUpO1xuICAgICAgICAgICAgICAgIHBhZ2UgPSBwYWdlcy0zO1xuICAgICAgICAgICAgICAgIGlmIChwYWdlIDwgMCkgcGFnZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTw9cGFnZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5mZXRjaEJsb2NrSGlzdG9yeShzY29wZSwgaSwgcGFnZXNpemUpO1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihfID0+IHtcbiAgICAgICAgICAgICAgICAvLyAvLyBlbGFwc2VkIHRpbWVcbiAgICAgICAgICAgICAgICAvLyB2YXIgZmV0Y2hCbG9ja0hpc3RvcnlUaW1lOkRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIGRpZmYgPSBmZXRjaEJsb2NrSGlzdG9yeVRpbWUuZ2V0VGltZSgpIC0gZmV0Y2hCbG9ja0hpc3RvcnlTdGFydC5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgLy8gc2VjID0gZGlmZiAvIDEwMDA7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIqKiBWYXBhZWVERVguZ2V0QmxvY2tIaXN0b3J5KCkgZmV0Y2hCbG9ja0hpc3RvcnlUaW1lIHNlYzogXCIsIHNlYywgXCIoXCIsZGlmZixcIilcIik7XG5cblxuICAgICAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiYmxvY2staGlzdG9yeS5cIitzY29wZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHZhciBtYXJrZXQ6IE1hcmtldCA9IHRoaXMubWFya2V0KHNjb3BlKTtcbiAgICAgICAgICAgICAgICBtYXJrZXQuYmxvY2tsaXN0ID0gW107XG4gICAgICAgICAgICAgICAgbWFya2V0LnJldmVyc2VibG9ja3MgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgaG9yYSA9IDEwMDAgKiA2MCAqIDYwO1xuICAgICAgICAgICAgICAgIHZhciBob3VyID0gTWF0aC5mbG9vcihub3cuZ2V0VGltZSgpL2hvcmEpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLT5cIiwgaG91cik7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3RfYmxvY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBsYXN0X2hvdXIgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgdmFyIG9yZGVyZWRfYmxvY2tzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBtYXJrZXQuYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJlZF9ibG9ja3MucHVzaChtYXJrZXQuYmxvY2tbaV0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG9yZGVyZWRfYmxvY2tzLnNvcnQoZnVuY3Rpb24oYTpIaXN0b3J5QmxvY2ssIGI6SGlzdG9yeUJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGEuaG91ciA8IGIuaG91cikgcmV0dXJuIC0xMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfSk7XG5cblxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvcmRlcmVkX2Jsb2Nrcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYmxvY2s6SGlzdG9yeUJsb2NrID0gb3JkZXJlZF9ibG9ja3NbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMuYXV4SG91clRvTGFiZWwoYmxvY2suaG91cik7XG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLT5cIiwgaSwgbGFiZWwsIGJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGUgPSBibG9jay5kYXRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlmID0gbm93LmdldFRpbWUoKSAtIGJsb2NrLmRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWVzID0gMzAgKiAyNCAqIGhvcmE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGFwc2VkX21vbnRocyA9IGRpZiAvIG1lcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsYXBzZWRfbW9udGhzID4gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkcm9wcGluZyBibG9jayB0b28gb2xkXCIsIFtibG9jaywgYmxvY2suZGF0ZS50b1VUQ1N0cmluZygpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0X2Jsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlmID0gYmxvY2suaG91ciAtIGxhc3RfYmxvY2suaG91cjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGo9MTsgajxkaWY7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYWJlbF9pID0gdGhpcy5hdXhIb3VyVG9MYWJlbChsYXN0X2Jsb2NrLmhvdXIraik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLT5cIiwgaiwgbGFiZWxfaSwgYmxvY2spO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uaW5pY2FsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpY2UgPSBsYXN0X2Jsb2NrLnByaWNlLmFtb3VudC50b051bWJlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdXggPSBbbGFiZWxfaSwgcHJpY2UsIHByaWNlLCBwcmljZSwgcHJpY2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldC5ibG9ja2xpc3QucHVzaChhdXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldmVyc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnZlcnNlID0gbGFzdF9ibG9jay5pbnZlcnNlLmFtb3VudC50b051bWJlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdXggPSBbbGFiZWxfaSwgaW52ZXJzZSwgaW52ZXJzZSwgaW52ZXJzZSwgaW52ZXJzZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0LnJldmVyc2VibG9ja3MucHVzaChhdXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmo6YW55W107XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbmluaWNhbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IFtsYWJlbF07XG4gICAgICAgICAgICAgICAgICAgIG9iai5wdXNoKGJsb2NrLm1heC5hbW91bnQudG9OdW1iZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIG9iai5wdXNoKGJsb2NrLmVudHJhbmNlLmFtb3VudC50b051bWJlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnB1c2goYmxvY2sucHJpY2UuYW1vdW50LnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgICAgICBvYmoucHVzaChibG9jay5taW4uYW1vdW50LnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXQuYmxvY2tsaXN0LnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV2ZXJzZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IFtsYWJlbF07XG4gICAgICAgICAgICAgICAgICAgIG9iai5wdXNoKDEuMC9ibG9jay5tYXguYW1vdW50LnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgICAgICBvYmoucHVzaCgxLjAvYmxvY2suZW50cmFuY2UuYW1vdW50LnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgICAgICBvYmoucHVzaCgxLjAvYmxvY2sucHJpY2UuYW1vdW50LnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgICAgICBvYmoucHVzaCgxLjAvYmxvY2subWluLmFtb3VudC50b051bWJlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgbWFya2V0LnJldmVyc2VibG9ja3MucHVzaChvYmopO1xuICAgICAgICAgICAgICAgICAgICBsYXN0X2Jsb2NrID0gYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RfYmxvY2sgJiYgaG91ciAhPSBsYXN0X2Jsb2NrLmhvdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpZiA9IGhvdXIgLSBsYXN0X2Jsb2NrLmhvdXI7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGo9MTsgajw9ZGlmOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYWJlbF9pID0gdGhpcy5hdXhIb3VyVG9MYWJlbChsYXN0X2Jsb2NrLmhvdXIraik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbmluaWNhbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpY2UgPSBsYXN0X2Jsb2NrLnByaWNlLmFtb3VudC50b051bWJlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF1eCA9IFtsYWJlbF9pLCBwcmljZSwgcHJpY2UsIHByaWNlLCBwcmljZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXQuYmxvY2tsaXN0LnB1c2goYXV4KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV2ZXJzZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW52ZXJzZSA9IGxhc3RfYmxvY2suaW52ZXJzZS5hbW91bnQudG9OdW1iZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdXggPSBbbGFiZWxfaSwgaW52ZXJzZSwgaW52ZXJzZSwgaW52ZXJzZSwgaW52ZXJzZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXQucmV2ZXJzZWJsb2Nrcy5wdXNoKGF1eCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyAvLyBlbGFwc2VkIHRpbWVcbiAgICAgICAgICAgICAgICAvLyB2YXIgZmlyc3RMZXZlbFRpbWU6RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gZGlmZiA9IGZpcnN0TGV2ZWxUaW1lLmdldFRpbWUoKSAtIGZldGNoQmxvY2tIaXN0b3J5VGltZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgLy8gc2VjID0gZGlmZiAvIDEwMDA7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIqKiBWYXBhZWVERVguZ2V0QmxvY2tIaXN0b3J5KCkgZmlyc3RMZXZlbFRpbWUgc2VjOiBcIiwgc2VjLCBcIihcIixkaWZmLFwiKVwiKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tPlwiLCBtYXJrZXQuYmxvY2tsaXN0KTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm9uQmxvY2tsaXN0Q2hhbmdlLm5leHQobWFya2V0LmJsb2NrbGlzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcmtldDtcbiAgICAgICAgICAgIH0pLnRoZW4obWFya2V0ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcbiAgICAgICAgICAgICAgICAvLyAvLyBlbGFwc2VkIHRpbWVcbiAgICAgICAgICAgICAgICAvLyB2YXIgYWxsTGV2ZWxzU3RhcnQ6RGF0ZSA9IG5ldyBEYXRlKCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBsaW1pdCA9IDI1NjtcbiAgICAgICAgICAgICAgICB2YXIgbGV2ZWxzID0gW21hcmtldC5ibG9ja2xpc3RdO1xuICAgICAgICAgICAgICAgIHZhciByZXZlcnNlcyA9IFttYXJrZXQucmV2ZXJzZWJsb2Nrc107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY3VycmVudCA9IDA7IGxldmVsc1tjdXJyZW50XS5sZW5ndGggPiBsaW1pdDsgY3VycmVudCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnQgLGxldmVsc1tjdXJyZW50XS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3bGV2ZWw6YW55W11bXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3cmV2ZXJzZTphbnlbXVtdID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXJnZWQ6YW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPGxldmVsc1tjdXJyZW50XS5sZW5ndGg7IGkrPTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbm9uaWNhbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZfMTphbnlbXSA9IGxldmVsc1tjdXJyZW50XVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2XzIgPSBsZXZlbHNbY3VycmVudF1baSsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZXJnZWQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHg9MDsgeDw1OyB4KyspIG1lcmdlZFt4XSA9IHZfMVt4XTsgLy8gY2xlYW4gY29weVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZfMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlZFswXSA9IHZfMVswXS5zcGxpdChcIi9cIikubGVuZ3RoID4gMSA/IHZfMVswXSA6IHZfMlswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXJnZWRbMV0gPSBNYXRoLm1heCh2XzFbMV0sIHZfMlsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2VkWzJdID0gdl8xWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlZFszXSA9IHZfMlszXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXJnZWRbNF0gPSBNYXRoLm1pbih2XzFbNF0sIHZfMls0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdsZXZlbC5wdXNoKG1lcmdlZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldmVyc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICB2XzEgPSByZXZlcnNlc1tjdXJyZW50XVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZfMiA9IHJldmVyc2VzW2N1cnJlbnRdW2krMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJnZWQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHg9MDsgeDw1OyB4KyspIG1lcmdlZFt4XSA9IHZfMVt4XTsgLy8gY2xlYW4gY29weVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZfMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlZFswXSA9IHZfMVswXS5zcGxpdChcIi9cIikubGVuZ3RoID4gMSA/IHZfMVswXSA6IHZfMlswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXJnZWRbMV0gPSBNYXRoLm1pbih2XzFbMV0sIHZfMlsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2VkWzJdID0gdl8xWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlZFszXSA9IHZfMlszXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXJnZWRbNF0gPSBNYXRoLm1heCh2XzFbNF0sIHZfMls0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3cmV2ZXJzZS5wdXNoKG1lcmdlZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXZlbHMucHVzaChuZXdsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldmVyc2VzLnB1c2gobmV3cmV2ZXJzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgbWFya2V0LmJsb2NrbGV2ZWxzID0gbGV2ZWxzO1xuICAgICAgICAgICAgICAgIG1hcmtldC5yZXZlcnNlbGV2ZWxzID0gcmV2ZXJzZXM7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgLy8gbWFya2V0LmJsb2NrbGV2ZWxzID0gW21hcmtldC5ibG9ja2xpc3RdO1xuICAgICAgICAgICAgICAgIC8vIG1hcmtldC5yZXZlcnNlbGV2ZWxzID0gW21hcmtldC5yZXZlcnNlYmxvY2tzXTtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIC8vIGVsYXBzZWQgdGltZVxuICAgICAgICAgICAgICAgIC8vIHZhciBhbGxMZXZlbHNUaW1lOkRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIGRpZmYgPSBhbGxMZXZlbHNUaW1lLmdldFRpbWUoKSAtIGFsbExldmVsc1N0YXJ0LmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAvLyBzZWMgPSBkaWZmIC8gMTAwMDtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIioqIFZhcGFlZURFWC5nZXRCbG9ja0hpc3RvcnkoKSBhbGxMZXZlbHNUaW1lIHNlYzogXCIsIHNlYywgXCIoXCIsZGlmZixcIilcIik7ICAgXG4gICAgICAgICAgICAgICAgLy8gLy8gY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIiwgbWFya2V0LmJsb2NrbGV2ZWxzKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBtYXJrZXQuYmxvY2s7XG4gICAgICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcImJsb2NrLWhpc3RvcnkuXCIrc2NvcGUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLm1hcmtldChzY29wZSkgJiYgIWZvcmNlKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLm1hcmtldChzY29wZSkuYmxvY2s7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhdXg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uSGlzdG9yeUNoYW5nZS5uZXh0KHJlc3VsdCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTZWxsT3JkZXJzKGNvbW9kaXR5OlRva2VuREVYLCBjdXJyZW5jeTpUb2tlbkRFWCwgZm9yY2U6Ym9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgdmFyIHNjb3BlOnN0cmluZyA9IHRoaXMuZ2V0U2NvcGVGb3IoY29tb2RpdHksIGN1cnJlbmN5KTtcbiAgICAgICAgdmFyIGNhbm9uaWNhbDpzdHJpbmcgPSB0aGlzLmNhbm9uaWNhbFNjb3BlKHNjb3BlKTtcbiAgICAgICAgdmFyIHJldmVyc2U6c3RyaW5nID0gdGhpcy5pbnZlcnNlU2NvcGUoY2Fub25pY2FsKTtcbiAgICAgICAgdmFyIGF1eCA9IG51bGw7XG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcInNlbGxvcmRlcnNcIiwgdHJ1ZSk7XG4gICAgICAgIGF1eCA9IHRoaXMud2FpdFRva2Vuc0xvYWRlZC50aGVuKGFzeW5jIF8gPT4ge1xuICAgICAgICAgICAgdmFyIG9yZGVycyA9IGF3YWl0IHRoaXMuZmV0Y2hPcmRlcnMoe3Njb3BlOmNhbm9uaWNhbCwgbGltaXQ6MTAwLCBpbmRleF9wb3NpdGlvbjogXCIyXCIsIGtleV90eXBlOiBcImk2NFwifSk7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXRzW2Nhbm9uaWNhbF0gPSB0aGlzLmF1eEFzc2VydFNjb3BlKGNhbm9uaWNhbCk7XG4gICAgICAgICAgICAvLyBpZihzY29wZT09XCJ2cGUudGxvc1wiIHx8IHNjb3BlPT1cImNudC50bG9zXCIpY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICAgICAgLy8gaWYoc2NvcGU9PVwidnBlLnRsb3NcIiB8fCBzY29wZT09XCJjbnQudGxvc1wiKWNvbnNvbGUubG9nKFwiU2VsbCBjcnVkbzpcIiwgb3JkZXJzKTtcbiAgICAgICAgICAgIHZhciBzZWxsOiBPcmRlcltdID0gdGhpcy5hdXhQcm9jZXNzUm93c1RvT3JkZXJzKG9yZGVycy5yb3dzKTtcbiAgICAgICAgICAgIHNlbGwuc29ydChmdW5jdGlvbihhOk9yZGVyLCBiOk9yZGVyKSB7XG4gICAgICAgICAgICAgICAgaWYoYS5wcmljZS5hbW91bnQuaXNMZXNzVGhhbihiLnByaWNlLmFtb3VudCkpIHJldHVybiAtMTE7XG4gICAgICAgICAgICAgICAgaWYoYS5wcmljZS5hbW91bnQuaXNHcmVhdGVyVGhhbihiLnByaWNlLmFtb3VudCkpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBpZihzY29wZT09XCJ2cGUudGxvc1wiIHx8IHNjb3BlPT1cImNudC50bG9zXCIpY29uc29sZS5sb2coXCJzb3J0ZWQ6XCIsIHNlbGwpO1xuICAgICAgICAgICAgLy8gZ3JvdXBpbmcgdG9nZXRoZXIgb3JkZXJzIHdpdGggdGhlIHNhbWUgcHJpY2UuXG4gICAgICAgICAgICB2YXIgbGlzdDogT3JkZXJSb3dbXSA9IFtdO1xuICAgICAgICAgICAgdmFyIHJvdzogT3JkZXJSb3c7XG4gICAgICAgICAgICBpZiAoc2VsbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VsbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3JkZXI6IE9yZGVyID0gc2VsbFtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93ID0gbGlzdFtsaXN0Lmxlbmd0aC0xXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cucHJpY2UuYW1vdW50LmVxKG9yZGVyLnByaWNlLmFtb3VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cudG90YWwuYW1vdW50ID0gcm93LnRvdGFsLmFtb3VudC5wbHVzKG9yZGVyLnRvdGFsLmFtb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnRlbG9zLmFtb3VudCA9IHJvdy50ZWxvcy5hbW91bnQucGx1cyhvcmRlci50ZWxvcy5hbW91bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5vd25lcnNbb3JkZXIub3duZXJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cub3JkZXJzLnB1c2gob3JkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3cgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHI6IG9yZGVyLnByaWNlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogb3JkZXIucHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IG9yZGVyLnRvdGFsLmNsb25lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWxvczogb3JkZXIudGVsb3MuY2xvbmUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVyc2U6IG9yZGVyLmludmVyc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdW06IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdW10ZWxvczogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyczoge31cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJvdy5vd25lcnNbb3JkZXIub3duZXJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcm93Lm9yZGVycy5wdXNoKG9yZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc3VtID0gbmV3IEJpZ051bWJlcigwKTtcbiAgICAgICAgICAgIHZhciBzdW10ZWxvcyA9IG5ldyBCaWdOdW1iZXIoMCk7XG4gICAgICAgICAgICBmb3IgKHZhciBqIGluIGxpc3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JkZXJfcm93ID0gbGlzdFtqXTtcbiAgICAgICAgICAgICAgICBzdW10ZWxvcyA9IHN1bXRlbG9zLnBsdXMob3JkZXJfcm93LnRlbG9zLmFtb3VudCk7XG4gICAgICAgICAgICAgICAgc3VtID0gc3VtLnBsdXMob3JkZXJfcm93LnRvdGFsLmFtb3VudCk7XG4gICAgICAgICAgICAgICAgb3JkZXJfcm93LnN1bXRlbG9zID0gbmV3IEFzc2V0REVYKHN1bXRlbG9zLCBvcmRlcl9yb3cudGVsb3MudG9rZW4pO1xuICAgICAgICAgICAgICAgIG9yZGVyX3Jvdy5zdW0gPSBuZXcgQXNzZXRERVgoc3VtLCBvcmRlcl9yb3cudG90YWwudG9rZW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9tYXJrZXRzW2Nhbm9uaWNhbF0ub3JkZXJzLnNlbGwgPSBsaXN0O1xuICAgICAgICAgICAgLy8gaWYoc2NvcGU9PVwidnBlLnRsb3NcIiB8fCBzY29wZT09XCJjbnQudGxvc1wiKWNvbnNvbGUubG9nKFwiU2VsbCBmaW5hbDpcIiwgdGhpcy5zY29wZXNbc2NvcGVdLm9yZGVycy5zZWxsKTtcbiAgICAgICAgICAgIC8vIGlmKHNjb3BlPT1cInZwZS50bG9zXCIgfHwgc2NvcGU9PVwiY250LnRsb3NcIiljb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS1cIik7XG5cbiAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwic2VsbG9yZGVyc1wiLCBmYWxzZSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLm9yZGVycy5zZWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5fbWFya2V0c1tjYW5vbmljYWxdICYmICFmb3JjZSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLm9yZGVycy5zZWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGdldEJ1eU9yZGVycyhjb21vZGl0eTpUb2tlbkRFWCwgY3VycmVuY3k6VG9rZW5ERVgsIGZvcmNlOmJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHZhciBzY29wZTpzdHJpbmcgPSB0aGlzLmdldFNjb3BlRm9yKGNvbW9kaXR5LCBjdXJyZW5jeSk7XG4gICAgICAgIHZhciBjYW5vbmljYWw6c3RyaW5nID0gdGhpcy5jYW5vbmljYWxTY29wZShzY29wZSk7XG4gICAgICAgIHZhciByZXZlcnNlOnN0cmluZyA9IHRoaXMuaW52ZXJzZVNjb3BlKGNhbm9uaWNhbCk7XG5cblxuICAgICAgICB2YXIgYXV4ID0gbnVsbDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiYnV5b3JkZXJzXCIsIHRydWUpO1xuICAgICAgICBhdXggPSB0aGlzLndhaXRUb2tlbnNMb2FkZWQudGhlbihhc3luYyBfID0+IHtcbiAgICAgICAgICAgIHZhciBvcmRlcnMgPSBhd2FpdCBhd2FpdCB0aGlzLmZldGNoT3JkZXJzKHtzY29wZTpyZXZlcnNlLCBsaW1pdDo1MCwgaW5kZXhfcG9zaXRpb246IFwiMlwiLCBrZXlfdHlwZTogXCJpNjRcIn0pO1xuICAgICAgICAgICAgdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdID0gdGhpcy5hdXhBc3NlcnRTY29wZShjYW5vbmljYWwpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJCdXkgY3J1ZG86XCIsIG9yZGVycyk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgYnV5OiBPcmRlcltdID0gdGhpcy5hdXhQcm9jZXNzUm93c1RvT3JkZXJzKG9yZGVycy5yb3dzKTtcbiAgICAgICAgICAgIGJ1eS5zb3J0KGZ1bmN0aW9uKGE6T3JkZXIsIGI6T3JkZXIpe1xuICAgICAgICAgICAgICAgIGlmKGEucHJpY2UuYW1vdW50LmlzTGVzc1RoYW4oYi5wcmljZS5hbW91bnQpKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICBpZihhLnByaWNlLmFtb3VudC5pc0dyZWF0ZXJUaGFuKGIucHJpY2UuYW1vdW50KSkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYnV5IHNvcnRlYWRvOlwiLCBidXkpO1xuXG4gICAgICAgICAgICAvLyBncm91cGluZyB0b2dldGhlciBvcmRlcnMgd2l0aCB0aGUgc2FtZSBwcmljZS5cbiAgICAgICAgICAgIHZhciBsaXN0OiBPcmRlclJvd1tdID0gW107XG4gICAgICAgICAgICB2YXIgcm93OiBPcmRlclJvdztcbiAgICAgICAgICAgIGlmIChidXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPGJ1eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3JkZXI6IE9yZGVyID0gYnV5W2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cgPSBsaXN0W2xpc3QubGVuZ3RoLTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5wcmljZS5hbW91bnQuZXEob3JkZXIucHJpY2UuYW1vdW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy50b3RhbC5hbW91bnQgPSByb3cudG90YWwuYW1vdW50LnBsdXMob3JkZXIudG90YWwuYW1vdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cudGVsb3MuYW1vdW50ID0gcm93LnRlbG9zLmFtb3VudC5wbHVzKG9yZGVyLnRlbG9zLmFtb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Lm93bmVyc1tvcmRlci5vd25lcl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5vcmRlcnMucHVzaChvcmRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cjogb3JkZXIucHJpY2UudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBvcmRlci5wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogb3JkZXIudG90YWwuY2xvbmUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbG9zOiBvcmRlci50ZWxvcy5jbG9uZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJzZTogb3JkZXIuaW52ZXJzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bXRlbG9zOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJzOiB7fVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcm93Lm93bmVyc1tvcmRlci5vd25lcl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByb3cub3JkZXJzLnB1c2gob3JkZXIpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gocm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHZhciBzdW0gPSBuZXcgQmlnTnVtYmVyKDApO1xuICAgICAgICAgICAgdmFyIHN1bXRlbG9zID0gbmV3IEJpZ051bWJlcigwKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogaW4gbGlzdCkge1xuICAgICAgICAgICAgICAgIHZhciBvcmRlcl9yb3cgPSBsaXN0W2pdO1xuICAgICAgICAgICAgICAgIHN1bXRlbG9zID0gc3VtdGVsb3MucGx1cyhvcmRlcl9yb3cudGVsb3MuYW1vdW50KTtcbiAgICAgICAgICAgICAgICBzdW0gPSBzdW0ucGx1cyhvcmRlcl9yb3cudG90YWwuYW1vdW50KTtcbiAgICAgICAgICAgICAgICBvcmRlcl9yb3cuc3VtdGVsb3MgPSBuZXcgQXNzZXRERVgoc3VtdGVsb3MsIG9yZGVyX3Jvdy50ZWxvcy50b2tlbik7XG4gICAgICAgICAgICAgICAgb3JkZXJfcm93LnN1bSA9IG5ldyBBc3NldERFWChzdW0sIG9yZGVyX3Jvdy50b3RhbC50b2tlbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX21hcmtldHNbY2Fub25pY2FsXS5vcmRlcnMuYnV5ID0gbGlzdDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQnV5IGZpbmFsOlwiLCB0aGlzLnNjb3Blc1tzY29wZV0ub3JkZXJzLmJ1eSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcImJ1eW9yZGVyc1wiLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLm9yZGVycy5idXk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9tYXJrZXRzW2Nhbm9uaWNhbF0gJiYgIWZvcmNlKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9tYXJrZXRzW2Nhbm9uaWNhbF0ub3JkZXJzLmJ1eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF1eDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBnZXRPcmRlclN1bW1hcnkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJWYXBhZWVERVguZ2V0T3JkZXJTdW1tYXJ5KClcIik7XG4gICAgICAgIHZhciB0YWJsZXMgPSBhd2FpdCB0aGlzLmZldGNoT3JkZXJTdW1tYXJ5KCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSBpbiB0YWJsZXMucm93cykge1xuICAgICAgICAgICAgdmFyIHNjb3BlOnN0cmluZyA9IHRhYmxlcy5yb3dzW2ldLnRhYmxlO1xuICAgICAgICAgICAgdmFyIGNhbm9uaWNhbCA9IHRoaXMuY2Fub25pY2FsU2NvcGUoc2NvcGUpO1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoc2NvcGUgPT0gY2Fub25pY2FsLCBcIkVSUk9SOiBzY29wZSBpcyBub3QgY2Fub25pY2FsXCIsIHNjb3BlLCBbaSwgdGFibGVzXSk7XG4gICAgICAgICAgICB2YXIgY29tb2RpdHkgPSBzY29wZS5zcGxpdChcIi5cIilbMF0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW5jeSA9IHNjb3BlLnNwbGl0KFwiLlwiKVsxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgdGhpcy5fbWFya2V0c1tzY29wZV0gPSB0aGlzLmF1eEFzc2VydFNjb3BlKHNjb3BlKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSwgdGFibGVzLnJvd3NbaV0pO1xuXG4gICAgICAgICAgICB0aGlzLl9tYXJrZXRzW3Njb3BlXS5oZWFkZXIuc2VsbC50b3RhbCA9IG5ldyBBc3NldERFWCh0YWJsZXMucm93c1tpXS5zdXBwbHkudG90YWwsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fbWFya2V0c1tzY29wZV0uaGVhZGVyLnNlbGwub3JkZXJzID0gdGFibGVzLnJvd3NbaV0uc3VwcGx5Lm9yZGVycztcbiAgICAgICAgICAgIHRoaXMuX21hcmtldHNbc2NvcGVdLmhlYWRlci5idXkudG90YWwgPSBuZXcgQXNzZXRERVgodGFibGVzLnJvd3NbaV0uZGVtYW5kLnRvdGFsLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX21hcmtldHNbc2NvcGVdLmhlYWRlci5idXkub3JkZXJzID0gdGFibGVzLnJvd3NbaV0uZGVtYW5kLm9yZGVycztcbiAgICAgICAgICAgIHRoaXMuX21hcmtldHNbc2NvcGVdLmRlYWxzID0gdGFibGVzLnJvd3NbaV0uZGVhbHM7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXRzW3Njb3BlXS5ibG9ja3MgPSB0YWJsZXMucm93c1tpXS5ibG9ja3M7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0T3JkZXJTdW1tYXJ5KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VGFibGVTdW1tYXJ5KGNvbW9kaXR5OlRva2VuREVYLCBjdXJyZW5jeTpUb2tlbkRFWCwgZm9yY2U6Ym9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxNYXJrZXRTdW1tYXJ5PiB7XG4gICAgICAgIHZhciBzY29wZTpzdHJpbmcgPSB0aGlzLmdldFNjb3BlRm9yKGNvbW9kaXR5LCBjdXJyZW5jeSk7XG4gICAgICAgIHZhciBjYW5vbmljYWw6c3RyaW5nID0gdGhpcy5jYW5vbmljYWxTY29wZShzY29wZSk7XG4gICAgICAgIHZhciBpbnZlcnNlOnN0cmluZyA9IHRoaXMuaW52ZXJzZVNjb3BlKGNhbm9uaWNhbCk7XG5cbiAgICAgICAgdmFyIFpFUk9fQ09NT0RJVFkgPSBcIjAuMDAwMDAwMDAgXCIgKyBjb21vZGl0eS5zeW1ib2w7XG4gICAgICAgIHZhciBaRVJPX0NVUlJFTkNZID0gXCIwLjAwMDAwMDAwIFwiICsgY3VycmVuY3kuc3ltYm9sO1xuXG4gICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwic3VtbWFyeS5cIitjYW5vbmljYWwsIHRydWUpO1xuICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcInN1bW1hcnkuXCIraW52ZXJzZSwgdHJ1ZSk7XG4gICAgICAgIHZhciBhdXggPSBudWxsO1xuICAgICAgICB2YXIgcmVzdWx0Ok1hcmtldFN1bW1hcnkgPSBudWxsO1xuICAgICAgICBhdXggPSB0aGlzLndhaXRUb2tlbnNMb2FkZWQudGhlbihhc3luYyBfID0+IHtcbiAgICAgICAgICAgIHZhciBzdW1tYXJ5ID0gYXdhaXQgdGhpcy5mZXRjaFN1bW1hcnkoY2Fub25pY2FsKTtcbiAgICAgICAgICAgIC8vIGlmKHNjb3BlPT1cIm9saXZlLnRsb3NcIiljb25zb2xlLmxvZyhzY29wZSwgXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgICAgICAvLyBpZihzY29wZT09XCJvbGl2ZS50bG9zXCIpY29uc29sZS5sb2coXCJTdW1tYXJ5IGNydWRvOlwiLCBzdW1tYXJ5LnJvd3MpO1xuXG4gICAgICAgICAgICB0aGlzLl9tYXJrZXRzW2Nhbm9uaWNhbF0gPSB0aGlzLmF1eEFzc2VydFNjb3BlKGNhbm9uaWNhbCk7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXRzW2Nhbm9uaWNhbF0uc3VtbWFyeSA9IHtcbiAgICAgICAgICAgICAgICBzY29wZTogY2Fub25pY2FsLFxuICAgICAgICAgICAgICAgIHByaWNlOiBuZXcgQXNzZXRERVgobmV3IEJpZ051bWJlcigwKSwgY3VycmVuY3kpLFxuICAgICAgICAgICAgICAgIHByaWNlXzI0aF9hZ286IG5ldyBBc3NldERFWChuZXcgQmlnTnVtYmVyKDApLCBjdXJyZW5jeSksXG4gICAgICAgICAgICAgICAgaW52ZXJzZTogbmV3IEFzc2V0REVYKG5ldyBCaWdOdW1iZXIoMCksIGNvbW9kaXR5KSxcbiAgICAgICAgICAgICAgICBpbnZlcnNlXzI0aF9hZ286IG5ldyBBc3NldERFWChuZXcgQmlnTnVtYmVyKDApLCBjb21vZGl0eSksXG4gICAgICAgICAgICAgICAgdm9sdW1lOiBuZXcgQXNzZXRERVgobmV3IEJpZ051bWJlcigwKSwgY3VycmVuY3kpLFxuICAgICAgICAgICAgICAgIGFtb3VudDogbmV3IEFzc2V0REVYKG5ldyBCaWdOdW1iZXIoMCksIGNvbW9kaXR5KSxcbiAgICAgICAgICAgICAgICBwZXJjZW50OiAwLjMsXG4gICAgICAgICAgICAgICAgcmVjb3Jkczogc3VtbWFyeS5yb3dzXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgbm93OkRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdmFyIG5vd19zZWM6IG51bWJlciA9IE1hdGguZmxvb3Iobm93LmdldFRpbWUoKSAvIDEwMDApO1xuICAgICAgICAgICAgdmFyIG5vd19ob3VyOiBudW1iZXIgPSBNYXRoLmZsb29yKG5vd19zZWMgLyAzNjAwKTtcbiAgICAgICAgICAgIHZhciBzdGFydF9ob3VyID0gbm93X2hvdXIgLSAyMztcbiAgICAgICAgICAgIC8vIGlmKGNhbm9uaWNhbD09XCJhY29ybi50bG9zXCIpY29uc29sZS5sb2coXCJub3dfaG91cjpcIiwgbm93X2hvdXIpO1xuICAgICAgICAgICAgLy8gaWYoY2Fub25pY2FsPT1cImFjb3JuLnRsb3NcIiljb25zb2xlLmxvZyhcInN0YXJ0X2hvdXI6XCIsIHN0YXJ0X2hvdXIpO1xuXG4gICAgICAgICAgICAvLyBwcm9jZXNvIGxvcyBkYXRvcyBjcnVkb3MgXG4gICAgICAgICAgICB2YXIgcHJpY2UgPSBaRVJPX0NVUlJFTkNZO1xuICAgICAgICAgICAgdmFyIGludmVyc2UgPSBaRVJPX0NPTU9ESVRZO1xuICAgICAgICAgICAgdmFyIGNydWRlID0ge307XG4gICAgICAgICAgICB2YXIgbGFzdF9oaCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8c3VtbWFyeS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhoID0gc3VtbWFyeS5yb3dzW2ldLmhvdXI7XG4gICAgICAgICAgICAgICAgaWYgKHN1bW1hcnkucm93c1tpXS5sYWJlbCA9PSBcImxhc3RvbmVcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBwcmljZSA9IHN1bW1hcnkucm93c1tpXS5wcmljZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjcnVkZVtoaF0gPSBzdW1tYXJ5LnJvd3NbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0X2hoIDwgaGggJiYgaGggPCBzdGFydF9ob3VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2hoID0gaGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9IChzY29wZSA9PSBjYW5vbmljYWwpID8gc3VtbWFyeS5yb3dzW2ldLnByaWNlIDogc3VtbWFyeS5yb3dzW2ldLmludmVyc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlID0gKHNjb3BlID09IGNhbm9uaWNhbCkgPyBzdW1tYXJ5LnJvd3NbaV0uaW52ZXJzZSA6IHN1bW1hcnkucm93c1tpXS5wcmljZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmKGNhbm9uaWNhbD09XCJhY29ybi50bG9zXCIpY29uc29sZS5sb2coXCJoaDpcIiwgaGgsIFwibGFzdF9oaDpcIiwgbGFzdF9oaCwgXCJwcmljZTpcIiwgcHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZihjYW5vbmljYWw9PVwiYWNvcm4udGxvc1wiKWNvbnNvbGUubG9nKFwiY3J1ZGU6XCIsIGNydWRlKTtcbiAgICAgICAgICAgIC8vIGlmKGNhbm9uaWNhbD09XCJhY29ybi50bG9zXCIpY29uc29sZS5sb2coXCJwcmljZTpcIiwgcHJpY2UpO1xuXG4gICAgICAgICAgICAvLyBnZW5lcm8gdW5hIGVudHJhZGEgcG9yIGNhZGEgdW5hIGRlIGxhcyDDg8K6bHRpbWFzIDI0IGhvcmFzXG4gICAgICAgICAgICB2YXIgbGFzdF8yNGggPSB7fTtcbiAgICAgICAgICAgIHZhciB2b2x1bWUgPSBuZXcgQXNzZXRERVgoWkVST19DVVJSRU5DWSwgdGhpcyk7XG4gICAgICAgICAgICB2YXIgYW1vdW50ID0gbmV3IEFzc2V0REVYKFpFUk9fQ09NT0RJVFksIHRoaXMpO1xuICAgICAgICAgICAgdmFyIHByaWNlX2Fzc2V0ID0gbmV3IEFzc2V0REVYKHByaWNlLCB0aGlzKTtcbiAgICAgICAgICAgIHZhciBpbnZlcnNlX2Fzc2V0ID0gbmV3IEFzc2V0REVYKGludmVyc2UsIHRoaXMpO1xuICAgICAgICAgICAgLy8gaWYoY2Fub25pY2FsPT1cImNudC50bG9zXCIpY29uc29sZS5sb2coXCJwcmljZSBcIiwgcHJpY2UpO1xuICAgICAgICAgICAgdmFyIG1heF9wcmljZSA9IHByaWNlX2Fzc2V0LmNsb25lKCk7XG4gICAgICAgICAgICB2YXIgbWluX3ByaWNlID0gcHJpY2VfYXNzZXQuY2xvbmUoKTtcbiAgICAgICAgICAgIHZhciBtYXhfaW52ZXJzZSA9IGludmVyc2VfYXNzZXQuY2xvbmUoKTtcbiAgICAgICAgICAgIHZhciBtaW5faW52ZXJzZSA9IGludmVyc2VfYXNzZXQuY2xvbmUoKTtcbiAgICAgICAgICAgIHZhciBwcmljZV9mc3Q6QXNzZXRERVggPSBudWxsO1xuICAgICAgICAgICAgdmFyIGludmVyc2VfZnN0OkFzc2V0REVYID0gbnVsbDtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTwyNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBzdGFydF9ob3VyK2k7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRfZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnQgKiAzNjAwICogMTAwMCk7XG4gICAgICAgICAgICAgICAgdmFyIG51ZXZvOmFueSA9IGNydWRlW2N1cnJlbnRdO1xuICAgICAgICAgICAgICAgIGlmIChudWV2bykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc19wcmljZSA9IChzY29wZSA9PSBjYW5vbmljYWwpID8gbnVldm8ucHJpY2UgOiBudWV2by5pbnZlcnNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc19pbnZlcnNlID0gKHNjb3BlID09IGNhbm9uaWNhbCkgPyBudWV2by5pbnZlcnNlIDogbnVldm8ucHJpY2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzX3ZvbHVtZSA9IChzY29wZSA9PSBjYW5vbmljYWwpID8gbnVldm8udm9sdW1lIDogbnVldm8uYW1vdW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgc19hbW91bnQgPSAoc2NvcGUgPT0gY2Fub25pY2FsKSA/IG51ZXZvLmFtb3VudCA6IG51ZXZvLnZvbHVtZTtcbiAgICAgICAgICAgICAgICAgICAgbnVldm8ucHJpY2UgPSBzX3ByaWNlO1xuICAgICAgICAgICAgICAgICAgICBudWV2by5pbnZlcnNlID0gc19pbnZlcnNlO1xuICAgICAgICAgICAgICAgICAgICBudWV2by52b2x1bWUgPSBzX3ZvbHVtZTtcbiAgICAgICAgICAgICAgICAgICAgbnVldm8uYW1vdW50ID0gc19hbW91bnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVldm8gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5hdXhHZXRMYWJlbEZvckhvdXIoY3VycmVudCAlIDI0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBwcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVyc2U6IGludmVyc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2x1bWU6IFpFUk9fQ1VSUkVOQ1ksXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IFpFUk9fQ09NT0RJVFksXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBjdXJyZW50X2RhdGUudG9JU09TdHJpbmcoKS5zcGxpdChcIi5cIilbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VyOiBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhc3RfMjRoW2N1cnJlbnRdID0gY3J1ZGVbY3VycmVudF0gfHwgbnVldm87XG4gICAgICAgICAgICAgICAgLy8gaWYoY2Fub25pY2FsPT1cImFjb3JuLnRsb3NcIiljb25zb2xlLmxvZyhcImN1cnJlbnRfZGF0ZTpcIiwgY3VycmVudF9kYXRlLnRvSVNPU3RyaW5nKCksIGN1cnJlbnQsIGxhc3RfMjRoW2N1cnJlbnRdKTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbmluaWNhbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgcHJpY2UgPSBsYXN0XzI0aFtjdXJyZW50XS5wcmljZTtcbiAgICAgICAgICAgICAgICB2YXIgdm9sID0gbmV3IEFzc2V0REVYKGxhc3RfMjRoW2N1cnJlbnRdLnZvbHVtZSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQodm9sLnRva2VuLnN5bWJvbCA9PSB2b2x1bWUudG9rZW4uc3ltYm9sLCBcIkVSUk9SOiBkaWZmZXJlbnQgdG9rZW5zXCIsIHZvbC5zdHIsIHZvbHVtZS5zdHIpO1xuICAgICAgICAgICAgICAgIHZvbHVtZS5hbW91bnQgPSB2b2x1bWUuYW1vdW50LnBsdXModm9sLmFtb3VudCk7XG4gICAgICAgICAgICAgICAgaWYgKHByaWNlICE9IFpFUk9fQ1VSUkVOQ1kgJiYgIXByaWNlX2ZzdCkge1xuICAgICAgICAgICAgICAgICAgICBwcmljZV9mc3QgPSBuZXcgQXNzZXRERVgocHJpY2UsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmljZV9hc3NldCA9IG5ldyBBc3NldERFWChwcmljZSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQocHJpY2VfYXNzZXQudG9rZW4uc3ltYm9sID09IG1heF9wcmljZS50b2tlbi5zeW1ib2wsIFwiRVJST1I6IGRpZmZlcmVudCB0b2tlbnNcIiwgcHJpY2VfYXNzZXQuc3RyLCBtYXhfcHJpY2Uuc3RyKTtcbiAgICAgICAgICAgICAgICBpZiAocHJpY2VfYXNzZXQuYW1vdW50LmlzR3JlYXRlclRoYW4obWF4X3ByaWNlLmFtb3VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4X3ByaWNlID0gcHJpY2VfYXNzZXQuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQocHJpY2VfYXNzZXQudG9rZW4uc3ltYm9sID09IG1pbl9wcmljZS50b2tlbi5zeW1ib2wsIFwiRVJST1I6IGRpZmZlcmVudCB0b2tlbnNcIiwgcHJpY2VfYXNzZXQuc3RyLCBtaW5fcHJpY2Uuc3RyKTtcbiAgICAgICAgICAgICAgICBpZiAobWluX3ByaWNlLmFtb3VudC5pc0VxdWFsVG8oMCkgfHwgcHJpY2VfYXNzZXQuYW1vdW50LmlzTGVzc1RoYW4obWluX3ByaWNlLmFtb3VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluX3ByaWNlID0gcHJpY2VfYXNzZXQuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyByZXZlcnNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICBpbnZlcnNlID0gbGFzdF8yNGhbY3VycmVudF0uaW52ZXJzZTtcbiAgICAgICAgICAgICAgICB2YXIgYW1vID0gbmV3IEFzc2V0REVYKGxhc3RfMjRoW2N1cnJlbnRdLmFtb3VudCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoYW1vLnRva2VuLnN5bWJvbCA9PSBhbW91bnQudG9rZW4uc3ltYm9sLCBcIkVSUk9SOiBkaWZmZXJlbnQgdG9rZW5zXCIsIGFtby5zdHIsIGFtb3VudC5zdHIpO1xuICAgICAgICAgICAgICAgIGFtb3VudC5hbW91bnQgPSBhbW91bnQuYW1vdW50LnBsdXMoYW1vLmFtb3VudCk7XG4gICAgICAgICAgICAgICAgaWYgKGludmVyc2UgIT0gWkVST19DT01PRElUWSAmJiAhaW52ZXJzZV9mc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJzZV9mc3QgPSBuZXcgQXNzZXRERVgoaW52ZXJzZSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGludmVyc2VfYXNzZXQgPSBuZXcgQXNzZXRERVgoaW52ZXJzZSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoaW52ZXJzZV9hc3NldC50b2tlbi5zeW1ib2wgPT0gbWF4X2ludmVyc2UudG9rZW4uc3ltYm9sLCBcIkVSUk9SOiBkaWZmZXJlbnQgdG9rZW5zXCIsIGludmVyc2VfYXNzZXQuc3RyLCBtYXhfaW52ZXJzZS5zdHIpO1xuICAgICAgICAgICAgICAgIGlmIChpbnZlcnNlX2Fzc2V0LmFtb3VudC5pc0dyZWF0ZXJUaGFuKG1heF9pbnZlcnNlLmFtb3VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4X2ludmVyc2UgPSBpbnZlcnNlX2Fzc2V0LmNsb25lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGludmVyc2VfYXNzZXQudG9rZW4uc3ltYm9sID09IG1pbl9pbnZlcnNlLnRva2VuLnN5bWJvbCwgXCJFUlJPUjogZGlmZmVyZW50IHRva2Vuc1wiLCBpbnZlcnNlX2Fzc2V0LnN0ciwgbWluX2ludmVyc2Uuc3RyKTtcbiAgICAgICAgICAgICAgICBpZiAobWluX2ludmVyc2UuYW1vdW50LmlzRXF1YWxUbygwKSB8fCBpbnZlcnNlX2Fzc2V0LmFtb3VudC5pc0xlc3NUaGFuKG1pbl9pbnZlcnNlLmFtb3VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluX2ludmVyc2UgPSBpbnZlcnNlX2Fzc2V0LmNsb25lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY29uaW5pY2FsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIGlmICghcHJpY2VfZnN0KSB7XG4gICAgICAgICAgICAgICAgcHJpY2VfZnN0ID0gbmV3IEFzc2V0REVYKGxhc3RfMjRoW3N0YXJ0X2hvdXJdLnByaWNlLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsYXN0X3ByaWNlID0gIG5ldyBBc3NldERFWChsYXN0XzI0aFtub3dfaG91cl0ucHJpY2UsIHRoaXMpO1xuICAgICAgICAgICAgdmFyIGRpZmYgPSBsYXN0X3ByaWNlLmNsb25lKCk7XG4gICAgICAgICAgICAvLyBkaWZmLmFtb3VudCBcbiAgICAgICAgICAgIGRpZmYuYW1vdW50ID0gbGFzdF9wcmljZS5hbW91bnQubWludXMocHJpY2VfZnN0LmFtb3VudCk7XG4gICAgICAgICAgICB2YXIgcmF0aW86bnVtYmVyID0gMDtcbiAgICAgICAgICAgIGlmIChwcmljZV9mc3QuYW1vdW50LnRvTnVtYmVyKCkgIT0gMCkge1xuICAgICAgICAgICAgICAgIHJhdGlvID0gZGlmZi5hbW91bnQuZGl2aWRlZEJ5KHByaWNlX2ZzdC5hbW91bnQpLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcGVyY2VudCA9IE1hdGguZmxvb3IocmF0aW8gKiAxMDAwMCkgLyAxMDA7XG5cbiAgICAgICAgICAgIC8vIHJldmVyc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgaWYgKCFpbnZlcnNlX2ZzdCkge1xuICAgICAgICAgICAgICAgIGludmVyc2VfZnN0ID0gbmV3IEFzc2V0REVYKGxhc3RfMjRoW3N0YXJ0X2hvdXJdLmludmVyc2UsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxhc3RfaW52ZXJzZSA9ICBuZXcgQXNzZXRERVgobGFzdF8yNGhbbm93X2hvdXJdLmludmVyc2UsIHRoaXMpO1xuICAgICAgICAgICAgdmFyIGlkaWZmID0gbGFzdF9pbnZlcnNlLmNsb25lKCk7XG4gICAgICAgICAgICAvLyBkaWZmLmFtb3VudCBcbiAgICAgICAgICAgIGlkaWZmLmFtb3VudCA9IGxhc3RfaW52ZXJzZS5hbW91bnQubWludXMoaW52ZXJzZV9mc3QuYW1vdW50KTtcbiAgICAgICAgICAgIHJhdGlvID0gMDtcbiAgICAgICAgICAgIGlmIChpbnZlcnNlX2ZzdC5hbW91bnQudG9OdW1iZXIoKSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgcmF0aW8gPSBkaWZmLmFtb3VudC5kaXZpZGVkQnkoaW52ZXJzZV9mc3QuYW1vdW50KS50b051bWJlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGlwZXJjZW50ID0gTWF0aC5mbG9vcihyYXRpbyAqIDEwMDAwKSAvIDEwMDtcbiAgICAgICAgICAgIC8vIGlmKGNhbm9uaWNhbD09XCJhY29ybi50bG9zXCIpY29uc29sZS5sb2coXCJwcmljZV9mc3Q6XCIsIHByaWNlX2ZzdC5zdHIpO1xuICAgICAgICAgICAgLy8gaWYoY2Fub25pY2FsPT1cImFjb3JuLnRsb3NcIiljb25zb2xlLmxvZyhcImludmVyc2VfZnN0OlwiLCBpbnZlcnNlX2ZzdC5zdHIpO1xuXG4gICAgICAgICAgICAvLyBpZihjYW5vbmljYWw9PVwiYWNvcm4udGxvc1wiKWNvbnNvbGUubG9nKFwibGFzdF8yNGg6XCIsIFtsYXN0XzI0aF0pO1xuICAgICAgICAgICAgLy8gaWYoY2Fub25pY2FsPT1cImFjb3JuLnRsb3NcIiljb25zb2xlLmxvZyhcImRpZmY6XCIsIGRpZmYudG9TdHJpbmcoOCkpO1xuICAgICAgICAgICAgLy8gaWYoY2Fub25pY2FsPT1cImFjb3JuLnRsb3NcIiljb25zb2xlLmxvZyhcInBlcmNlbnQ6XCIsIHBlcmNlbnQpO1xuICAgICAgICAgICAgLy8gaWYoY2Fub25pY2FsPT1cImFjb3JuLnRsb3NcIiljb25zb2xlLmxvZyhcInJhdGlvOlwiLCByYXRpbyk7XG4gICAgICAgICAgICAvLyBpZihjYW5vbmljYWw9PVwiYWNvcm4udGxvc1wiKWNvbnNvbGUubG9nKFwidm9sdW1lOlwiLCB2b2x1bWUuc3RyKTtcblxuICAgICAgICAgICAgdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLnN1bW1hcnkucHJpY2UgPSBsYXN0X3ByaWNlO1xuICAgICAgICAgICAgdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLnN1bW1hcnkuaW52ZXJzZSA9IGxhc3RfaW52ZXJzZTtcbiAgICAgICAgICAgIHRoaXMuX21hcmtldHNbY2Fub25pY2FsXS5zdW1tYXJ5LnByaWNlXzI0aF9hZ28gPSBwcmljZV9mc3QgfHwgbGFzdF9wcmljZTtcbiAgICAgICAgICAgIHRoaXMuX21hcmtldHNbY2Fub25pY2FsXS5zdW1tYXJ5LmludmVyc2VfMjRoX2FnbyA9IGludmVyc2VfZnN0O1xuICAgICAgICAgICAgdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLnN1bW1hcnkucGVyY2VudF9zdHIgPSAoaXNOYU4ocGVyY2VudCkgPyAwIDogcGVyY2VudCkgKyBcIiVcIjtcbiAgICAgICAgICAgIHRoaXMuX21hcmtldHNbY2Fub25pY2FsXS5zdW1tYXJ5LnBlcmNlbnQgPSBpc05hTihwZXJjZW50KSA/IDAgOiBwZXJjZW50O1xuICAgICAgICAgICAgdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLnN1bW1hcnkuaXBlcmNlbnRfc3RyID0gKGlzTmFOKGlwZXJjZW50KSA/IDAgOiBpcGVyY2VudCkgKyBcIiVcIjtcbiAgICAgICAgICAgIHRoaXMuX21hcmtldHNbY2Fub25pY2FsXS5zdW1tYXJ5LmlwZXJjZW50ID0gaXNOYU4oaXBlcmNlbnQpID8gMCA6IGlwZXJjZW50O1xuICAgICAgICAgICAgdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLnN1bW1hcnkudm9sdW1lID0gdm9sdW1lO1xuICAgICAgICAgICAgdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLnN1bW1hcnkuYW1vdW50ID0gYW1vdW50O1xuICAgICAgICAgICAgdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLnN1bW1hcnkubWluX3ByaWNlID0gbWluX3ByaWNlO1xuICAgICAgICAgICAgdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLnN1bW1hcnkubWF4X3ByaWNlID0gbWF4X3ByaWNlO1xuICAgICAgICAgICAgdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLnN1bW1hcnkubWluX2ludmVyc2UgPSBtaW5faW52ZXJzZTtcbiAgICAgICAgICAgIHRoaXMuX21hcmtldHNbY2Fub25pY2FsXS5zdW1tYXJ5Lm1heF9pbnZlcnNlID0gbWF4X2ludmVyc2U7XG5cbiAgICAgICAgICAgIC8vIGlmKGNhbm9uaWNhbD09XCJhY29ybi50bG9zXCIpY29uc29sZS5sb2coXCJTdW1tYXJ5IGZpbmFsOlwiLCB0aGlzLl9tYXJrZXRzW2Nhbm9uaWNhbF0uc3VtbWFyeSk7XG4gICAgICAgICAgICAvLyBpZihjYW5vbmljYWw9PVwiYWNvcm4udGxvc1wiKWNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJzdW1tYXJ5LlwiK2Nhbm9uaWNhbCwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJzdW1tYXJ5LlwiK2ludmVyc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXRzW2Nhbm9uaWNhbF0uc3VtbWFyeTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX21hcmtldHNbY2Fub25pY2FsXSAmJiAhZm9yY2UpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX21hcmtldHNbY2Fub25pY2FsXS5zdW1tYXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgYXV4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRNYXJrZXRTdW1tYXJ5KCk7XG4gICAgICAgIHRoaXMub25NYXJrZXRTdW1tYXJ5Lm5leHQocmVzdWx0KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFsbFRhYmxlc1N1bWFyaWVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRPcmRlclN1bW1hcnkudGhlbihhc3luYyBfID0+IHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuX21hcmtldHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaS5pbmRleE9mKFwiLlwiKSA9PSAtMSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSB0aGlzLmdldFRhYmxlU3VtbWFyeSh0aGlzLl9tYXJrZXRzW2ldLmNvbW9kaXR5LCB0aGlzLl9tYXJrZXRzW2ldLmN1cnJlbmN5LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oXyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb2tlbnNTdW1tYXJ5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG5cbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQXV4IGZ1bmN0aW9uc1xuICAgIHByaXZhdGUgYXV4UHJvY2Vzc1Jvd3NUb09yZGVycyhyb3dzOmFueVtdKTogT3JkZXJbXSB7XG4gICAgICAgIHZhciByZXN1bHQ6IE9yZGVyW10gPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByaWNlID0gbmV3IEFzc2V0REVYKHJvd3NbaV0ucHJpY2UsIHRoaXMpO1xuICAgICAgICAgICAgdmFyIGludmVyc2UgPSBuZXcgQXNzZXRERVgocm93c1tpXS5pbnZlcnNlLCB0aGlzKTtcbiAgICAgICAgICAgIHZhciBzZWxsaW5nID0gbmV3IEFzc2V0REVYKHJvd3NbaV0uc2VsbGluZywgdGhpcyk7XG4gICAgICAgICAgICB2YXIgdG90YWwgPSBuZXcgQXNzZXRERVgocm93c1tpXS50b3RhbCwgdGhpcyk7XG4gICAgICAgICAgICB2YXIgb3JkZXI6T3JkZXI7XG5cbiAgICAgICAgICAgIHZhciBzY29wZSA9IHRoaXMuZ2V0U2NvcGVGb3IocHJpY2UudG9rZW4sIGludmVyc2UudG9rZW4pO1xuICAgICAgICAgICAgdmFyIGNhbm9uaWNhbCA9IHRoaXMuY2Fub25pY2FsU2NvcGUoc2NvcGUpO1xuICAgICAgICAgICAgdmFyIHJldmVyc2Vfc2NvcGUgPSB0aGlzLmludmVyc2VTY29wZShjYW5vbmljYWwpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmIChyZXZlcnNlX3Njb3BlID09IHNjb3BlKSB7XG4gICAgICAgICAgICAgICAgb3JkZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiByb3dzW2ldLmlkLFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgIGludmVyc2U6IGludmVyc2UsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBzZWxsaW5nLFxuICAgICAgICAgICAgICAgICAgICBkZXBvc2l0OiBzZWxsaW5nLFxuICAgICAgICAgICAgICAgICAgICB0ZWxvczogdG90YWwsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiByb3dzW2ldLm93bmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcmRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHJvd3NbaV0uaWQsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBpbnZlcnNlLFxuICAgICAgICAgICAgICAgICAgICBpbnZlcnNlOiBwcmljZSxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IHRvdGFsLFxuICAgICAgICAgICAgICAgICAgICBkZXBvc2l0OiBzZWxsaW5nLFxuICAgICAgICAgICAgICAgICAgICB0ZWxvczogc2VsbGluZyxcbiAgICAgICAgICAgICAgICAgICAgb3duZXI6IHJvd3NbaV0ub3duZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChvcmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGF1eEdldExhYmVsRm9ySG91cihoaDpudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICB2YXIgaG91cnMgPSBbXG4gICAgICAgICAgICBcImguemVyb1wiLFxuICAgICAgICAgICAgXCJoLm9uZVwiLFxuICAgICAgICAgICAgXCJoLnR3b1wiLFxuICAgICAgICAgICAgXCJoLnRocmVlXCIsXG4gICAgICAgICAgICBcImguZm91clwiLFxuICAgICAgICAgICAgXCJoLmZpdmVcIixcbiAgICAgICAgICAgIFwiaC5zaXhcIixcbiAgICAgICAgICAgIFwiaC5zZXZlblwiLFxuICAgICAgICAgICAgXCJoLmVpZ2h0XCIsXG4gICAgICAgICAgICBcImgubmluZVwiLFxuICAgICAgICAgICAgXCJoLnRlblwiLFxuICAgICAgICAgICAgXCJoLmVsZXZlblwiLFxuICAgICAgICAgICAgXCJoLnR3ZWx2ZVwiLFxuICAgICAgICAgICAgXCJoLnRoaXJ0ZWVuXCIsXG4gICAgICAgICAgICBcImguZm91cnRlZW5cIixcbiAgICAgICAgICAgIFwiaC5maWZ0ZWVuXCIsXG4gICAgICAgICAgICBcImguc2l4dGVlblwiLFxuICAgICAgICAgICAgXCJoLnNldmVudGVlblwiLFxuICAgICAgICAgICAgXCJoLmVpZ2h0ZWVuXCIsXG4gICAgICAgICAgICBcImgubmluZXRlZW5cIixcbiAgICAgICAgICAgIFwiaC50d2VudHlcIixcbiAgICAgICAgICAgIFwiaC50d2VudHlvbmVcIixcbiAgICAgICAgICAgIFwiaC50d2VudHl0d29cIixcbiAgICAgICAgICAgIFwiaC50d2VudHl0aHJlZVwiXG4gICAgICAgIF1cbiAgICAgICAgcmV0dXJuIGhvdXJzW2hoXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGF1eEFzc2VydFNjb3BlKHNjb3BlOnN0cmluZyk6IE1hcmtldCB7XG4gICAgICAgIHZhciBjb21vZGl0eV9zeW0gPSBzY29wZS5zcGxpdChcIi5cIilbMF0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgdmFyIGN1cnJlbmN5X3N5bSA9IHNjb3BlLnNwbGl0KFwiLlwiKVsxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB2YXIgY29tb2RpdHkgPSB0aGlzLmdldFRva2VuTm93KGNvbW9kaXR5X3N5bSk7XG4gICAgICAgIHZhciBjdXJyZW5jeSA9IHRoaXMuZ2V0VG9rZW5Ob3coY3VycmVuY3lfc3ltKTtcbiAgICAgICAgdmFyIGF1eF9hc3NldF9jb20gPSBuZXcgQXNzZXRERVgoMCwgY29tb2RpdHkpO1xuICAgICAgICB2YXIgYXV4X2Fzc2V0X2N1ciA9IG5ldyBBc3NldERFWCgwLCBjdXJyZW5jeSk7XG5cbiAgICAgICAgdmFyIG1hcmtldF9zdW1tYXJ5Ok1hcmtldFN1bW1hcnkgPSB7XG4gICAgICAgICAgICBzY29wZTogc2NvcGUsXG4gICAgICAgICAgICBwcmljZTogYXV4X2Fzc2V0X2N1cixcbiAgICAgICAgICAgIHByaWNlXzI0aF9hZ286IGF1eF9hc3NldF9jdXIsXG4gICAgICAgICAgICBpbnZlcnNlOiBhdXhfYXNzZXRfY29tLFxuICAgICAgICAgICAgaW52ZXJzZV8yNGhfYWdvOiBhdXhfYXNzZXRfY29tLFxuICAgICAgICAgICAgbWF4X2ludmVyc2U6IGF1eF9hc3NldF9jb20sXG4gICAgICAgICAgICBtYXhfcHJpY2U6IGF1eF9hc3NldF9jdXIsXG4gICAgICAgICAgICBtaW5faW52ZXJzZTogYXV4X2Fzc2V0X2NvbSxcbiAgICAgICAgICAgIG1pbl9wcmljZTogYXV4X2Fzc2V0X2N1cixcbiAgICAgICAgICAgIHJlY29yZHM6IFtdLFxuICAgICAgICAgICAgdm9sdW1lOiBhdXhfYXNzZXRfY3VyLFxuICAgICAgICAgICAgYW1vdW50OiBhdXhfYXNzZXRfY29tLFxuICAgICAgICAgICAgcGVyY2VudDogMCxcbiAgICAgICAgICAgIGlwZXJjZW50OiAwLFxuICAgICAgICAgICAgcGVyY2VudF9zdHI6IFwiMCVcIixcbiAgICAgICAgICAgIGlwZXJjZW50X3N0cjogXCIwJVwiLFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtldHNbc2NvcGVdIHx8IHtcbiAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcbiAgICAgICAgICAgIGNvbW9kaXR5OiBjb21vZGl0eSxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBjdXJyZW5jeSxcbiAgICAgICAgICAgIG9yZGVyczogeyBzZWxsOiBbXSwgYnV5OiBbXSB9LFxuICAgICAgICAgICAgZGVhbHM6IDAsXG4gICAgICAgICAgICBoaXN0b3J5OiBbXSxcbiAgICAgICAgICAgIHR4OiB7fSxcbiAgICAgICAgICAgIGJsb2NrczogMCxcbiAgICAgICAgICAgIGJsb2NrOiB7fSxcbiAgICAgICAgICAgIGJsb2NrbGlzdDogW10sXG4gICAgICAgICAgICBibG9ja2xldmVsczogW1tdXSxcbiAgICAgICAgICAgIHJldmVyc2VibG9ja3M6IFtdLFxuICAgICAgICAgICAgcmV2ZXJzZWxldmVsczogW1tdXSxcbiAgICAgICAgICAgIHN1bW1hcnk6IG1hcmtldF9zdW1tYXJ5LFxuICAgICAgICAgICAgaGVhZGVyOiB7IFxuICAgICAgICAgICAgICAgIHNlbGw6IHt0b3RhbDphdXhfYXNzZXRfY29tLCBvcmRlcnM6MH0sIFxuICAgICAgICAgICAgICAgIGJ1eToge3RvdGFsOmF1eF9hc3NldF9jdXIsIG9yZGVyczowfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTsgICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgZmV0Y2hEZXBvc2l0cyhhY2NvdW50KTogUHJvbWlzZTxUYWJsZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cmFjdC5nZXRUYWJsZShcImRlcG9zaXRzXCIsIHtzY29wZTphY2NvdW50fSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBmZXRjaEJhbGFuY2VzKGFjY291bnQpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0VG9rZW5zTG9hZGVkLnRoZW4oYXN5bmMgXyA9PiB7XG4gICAgICAgICAgICB2YXIgY29udHJhY3RzID0ge307XG4gICAgICAgICAgICB2YXIgYmFsYW5jZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy50b2tlbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b2tlbnNbaV0ub2ZmY2hhaW4pIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnRyYWN0c1t0aGlzLnRva2Vuc1tpXS5jb250cmFjdF0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgY29udHJhY3QgaW4gY29udHJhY3RzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJiYWxhbmNlcy1cIitjb250cmFjdCwgdHJ1ZSk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKHZhciBjb250cmFjdCBpbiBjb250cmFjdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgdGhpcy5jb250cmFjdC5nZXRUYWJsZShcImFjY291bnRzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJhY3Q6Y29udHJhY3QsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiBhY2NvdW50IHx8IHRoaXMuY3VycmVudC5uYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiByZXN1bHQucm93cykge1xuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlcy5wdXNoKG5ldyBBc3NldERFWChyZXN1bHQucm93c1tpXS5iYWxhbmNlLCB0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwiYmFsYW5jZXMtXCIrY29udHJhY3QsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBiYWxhbmNlcztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaE9yZGVycyhwYXJhbXM6VGFibGVQYXJhbXMpOiBQcm9taXNlPFRhYmxlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyYWN0LmdldFRhYmxlKFwic2VsbG9yZGVyc1wiLCBwYXJhbXMpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmV0Y2hPcmRlclN1bW1hcnkoKTogUHJvbWlzZTxUYWJsZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cmFjdC5nZXRUYWJsZShcIm9yZGVyc3VtbWFyeVwiKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZldGNoQmxvY2tIaXN0b3J5KHNjb3BlOnN0cmluZywgcGFnZTpudW1iZXIgPSAwLCBwYWdlc2l6ZTpudW1iZXIgPSAyNSk6IFByb21pc2U8VGFibGVSZXN1bHQ+IHtcbiAgICAgICAgdmFyIGNhbm9uaWNhbDpzdHJpbmcgPSB0aGlzLmNhbm9uaWNhbFNjb3BlKHNjb3BlKTtcbiAgICAgICAgdmFyIHBhZ2VzID0gdGhpcy5nZXRCbG9ja0hpc3RvcnlUb3RhbFBhZ2VzRm9yKGNhbm9uaWNhbCwgcGFnZXNpemUpO1xuICAgICAgICB2YXIgaWQgPSBwYWdlKnBhZ2VzaXplO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlZhcGFlZURFWC5mZXRjaEJsb2NrSGlzdG9yeShcIiwgc2NvcGUsIFwiLFwiLHBhZ2UsXCIsXCIscGFnZXNpemUsXCIpOiBpZDpcIiwgaWQsIFwicGFnZXM6XCIsIHBhZ2VzKTtcbiAgICAgICAgaWYgKHBhZ2UgPCBwYWdlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21hcmtldHMgJiYgdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdICYmIHRoaXMuX21hcmtldHNbY2Fub25pY2FsXS5ibG9ja1tcImlkLVwiICsgaWRdKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdDpUYWJsZVJlc3VsdCA9IHttb3JlOmZhbHNlLHJvd3M6W119O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxwYWdlc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpZF9pID0gaWQraTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLmJsb2NrW1wiaWQtXCIgKyBpZF9pXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucm93cy5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucm93cy5sZW5ndGggPT0gcGFnZXNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0aGUgY29tcGxldGUgcGFnZSBpbiBtZW1vcnlcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJWYXBhZWVERVguZmV0Y2hIaXN0b3J5KFwiLCBzY29wZSwgXCIsXCIscGFnZSxcIixcIixwYWdlc2l6ZSxcIik6IHJlc3VsdDpcIiwgcmVzdWx0LnJvd3MubWFwKCh7IGlkIH0pID0+IGlkKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJhY3QuZ2V0VGFibGUoXCJibG9ja2hpc3RvcnlcIiwge3Njb3BlOmNhbm9uaWNhbCwgbGltaXQ6cGFnZXNpemUsIGxvd2VyX2JvdW5kOlwiXCIrKHBhZ2UqcGFnZXNpemUpfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKlwiKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmxvY2sgSGlzdG9yeSBjcnVkbzpcIiwgcmVzdWx0KTtcbiAgICAgICAgICAgIHRoaXMuX21hcmtldHNbY2Fub25pY2FsXSA9IHRoaXMuYXV4QXNzZXJ0U2NvcGUoY2Fub25pY2FsKTtcbiAgICAgICAgICAgIHRoaXMuX21hcmtldHNbY2Fub25pY2FsXS5ibG9jayA9IHRoaXMuX21hcmtldHNbY2Fub25pY2FsXS5ibG9jayB8fCB7fTsgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuX21hcmtldHNbc2NvcGVdLmJsb2NrOlwiLCB0aGlzLl9tYXJrZXRzW3Njb3BlXS5ibG9jayk7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCByZXN1bHQucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBibG9jazpIaXN0b3J5QmxvY2sgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiByZXN1bHQucm93c1tpXS5pZCxcbiAgICAgICAgICAgICAgICAgICAgaG91cjogcmVzdWx0LnJvd3NbaV0uaG91cixcbiAgICAgICAgICAgICAgICAgICAgc3RyOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogbmV3IEFzc2V0REVYKHJlc3VsdC5yb3dzW2ldLnByaWNlLCB0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJzZTogbmV3IEFzc2V0REVYKHJlc3VsdC5yb3dzW2ldLmludmVyc2UsIHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBlbnRyYW5jZTogbmV3IEFzc2V0REVYKHJlc3VsdC5yb3dzW2ldLmVudHJhbmNlLCB0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBuZXcgQXNzZXRERVgocmVzdWx0LnJvd3NbaV0ubWF4LCB0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiBuZXcgQXNzZXRERVgocmVzdWx0LnJvd3NbaV0ubWluLCB0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lOiBuZXcgQXNzZXRERVgocmVzdWx0LnJvd3NbaV0udm9sdW1lLCB0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBuZXcgQXNzZXRERVgocmVzdWx0LnJvd3NbaV0uYW1vdW50LCB0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUocmVzdWx0LnJvd3NbaV0uZGF0ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYmxvY2suc3RyID0gSlNPTi5zdHJpbmdpZnkoW2Jsb2NrLm1heC5zdHIsIGJsb2NrLmVudHJhbmNlLnN0ciwgYmxvY2sucHJpY2Uuc3RyLCBibG9jay5taW4uc3RyXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLmJsb2NrW1wiaWQtXCIgKyBibG9jay5pZF0gPSBibG9jaztcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmxvY2sgSGlzdG9yeSBmaW5hbDpcIiwgdGhpcy5fbWFya2V0c1tzY29wZV0uYmxvY2spO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfSAgICBcblxuICAgIHByaXZhdGUgZmV0Y2hIaXN0b3J5KHNjb3BlOnN0cmluZywgcGFnZTpudW1iZXIgPSAwLCBwYWdlc2l6ZTpudW1iZXIgPSAyNSk6IFByb21pc2U8VGFibGVSZXN1bHQ+IHtcbiAgICAgICAgdmFyIGNhbm9uaWNhbDpzdHJpbmcgPSB0aGlzLmNhbm9uaWNhbFNjb3BlKHNjb3BlKTtcbiAgICAgICAgdmFyIHBhZ2VzID0gdGhpcy5nZXRIaXN0b3J5VG90YWxQYWdlc0ZvcihjYW5vbmljYWwsIHBhZ2VzaXplKTtcbiAgICAgICAgdmFyIGlkID0gcGFnZSpwYWdlc2l6ZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJWYXBhZWVERVguZmV0Y2hIaXN0b3J5KFwiLCBzY29wZSwgXCIsXCIscGFnZSxcIixcIixwYWdlc2l6ZSxcIik6IGlkOlwiLCBpZCwgXCJwYWdlczpcIiwgcGFnZXMpO1xuICAgICAgICBpZiAocGFnZSA8IHBhZ2VzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWFya2V0cyAmJiB0aGlzLl9tYXJrZXRzW2Nhbm9uaWNhbF0gJiYgdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLnR4W1wiaWQtXCIgKyBpZF0pIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0OlRhYmxlUmVzdWx0ID0ge21vcmU6ZmFsc2Uscm93czpbXX07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPHBhZ2VzaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkX2kgPSBpZCtpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJ4ID0gdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLnR4W1wiaWQtXCIgKyBpZF9pXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnJvd3MucHVzaCh0cngpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yb3dzLmxlbmd0aCA9PSBwYWdlc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRoZSBjb21wbGV0ZSBwYWdlIGluIG1lbW9yeVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlZhcGFlZURFWC5mZXRjaEhpc3RvcnkoXCIsIHNjb3BlLCBcIixcIixwYWdlLFwiLFwiLHBhZ2VzaXplLFwiKTogcmVzdWx0OlwiLCByZXN1bHQucm93cy5tYXAoKHsgaWQgfSkgPT4gaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jb250cmFjdC5nZXRUYWJsZShcImhpc3RvcnlcIiwge3Njb3BlOnNjb3BlLCBsaW1pdDpwYWdlc2l6ZSwgbG93ZXJfYm91bmQ6XCJcIisocGFnZSpwYWdlc2l6ZSl9KS50aGVuKHJlc3VsdCA9PiB7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKipcIik7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkhpc3RvcnkgY3J1ZG86XCIsIHJlc3VsdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX21hcmtldHNbY2Fub25pY2FsXSA9IHRoaXMuYXV4QXNzZXJ0U2NvcGUoY2Fub25pY2FsKTtcbiAgICAgICAgICAgIHRoaXMuX21hcmtldHNbY2Fub25pY2FsXS5oaXN0b3J5ID0gW107XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXRzW2Nhbm9uaWNhbF0udHggPSB0aGlzLl9tYXJrZXRzW2Nhbm9uaWNhbF0udHggfHwge307IFxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuc2NvcGVzW3Njb3BlXS50eDpcIiwgdGhpcy5zY29wZXNbc2NvcGVdLnR4KTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgcmVzdWx0LnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNhY3Rpb246SGlzdG9yeVR4ID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogcmVzdWx0LnJvd3NbaV0uaWQsXG4gICAgICAgICAgICAgICAgICAgIHN0cjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBuZXcgQXNzZXRERVgocmVzdWx0LnJvd3NbaV0uYW1vdW50LCB0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudDogbmV3IEFzc2V0REVYKHJlc3VsdC5yb3dzW2ldLnBheW1lbnQsIHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBidXlmZWU6IG5ldyBBc3NldERFWChyZXN1bHQucm93c1tpXS5idXlmZWUsIHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBzZWxsZmVlOiBuZXcgQXNzZXRERVgocmVzdWx0LnJvd3NbaV0uc2VsbGZlZSwgdGhpcyksXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBuZXcgQXNzZXRERVgocmVzdWx0LnJvd3NbaV0ucHJpY2UsIHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBpbnZlcnNlOiBuZXcgQXNzZXRERVgocmVzdWx0LnJvd3NbaV0uaW52ZXJzZSwgdGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGJ1eWVyOiByZXN1bHQucm93c1tpXS5idXllcixcbiAgICAgICAgICAgICAgICAgICAgc2VsbGVyOiByZXN1bHQucm93c1tpXS5zZWxsZXIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKHJlc3VsdC5yb3dzW2ldLmRhdGUpLFxuICAgICAgICAgICAgICAgICAgICBpc2J1eTogISFyZXN1bHQucm93c1tpXS5pc2J1eVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5zdHIgPSB0cmFuc2FjdGlvbi5wcmljZS5zdHIgKyBcIiBcIiArIHRyYW5zYWN0aW9uLmFtb3VudC5zdHI7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFya2V0c1tjYW5vbmljYWxdLnR4W1wiaWQtXCIgKyB0cmFuc2FjdGlvbi5pZF0gPSB0cmFuc2FjdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaiBpbiB0aGlzLl9tYXJrZXRzW2Nhbm9uaWNhbF0udHgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXJrZXRzW2Nhbm9uaWNhbF0uaGlzdG9yeS5wdXNoKHRoaXMuX21hcmtldHNbY2Fub25pY2FsXS50eFtqXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX21hcmtldHNbY2Fub25pY2FsXS5oaXN0b3J5LnNvcnQoZnVuY3Rpb24oYTpIaXN0b3J5VHgsIGI6SGlzdG9yeVR4KXtcbiAgICAgICAgICAgICAgICBpZihhLmRhdGUgPCBiLmRhdGUpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIGlmKGEuZGF0ZSA+IGIuZGF0ZSkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIGlmKGEuaWQgPCBiLmlkKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICBpZihhLmlkID4gYi5pZCkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSGlzdG9yeSBmaW5hbDpcIiwgdGhpcy5zY29wZXNbc2NvcGVdLmhpc3RvcnkpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgYXN5bmMgZmV0Y2hBY3Rpdml0eShwYWdlOm51bWJlciA9IDAsIHBhZ2VzaXplOm51bWJlciA9IDI1KSB7XG4gICAgICAgIHZhciBpZCA9IHBhZ2UqcGFnZXNpemUrMTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJWYXBhZWVERVguZmV0Y2hBY3Rpdml0eShcIiwgcGFnZSxcIixcIixwYWdlc2l6ZSxcIik6IGlkOlwiLCBpZCk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0eS5ldmVudHNbXCJpZC1cIiArIGlkXSkge1xuICAgICAgICAgICAgdmFyIHBhZ2VFdmVudHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxwYWdlc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkX2kgPSBpZCtpO1xuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IHRoaXMuYWN0aXZpdHkuZXZlbnRzW1wiaWQtXCIgKyBpZF9pXTtcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYWdlRXZlbnRzLmxlbmd0aCA9PSBwYWdlc2l6ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgIH0gICAgICAgIFxuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyYWN0LmdldFRhYmxlKFwiZXZlbnRzXCIsIHtsaW1pdDpwYWdlc2l6ZSwgbG93ZXJfYm91bmQ6XCJcIitpZH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKipcIik7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFjdGl2aXR5IGNydWRvOlwiLCByZXN1bHQpO1xuICAgICAgICAgICAgdmFyIGxpc3Q6RXZlbnRMb2dbXSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCByZXN1bHQucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IHJlc3VsdC5yb3dzW2ldLmlkO1xuICAgICAgICAgICAgICAgIHZhciBldmVudDpFdmVudExvZyA9IDxFdmVudExvZz5yZXN1bHQucm93c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWN0aXZpdHkuZXZlbnRzW1wiaWQtXCIgKyBpZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpdml0eS5ldmVudHNbXCJpZC1cIiArIGlkXSA9IGV2ZW50O1xuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqPj4+Pj5cIiwgaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eS5saXN0ID0gW10uY29uY2F0KHRoaXMuYWN0aXZpdHkubGlzdCkuY29uY2F0KGxpc3QpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eS5saXN0LnNvcnQoZnVuY3Rpb24oYTpFdmVudExvZywgYjpFdmVudExvZyl7XG4gICAgICAgICAgICAgICAgaWYoYS5kYXRlIDwgYi5kYXRlKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICBpZihhLmRhdGUgPiBiLmRhdGUpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICBpZihhLmlkIDwgYi5pZCkgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgaWYoYS5pZCA+IGIuaWQpIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaFVzZXJPcmRlcnModXNlcjpzdHJpbmcpOiBQcm9taXNlPFRhYmxlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyYWN0LmdldFRhYmxlKFwidXNlcm9yZGVyc1wiLCB7c2NvcGU6dXNlciwgbGltaXQ6MjAwfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgZmV0Y2hTdW1tYXJ5KHNjb3BlKTogUHJvbWlzZTxUYWJsZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cmFjdC5nZXRUYWJsZShcInRhYmxlc3VtbWFyeVwiLCB7c2NvcGU6c2NvcGV9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZldGNoVG9rZW5TdGF0cyh0b2tlbik6IFByb21pc2U8VGFibGVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJ0b2tlbi1zdGF0LVwiK3Rva2VuLnN5bWJvbCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyYWN0LmdldFRhYmxlKFwic3RhdFwiLCB7Y29udHJhY3Q6dG9rZW4uY29udHJhY3QsIHNjb3BlOnRva2VuLnN5bWJvbH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRva2VuLnN0YXQgPSByZXN1bHQucm93c1swXTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5zdGF0Lmlzc3VlcnMgJiYgdG9rZW4uc3RhdC5pc3N1ZXJzWzBdID09IFwiZXZlcnlvbmVcIikge1xuICAgICAgICAgICAgICAgIHRva2VuLmZha2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZWVkLnNldExvYWRpbmcoXCJ0b2tlbi1zdGF0LVwiK3Rva2VuLnN5bWJvbCwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZldGNoVG9rZW5zU3RhdHMoZXh0ZW5kZWQ6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmFwYWVlLmZldGNoVG9rZW5zKClcIik7XG4gICAgICAgIHRoaXMuZmVlZC5zZXRMb2FkaW5nKFwidG9rZW4tc3RhdHNcIiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRUb2tlbnNMb2FkZWQudGhlbihfID0+IHtcblxuICAgICAgICAgICAgdmFyIHByaW9taXNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnRva2Vucykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRva2Vuc1tpXS5vZmZjaGFpbikgY29udGludWU7XG4gICAgICAgICAgICAgICAgcHJpb21pc2VzLnB1c2godGhpcy5mZXRjaFRva2VuU3RhdHModGhpcy50b2tlbnNbaV0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsPGFueT4ocHJpb21pc2VzKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlblN0YXRzKHRoaXMudG9rZW5zKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWQuc2V0TG9hZGluZyhcInRva2VuLXN0YXRzXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVRva2Vuc01hcmtldHMoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLndhaXRUb2tlbnNMb2FkZWQsXG4gICAgICAgICAgICB0aGlzLndhaXRNYXJrZXRTdW1tYXJ5XG4gICAgICAgIF0pLnRoZW4oXyA9PiB7XG4gICAgICAgICAgICAvLyBhIGNhZGEgdG9rZW4gbGUgYXNpZ25vIHVuIHByaWNlIHF1ZSBzYWxlIGRlIHZlcmlmaWNhciBzdSBwcmljZSBlbiBlbCBtZXJjYWRvIHByaW5jaXBhbCBYWFgvVExPU1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnRva2Vucykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRva2Vuc1tpXS5vZmZjaGFpbikgY29udGludWU7IC8vIGRpc2NhcmQgdG9rZW5zIHRoYXQgYXJlIG5vdCBvbi1jaGFpblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW5zW2ldO1xuICAgICAgICAgICAgICAgIHZhciBxdWFudGl0eTpBc3NldERFWCA9IG5ldyBBc3NldERFWCgwLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgdG9rZW4ubWFya2V0cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgc2NvcGUgaW4gdGhpcy5fbWFya2V0cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcGUuaW5kZXhPZihcIi5cIikgPT0gLTEpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGU6TWFya2V0ID0gdGhpcy5fbWFya2V0c1tzY29wZV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmxlLmN1cnJlbmN5LnN5bWJvbCA9PSB0b2tlbi5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlID0gdGhpcy5tYXJrZXQodGhpcy5pbnZlcnNlU2NvcGUoc2NvcGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZS5jb21vZGl0eS5zeW1ib2wgPT0gdG9rZW4uc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbi5tYXJrZXRzLnB1c2godGFibGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b2tlbi5tYXJrZXRzLnNvcnQoKGE6TWFya2V0LCBiOk1hcmtldCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHB1c2ggb2ZmY2hhaW4gdG9rZW5zIHRvIHRoZSBlbmQgb2YgdGhlIHRva2VuIGxpc3RcbiAgICAgICAgICAgICAgICB2YXIgYV92b2wgPSBhLnN1bW1hcnkgPyBhLnN1bW1hcnkudm9sdW1lIDogbmV3IEFzc2V0REVYKCk7XG4gICAgICAgICAgICAgICAgdmFyIGJfdm9sID0gYi5zdW1tYXJ5ID8gYi5zdW1tYXJ5LnZvbHVtZSA6IG5ldyBBc3NldERFWCgpO1xuICAgIFxuICAgICAgICAgICAgICAgIGlmKGFfdm9sLmFtb3VudC5pc0dyZWF0ZXJUaGFuKGJfdm9sLmFtb3VudCkpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICBpZihhX3ZvbC5hbW91bnQuaXNMZXNzVGhhbihiX3ZvbC5hbW91bnQpKSByZXR1cm4gMTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7ICAgXG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgdXBkYXRlVG9rZW5zU3VtbWFyeSh0aW1lczogbnVtYmVyID0gMjApIHtcbiAgICAgICAgaWYgKHRpbWVzID4gMSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRpbWVzOyBpPjA7IGktLSkgdGhpcy51cGRhdGVUb2tlbnNTdW1tYXJ5KDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IFxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy53YWl0VG9rZW5zTG9hZGVkLFxuICAgICAgICAgICAgdGhpcy53YWl0TWFya2V0U3VtbWFyeVxuICAgICAgICBdKS50aGVuKF8gPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIoaW5pKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlZhcGFlZS51cGRhdGVUb2tlbnNTdW1tYXJ5KClcIik7IFxuXG4gICAgICAgICAgICAvLyBtYXBwaW5nIG9mIGhvdyBtdWNoIChhbW91bnQgb2YpIHRva2VucyBoYXZlIGJlZW4gdHJhZGVkIGFncmVnYXRlZCBpbiBhbGwgbWFya2V0c1xuICAgICAgICAgICAgdmFyIGFtb3VudF9tYXA6e1trZXk6c3RyaW5nXTpBc3NldERFWH0gPSB7fTtcblxuICAgICAgICAgICAgLy8gYSBjYWRhIHRva2VuIGxlIGFzaWdubyB1biBwcmljZSBxdWUgc2FsZSBkZSB2ZXJpZmljYXIgc3UgcHJpY2UgZW4gZWwgbWVyY2FkbyBwcmluY2lwYWwgWFhYL1RMT1NcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy50b2tlbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b2tlbnNbaV0ub2ZmY2hhaW4pIGNvbnRpbnVlOyAvLyBkaXNjYXJkIHRva2VucyB0aGF0IGFyZSBub3Qgb24tY2hhaW5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgcXVhbnRpdHk6QXNzZXRERVggPSBuZXcgQXNzZXRERVgoMCwgdG9rZW4pO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiB0aGlzLl9tYXJrZXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqLmluZGV4T2YoXCIuXCIpID09IC0xKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlOk1hcmtldCA9IHRoaXMuX21hcmtldHNbal07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAodGFibGUuY29tb2RpdHkuc3ltYm9sID09IHRva2VuLnN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHkgPSBxdWFudGl0eS5wbHVzKHRhYmxlLnN1bW1hcnkuYW1vdW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGFibGUuY3VycmVuY3kuc3ltYm9sID09IHRva2VuLnN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHkgPSBxdWFudGl0eS5wbHVzKHRhYmxlLnN1bW1hcnkudm9sdW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZS5jb21vZGl0eS5zeW1ib2wgPT0gdG9rZW4uc3ltYm9sICYmIHRhYmxlLmN1cnJlbmN5LnN5bWJvbCA9PSB0aGlzLnRlbG9zLnN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLnN1bW1hcnkgJiYgdG9rZW4uc3VtbWFyeS5wcmljZS5hbW91bnQudG9OdW1iZXIoKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRva2VuLnN1bW1hcnk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLnN1bW1hcnkgPSB0b2tlbi5zdW1tYXJ5IHx8IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogdGFibGUuc3VtbWFyeS5wcmljZS5jbG9uZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlXzI0aF9hZ286IHRhYmxlLnN1bW1hcnkucHJpY2VfMjRoX2Fnby5jbG9uZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvbHVtZTogdGFibGUuc3VtbWFyeS52b2x1bWUuY2xvbmUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50OiB0YWJsZS5zdW1tYXJ5LnBlcmNlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudF9zdHI6IHRhYmxlLnN1bW1hcnkucGVyY2VudF9zdHIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhbW91bnRfbWFwW3Rva2VuLnN5bWJvbF0gPSBxdWFudGl0eTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50ZWxvcy5zdW1tYXJ5ID0ge1xuICAgICAgICAgICAgICAgIHByaWNlOiBuZXcgQXNzZXRERVgoMSwgdGhpcy50ZWxvcyksXG4gICAgICAgICAgICAgICAgcHJpY2VfMjRoX2FnbzogbmV3IEFzc2V0REVYKDEsIHRoaXMudGVsb3MpLFxuICAgICAgICAgICAgICAgIHZvbHVtZTogbmV3IEFzc2V0REVYKC0xLCB0aGlzLnRlbG9zKSxcbiAgICAgICAgICAgICAgICBwZXJjZW50OiAwLFxuICAgICAgICAgICAgICAgIHBlcmNlbnRfc3RyOiBcIjAlXCJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhbW91bnRfbWFwOiBcIiwgYW1vdW50X21hcCk7XG5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgT05FID0gbmV3IEJpZ051bWJlcigxKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnRva2Vucykge1xuICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW5zW2ldO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5vZmZjaGFpbikgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKCF0b2tlbi5zdW1tYXJ5KSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uc3ltYm9sID09IHRoaXMudGVsb3Muc3ltYm9sKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRPS0VOOiAtLS0tLS0tLSBcIiwgdG9rZW4uc3ltYm9sLCB0b2tlbi5zdW1tYXJ5LnByaWNlLnN0ciwgdG9rZW4uc3VtbWFyeS5wcmljZV8yNGhfYWdvLnN0ciApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciB2b2x1bWUgPSBuZXcgQXNzZXRERVgoMCwgdGhpcy50ZWxvcyk7XG4gICAgICAgICAgICAgICAgdmFyIHByaWNlID0gbmV3IEFzc2V0REVYKDAsIHRoaXMudGVsb3MpO1xuICAgICAgICAgICAgICAgIHZhciBwcmljZV9pbml0ID0gbmV3IEFzc2V0REVYKDAsIHRoaXMudGVsb3MpO1xuICAgICAgICAgICAgICAgIHZhciB0b3RhbF9xdWFudGl0eSA9IGFtb3VudF9tYXBbdG9rZW4uc3ltYm9sXTtcblxuICAgICAgICAgICAgICAgIGlmICh0b3RhbF9xdWFudGl0eS50b051bWJlcigpID09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRva2VuLnN5bWJvbCA9PSBcIkFDT1JOXCIpIGNvbnNvbGUubG9nKFwiVE9LRU46IC0tLS0tLS0tIFwiLCB0b2tlbi5zeW1ib2wsIHRva2VuLnN1bW1hcnkucHJpY2Uuc3RyLCB0b2tlbi5zdW1tYXJ5LnByaWNlXzI0aF9hZ28uc3RyICk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiB0aGlzLl9tYXJrZXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqLmluZGV4T2YoXCIuXCIpID09IC0xKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gdGhpcy5fbWFya2V0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5X3ByaWNlID0gdGFibGUuY3VycmVuY3kuc3ltYm9sID09IFwiVExPU1wiID8gT05FIDogdGFibGUuY3VycmVuY3kuc3VtbWFyeS5wcmljZS5hbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeV9wcmljZV8yNGhfYWdvID0gdGFibGUuY3VycmVuY3kuc3ltYm9sID09IFwiVExPU1wiID8gT05FIDogdGFibGUuY3VycmVuY3kuc3VtbWFyeS5wcmljZV8yNGhfYWdvLmFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmxlLmNvbW9kaXR5LnN5bWJvbCA9PSB0b2tlbi5zeW1ib2wgfHwgdGFibGUuY3VycmVuY3kuc3ltYm9sID09IHRva2VuLnN5bWJvbCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBob3cgbXVjaCBxdWFudGl0eSBpcyBpbnZvbHZlZCBpbiB0aGlzIG1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHF1YW50aXR5ID0gbmV3IEFzc2V0REVYKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFibGUuY29tb2RpdHkuc3ltYm9sID09IHRva2VuLnN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5ID0gdGFibGUuc3VtbWFyeS5hbW91bnQuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFibGUuY3VycmVuY3kuc3ltYm9sID09IHRva2VuLnN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5ID0gdGFibGUuc3VtbWFyeS52b2x1bWUuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBpbmZsdWVuY2Utd2VpZ2h0IG9mIHRoaXMgbWFya2V0IG92ZXIgdGhlIHRva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2VpZ2h0ID0gcXVhbnRpdHkuYW1vdW50LmRpdmlkZWRCeSh0b3RhbF9xdWFudGl0eS5hbW91bnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHByaWNlIG9mIHRoaXMgdG9rZW4gaW4gdGhpcyBtYXJrZXQgKGV4cHJlc3NlZCBpbiBUTE9TKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaWNlX2Ftb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZS5jb21vZGl0eS5zeW1ib2wgPT0gdG9rZW4uc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VfYW1vdW50ID0gdGFibGUuc3VtbWFyeS5wcmljZS5hbW91bnQubXVsdGlwbGllZEJ5KHRhYmxlLmN1cnJlbmN5LnN1bW1hcnkucHJpY2UuYW1vdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFibGUuY3VycmVuY3kuc3ltYm9sID09IHRva2VuLnN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlX2Ftb3VudCA9IHRhYmxlLnN1bW1hcnkuaW52ZXJzZS5hbW91bnQubXVsdGlwbGllZEJ5KHRhYmxlLmNvbW9kaXR5LnN1bW1hcnkucHJpY2UuYW1vdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoaXMgbWFya2V0IHRva2VuIHByaWNlIG11bHRpcGxpZWQgYnkgdGhlIHdpZ2h0IG9mIHRoaXMgbWFya2V0IChwb25kZXJhdGVkIHByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaWNlX2kgPSBuZXcgQXNzZXRERVgocHJpY2VfYW1vdW50Lm11bHRpcGxpZWRCeSh3ZWlnaHQpLCB0aGlzLnRlbG9zKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBwcmljZSBvZiB0aGlzIHRva2VuIGluIHRoaXMgbWFya2V0IDI0aCBhZ28gKGV4cHJlc3NlZCBpbiBUTE9TKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaWNlX2luaXRfYW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmxlLmNvbW9kaXR5LnN5bWJvbCA9PSB0b2tlbi5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZV9pbml0X2Ftb3VudCA9IHRhYmxlLnN1bW1hcnkucHJpY2VfMjRoX2Fnby5hbW91bnQubXVsdGlwbGllZEJ5KHRhYmxlLmN1cnJlbmN5LnN1bW1hcnkucHJpY2VfMjRoX2Fnby5hbW91bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YWJsZS5jdXJyZW5jeS5zeW1ib2wgPT0gdG9rZW4uc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VfaW5pdF9hbW91bnQgPSB0YWJsZS5zdW1tYXJ5LmludmVyc2VfMjRoX2Fnby5hbW91bnQubXVsdGlwbGllZEJ5KHRhYmxlLmNvbW9kaXR5LnN1bW1hcnkucHJpY2VfMjRoX2Fnby5hbW91bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhpcyBtYXJrZXQgdG9rZW4gcHJpY2UgMjRoIGFnbyBtdWx0aXBsaWVkIGJ5IHRoZSB3ZWlnaHQgb2YgdGhpcyBtYXJrZXQgKHBvbmRlcmF0ZWQgaW5pdF9wcmljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmljZV9pbml0X2kgPSBuZXcgQXNzZXRERVgocHJpY2VfaW5pdF9hbW91bnQubXVsdGlwbGllZEJ5KHdlaWdodCksIHRoaXMudGVsb3MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBob3cgbXVjaCB2b2x1bWUgaXMgaW52b2x2ZWQgaW4gdGhpcyBtYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2b2x1bWVfaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZS5jb21vZGl0eS5zeW1ib2wgPT0gdG9rZW4uc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lX2kgPSB0YWJsZS5zdW1tYXJ5LnZvbHVtZS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YWJsZS5jdXJyZW5jeS5zeW1ib2wgPT0gdG9rZW4uc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lX2kgPSB0YWJsZS5zdW1tYXJ5LmFtb3VudC5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIG1hcmtldCBkb2VzIG5vdCBtZXN1cmUgdGhlIHZvbHVtZSBpbiBUTE9TLCB0aGVuIGNvbnZlcnQgcXVhbnRpdHkgdG8gVExPUyBieSBtdWx0aXBsaWVkIEJ5IHZvbHVtZSdzIHRva2VuIHByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9sdW1lX2kudG9rZW4uc3ltYm9sICE9IHRoaXMudGVsb3Muc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lX2kgPSBuZXcgQXNzZXRERVgocXVhbnRpdHkuYW1vdW50Lm11bHRpcGxpZWRCeShxdWFudGl0eS50b2tlbi5zdW1tYXJ5LnByaWNlLmFtb3VudCksIHRoaXMudGVsb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gcHJpY2UucGx1cyhuZXcgQXNzZXRERVgocHJpY2VfaSwgdGhpcy50ZWxvcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VfaW5pdCA9IHByaWNlX2luaXQucGx1cyhuZXcgQXNzZXRERVgocHJpY2VfaW5pdF9pLCB0aGlzLnRlbG9zKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2b2x1bWUgPSB2b2x1bWUucGx1cyhuZXcgQXNzZXRERVgodm9sdW1lX2ksIHRoaXMudGVsb3MpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItaVwiLGksIHRhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLSB3ZWlnaHQ6XCIsIHdlaWdodC50b051bWJlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLSB0YWJsZS5zdW1tYXJ5LnByaWNlLnN0clwiLCB0YWJsZS5zdW1tYXJ5LnByaWNlLnN0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0gdGFibGUuc3VtbWFyeS5wcmljZS5hbW91bnQubXVsdGlwbGllZEJ5KHdlaWdodCkudG9OdW1iZXIoKVwiLCB0YWJsZS5zdW1tYXJ5LnByaWNlLmFtb3VudC5tdWx0aXBsaWVkQnkod2VpZ2h0KS50b051bWJlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLSBjdXJyZW5jeV9wcmljZS50b051bWJlcigpXCIsIGN1cnJlbmN5X3ByaWNlLnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItIHByaWNlX2k6XCIsIHByaWNlX2kudG9OdW1iZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0gcHJpY2UgLT5cIiwgcHJpY2Uuc3RyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLSBjdXJyZW5jeV9wcmljZV8yNGhfYWdvOlwiLCBjdXJyZW5jeV9wcmljZV8yNGhfYWdvLnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItIHRhYmxlLnN1bW1hcnkucHJpY2VfMjRoX2FnbzpcIiwgdGFibGUuc3VtbWFyeS5wcmljZV8yNGhfYWdvLnN0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0gcHJpY2VfaW5pdF9pOlwiLCBwcmljZV9pbml0X2kudG9OdW1iZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0gcHJpY2VfaW5pdCAtPlwiLCBwcmljZV9pbml0LnN0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRpZmYgPSBwcmljZS5taW51cyhwcmljZV9pbml0KTtcbiAgICAgICAgICAgICAgICB2YXIgcmF0aW86bnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgICBpZiAocHJpY2VfaW5pdC5hbW91bnQudG9OdW1iZXIoKSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhdGlvID0gZGlmZi5hbW91bnQuZGl2aWRlZEJ5KHByaWNlX2luaXQuYW1vdW50KS50b051bWJlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcGVyY2VudCA9IE1hdGguZmxvb3IocmF0aW8gKiAxMDAwMCkgLyAxMDA7XG4gICAgICAgICAgICAgICAgdmFyIHBlcmNlbnRfc3RyID0gKGlzTmFOKHBlcmNlbnQpID8gMCA6IHBlcmNlbnQpICsgXCIlXCI7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInByaWNlXCIsIHByaWNlLnN0cik7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwcmljZV8yNGhfYWdvXCIsIHByaWNlX2luaXQuc3RyKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZvbHVtZVwiLCB2b2x1bWUuc3RyKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBlcmNlbnRcIiwgcGVyY2VudCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwZXJjZW50X3N0clwiLCBwZXJjZW50X3N0cik7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyYXRpb1wiLCByYXRpbyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaWZmXCIsIGRpZmYuc3RyKTtcblxuICAgICAgICAgICAgICAgIHRva2VuLnN1bW1hcnkucHJpY2UgPSBwcmljZTtcbiAgICAgICAgICAgICAgICB0b2tlbi5zdW1tYXJ5LnByaWNlXzI0aF9hZ28gPSBwcmljZV9pbml0O1xuICAgICAgICAgICAgICAgIHRva2VuLnN1bW1hcnkucGVyY2VudCA9IHBlcmNlbnQ7XG4gICAgICAgICAgICAgICAgdG9rZW4uc3VtbWFyeS5wZXJjZW50X3N0ciA9IHBlcmNlbnRfc3RyO1xuICAgICAgICAgICAgICAgIHRva2VuLnN1bW1hcnkudm9sdW1lID0gdm9sdW1lO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiKGVuZCkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICAgICAgdGhpcy5yZXNvcnRUb2tlbnMoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9rZW5TdW1tYXJ5KCk7XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmZXRjaFRva2VucyhleHRlbmRlZDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJWYXBhZWUuZmV0Y2hUb2tlbnMoKVwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb250cmFjdC5nZXRUYWJsZShcInRva2Vuc1wiKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICB0b2tlbnM6IDxUb2tlbkRFWFtdPnJlc3VsdC5yb3dzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZGF0YS50b2tlbnMpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnRva2Vuc1tpXS5zY29wZSA9IGRhdGEudG9rZW5zW2ldLnN5bWJvbC50b0xvd2VyQ2FzZSgpICsgXCIudGxvc1wiO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnRva2Vuc1tpXS5zeW1ib2wgPT0gXCJUTE9TXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWxvcyA9IGRhdGEudG9rZW5zW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzb3J0VG9rZW5zKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIihpbmkpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXNvcnRUb2tlbnMoKVwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnRva2Vuc1swXVwiLCB0aGlzLnRva2Vuc1swXS5zdW1tYXJ5KTtcbiAgICAgICAgdGhpcy50b2tlbnMuc29ydCgoYTpUb2tlbkRFWCwgYjpUb2tlbkRFWCkgPT4ge1xuICAgICAgICAgICAgLy8gcHVzaCBvZmZjaGFpbiB0b2tlbnMgdG8gdGhlIGVuZCBvZiB0aGUgdG9rZW4gbGlzdFxuICAgICAgICAgICAgaWYgKGEub2ZmY2hhaW4pIHJldHVybiAxO1xuICAgICAgICAgICAgaWYgKGIub2ZmY2hhaW4pIHJldHVybiAtMTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIgLS0tIFwiLCBhLnN5bWJvbCwgXCItXCIsIGIuc3ltYm9sLCBcIiAtLS0gXCIpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIgICAgIFwiLCBhLnN1bW1hcnkgPyBhLnN1bW1hcnkudm9sdW1lLnN0ciA6IFwiMFwiLCBcIi1cIiwgYi5zdW1tYXJ5ID8gYi5zdW1tYXJ5LnZvbHVtZS5zdHIgOiBcIjBcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBhX3ZvbCA9IGEuc3VtbWFyeSA/IGEuc3VtbWFyeS52b2x1bWUgOiBuZXcgQXNzZXRERVgoKTtcbiAgICAgICAgICAgIHZhciBiX3ZvbCA9IGIuc3VtbWFyeSA/IGIuc3VtbWFyeS52b2x1bWUgOiBuZXcgQXNzZXRERVgoKTtcblxuICAgICAgICAgICAgaWYoYV92b2wuYW1vdW50LmlzR3JlYXRlclRoYW4oYl92b2wuYW1vdW50KSkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYoYV92b2wuYW1vdW50LmlzTGVzc1RoYW4oYl92b2wuYW1vdW50KSkgcmV0dXJuIDE7XG5cbiAgICAgICAgICAgIGlmKGEuYXBwbmFtZSA8IGIuYXBwbmFtZSkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYoYS5hcHBuYW1lID4gYi5hcHBuYW1lKSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTsgXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXNvcnRUb2tlbnMoKVwiLCB0aGlzLnRva2Vucyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiKGVuZCkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuXG4gICAgICAgIHRoaXMub25Ub2tlbnNSZWFkeS5uZXh0KHRoaXMudG9rZW5zKTsgICAgICAgIFxuICAgIH1cblxuXG59XG5cblxuXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFwYWVlREVYIH0gZnJvbSAnLi9kZXguc2VydmljZSdcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBwcm92aWRlcnM6IFtWYXBhZWVERVhdLFxuICBleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBWYXBhZWVEZXhNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJUb2tlbiIsIkFzc2V0IiwiU3ViamVjdCIsIkZlZWRiYWNrIiwiSW5qZWN0YWJsZSIsIlZhcGFlZVNjYXR0ZXIiLCJDb29raWVTZXJ2aWNlIiwiRGF0ZVBpcGUiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBRUYsdUJBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzFCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdkMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0FBRUQsdUJBb0MwQixPQUFP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RyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dEQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnREFDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dEQUMzQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0RBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnREFDdEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O2dEQUUzQixHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnREFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dEQUMxQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dEQUMvQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dEQUM1QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dEQUMxQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnREFDL0IsVUFBVSxHQUFHLEtBQUssQ0FBQzs2Q0FDdEI7NENBRUQsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVB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QyxDQUFDLENBQUM7d0RBQ25CLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxREFDeEM7b0RBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7b0RBR3RCLEdBQUcsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0RBQzNCLEdBQUcsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO29EQUM3QixNQUFNLEdBQUcsRUFBRSxDQUFDO29EQUNaLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO3dEQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0RBQzNDLElBQUksR0FBRyxFQUFFO3dEQUNMLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3REFDM0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dEQUNyQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dEQUNuQixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dEQUNuQixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FB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