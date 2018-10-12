import {NgModule} from '@angular/core';

import {AuroraInputComponent} from "./input.component";
import {NumberComponent} from './components/number/number.component';
import {PhoneComponent} from './components/phone/phone.component';
import {DateComponent} from './components/date/date.component';
import {TextComponent} from './components/text/text.component';
import {CommonModule} from "@angular/common";
import {InputService} from "./input.service";


@NgModule({
    declarations: [
        AuroraInputComponent,
        NumberComponent,
        PhoneComponent,
        DateComponent,
        TextComponent,
    ],
    imports: [CommonModule],
    exports: [
        AuroraInputComponent
    ],
    providers: [InputService],
    entryComponents: [TextComponent]
})
export class InputModule {
}
