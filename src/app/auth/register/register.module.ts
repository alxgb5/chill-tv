import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPage } from './register.page';
import { CommonModulesList } from '../../app.module';

const route: Routes = [{
    path: '',
    component: RegisterPage,
}]

@NgModule({
    imports: [
        ...CommonModulesList,
        RouterModule.forChild(route),
    ],
    declarations: [RegisterPage],
    exports: [RouterModule]
})
export class RegisterModule { }