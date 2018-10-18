import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../../../shared/shared.module";
import {ChangePasswordComponent} from "./change-password.component";


@NgModule({
    declarations: [
        ChangePasswordComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([{
            path: '', component: ChangePasswordComponent
        }])
    ]

})
export class ChangePasswordModule {
}
