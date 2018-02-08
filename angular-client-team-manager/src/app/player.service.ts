import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import { Player } from './player';
import { stringify } from 'querystring';

@Injectable()
export class PlayerService {
  playerObserver = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  createPlayer(player: Player){
    this._http.post('http://localhost:5000/players', player).subscribe(
      response => this.playerObserver.getValue().push(response.json()),
      errorResponse => console.log(errorResponse)
    )
    console.log(this.playerObserver)
  }

  retrivePlayers(){
    this._http.get('http://localhost:5000/players').subscribe(
      players => this.playerObserver.next(players.json()),
      errorResponse => console.log(errorResponse)
    )

  }
  removePlayer(id){
    this._http.post('http://localhost:5000/players/'+id,{} ).subscribe( res => {
      const deleted_player = res.json()
      const players = this.playerObserver.getValue()
      const index = this.findIndexByPlayerId(players, deleted_player._id)
      players.splice(index, 1)
      this.playerObserver.next(players)
    })
  }
  changeStatus(options){
    this._http.put(`http://localhost:5000/players/${options.id}`,options, {}).subscribe( res =>{
      const updated_player = res.json()
      const players = this.playerObserver.getValue()
      const index = this.findIndexByPlayerId(players, updated_player._id)
      players[index] = updated_player
      this.playerObserver.next(players)
    })
  }
  findIndexByPlayerId(players, playerId){
    const player =  players.filter(p => p._id === playerId)[0]
    return players.indexOf(player)
  }

}
