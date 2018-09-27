import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from '../components/switch/switch.component';
import { SelectModule } from '../components/select/select.module';

import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from '../components/date-picker/date-picker.module';
import { InputComponent } from '../components/input/input.component';


@NgModule({
  declarations: [
    SwitchComponent, InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    SelectModule, DatePickerModule
  ],
  exports: [
    SwitchComponent,
    InputComponent,

    SelectModule, DatePickerModule
  ]
})
export class AuroraUiModule {
}
