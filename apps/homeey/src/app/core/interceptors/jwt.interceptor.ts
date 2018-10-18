import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../../features/auth/providers/auth.service";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authSvs: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headersConfig = {};

        if (req.body instanceof FormData) {
            headersConfig = {
                'Content-Type': 'multipart/form-data'
            }
        } else {
            headersConfig = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        if (req.method === "GET") {
            headersConfig = {}
        }

        const token = this.authSvs._getToken();

        if (token) {
            headersConfig['Authorization'] = token.toLowerCase();
        }

        const request = req.clone({setHeaders: headersConfig});
        return next.handle(request);
    }
}