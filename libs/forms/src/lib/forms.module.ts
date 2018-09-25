import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuroraFormComponent } from './forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDirective } from '../directives/dynamic-field.directive';
import { FormInputComponent } from '../components/form-input/form-input.component';
import { FormSelectComponent } from '../components/form-select/form-select.component';
import { AuroraUiModule } from '@aurora-ngx/ui';
import { FormButtonComponent } from '../components/form-button/form-button.component';

@NgModule({
  declarations: [
    AuroraFormComponent,
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent,

    DynamicFieldDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuroraUiModule
  ],
  exports: [AuroraFormComponent],
  entryComponents: [
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent
  ]
})
export class AuroraFormsModule {
}
