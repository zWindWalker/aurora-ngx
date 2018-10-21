import { NgModule } from '@angular/core';
import { AuroraCheckboxComponent } from './checkbox.component';


@NgModule({
  declarations: [
    AuroraCheckboxComponent
  ],
  exports: [
    AuroraCheckboxComponent
  ],
  entryComponents: [AuroraCheckboxComponent]
})
export class CheckboxModule {
}
