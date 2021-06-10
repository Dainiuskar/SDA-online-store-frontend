import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserAccountDto} from "../../user-account/user-account-dto";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    authenticated = false;

    userUrl = 'http://localhost:8080/user'

    constructor(private http: HttpClient) {
    }

    public save(user: UserAccountDto) {
        return this.http.post<UserAccountDto>(this.userUrl, user);
    }

    authenticate(credentials, callback) {
        const headers = new HttpHeaders(credentials ? {
            authorization: 'Basic ' + btoa(credentials.login + ':' +
                credentials.password)
        } : {});

        this.http.get(this.userUrl + '/account', {headers: headers})
            .subscribe(response => {
                this.authenticated = !!response['name'];
                return callback && callback();
            });
    }
}
