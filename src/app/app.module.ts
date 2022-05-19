import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ShopFormComponent } from './components/shop-form/shop-form.component';
import { HeaderComponent } from './components/header/header.component';
import { ShopSortComponent } from './components/shop-sort/shop-sort.component';
import { FilterviewPipe } from './pipes/filterview.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShopItemComponent,
    ShopListComponent,
    ShopFormComponent,
    HeaderComponent,
    ShopSortComponent,
    FilterviewPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
