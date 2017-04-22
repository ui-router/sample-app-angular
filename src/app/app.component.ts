import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { DialogService } from './global/dialog.service';
import { StateService } from '@uirouter/core';
import { AuthService } from './global/auth.service';
import { AppConfigService } from './global/app-config.service';

/**
 * This is the main app component for an authenticated user.
 *
 * This component renders the outermost chrome
 * (application header and tabs, the compose  and logout button)
 * It has a `ui-view` viewport for nested states to fill in.
 */
@Component({
  selector: 'app-root',
  template: `
    <div #dialogdiv></div>
    <div class="navheader">
      <ul *ngIf="isAuthenticated" class="nav nav-tabs">

        <li uiSrefActive="active"> <a uiSref="mymessages" role="button"> Messages </a> </li>
        <li uiSrefActive="active"> <a uiSref="contacts" role="button"> Contacts </a> </li>
        <li uiSrefActive="active"> <a uiSref="prefs" role="button"> Preferences </a> </li>

        <li class="navbar-right">
          <button class="btn btn-primary fa fa-home" uiSref="home"></button>
          <button style="margin-right: 15px;" class="btn btn-primary" uiSref="mymessages.compose">
            <i class="fa fa-envelope"></i> New Message
          </button>
        </li>

        <li class="navbar-text navbar-right logged-in-user" style="margin: 0.5em 1.5em;">
          <div>
            {{emailAddress}} <i class="fa fa-chevron-down"></i>
            <div class="hoverdrop">
              <button class="btn btn-primary" (click)="logout()">Log Out</button>
            </div>
          </div>
        </li>

      </ul>
    </div>

    <ui-view></ui-view>
`
  ,
  styles: []
})
export class AppComponent implements OnInit {
  @ViewChild('dialogdiv', {read: ViewContainerRef}) dialogdiv;

  // data
  emailAddress;
  isAuthenticated;

  constructor(appConfig: AppConfigService,
              public authService: AuthService,
              public $state: StateService,
              private dialog: DialogService
  ) {
    this.emailAddress = appConfig.emailAddress;
    this.isAuthenticated = authService.isAuthenticated();
  }

  ngOnInit() {
    this.dialog.vcRef = this.dialogdiv;
  }

  show() {
    this.dialog.confirm('foo');
  }

  logout() {
    const { authService, $state } = this;
    authService.logout();
    // Reload states after authentication change
    return $state.go('welcome', {}, { reload: true });
  }
}
