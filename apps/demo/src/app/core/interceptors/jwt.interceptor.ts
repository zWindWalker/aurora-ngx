import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtService} from '../services';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private jwtSvs: JwtService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const token = this.jwtSvs.getToken();

        if (token) {
            headersConfig['Authorization'] = `Token ${token}`;
        }

        const request = req.clone({setHeaders: headersConfig});
        return next.handle(request);
    }
}