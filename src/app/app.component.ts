import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {UserService} from "./services/user-service/user-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ONLINE STORE';
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }
}
