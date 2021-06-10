import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserAccountDto} from "../../user-account/user-account-dto";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    userUrl = 'http://localhost:8080/user'

    constructor(private http: HttpClient) {
    }

    public save(user: UserAccountDto) {
        console.log(user)

        return this.http.post<UserAccountDto>(this.userUrl, user);
    }
}
