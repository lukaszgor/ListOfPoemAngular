import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainBackgroundComponent } from './main-view/main-background/main-background.component';
import { HeaderComponent } from './main-view/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutingModule } from './appRouting/appRoutingModule';
import { ArtistListComponent } from './main-view/main-background/artist-list/artist-list.component';
import { PoemsListComponent } from './main-view/main-background/poems-list/poems-list.component';
import { HttpService } from 'src/app/services/http.service';
import { ArtistService } from './services/artists.service';

@NgModule({

  declarations: [
    AppComponent,
    MainBackgroundComponent,
    HeaderComponent,
    ArtistListComponent,
    PoemsListComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule
  ],
  providers: [ArtistService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
