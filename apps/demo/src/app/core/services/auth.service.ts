import {Injectable} from '@angular/core';
import {JwtService} from './jwt.service';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {

    state_change = new Subject();

    constructor(
        private jwtSvs: JwtService,
        private router: Router
    ) {
    }

    isAuthenticated = (): Boolean => {
        return !!this.jwtSvs.getToken();
    }

    login = () => {
        this.jwtSvs.saveToken('1234');
        this.state_change.next(this.isAuthenticated());
        this.router.navigate(['/home']);
    };

    logout = () => {
        this.jwtSvs.destroyToken();
        this.state_change.next(this.isAuthenticated());
        this.router.navigate(['/home']);
    }

}