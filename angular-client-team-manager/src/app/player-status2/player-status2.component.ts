import { Component, OnInit } from '@angular/core';
import {Player} from '../player'
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-player-status2',
  templateUrl: './player-status2.component.html',
  styleUrls: ['./player-status2.component.css']
})
export class PlayerStatus2Component implements OnInit {
title = "Game 2"
players: Player[]=[]


constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this._playerService.retrivePlayers()
    this._playerService.playerObserver.subscribe(players => this.players = players)
  }

  myColor(btn, status){
    if(btn == 'undecided'){
      return (status == btn ? 'yellow' : 'none')
    }

    if(btn == 'playing'){
      return (status == btn ? 'green' : 'none')
    }

    if(btn == 'notPlaying'){
      return (status == btn ? 'red' : 'none')
    }
  }
  changeStatus(id, game_to_update, status){
    this._playerService.changeStatus({id: id, game_to_update: game_to_update, player_status: status})
  }

}
