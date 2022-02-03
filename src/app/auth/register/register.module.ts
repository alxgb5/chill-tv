import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPage } from './register.page';
import { MatStepperModule } from '@angular/material/stepper';

const route: Routes = [{
    path: '',
    component: RegisterPage,
}]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        MatStepperModule,
    ],
    declarations: [RegisterPage],
    exports: [RouterModule]
})
export class RegisterModule { }