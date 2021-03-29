import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { MycartComponent } from './mycart/mycart.component';
import { ShoppingPlaceComponent } from './shopping-place/shopping-place.component';
import { ShoppingItemComponent } from './shopping-place/shopping-item/shopping-item.component';
import { AddShoppingItemComponent } from './shopping-place/add-shopping-item/add-shopping-item.component';
import { ShoppingItemService } from './shopping-place/shopping-items.service';
import { MyCartService } from './mycart/mycart.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    MycartComponent,
    ShoppingPlaceComponent,
    ShoppingItemComponent,
    AddShoppingItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShoppingItemService, MyCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
