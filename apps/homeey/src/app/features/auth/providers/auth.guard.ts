import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';


import {AuthService} from "./auth.service";
import {Logger} from '../../../core/services';


const log = new Logger('AuthenticationGuard');

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private authSvs: AuthService) {
    }

    canActivate(): boolean {
        if (this.authSvs.isAuthenticated()) {
            return true;
        }
        log.debug('Not authenticated, redirecting...');
        this.router.navigate(['/login'], {replaceUrl: true});
        return false;
    }
}