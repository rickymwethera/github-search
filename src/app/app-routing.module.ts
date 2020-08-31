import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoDetailsComponent } from './repo-details/repo-details.component';

const routes: Routes = [
  {path: 'repo-details', component: RepoDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
