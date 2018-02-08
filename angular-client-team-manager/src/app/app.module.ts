import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PlayerService} from './player.service'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PlayerStatus1Component } from './player-status1/player-status1.component';
import { PlayerStatus2Component } from './player-status2/player-status2.component';
import { PlayerStatus3Component } from './player-status3/player-status3.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    AddPlayerComponent,
    PlayerStatus1Component,
    PlayerStatus2Component,
    PlayerStatus3Component,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
