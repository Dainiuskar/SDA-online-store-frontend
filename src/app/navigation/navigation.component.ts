import {Component, OnInit} from '@angular/core';
import {AppService} from "../services/app.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    role: string;

    constructor(private auth: AppService, private route: Router) {

        this.role = this.auth.getRole() == 'USER' ? 'user'
            : this.role = this.auth.getRole() == 'ADMIN' ? 'admin'
                : 'home';
    }

    ngOnInit(): void {
    }

    logout() {
        this.role = 'home';
        this.auth.removeToken();
        this.auth.logout();
        this.route.navigateByUrl('/login').then();
    }
}
