import {NgModule} from '@angular/core';

import {ChangePasswordComponent} from './containers/change-password.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{
            path: '', component: ChangePasswordComponent
        }])
    ],
    declarations: [
        ChangePasswordComponent
    ]
})
export class ChangePasswordModule {
}
