import {NgModule} from '@angular/core';

import {AuroraInputComponent} from "./input.component";
import {NumberComponent} from './components/number.component';
import {PhoneComponent} from './components/phone.component';
import {TextComponent} from './components/text.component';
import {CommonModule} from "@angular/common";
import {DynamicInputDirective} from "./input.directive";


@NgModule({
    declarations: [
        AuroraInputComponent,
        NumberComponent,
        PhoneComponent,
        TextComponent,

        DynamicInputDirective
    ],
    imports: [CommonModule],
    exports: [
        AuroraInputComponent
    ],
    entryComponents: [TextComponent, NumberComponent, PhoneComponent]
})
export class InputModule {
}
