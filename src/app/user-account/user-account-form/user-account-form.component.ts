import { Component, OnInit } from '@angular/core';
import {UserAccountDto} from "../user-account-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user-service/user.service";

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
      private userService: UserService) {
    this.user = new UserAccountDto();
  }

  onSubmit(){
    this.userService.save(this.user)
        .subscribe(result => this.gotoLogin());
  }

  private gotoLogin() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }
}
