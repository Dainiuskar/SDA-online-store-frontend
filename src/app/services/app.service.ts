import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SESSION_STORAGE, StorageService} from "ngx-webstorage-service";
import {User} from "../model/user";
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AppService {

    private loginUrl = '/server/login'

    constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
                private http: HttpClient) {
    }

    getRole() {
        return null;
    }

    logout() {

    }

    isAuthenticated(): boolean {
        return this.getToken() !== null;
    }

    getToken() {
        return this.storage.get('auth_token')
    }

    login(user: { password: string; login: string }): Observable<any> {
        return this.http.post(this.loginUrl,
            JSON.stringify(user),
            {
                headers:
                    {'Content-Type': 'application/json'}
            });
    }

    storeToken(token: string, auth_type: string) {
        this.storage.set('auth_token', token);
        this.storage.set('auth_type', auth_type);
    }

    removeToken() {
        this.storage.remove('auth_type');
        return this.storage.remove('auth_token');
    }
}
