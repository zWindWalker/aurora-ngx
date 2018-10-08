import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './containers/header.component';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule} from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

@NgModule({

    declarations: [
        HeaderComponent,
        NavComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    exports: [HeaderComponent]
})
export class HeaderModule {
}
