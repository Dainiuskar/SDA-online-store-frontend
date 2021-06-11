import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user-service/user.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credentials = {login: '', password: ''};

    constructor(private userService: UserService,
                private http: HttpClient,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    login() {
        this.userService.authenticate(this.credentials, () => {
            this.router.navigateByUrl('');
        })
    }



}
