import { Component, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
    selector: 'home-page',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomePage extends BaseComponent {
    constructor() {
        super();
    }
}