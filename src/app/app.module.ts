import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonServicesModule } from './services/common/common.module';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SidebarModule } from 'ng-sidebar';
import { CookieService } from 'ngx-cookie-service';

import { DatePipe } from '@angular/common';
 
import { AppComponent } from './app.component';
import { LoadingOverall } from './services/common/app.service';

import { CoingeckoService } from './services/coingecko.service';
import { DropdownService } from './services/dropdown.service';

import { WPPage } from './pages/wp/wp.page';
import { RootPage } from './pages/root/root.page';
import { HomePage } from './pages/home/home.page';
import { TradePage } from './pages/trade/trade.page';
import { TokensPage } from './pages/tokens/tokens.page';
import { MarketsPage } from './pages/markets/markets.page';
import { AccountPage } from './pages/account/account.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { ComingSoonPage } from './pages/coming-soon/coming-soon.page';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TokenPage } from './pages/token/token.page';
import { TimezoneService } from './services/timezone.service';
import { TokenEditPage } from './pages/tokenedit/tokenedit.page';
import { WalletPage } from './pages/wallet/wallet.page';

import { FormsModule } from '@angular/forms';
import { DirectivesModule } from './directives/directives.module';

// @vapaee libs---------
import { VapaeeWalletModule } from '@vapaee/wallet';
import { VapaeeDexModule } from '@vapaee/dex';
import { VapaeeREX, VapaeeRexModule } from '@vapaee/rex';
import { VapaeeComponentsModule } from './components/vpe-components.module';







@NgModule({
    declarations: [
        RootPage,
        WPPage,
        HomePage,
        TradePage,
        TokensPage,
        TokenPage,
        TokenEditPage,
        MarketsPage,
        AccountPage,
        NotFoundPage,
        ComingSoonPage,
        WalletPage,
        AppComponent,
        LoadingOverall
    ],
    entryComponents: [
        LoadingOverall
    ],
    imports: [
        NgbModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientJsonpModule,
        CommonServicesModule,
        VapaeeComponentsModule,
        VapaeeWalletModule,
        VapaeeDexModule,
        VapaeeRexModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        SidebarModule.forRoot(),

        FormsModule,
        MarkdownModule.forRoot(),
        DirectivesModule
    ],
    providers: [
        DatePipe,
        CookieService,
        HttpClient,
        CoingeckoService,
        DropdownService,
        TimezoneService,
        VapaeeREX
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

if ('serviceWorker' in navigator && environment.production) {
    navigator.serviceWorker.register('/ngsw-worker.js');
}