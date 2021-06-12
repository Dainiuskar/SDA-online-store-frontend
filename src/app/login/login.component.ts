import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AppService} from "../services/app-service/app.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credentials = {login: '', password: ''};

    constructor(private appService: AppService,
                private http: HttpClient,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    login() {
        this.appService.authenticate(this.credentials);
    }



}
