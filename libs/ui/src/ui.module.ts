import {Compiler, COMPILER_OPTIONS, CompilerFactory, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectModule} from './components/select/select.module';

import {ReactiveFormsModule} from '@angular/forms';
import {DatePickerModule} from './components/date-picker/date-picker.module';
import {UploadModule} from './components/upload/upload.module';
import {AuroraModalComponent} from './components/modal/modal.component';
import {CarouselModule} from './components/carousel/carousel.module';
import {ButtonModule} from './components/button/button.module';
import {RadioModule} from './components/radio/radio.module';
import {SharedModule} from './shared/shared.module';
import {InputModule} from './components/input/input.module';
import {SwitchModule} from './components/switch/switch.module';
import {CheckboxModule} from './components/checkbox/checkbox.module';
import {TextareaModule} from './components/textarea/textarea.module';

@NgModule({
    declarations: [
        ///-----------------------------------------------  Component   -----------------------------------------------///

        AuroraModalComponent

    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,

        ButtonModule, InputModule, TextareaModule,
        DatePickerModule,
        SelectModule,
        UploadModule, CarouselModule,
        RadioModule, SwitchModule, CheckboxModule

    ],
    exports: [
        ///-----------------------------------------------  Component   -----------------------------------------------///

        AuroraModalComponent,

        ///-----------------------------------------------  Module   -----------------------------------------------///

        ButtonModule, InputModule, TextareaModule,
        DatePickerModule,
        SelectModule,
        UploadModule, CarouselModule,
        RadioModule, SwitchModule, CheckboxModule,

        SharedModule
    ]
})
export class AuroraUiModule {
}
