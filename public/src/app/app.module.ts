import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { KeymapPageComponent } from './keymap-page/keymap-page.component';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { PosPageComponent } from './pos-page/pos-page.component';
import { ReceivePageComponent } from './receive-page/receive-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddProductComponent } from './product-page/add-product/add-product.component';
import { KeymapButtonComponent } from './keymap-page/keymap-button/keymap-button.component';
import { EditProductComponent } from './product-page/edit-product/edit-product.component';
import { DeleteProductComponent } from './product-page/delete-product/delete-product.component';
import { ReceiveRowComponent } from './receive-page/receive-row/receive-row.component';

@NgModule({
  declarations: [
    AppComponent,
    KeymapPageComponent,
    InventoryPageComponent,
    PosPageComponent,
    ReceivePageComponent,
    ProductPageComponent,
    HomePageComponent,
    PageNotFoundComponent,
    AddProductComponent,
    KeymapButtonComponent,
    EditProductComponent,
    DeleteProductComponent,
    ReceiveRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }


