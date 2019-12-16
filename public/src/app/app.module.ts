import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { ShowComponent } from './show/show.component';
import { PosComponent } from './pos/pos.component';
import { ReceiveComponent } from './receive/receive.component';
import { InventoryComponent } from './inventory/inventory.component';
import { KeymapComponent } from './keymap/keymap.component';
import { KeymapPageComponent } from './keymap-page/keymap-page.component';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { PosPageComponent } from './pos-page/pos-page.component';
import { ReceivePageComponent } from './receive-page/receive-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    PosComponent,
    ReceiveComponent,
    InventoryComponent,
    KeymapComponent,
    KeymapPageComponent,
    InventoryPageComponent,
    PosPageComponent,
    ReceivePageComponent,
    ProductPageComponent
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


