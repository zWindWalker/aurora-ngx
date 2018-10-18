import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../../../shared/shared.module";
import {RegisterComponent} from "./register.component";


@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([{
            path: '', component: RegisterComponent
        }])
    ]

})
export class RegisterModule {
}
