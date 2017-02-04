import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <p>
      message Works!
    </p>
  `,
  styles: []
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
