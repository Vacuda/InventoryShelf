
import { PosPageComponent } from './pos-page/pos-page.component';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { ReceivePageComponent } from './receive-page/receive-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { KeymapPageComponent } from './keymap-page/keymap-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',component: HomePageComponent },
  { path: 'pos',component: PosPageComponent },
  { path: 'inventory',component: InventoryPageComponent },
  { path: 'receive', component: ReceivePageComponent },
  { path: 'product', component: ProductPageComponent },
  { path: 'keymap', component: KeymapPageComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// const routes: Routes = [
//     { path: 'product',component: ProductComponent, children: [
//         { path: 'details/:id', component: ProductDetailComponent },
//     ]},
//     { path: 'review',component: ReviewComponent, children: [
//         { path: 'details/:id', component: ReviewDetailComponent },
//     ]},
//     { path: '', pathMatch: 'full', redirectTo: '/product' },
// ];
