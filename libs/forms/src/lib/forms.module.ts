import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuroraFormComponent } from './forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDirective } from '../directives/dynamic-field.directive';
import { FormInputComponent } from '../components/form-input/form-input.component';
import { FormSelectComponent } from '../components/form-select/form-select.component';
import { FormButtonComponent } from '../components/form-button/form-button.component';
import { FormDatepickerComponent } from '../components/form-datepicker/form-datepicker.component';
import { FormFieldComponent } from '../components/form-field/form-field.component';
import { FormLabelComponent } from '../components/form-label/form-label.component';
import { FormControlComponent } from '../components/form-control/form-control.component';
import { AuroraUiModule } from '@aurora-ngx/ui';

@NgModule({
  declarations: [
    AuroraFormComponent,
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent,
    FormDatepickerComponent,


    FormFieldComponent,
    FormLabelComponent,
    FormControlComponent,

    DynamicFieldDirective
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
