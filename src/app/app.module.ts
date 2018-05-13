
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MessagesComponent } from './messages/messages.component';
import { MenuComponent } from './menu/menu.component';

import { AppRoutingModule } from './/app-routing.module';
import { ItemsService } from './items.service';
import { MessageService } from './message.service';
import { RouterModule, Routes} from '@angular/router';
import { SivComponent } from './siv/siv.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VenteComponent } from './vente/vente.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MessagesComponent,
    MenuComponent,
    SivComponent,
    NavbarComponent,
    VenteComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
],
  providers: [ItemsService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
