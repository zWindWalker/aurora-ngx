import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuroraFormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';


import {
  AuroraCheckboxComponent,
  AuroraDatePickerComponent,
  AuroraInputComponent,
  AuroraRadioComponent,
  AuroraSelectComponent,
  AuroraTextareaComponent,
  AuroraUiModule,
  AuroraUploadComponent
} from '@aurora-ngx/ui';

import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { FormGroupComponent } from './components/form-group.component';
import { FormFieldComponent } from './components/form-field.component';
import { FormLabelComponent } from './components/form-label.component';
import { FormFeedbackComponent } from './components/form-feedback.component';
import { SubmitDirective } from './directives/submit.directive';

@NgModule({
  declarations: [
    AuroraFormComponent,
    FormGroupComponent,
    FormLabelComponent,

    FormFeedbackComponent,
    FormFieldComponent,

    DynamicFieldDirective, SubmitDirective
  ],
  imports: [

    CommonModule,
    ReactiveFormsModule,
    AuroraUiModule
  ],
  exports: [
    AuroraFormComponent,
    FormGroupComponent,
    FormFieldComponent,
    FormLabelComponent,
    FormFeedbackComponent,

    SubmitDirective
  ],
  entryComponents: [
    AuroraInputComponent,
    AuroraTextareaComponent,
    AuroraSelectComponent,
    AuroraCheckboxComponent,
    AuroraDatePickerComponent,
    AuroraUploadComponent,
    AuroraRadioComponent
  ]
})
export class AuroraFormsModule {
}
