import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CommonModulesList } from '../app.module';
import { DashboardPage } from './dashboard.page';

const route: Routes = [{
    path: '',
    component: DashboardPage,
}]

@NgModule({
    imports: [
        ...CommonModulesList,
        RouterModule.forChild(route),
    ],
    declarations: [DashboardPage],
    exports: [RouterModule],
})
export class DashboardModule { }