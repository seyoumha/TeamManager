import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import {Player} from '../player'

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {
  players: Player[]=[]

  constructor(private _playerService: PlayerService) { }


  ngOnInit() {
    this._playerService.retrivePlayers()
    this._playerService.playerObserver.subscribe(players => this.players = players)
  }

  removePlayer(id){
    this._playerService.removePlayer(id)

  }

}
