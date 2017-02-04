import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfigService } from './app-config.service';
import { AuthService } from './auth.service';
import { DialogComponent } from './dialog.component';
import { DialogService } from './dialog.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AppConfigService,
    AuthService,
    DialogService,
  ],
  declarations: [DialogComponent],
  entryComponents: [DialogComponent],
})
export class GlobalModule { }
