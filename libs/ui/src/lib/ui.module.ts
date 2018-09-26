import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../components/input/input.component';
import { SwitchComponent } from '../components/switch/switch.component';
import { SelectModule } from '../components/select/select.module';
import { DatePickerModule } from '../components/date-picker/date-picker.module';


@NgModule({
  declarations: [
    SwitchComponent, InputComponent
  ],
  imports: [
    CommonModule,

    SelectModule,
    DatePickerModule
  ],
  exports: [
    SwitchComponent,
    InputComponent,

    SelectModule,
    DatePickerModule
  ]
})
export class AuroraUiModule {
}
