import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {
  private username:string;
  private apiKey:'57abb460160e85d95cf8a277c96fe75974163eb4';


  constructor(private http:HttpClient) { 
    this.username=''
  }
  getProfile(){
    return this.http.get("https://api.github.com/users/" +this.username + "?access_token=" + environment.githubToken)

  }
  getRepos(){
    return this.http.get("https://api.github.com/users/" +this.username + "/repos" + "?access_token=" +environment.githubToken)
  }
  updateProfile(username:string) {
    this.username = username;
  }
}
