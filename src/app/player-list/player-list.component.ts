import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { Iplayer } from './iplayer';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers:[PlayerService]
})
export class PlayerListComponent implements OnInit {

  constructor(private playerService:PlayerService,private activatedRoute:ActivatedRoute) { }
  filterText=""
  players : Iplayer[] =[]
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.playerService.getPlayer(params["teamId"]).subscribe(data=> {this.players   = data});
    })
   
  }

}
