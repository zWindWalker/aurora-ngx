import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuroraFormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';


import { AuroraRadioComponent, AuroraUiModule } from '@aurora-ngx/ui';

import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { FormGroupComponent } from './components/form-group.component';
import { FormFieldComponent } from './components/form-field.component';
import { FormLabelComponent } from './components/form-label.component';
import { FormFeedbackComponent } from './components/form-feedback.component';
import { SubmitDirective } from './directives/submit.directive';
import { FormTemplateComponent } from './components/form-template.component';
import { FormService } from './form.service';

@NgModule({
  declarations: [
    AuroraFormComponent,
    FormGroupComponent,
    FormLabelComponent,
    FormTemplateComponent,
    FormFeedbackComponent,
    FormFieldComponent,

    DynamicFieldDirective, SubmitDirective
  ],
  providers: [FormService],
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
    FormTemplateComponent,
    SubmitDirective
  ],
  entryComponents: [AuroraRadioComponent]
})
export class AuroraFormsModule {
}
