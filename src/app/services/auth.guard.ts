import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AppService} from "./app.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private auth: AppService,
                private router: Router) {
    }

    canActivate(): boolean {
        if (this.auth.isAuthenticated) {
            return true;
        } else {
            this.router.navigate(['/login']).then()
            return false;
        }
    }
}
