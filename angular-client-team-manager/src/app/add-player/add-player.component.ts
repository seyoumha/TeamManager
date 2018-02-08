import { Component, OnInit } from '@angular/core';
import {Player} from '../player'
import {PlayerService} from './../player.service'
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  newPlayer: Player = new Player();

  title = 'Add Player'

  constructor(private _playerService: PlayerService, private _router: Router) { }

  onSubmit(){
    this._playerService.createPlayer(this.newPlayer)
    this.newPlayer = new Player()
    this._router.navigate(['players/list'])
  }

  ngOnInit() {
  }

}
