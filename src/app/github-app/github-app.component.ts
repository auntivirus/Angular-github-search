import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { GithubService } from '../services/github.service';
@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.scss']
})
export class GithubAppComponent implements OnInit {

  public githubUserQuery!: string;
  public githubProfile: any;
  public githubRepos!: any;
  public errorMessage!: string;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  };

  // to get github profile
  searchUser() {
    this.githubService.getProfile(this.githubUserQuery).subscribe(res => {this.githubProfile = res},
    err => {console.log(err)});

    //to get github repos
    this.githubService.getRepos(this.githubUserQuery).subscribe(
      res => {this.githubRepos = res},
      );

  };

}
