import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-main',
    template: `<ui-view>Loading...</ui-view>`,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MainComponent {}
