import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';


if (environment.production) {
  enableProdMode();
}

platformBrowser().bootstrapModule(AppModule, { applicationProviders: [provideZoneChangeDetection()], });
