import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Repos } from './Repos';

@Injectable()
export class GithubService {
  private user = 'diegolanda';

  constructor(private http: Http) { }

  getRepos(): Promise<Repos[]> {
    const url = `https://api.github.com/users/${this.user}/repos`;
    const { http } = this;

    return http.get(url).toPromise()
      .then(response => response.json() as Repos[])
      .catch(error => error);
  }
}
