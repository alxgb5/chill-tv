import { Component, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';

@Component({
    selector: 'register-page',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class RegisterPage extends BaseComponent {
    activeStepper: number = 1;
    constructor() {
        super();
    }

    switchStep(step: number) {
        if (step === 1)
            this.activeStepper = 1;
        if (step === 2)
            this.activeStepper = 2;
        if (step === 3)
            this.activeStepper = 3;
    }
    nextStep() {
        if (this.activeStepper === 3)
            return;
        this.activeStepper = this.activeStepper + 1;
    }
}