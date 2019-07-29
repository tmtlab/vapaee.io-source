import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { AppService } from 'src/app/services/common/app.service';
import { LocalStringsService } from 'src/app/services/common/common.services';
import { Subscriber } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Utils } from 'src/app/services/@vapaee/scatter/utils.class';
import { VapaeeDEX, UserOrdersMap } from 'src/app/services/@vapaee/dex/dex.service';
import { VpeComponentsService } from 'src/app/components/vpe-components.service';
import { AssetDEX } from 'src/app/services/@vapaee/dex/asset-dex.class';


@Component({
    selector: 'account-page',
    templateUrl: './account.page.html',
    styleUrls: ['./account.page.scss', '../common.page.scss']
})
export class AccountPage implements OnInit, OnDestroy, AfterViewInit {

    private subscriber: Subscriber<string>;
    current_mode: boolean;
    loading: boolean;
    error: string;
   
    constructor(
        public app: AppService,
        public local: LocalStringsService,
        public route: ActivatedRoute,
        public dex: VapaeeDEX,
        public components: VpeComponentsService
    ) {
        this.subscriber = new Subscriber<string>(this.onCntCurrentAccountChange.bind(this));
        this.current_mode = true;        
    }


    get deposits(): AssetDEX[] {
        return this.dex.deposits;
    }

    get balances(): AssetDEX[] {
        return this.dex.balances;
    }    

    get userorders(): UserOrdersMap {
        return this.dex.userorders;
    }
    
    ngAfterViewInit()  {
        setTimeout(_ => { this.components.windowHasResized(this.components.device); },  500);
        setTimeout(_ => { this.components.windowHasResized(this.components.device); }, 1500);
        setTimeout(_ => { this.components.windowHasResized(this.components.device); }, 2000);
        setTimeout(_ => { this.components.windowHasResized(this.components.device); }, 2500);
    }

    updateAccount() {
    }

    ngOnDestroy() {
        this.subscriber.unsubscribe();
    }

    ngOnInit() {
        console.log("VpeAccountPage.ngOnInit()");
        this.dex.onCurrentAccountChange.subscribe(this.subscriber);
        var name = this.route.snapshot.paramMap.get('name');
        setTimeout(_ => {
            if (!name) {
                name = "guest";
                this.onCntCurrentAccountChange(name);
            } else {
                this.dex.resetCurrentAccount(name);
            };

            var utils:Utils = new Utils("",null);
            var encodedName = utils.encodeName(name);
        }, 0);
    }

    onCntCurrentAccountChange(account: string) {
        // console.log("VaeProfilePage.onCntCurrentAccountChange() ----------------->", account);
        var url = "/exchange/account/";
        if (account) {
            url += account;
        } else {
            url += "guest";
        };
        // console.log("accountPage.onCntCurrentAccountChange()", [account], " --> ", url);
        this.app.navigate(url);
    }

    get withdraw_error() {
        return this.dex.feed.error('withdraw');
    }

    get deposit_error() {
        return this.dex.feed.error('deposit');
    }    

    onWalletConfirmDeposit(amount: AssetDEX) {
        // console.log("------------------>", amount.toString());
        this.loading = true;
        this.dex.deposit(amount).then(_ => {
            // console.log("------------------>", amount.toString());
            this.loading = false;
        }).catch(e => {
            console.error(typeof e, e);
            this.loading = false;
        });
    }

    onWalletConfirmWithdraw(amount: AssetDEX) {
        // console.log("------------------>", amount.toString());
        this.loading = true;
        this.dex.withdraw(amount).then(_ => {
            // console.log("------------------>", amount.toString());
            this.loading = false;
        }).catch(e => {
            console.error(typeof e, e);
            this.loading = false;
        });        
    }

    navigateToTable(event) {
        // console.log("-------------->", event);
        this.app.navigate('/exchange/trade/' + event)
    }

}
