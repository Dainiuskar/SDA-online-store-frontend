import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserAccountDto} from "../../user-account/user-account-dto";
import {Observable, of} from "rxjs";
import {delay, finalize} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    authenticated = false;

    logoutUrl = 'http://localhost:8080/logout'
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

        this.http.get(this.userUrl + '/' + credentials.login, {headers: headers})
            .subscribe(response => {
                if (response != null) {
                    this.authenticated = true;
                }
                return callback && callback();
            });
    }

    logout() {
        this.http.post(this.logoutUrl, {}).pipe(finalize(() => {
            this.authenticated = false;
        })).subscribe();
    }

    // getByLogin(login: string): Observable<Observable<UserAccountDto>> {
    //     const user = this.http.get<UserAccountDto>(this.userUrl + '/' + login);
    //     return of(user).pipe(delay(500));
    // }
}
