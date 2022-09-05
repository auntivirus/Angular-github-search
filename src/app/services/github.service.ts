import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  // github profile
  getProfile(username: string) {
    return this.http.get(`http://api.github.com/users/${username}`);
  };

  getRepos(username: string) {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }
}
