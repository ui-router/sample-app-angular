import { Component, Input } from '@angular/core';

/**
 * Renders a list of folders
 */
@Component({
  selector: 'app-folder-list',
  template: `
    <!-- Renders a list of folders -->
    <div class="folderlist">
      <ul class="selectlist list-unstyled">
        <!-- Highlight the selected folder:
            When the current state matches the uiSref's state (and its parameters)
            uiSrefActive applies the 'selected' class to the li element -->
        <li class="folder" uiSrefActive="selected" *ngFor="let folder of folders">
          <!-- This uiSref is a relative link to the 'mymessages.messagelist' substate. It provides the
              'folderId' parameter value from the current folder's .id property -->
          <a uiSref=".messagelist" [uiParams]="{ folderId: folder._id }"><i class="fa"></i>{{ folder._id }}</a>
        </li>
      </ul>
    </div>
`,
  styles: []
})
export class FolderListComponent {
  @Input() folders: any[];
  constructor() { }
}
