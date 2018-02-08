import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPlayerComponent} from './add-player/add-player.component'
import {ListPlayersComponent} from './list-players/list-players.component'
import {PlayerStatus1Component} from './player-status1/player-status1.component'
import {PlayerStatus2Component} from './player-status2/player-status2.component'
import {PlayerStatus3Component} from './player-status3/player-status3.component'


const routes: Routes = [


  {
    path: 'players/list',
    pathMatch: 'full',
    component: ListPlayersComponent,
    children: []
  },
  {
    path: 'players/addplayer',
    pathMatch: 'full',
    component: AddPlayerComponent,
    children: []
  },
  {
    path: 'status/game/1',
    pathMatch: 'full',
    component: PlayerStatus1Component,
    children: []
  },
  {
    path: 'status/game/2',
    pathMatch: 'full',
    component: PlayerStatus2Component,
    children: []
  },
  {
    path: 'status/game/3',
    pathMatch: 'full',
    component: PlayerStatus3Component,
    children: []
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
