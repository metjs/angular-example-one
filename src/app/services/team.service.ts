import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iteam } from '../team-list/iteam';

@Injectable()
export class TeamService {

  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/team";
  getTeams():Observable<Iteam[]>{
    return  this.http.get<Iteam[]>(this.path);
  }
}
