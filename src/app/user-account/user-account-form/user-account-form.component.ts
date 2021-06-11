import {Component, OnInit} from '@angular/core';
import {UserAccountDto} from "../user-account-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user-service/user.service";
import {LoginValidator} from "../../validators/login-validator";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-user-account-form',
    templateUrl: './user-account-form.component.html',
    styleUrls: ['./user-account-form.component.css']
})
export class UserAccountFormComponent implements OnInit {

    user: UserAccountDto;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginValidator: LoginValidator,
        private userService: UserService) {
        this.user = new UserAccountDto();
    }

    onSubmit() {
        this.userService.save(this.user)
            .subscribe(() => this.gotoLogin());
    }

    private gotoLogin() {
        this.router.navigate(['login']);
    }

    ngOnInit(): void{
    }
}
