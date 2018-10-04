import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuroraSwitchComponent } from '../components/switch/switch.component';
import { SelectModule } from '../components/select/select.module';

import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from '../components/date-picker/date-picker.module';
import { AuroraInputComponent } from '../components/input/input.component';
import { AuroraCheckboxComponent } from '../components/checkbox/checkbox.component';
import { AuroraTextareaComponent } from '../components/textarea/textarea.component';
import { UploadModule } from '../components/upload/upload.module';
import { AuroraButtonComponent } from '../components/button/button.component';
import { AuroraModalComponent } from '../components/modal/modal.component';


@NgModule({
  declarations: [
    AuroraSwitchComponent, AuroraInputComponent, AuroraCheckboxComponent, AuroraTextareaComponent, AuroraButtonComponent, AuroraModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    SelectModule, DatePickerModule, UploadModule
  ],
  exports: [
    AuroraSwitchComponent, AuroraInputComponent, AuroraCheckboxComponent, AuroraTextareaComponent, AuroraButtonComponent, AuroraModalComponent,

    SelectModule, DatePickerModule, UploadModule
  ]
})
export class AuroraUiModule {
}
