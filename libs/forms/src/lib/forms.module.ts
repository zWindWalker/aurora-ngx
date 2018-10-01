import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuroraFormComponent } from './forms.component';
import { ReactiveFormsModule } from '@angular/forms';


import {
  AuroraCheckboxComponent,
  AuroraDatePickerComponent,
  AuroraInputComponent,
  AuroraSelectComponent,
  AuroraTextareaComponent,
  AuroraUiModule
} from '@aurora-ngx/ui';

import { DynamicFieldDirective } from '../directives/dynamic-field.directive';
import { FormGroupComponent } from '../components/form-group.component';
import { FormFieldComponent } from '../components/form-field.component';
import { FormLabelComponent } from '../components/form-label.component';
import { FormFeedbackComponent } from '../components/form-feedback.component';

@NgModule({
  declarations: [
    AuroraFormComponent,
    FormGroupComponent,
    FormLabelComponent,

    FormFeedbackComponent,
    FormFieldComponent,

    DynamicFieldDirective
  ],
  imports: [

    CommonModule,
    ReactiveFormsModule,
    AuroraUiModule
  ],
  exports: [AuroraFormComponent],

  entryComponents: [
    AuroraInputComponent,
    AuroraTextareaComponent,
    AuroraSelectComponent,
    AuroraCheckboxComponent,
    AuroraDatePickerComponent
  ]
})
export class AuroraFormsModule {
}
