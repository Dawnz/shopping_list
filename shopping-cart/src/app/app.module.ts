import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShoppingAddItemComponent } from './components/shopping-add-item/shopping-add-item.component';
import { ShoppingUpdateItemComponent } from './components/shopping-update-item/shopping-update-item.component';
import { ShoppingShowAllItemsComponent } from './components/shopping-show-all-items/shopping-show-all-items.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingDeleteItemComponent } from './components/shopping-delete-item/shopping-delete-item.component';

@NgModule({
  declarations: [AppComponent, ShoppingAddItemComponent, ShoppingUpdateItemComponent, ShoppingShowAllItemsComponent, HeaderComponent, ShoppingDeleteItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
