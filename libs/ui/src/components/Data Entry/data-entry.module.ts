import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from './select/select.module';
import { SwitchComponent } from './switch/switch.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    SelectModule,
    ReactiveFormsModule,
  ],
  exports: [
    SelectModule,
    SwitchComponent,
    InputComponent
  ],
  declarations: [SwitchComponent, InputComponent]
})
export class DataEntryModule {
}
