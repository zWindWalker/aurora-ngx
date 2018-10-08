import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

import {Logger} from '../services';
import {AuthService} from '../services';

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