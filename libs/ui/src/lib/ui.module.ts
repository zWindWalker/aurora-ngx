import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from '../components/Data Entry/select/select.module';

@NgModule({
  imports: [
    CommonModule,
    SelectModule
  ],
  exports: [
    SelectModule
  ]
})
export class UiModule {
}
