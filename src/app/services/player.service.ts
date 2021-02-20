import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Iplayer } from '../player-list/iplayer';
import { Observable } from 'rxjs';

@Injectable()
export class PlayerService {

  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/player";
  getPlayer(teamId):Observable<Iplayer[]>{
    let newPath = this.path;
    if(teamId){
      newPath += "?teamId="+teamId;
    }
    return  this.http.get<Iplayer[]>(newPath);
  }
}
