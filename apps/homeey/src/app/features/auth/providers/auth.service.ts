import {Injectable, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {untilDestroyed} from '@aurora-ngx/ui';
import {ApiService, Logger} from '../../../core/services';
import {StorageService} from './storage.service';


const log = new Logger('AuthService');

@Injectable({
    providedIn: 'root'
})

export class AuthService implements OnDestroy {

    private token: string = null;

    constructor(
        private stoSvs: StorageService,
        private apiSvs: ApiService,
        private router: Router
    ) {
        this.token = this.stoSvs.getToken();
    }


    ngOnDestroy(): void {
    }


    isAuthenticated = (): Boolean => !!this.token;

    _getToken = (): string => this.token;


    login = (body: any) => {
        this.apiSvs.post('/auth/login', body).pipe(untilDestroyed(this)).subscribe(res => {

            if (res.status_code === 200) {

                this.token = res.data.access_token.toLowerCase();

                this.stoSvs.saveToken(res.data.access_token.toLowerCase());

                this.router.navigate(['/home']);
            } else {
                log.error(res.message);
            }
        });
    };

    logout = () => {
        this.apiSvs.get('/auth/logout').pipe(untilDestroyed(this)).subscribe(res => {
            if (res.status_code === 200) {
                this.token = null;
                this.stoSvs.destroyToken();
                this.router.navigate(['/home']);
            } else {
                log.error(res.message);
            }
        });

    };

    register = (body: any) => {
        this.apiSvs.post('/auth/register', body).pipe(untilDestroyed(this)).subscribe(res => {
            console.log(res);
        });
    };

    change_password = body => {
        this.apiSvs.post('/auth/change-password', body).pipe(untilDestroyed(this)).subscribe(res => {
            console.log(res);
        });

    };

    reset_password = body => {
        this.apiSvs.post('/auth/reset-password', body).pipe(untilDestroyed(this)).subscribe(res => {
            console.log(res);
        });

    };

}