import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/services/common/app.service';
import { LocalStringsService } from 'src/app/services/common/common.services';
import { VapaeeDEX, TokenDEX } from '@vapaee/dex';


@Component({
    selector: 'tokens-page',
    templateUrl: './tokens.page.html',
    styleUrls: ['./tokens.page.scss', '../common.page.scss']
})
export class TokensPage implements OnInit, OnDestroy {

    constructor(
        public app: AppService,
        public local: LocalStringsService,
        public dex: VapaeeDEX
    ) {
        
    }

    get tokens(): TokenDEX[] {
        return this.dex.tokens;
    }

    editToken(token:TokenDEX) {
        this.app.setGlobal("edit-token", true);
        this.app.navigate('/exchange/tokenedit/'+token.symbol.toLowerCase());
    }

    tradeToken(token:TokenDEX) {
        this.app.navigate('/exchange/trade/'+token.symbol.toLowerCase()+'.tlos');
    }

    tokenPage(token:TokenDEX) {
        this.app.navigate('/exchange/token/'+token.symbol.toLowerCase());
    }

    ngOnDestroy() {
    }

    ngOnInit() {
    }
}
