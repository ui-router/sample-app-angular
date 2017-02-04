import { Component } from '@angular/core';
import { AppConfigService } from '../global/app-config.service';

/**
 * A component which shows and updates app preferences
 */
@Component({
  selector: 'app-prefs',
  template: `
    <div>
      <button class="btn btn-primary" (click)="reset()"><i class="fa fa-recycle"></i> <span>Reset All Data</span></button>
    </div>
    
    <div>
      <label for="restDelay">Simulated REST API delay (ms)</label>
      <input type="text" name="restDelay" [(ngModel)]="prefs.restDelay">
      <button class="btn btn-primary" (click)="savePrefs()">Save</button>
    </div>
`,
  styles: []
})
export class PrefsComponent {
  // data
  prefs;

  constructor(private appConfig: AppConfigService) {
    this.prefs = {
      restDelay: appConfig.restDelay
    };
  }

  /** Clear out the session storage */
  reset() {
    sessionStorage.clear();
    document.location.reload(true);
  }

  /** After saving preferences to session storage, reload the entire application */
  savePrefs() {
    Object.assign(this.appConfig, { restDelay: this.prefs.restDelay }).save();
    document.location.reload(true);
  }
}
