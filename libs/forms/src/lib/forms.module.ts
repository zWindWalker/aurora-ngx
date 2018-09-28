import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuroraFormComponent } from './forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '../components/form-field/form-field.component';
import { FormLabelComponent } from '../components/form-label/form-label.component';
import { FormControlComponent } from '../components/form-control/form-control.component';
import { AuroraUiModule } from '@aurora-ngx/ui';

@NgModule({
  declarations: [
    AuroraFormComponent,
    FormFieldComponent,
    FormLabelComponent,
    FormControlComponent,

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
