import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SESSION_STORAGE, StorageService} from "ngx-webstorage-service";


@Injectable({
    providedIn: 'root'
})
export class AppService {

    private mainUrl = 'http://localhost:8080'

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

    private getToken() {
        return this.storage.get('auth_token')
    }
}
