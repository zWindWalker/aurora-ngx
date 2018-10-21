import { NgModule } from '@angular/core';
import { AuroraSwitchComponent } from './switch.component';


@NgModule({
  declarations: [
    AuroraSwitchComponent
  ],
  exports: [
    AuroraSwitchComponent
  ],
  entryComponents: [AuroraSwitchComponent]
})
export class SwitchModule {
}
