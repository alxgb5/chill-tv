import { Component } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
})

export class NotFoundComponent extends BaseComponent {
    constructor() {
        super();
    }
}