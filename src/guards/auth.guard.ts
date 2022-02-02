import { Injectable } from '@angular/core';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { CanActivate, Router } from '@angular/router';
import { RoutesList } from '../routes';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
    ) { }
    canActivate(): boolean {
        if (this.getAuthStateChanged())
            return true;
        this.router.navigateByUrl('/' + RoutesList.Login);
        return false;

    }

    private getAuthStateChanged(): boolean {
        const auth = getAuth();
        let isUserLogged = false;
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                if (!uid) {
                    isUserLogged = false;
                }
                else {
                    isUserLogged = true;
                }
            } else {
                isUserLogged = false;
            }
        });
        return isUserLogged;
    }
}