import BigNumber from "bignumber.js";
import { Token } from "./token.class";

export class Asset {
    amount:BigNumber;
    token:Token;
    
    constructor(a: any = null, b: any = null) {
        if (a == null && b == null) {
            this.amount = new BigNumber(0);
            this.token = new Token();
            return;
        }

        if (a instanceof BigNumber) {
            this.amount = a;
            this.token = b;
            return;
        }

        if (a instanceof Asset) {
            this.amount = a.amount;
            this.token = b;
            return;
        }

        if (typeof a == "number") {
            this.amount = new BigNumber(a);
            this.token = b;
            return;
        }

        if (typeof a == "string") {
            this.parse(a);
            console.assert(this.amount instanceof BigNumber, "ERROR: Asset string malformed: '"+a+"'");
            return;
        }
    }

    plus(b:Asset) {
        console.assert(!!b, "ERROR: b is not an Asset", b, this.str);
        console.assert(b.token.symbol == this.token.symbol, "ERROR: trying to sum assets with different tokens: " + this.str + " and " + b.str);
        var amount = this.amount.plus(b.amount);
        return new Asset(amount, this.token);
    }

    minus(b:Asset) {
        console.assert(!!b, "ERROR: b is not an Asset", b, this.str);
        console.assert(b.token.symbol == this.token.symbol, "ERROR: trying to substract assets with different tokens: " + this.str + " and " + b.str);
        var amount = this.amount.minus(b.amount);
        return new Asset(amount, this.token);
    }

    clone(): Asset {
        return new Asset(this.amount, this.token);
    }

    parse(text: string) {
        if (text == "") return;
        var sym = text.split(" ")[1];
        var amount_str = text.split(" ")[0];
        this.amount = new BigNumber(amount_str);

        var precision = 0;
        if (amount_str.split(".").length == 2) {
            precision = amount_str.split(".")[1].length;
        } else if (amount_str.split(".").length == 1) {
            if (isNaN(parseInt(amount_str))) {
                console.error("ERROR: Asset malformed string: '"+text+"'");
            }
        }
        
        this.token = new Token({
            symbol: sym,
            precision: precision
        }); 
    }

    valueToString(decimals:number = -1, total:boolean = false): string {
        if (!this.token) return "0";
        var parts = this.amount.toFixed().split(".");
        var integer = parts[0];
        var precision = this.token.precision;
        var decimal = (parts.length==2 ? parts[1] : "");
        if (decimals != -1) {
            precision = decimals;
        }
        if (total) {
            precision -= parts[0].length-1;
            precision = precision > 0 ? precision : 0;
        }
        for (var i=decimal.length; i<precision; i++) {
            decimal += "0";
        }
        if (decimal.length > precision) {
            decimal = decimal.substr(0, precision);
        }

        if (precision == 0) {
            return integer;
        } else {
            return integer + "." + decimal;
        }
    }

    toNumber() {
        if (!this.token) return 0;
        return parseFloat(this.valueToString(8));
    }

    get str () {
        return this.toString();
    }

    toString(decimals:number = -1): string {
        if (!this.token) return "0.0000";
        return this.valueToString(decimals) + " " + this.token.symbol.toUpperCase();
    }

    inverse(token: Token): Asset {
        var result = new BigNumber(1).dividedBy(this.amount);
        var asset =  new Asset(result, token);
        return asset;
    }
}