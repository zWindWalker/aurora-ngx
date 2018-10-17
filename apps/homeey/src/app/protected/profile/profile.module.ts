import {NgModule} from '@angular/core';
import {ProfileComponent} from './containers/profile.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{
            path: '', component: ProfileComponent
        }])
    ],
    declarations: [
        ProfileComponent
    ]
})
export class ProfileModule {
}
