import {Injectable, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {untilDestroyed} from '@aurora-ngx/ui';
import {ApiService, Logger} from '../../../core/services';


const log = new Logger('ProfileService');

@Injectable()

export class ProfileService implements OnDestroy {


    constructor(
        private apiSvs: ApiService,
        private router: Router
    ) {
    }

    ngOnDestroy(): void {
    }

    _getUserProfile = () => {
        this.apiSvs.get('/auth/profile').pipe(untilDestroyed(this)).subscribe(res => {
            console.log(res);
        });
    };
}