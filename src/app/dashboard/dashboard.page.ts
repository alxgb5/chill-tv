import { Component, ViewEncapsulation } from '@angular/core';
import { getAuth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BaseComponent } from '../../base/base.component';

@Component({
    selector: 'dashboard-page',
    templateUrl: './dashboard.page.html',
    encapsulation: ViewEncapsulation.None,
})
export class DashboardPage extends BaseComponent {
    constructor(
        private router: Router,
    ) {
        super();
    }

    async logOut() {
        try {
            const auth = getAuth();
            console.log("🚀 ~ DashboardPage ~ logOut ~ auth", auth);
            const signout = await signOut(auth);
            console.log("🚀 ~ DashboardPage ~ logOut ~ signout", signout);
            this.router.navigateByUrl('/' + this.RoutesList.Login);
        } catch (error) {
            console.log("Error : ", error)
        }
    }
}