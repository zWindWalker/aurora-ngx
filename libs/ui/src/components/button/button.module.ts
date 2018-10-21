import { NgModule } from '@angular/core';

import { AuroraButtonComponent } from './button.component';


@NgModule({
  declarations: [
    AuroraButtonComponent
  ],
  exports: [
    AuroraButtonComponent
  ],
  entryComponents: [AuroraButtonComponent]
})
export class ButtonModule {
}
