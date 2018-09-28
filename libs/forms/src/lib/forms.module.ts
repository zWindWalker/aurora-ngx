import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuroraFormComponent } from './forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupComponent } from '../components/form-group/form-group.component';
import { FormLabelComponent } from '../components/form-label/form-label.component';
import { FormControlComponent } from '../components/form-control/form-control.component';
import { AuroraUiModule } from '@aurora-ngx/ui';
import { FormFeedbackComponent } from '../components/form-feedback/form-feedback.component';

@NgModule({
  declarations: [
    AuroraFormComponent,
    FormGroupComponent,
    FormLabelComponent,
    FormControlComponent,
    FormFeedbackComponent

  ],
  imports: [

    CommonModule,
    ReactiveFormsModule,
    AuroraUiModule
  ],
  exports: [AuroraFormComponent]
})
export class AuroraFormsModule {
}
