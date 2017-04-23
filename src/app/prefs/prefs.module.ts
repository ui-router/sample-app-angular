import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrefsComponent } from './prefs.component';
import { prefsState } from './prefs.states';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: [ prefsState ] }),
    FormsModule,
    CommonModule
  ],
  declarations: [
    PrefsComponent
  ]
})
export class PrefsModule { }
