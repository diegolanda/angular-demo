import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User, Address, IUserPostSample } from './interfaces';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  @Output() onSubmit: EventEmitter<string> = new EventEmitter<string>();

  user: User = new User();
  address: Address = new Address();

  constructor() {
  }

  ngOnInit() {
  }

  handleSubmit() {
    const { user, address } = this;
    // const toPost = Object.assign({}, user, address);

    const toPost: IUserPostSample = Object.assign({}, user, { 'address': Object.assign({}, address) });

    const data = JSON.stringify(toPost, null, 2);

    this.onSubmit.emit(data);
  }

}
