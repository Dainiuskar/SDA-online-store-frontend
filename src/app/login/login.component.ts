import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "../services/app.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credentials = {login: '', password: ''};
    loginUrl = '/server/login'

    constructor(private appService: AppService,
                private http: HttpClient,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
    }

    login() {
        const headers = new Headers(this.credentials ? {
            authorization: 'Basic' + btoa(this.credentials.login
            + ':' + this.credentials.password)
        } : {});

        this.http.post(this.loginUrl, {headers: headers})
            .subscribe()
        //     isValid => {
        //     if (isValid) {
        //         sessionStorage.setItem(
        //             'token', btoa(this.credentials.login + ':' + this.credentials.password)
        //         );
        //         this.router.navigate(['/home'])
        //     } else {
        //         alert('Authentication failed')
        //     }
        // });
        // this.appService.authenticate(this.credentials);
    }


}
