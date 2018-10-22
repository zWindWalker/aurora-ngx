import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicDirective} from './directives/dynamic.directive';

@NgModule({
    declarations: [
        DynamicDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        DynamicDirective
    ]

})
export class SharedModule {
}
