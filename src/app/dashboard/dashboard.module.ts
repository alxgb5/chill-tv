import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard.page';

const route: Routes = [{
    path: '',
    component: DashboardPage,
}]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
    ],
    declarations: [DashboardPage],
    exports: [Router],
})
export class DashboardModule { }