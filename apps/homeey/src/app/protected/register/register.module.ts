import {NgModule} from '@angular/core';

import {RegisterComponent} from './containers/register.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{
            path: '', component: RegisterComponent
        }])
    ],
    declarations: [
        RegisterComponent
    ]
})
export class RegisterModule {
}
