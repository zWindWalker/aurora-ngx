import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from './select/select.module';



@NgModule({
  imports: [
    SelectModule
  ],
  exports: [
    SelectModule
  ]
})
export class DataEntryModule {
}
