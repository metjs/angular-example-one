import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Iteam } from './iteam';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers:[TeamService]
})
export class TeamListComponent implements OnInit {

  constructor(private teamService:TeamService) { }
  teams : Iteam[] =[];
  ngOnInit(){
    this.teamService.getTeams().subscribe(data=> {this.teams = data});
  }

}
