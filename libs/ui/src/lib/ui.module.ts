import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from '../components/switch/switch.component';
import { SelectModule } from '../components/select/select.module';

import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from '../components/date-picker/date-picker.module';
import { AuroraInputComponent } from '../components/input/input.component';
import { AuroraCheckboxComponent } from '../components/checkbox/checkbox.component';
import { AuroraTextareaComponent } from '../components/textarea/textarea.component';


@NgModule({
  declarations: [
    SwitchComponent, AuroraInputComponent, AuroraCheckboxComponent, AuroraTextareaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    SelectModule, DatePickerModule
  ],
  exports: [
    SwitchComponent, AuroraInputComponent, AuroraCheckboxComponent, AuroraTextareaComponent,

    SelectModule, DatePickerModule
  ]
})
export class AuroraUiModule {
}
