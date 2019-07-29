import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonServicesModule } from './services/common/common.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SidebarModule } from 'ng-sidebar';
import { CookieService } from 'ngx-cookie-service';

import { DatePipe } from '@angular/common';
 
import { AppComponent } from './app.component';
import { LoadingOverall } from './services/common/app.service';


import { VapaeeScatter } from './services/@vapaee/scatter/scatter.service';
import { VapaeeDEX } from './services/@vapaee/dex/dex.service';
import { CoingeckoService } from './services/coingecko.service';


import { VpeComponentsModule } from './components/vpe-components.module';

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
import { VapaeeFeedbackModule } from 'projects/vapaee/feedback/src/public_api';





@NgModule({
    declarations: [
        RootPage,
        WPPage,
        HomePage,
        TradePage,
        TokensPage,
        MarketsPage,
        AccountPage,
        NotFoundPage,
        ComingSoonPage,
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
        CommonServicesModule,
        VpeComponentsModule,
        VapaeeFeedbackModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        SidebarModule.forRoot()
    ],
    providers: [
        DatePipe,
        CookieService,
        VapaeeScatter,
        VapaeeDEX,
        HttpClient,
        CoingeckoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

if ('serviceWorker' in navigator && environment.production) {
    navigator.serviceWorker.register('/ngsw-worker.js');
}