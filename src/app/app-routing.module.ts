import { NgModule } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';

const routes: Routes = [
  {path:'players',component:PlayerListComponent},
  {path:'',redirectTo:'players',pathMatch:'full'},
  {path:'players/team/:teamId',component:PlayerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
