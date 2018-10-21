import { NgModule } from '@angular/core';
import { AuroraRadioComponent } from './radio.component';
import { SharedModule } from '../../shared/shared.module';
import { DynamicTemplateDirective } from './dynamic-template.directive';

@NgModule({
  declarations: [
    AuroraRadioComponent,
    DynamicTemplateDirective
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AuroraRadioComponent
  ]
})
export class RadioModule {
}
