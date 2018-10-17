import {NgModule} from '@angular/core';

import {LoginComponent} from './containers/login.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{
            path: '', component: LoginComponent
        }])
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {
}
