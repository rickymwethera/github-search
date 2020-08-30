import { Component, OnInit } from '@angular/core';
import { HttpservicesService } from '../services/httpservices.service'

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  profile:any[];
  repos:any[];
  username:string;

  constructor(private httpService:HttpservicesService) { 
    this.httpService.getProfile()
  }
  findProfile(){
    this.httpService.updateProfile(this.username)
    this.httpService.getProfile().subscribe(profile=>{
      console.log(profile)
      this.profile=profile
    });
    this.httpService.getrepos().subscribe(repo=>{
      console.log(repo)
      this.repos;
    })
  }


  ngOnInit(): void {
  }

}
