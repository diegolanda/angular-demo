import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { GithubUserComponent } from './github-user/github-user.component';

import { GithubService } from './github.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubReposComponent,
    GithubUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
