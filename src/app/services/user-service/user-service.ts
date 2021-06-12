import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {delay, finalize} from "rxjs/operators";
import {User} from "../../model/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    authenticated = false;

    logoutUrl = 'http://localhost:8080/logout'
    userUrl = 'http://localhost:8080/user'

    constructor(private http: HttpClient) {
    }

    public save(user: User) {
        return this.http.post<User>(this.userUrl, user);
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
