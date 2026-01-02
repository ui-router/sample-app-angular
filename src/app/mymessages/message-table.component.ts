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
          @if (colVisible('read')) {
            <td></td>
          }
          @if (colVisible('from')) {
            <td    app-sort-messages prop="from"    label="Sender"></td>
          }
          @if (colVisible('to')) {
            <td      app-sort-messages prop="to"      label="Recipient"></td>
          }
          @if (colVisible('subject')) {
            <td app-sort-messages prop="subject" label="Subject"></td>
          }
          @if (colVisible('date')) {
            <td    app-sort-messages prop="date"    label="Date"></td>
          }
        </tr>
      </thead>
    
      <tbody>
        @for (message of messages; track message) {
          <tr
            uiSref=".message" [uiParams]="{ messageId: message._id }" uiSrefActive="active">
            @if (colVisible('read')) {
              <td>@if (!message.read) {
                <i class="fa fa-circle" style="font-size: 50%"></i>
              }</td>
            }
            @if (colVisible('from')) {
              <td>{{ message.from }}</td>
            }
            @if (colVisible('to')) {
              <td>{{ message.to }}</td>
            }
            @if (colVisible('subject')) {
              <td>{{ message.subject }}</td>
            }
            @if (colVisible('date')) {
              <td>{{ message.date | date: "yyyy-MM-dd" }}</td>
            }
          </tr>
        }
      </tbody>
    
    </table>
    `,
    styles: [],
    standalone: false
})
export class MessageTableComponent {
  @Input() columns: any[];
  @Input() messages: any[];

  constructor() { }

  colVisible(name) {
    return this.columns.indexOf(name) !== -1;
  }
}
