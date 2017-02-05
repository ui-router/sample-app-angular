import { Component, Input } from '@angular/core';

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
          <td *ngIf="colVisible('from')"    app-sort-messages prop="from"    label="Sender"></td>
          <td *ngIf="colVisible('to')"      app-sort-messages prop="to"      label="Recipient"></td>
          <td *ngIf="colVisible('subject')" app-sort-messages prop="subject" label="Subject"></td>
          <td *ngIf="colVisible('date')"    app-sort-messages prop="date"    label="Date"></td>
        </tr>
      </thead>
  
      <tbody>
        <tr *ngFor="let message of messages"
            uiSref=".message" [uiParams]="{ messageId: message._id }" uiSrefActive="active">
          <td *ngIf="colVisible('read')"><i class="fa fa-circle" style="font-size: 50%" *ngIf="!message.read"></i></td>
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
export class MessageTableComponent {
  @Input() columns: any[];
  @Input() messages: any[];

  constructor() { }

  colVisible(name) {
    return this.columns.indexOf(name) !== -1;
  }
}
