import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginValidator} from "../validators/login-validator";
import {UserService} from "../services/user-service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user: User;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private loginValidator: LoginValidator,
                private userService: UserService) {
        this.user = new User();
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.userService.save(this.user)
            .subscribe(() => this.gotoLogin());
    }

    private gotoLogin() {
        this.router.navigate(['/login']).then();
    }
}
