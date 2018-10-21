import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';

@NgModule({
  declarations: [
    DynamicComponentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    DynamicComponentDirective
  ]

})
export class SharedModule {
}
