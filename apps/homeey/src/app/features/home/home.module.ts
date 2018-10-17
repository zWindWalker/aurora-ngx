import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './pages/home.component';
import {RouterModule} from '@angular/router';
import {AuroraUiModule} from '@aurora-ngx/ui';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        AuroraUiModule,
        RouterModule.forChild([{
            path: '', component: HomeComponent
        }])
    ]

})
export class HomeModule {
}
