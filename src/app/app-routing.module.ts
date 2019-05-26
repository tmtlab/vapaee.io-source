import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootPage } from './pages/root/root.page';
import { WPPage } from './pages/wp/wp.page';
import { HomePage } from './pages/home/home.page';
import { TradePage } from './pages/trade/trade.page';
import { TokensPage } from './pages/tokens/tokens.page';
import { AccountPage } from './pages/account/account.page';
import { NotFoundPage } from './pages/not-found/not-found.page';

const routes: Routes = [
  { path: '',                            data: { state: "root" }, redirectTo: '/exchange/home', pathMatch: 'full' },
  { path: 'exchange',                    data: { state: "root" }, component: RootPage,
    children: [
      { path: '',                        data: { state: "root" }, redirectTo: '/exchange/home', pathMatch: 'full' },
      { path: 'wp',                      data: { state: "wp" }, component: WPPage },
      { path: 'home',                    data: { state: "home" }, component: HomePage },
      { path: 'trade/:scope',            data: { state: "trade" }, component: TradePage },
      { path: 'tokens',                  data: { state: "tokens" }, component: TokensPage, children: [
          { path: ':symbol',             data: { state: "edit" }, component: TokensPage }
      ] },
      { path: 'account',                 data: { state: "guest" }, component: AccountPage},
      { path: 'account/:name',           data: { state: "account" }, component: AccountPage }
    ]
  },
  { path: '**',                          data: { state: "404" }, component: NotFoundPage }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
