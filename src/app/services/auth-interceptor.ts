import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AppService} from "./app.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private app: AppService) {
    }

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.app.getToken() == null) {
            return next.handle(req);
        }
        const authReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + this.app.getToken())
        });
        return next.handle(authReq);
    }
}
