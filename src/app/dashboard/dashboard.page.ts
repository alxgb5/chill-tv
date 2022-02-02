import { Component, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
    selector: 'dashboard-page',
    templateUrl: './dashboard.page.html',
    encapsulation: ViewEncapsulation.None,
})
export class DashboardPage extends BaseComponent {
    constructor() {
        super();
    }
}