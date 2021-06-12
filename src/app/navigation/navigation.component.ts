import {Component, OnInit} from '@angular/core';
import {AppService} from "../services/app.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    loggedType: string;

    constructor(private auth: AppService, private route: Router) {

        this.loggedType = this.auth.getRole() == 'USER' ? 'user'
            : this.loggedType = this.auth.getRole() == 'ADMIN' ? 'admin'
                : 'home';
    }

    ngOnInit(): void {
    }

    logout() {
        this.loggedType = 'home';
        // this.auth.removeToken();
        this.auth.logout();
        this.route.navigateByUrl('/login').then();
    }
}
