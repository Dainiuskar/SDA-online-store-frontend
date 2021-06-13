import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "../services/app.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credentials = {login: '', password: ''};
    error = false;

    constructor(private app: AppService,
                private http: HttpClient,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    login(): void {
        // const headers = new Headers(this.credentials ? {
        //     authorization: 'Basic' + btoa(this.credentials.login
        //         + ':' + this.credentials.password)
        // } : {});

        this.app.login(this.credentials)
            .subscribe(response => {
                    if (response.status === '200' && response.role === 'USER') {
                        this.app.storeToken(response.authToken, 'user');
                        this.router.navigate(['/home']).then();
                        this.error = false;
                    } else if (response.status === '200' && response.role === 'ADMIN') {
                        this.app.storeToken(response.authToken, 'admin');
                        this.router.navigate(['/admin']).then();
                        this.error = false;
                    }
                },
                err => {
                    this.router.navigate(['/login']).then();
                });
    }
}
