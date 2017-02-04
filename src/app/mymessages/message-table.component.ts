import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { AppConfigService } from '../global/app-config.service';
import { Subscription } from 'rxjs/Rx';

/**
 * A component that displays a folder of messages as a table
 *
 * If a row is clicked, the details of the message is shown using a relative ui-sref to `.message`.
 *
 * ui-sref-active is used to highlight the selected row.
 *
 * Shows/hides specific columns based on the `columns` input binding.
 */
@Component({
  selector: 'app-message-table',
  template: `
    <table>
      <thead>
        <tr>
          <td *ngIf="colVisible('read')"></td>
          <td *ngIf="colVisible('from')" app-sort-messages="from" label="Sender"></td>
          <td *ngIf="colVisible('to')" app-sort-messages="to" label="Recipient"></td>
          <td *ngIf="colVisible('subject')" app-sort-messages="subject" label="Subject"></td>
          <td *ngIf="colVisible('date')" app-sort-messages="date" label="Date"></td>
        </tr>
      </thead>
  
      <tbody>
        <tr *ngFor="let message of sortedMessages"
            uiSref=".message" [uiParams]="{ messageId: message._id }" uiSrefActive="active">
          <td *ngIf="colVisible('read')"><i class="fa fa-circle" style="font-size: 50%" [hidden]="message.read"></i></td>
          <td *ngIf="colVisible('from')">{{ message.from }}</td>
          <td *ngIf="colVisible('to')">{{ message.to }}</td>
          <td *ngIf="colVisible('subject')">{{ message.subject }}</td>
          <td *ngIf="colVisible('date')">{{ message.date | date: "yyyy-MM-dd" }}</td>
        </tr>
      </tbody>
  
    </table>
`,
  styles: []
})
export class MessageTableComponent implements OnChanges, OnInit, OnDestroy {
  @Input() columns: any[];
  @Input() messages: any[];
  @Input() sortedMessages: any[];
  private _sub: Subscription;

  constructor(private appConfig: AppConfigService) { }

  ngOnInit() {
    this._sub = this.appConfig.sort$.subscribe(() => this.sort());
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  ngOnChanges() {
    this.sort();
  }

  sort() {
    const sortOrder = this.appConfig.sort$.value;
    this.sortedMessages = this.messages.slice().sort((a: any, b: any) => {
      return a.toString().localeCompare(b.toString()) * sortOrder.order;
    });
  }

  colVisible(name) {
    return this.columns.indexOf(name) !== -1;
  }
}
