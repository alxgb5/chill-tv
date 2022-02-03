import { Component, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';

@Component({
    selector: 'register-page',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class RegisterPage extends BaseComponent {
    constructor() {
        super();
    }
}