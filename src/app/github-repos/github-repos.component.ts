import { Component, Input, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
};

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss']
})

export class GithubReposComponent implements OnInit {

  @Input() githubRepos: any;
  @Input() githubProfile: any;

  constructor() { }

  ngOnInit(): void {};

}
