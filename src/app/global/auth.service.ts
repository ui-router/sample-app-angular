import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { wait } from '../util/util';

/**
 * This service emulates an Authentication Service.
 */
@Injectable()
export class AuthService {
  // data
  usernames: string[] = ['myself@angular.dev', 'devgal@angular.dev', 'devguy@angular.dev'];

  constructor(public appConfig: AppConfigService) { }

  /**
   * Returns true if the user is currently authenticated, else false
   */
  isAuthenticated() {
    return !!this.appConfig.emailAddress;
  }

  /**
   * Fake authentication function that returns a promise that is either resolved or rejected.
   *
   * Given a username and password, checks that the username matches one of the known
   * usernames (this.usernames), and that the password matches 'password'.
   *
   * Delays 800ms to simulate an async REST API delay.
   */
  authenticate(username, password) {
    const appConfig = this.appConfig;

    // checks if the username is one of the known usernames, and the password is 'password'
    const checkCredentials = () => new Promise<string>((resolve, reject) => {
      const validUsername = this.usernames.indexOf(username) !== -1;
      const validPassword = password === 'password';

      return (validUsername && validPassword) ? resolve(username) : reject('Invalid username or password');
    });

    return wait(800)
      .then(checkCredentials)
      .then((authenticatedUser: string) => {
        appConfig.emailAddress = authenticatedUser;
        appConfig.save();
      });
  }

  /** Logs the current user out */
  logout() {
    this.appConfig.emailAddress = undefined;
    this.appConfig.save();
  }
}
