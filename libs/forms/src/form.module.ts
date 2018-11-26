import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonarFormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';


import { AuroraUiModule } from '@aurora-ngx/ui';

import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { FormGroupComponent } from './components/form-group.component';
import { FieldComponent } from './components/field.component';
import { FormLabelComponent } from './components/form-label.component';
import { FormFeedbackComponent } from './components/form-feedback.component';
import { SubmitDirective } from './directives/submit.directive';

import { IonarFormService } from './providers/form.service';
import { ControlComponent } from './components/control.component';


@NgModule({
  declarations: [
    IonarFormComponent,
    FormGroupComponent,
    FormLabelComponent,
    FormFeedbackComponent,
    FieldComponent,

    ControlComponent,
    DynamicFieldDirective, SubmitDirective
  ],
  providers: [IonarFormService],
  imports: [

    CommonModule,
    ReactiveFormsModule,
    AuroraUiModule
  ],
  exports: [
    IonarFormComponent,
    FormGroupComponent,
    FieldComponent,
    FormLabelComponent,
    FormFeedbackComponent,
    SubmitDirective,

    ControlComponent
  ]
})
export class IonarFormsModule {
}
