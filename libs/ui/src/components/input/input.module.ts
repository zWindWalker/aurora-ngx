import { NgModule } from '@angular/core';
import { AuroraInputComponent } from './input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AuroraInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuroraInputComponent
  ],
  entryComponents: [AuroraInputComponent]
})
export class InputModule {
}
