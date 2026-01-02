import { Component, OnInit, Input } from '@angular/core';
import { TargetState, StateService } from '@uirouter/core';
import { AuthService } from './global/auth.service';
import { AppConfigService } from './global/app-config.service';

/**
 * This component renders a faux authentication UI
 *
 * It prompts for the username/password (and gives hints with bouncy arrows)
 * It shows errors if the authentication failed for any reason.
 */
@Component({
    selector: 'app-login',
    template: `
    <div class="container">
      <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <h3>Log In</h3>
        <p>
          (This login screen is for demonstration only...
          just pick a username, enter 'password' and click <b>"Log in"</b>)</p>
          <hr>
    
            <div>
              <label for="username">Username:</label>
              <select class="form-control" name="username" id="username" [(ngModel)]="credentials.username">
                @for (username of usernames; track username) {
                  <option [value]="username">{{username}}</option>
                }
              </select>
    
              @if (!credentials.username) {
                <i style="position: relative; bottom: 1.8em; margin-left: 10em; height: 0"
                class="fa fa-arrow-left bounce-horizontal"> Choose </i>
              }
            </div>
            <br>
    
              <div>
                <label for="password">Password:</label>
                <input class="form-control" type="password" name="password" [(ngModel)]="credentials.password">
                @if (credentials.username && credentials.password !== 'password') {
                  <i style="position: relative; bottom: 1.8em; margin-left: 5em; height: 0"
                    class="fa fa-arrow-left bounce-horizontal">
                    Enter '<b>password</b>' here
                  </i>
                }
              </div>
    
              <div [hidden]="!errorMessage" class="well error">{{ errorMessage }}</div>
    
              <hr>
                <div>
                  <button class="btn btn-primary" type="button" [disabled]="authenticating" (click)="login(credentials)">
                    @if (authenticating) {
                      <i class="fa fa-spin fa-spinner"></i>
                      } <span>Log in</span>
                    </button>
                    @if (credentials.username || credentials.password !== 'password') {
                      <i
                      style="position: relative;" class="fa fa-arrow-left bounce-horizontal"> Click Me!</i>
                    }
                  </div>
                </div>
              </div>
    `,
    styles: [],
    standalone: false
})
export class LoginComponent {
  @Input() returnTo: TargetState;

  usernames: string[];
  credentials = { username: null, password: null };
  authenticating: boolean;
  errorMessage: string;

  constructor(appConfig: AppConfigService,
              private authService: AuthService,
              private $state: StateService
  ) {
    this.usernames = authService.usernames;

    this.credentials = {
      username: appConfig.emailAddress,
      password: 'password'
    };
  }

  /**
   * The controller for the `login` component
   *
   * The `login` method validates the credentials.
   * Then it sends the user back to the `returnTo` state, which is provided as a resolve data.
   */
  login(credentials) {
    this.authenticating = true;

    const returnToOriginalState = () => {
      const state = this.returnTo.state();
      const params = this.returnTo.params();
      const options = Object.assign({}, this.returnTo.options(), { reload: true });
      this.$state.go(state, params, options);
    };

    const showError = (errorMessage) =>
      this.errorMessage = errorMessage;

    const stop = () => this.authenticating = false;
    this.authService.authenticate(credentials.username, credentials.password)
      .then(returnToOriginalState)
      .catch(showError)
      .then(stop, stop);
  }

}
