import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UIRouter } from '@uirouter/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { APP_STATES } from './app.states';
import { GlobalModule } from './global/global.module';
import { routerConfigFn } from './router.config';

export class AppConfig {
  load() {
    const timeout = 4;
    return new Promise(resolve => setTimeout(resolve, 4 * 1000))
      .then(() => console.log(`loaded after ${timeout} seconds!`));
  }
}

export function initResources(config: AppConfig, uiRouter: UIRouter) {
  const router = uiRouter;

  return function () {
    config.load().then(function () {
      router.urlService.listen();
      router.urlService.sync();
    });
  }
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      otherwise: { state: 'home' },
      config: routerConfigFn,
    }),
    GlobalModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AppConfig,
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
    {
      provide: APP_INITIALIZER,
      useFactory: initResources,
      deps: [AppConfig, UIRouter],
      multi: true,
    },
  ],
  bootstrap: [UIView]
})
export class AppModule { }
