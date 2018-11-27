import { NgModule } from '@angular/core';

import { ForgotPasswordComponent } from './forgot-password.component';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '', component: ForgotPasswordComponent
    }])
  ],
  declarations: [
    ForgotPasswordComponent
  ]
})
export class ForgotPasswordModule {
}
