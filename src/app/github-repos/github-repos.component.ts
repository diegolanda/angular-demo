import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../github.service';

import { Repos } from '../repos';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {

  @Input() colored: boolean;

  repos: Repos[];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    // const { getRepos, getUser } = this.githubService;

    // Promise.all([getRepos(), getUser()]).then(reponse => {
    //   const repos = response[0];
    //   const users = response[1];

    // });
    this.githubService.getRepos().then(
      repos => this.repos = repos
    ).catch(error => console.log('%o', error));
  }

}
