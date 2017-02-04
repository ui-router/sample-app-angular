import { Component, OnInit } from '@angular/core';
// This is a home component for authenticated users.
// It shows giant buttons which activate their respective submodules: Messages, Contacts, Preferences
@Component({
  selector: 'app-home',
  template: `
    <div class="home buttons">
      <button uiSref="mymessages" class="btn btn-primary">
        <h1><i class="fa fa-envelope"></i></h1>
        <h1>Messages</h1>
      </button>

      <button uiSref="contacts" class="btn btn-primary">
      <h1><i class="fa fa-users"></i></h1>
      <h1>Contacts</h1>
      </button>

      <button uiSref="prefs" class="btn btn-primary">
        <h1><i class="fa fa-cogs"></i></h1>
        <h1>Preferences</h1>
      </button>
    </div>
`,
  styles: []
})
export class HomeComponent {
  constructor() { }
}
