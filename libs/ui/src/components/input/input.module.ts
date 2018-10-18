import {NgModule} from '@angular/core';

import {AuroraInputComponent} from "./input.component";
import {CommonModule} from "@angular/common";


@NgModule({
    declarations: [
        AuroraInputComponent,
    ],
    imports: [CommonModule],
    exports: [
        AuroraInputComponent
    ]
})
export class InputModule {
}
