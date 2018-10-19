import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuroraSwitchComponent} from '../components/switch/switch.component';
import {SelectModule} from '../components/select/select.module';

import {ReactiveFormsModule} from '@angular/forms';
import {DatePickerModule} from '../components/date-picker/date-picker.module';
import {AuroraCheckboxComponent} from '../components/checkbox/checkbox.component';
import {AuroraTextareaComponent} from '../components/textarea/textarea.component';
import {UploadModule} from '../components/upload/upload.module';
import {AuroraModalComponent} from '../components/modal/modal.component';
import {CarouselModule} from '../components/carousel/carousel.module';
import {ButtonModule} from "../components/button/button.module";
import {InputModule} from "../components/input/input.module";
import {RadioModule} from "../components/radio/radio.module";


@NgModule({
    declarations: [
        AuroraSwitchComponent, AuroraCheckboxComponent, AuroraTextareaComponent, AuroraModalComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,

        SelectModule, DatePickerModule, UploadModule, CarouselModule, ButtonModule, InputModule, RadioModule
    ],
    exports: [
        AuroraSwitchComponent, AuroraCheckboxComponent, AuroraTextareaComponent, AuroraModalComponent,

        SelectModule, DatePickerModule, UploadModule, CarouselModule, ButtonModule, InputModule, RadioModule
    ]
})
export class AuroraUiModule {
}
