import { Component, OnInit, Input, HostListener, OnDestroy } from '@angular/core';
import { AppConfigService } from '../global/app-config.service';
import { Subscription } from 'rxjs/Rx';

/**
 * A directive (for a table header) which changes the app's sort order
 */
@Component({
  selector: '[app-sort-messages]',
  template: `
    <i style='padding-left: 0.25em' class='fa' [class.fa-sort-asc]="asc" [class.fa-sort-desc]="desc"></i>{{ label }}
`,
  styles: []
})
export class SortMessagesComponent implements OnInit, OnDestroy {
  @Input('app-sort-messages') sort: string;
  @Input('label') label: string;
  private _sub: Subscription;
  public asc: boolean;
  public desc: boolean;

  constructor(private appConfig: AppConfigService) { }

  ngOnInit() {
    this._sub = this.appConfig.sort$.subscribe(() => this.update());
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  update() {
    const sort = this.appConfig.sort$.value;
    const matches = sort.sortBy === this.sort;
    this.asc = matches && sort.order > 0;
    this.desc = matches && sort.order < 0;
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    console.log(e);
    if (this.asc) {
      this.appConfig.sort = '-' + this.sort;
    } else {
      this.appConfig.sort = '+' + this.sort;
    }
  }
}
