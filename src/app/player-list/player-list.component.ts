import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Iplayer } from './iplayer';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers:[PlayerService]
})
export class PlayerListComponent implements OnInit {

  constructor(private playerService:PlayerService) { }
  filterText=""
  players : Iplayer[] =[]
  ngOnInit() {
    this.playerService.getPlayer().subscribe(data=> {this.players   = data});
  }

}
