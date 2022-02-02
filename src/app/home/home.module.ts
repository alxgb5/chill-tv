import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const route: Routes = [{
    path: '',
    component: HomePage,
}]
@NgModule({
    declarations: [HomePage],
    imports: [
        CommonModule,
        RouterModule.forChild(route),
    ],
    exports: [RouterModule],
})
export class HomeModule { }