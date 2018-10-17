import {Injectable, OnDestroy} from '@angular/core';
import {JwtService} from './jwt.service';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {ApiService} from "./api.service";
import {untilDestroyed} from "@aurora-ngx/utils";


@Injectable()
export class AuthService implements OnDestroy {

    state_change = new Subject();

    constructor(
        private jwtSvs: JwtService,
        private apiSvs: ApiService,
        private router: Router
    ) {
    }

    ngOnDestroy(): void {
    }


    isAuthenticated = (): Boolean => {
        return !!this.jwtSvs.getToken();
    }

    login = (body: any) => {
        // this.jwtSvs.saveToken('1234');
        // this.state_change.next(this.isAuthenticated());
        // this.router.navigate(['/home']);
        this.apiSvs.post('/auth/login', body).pipe(untilDestroyed(this)).subscribe(res => {
            console.log(res)
        })
    };

    logout = () => {
        this.jwtSvs.destroyToken();
        this.state_change.next(this.isAuthenticated());
        this.router.navigate(['/home']);
    }

    register = (body: any) => {
        this.apiSvs.post('/auth/register', body).pipe(untilDestroyed(this)).subscribe(res => {
            console.log(res)
        })
    }

}