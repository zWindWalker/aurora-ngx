import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {AuroraRadioComponent} from "./radio.component";
import {RadioDirective} from "./radio.directive";
import {DynamicComponent} from "./dynamic/dynamic.component";


@NgModule({
    declarations: [
        AuroraRadioComponent,
        RadioDirective,
        DynamicComponent
    ],
    imports: [CommonModule],
    exports: [
        AuroraRadioComponent
    ]
})
export class RadioModule {
}
