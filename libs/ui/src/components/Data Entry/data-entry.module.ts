import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from './select/select.module';
import { SwitchComponent } from './switch/switch.component';



@NgModule({
  imports: [
    SelectModule
  ],
  exports: [
    SelectModule,
    SwitchComponent
  ],
  declarations: [SwitchComponent]
})
export class DataEntryModule {
}
