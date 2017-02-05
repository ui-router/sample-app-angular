import { Component, OnInit, HostBinding } from '@angular/core';
import { wait } from '../util/util';

@Component({
  selector: 'app-dialog',
  template: `
      <div class="backdrop" [class.active]="visible"></div>
      <div class='wrapper'>
        <div class="content">
          <h4 *ngIf="message">{{message}}</h4>
          <div [hidden]="!details">{{details}}</div>
    
          <div style="padding-top: 1em;">
            <button class="btn btn-primary" (click)="yes()">{{yesMsg}}</button>
            <button class="btn btn-primary" (click)="no()">{{noMsg}}</button>
          </div>
        </div>
      </div>
`,
  styles: []
})
export class DialogComponent implements OnInit {
  @HostBinding('class.dialog') dialog = true;
  @HostBinding('class.active') visible: boolean;

  message: string;
  details: string;
  yesMsg: string;
  noMsg: string;

  promise: Promise<any>;

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.yes = () => {
        this.visible = false;
        wait(300).then(resolve);
      };

      this.no = () => {
        this.visible = false;
        wait(300).then(reject);
      };
    });
  }

  yes() {}
  no() {}

  ngOnInit() {
    wait(50).then(() => this.visible = true);
  }
}
