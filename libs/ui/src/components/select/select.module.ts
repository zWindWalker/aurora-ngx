import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuroraSelectComponent } from './container/select.component';
import { ControlComponent } from './components/control/control.component';
import { MenuComponent } from './components/menu/menu.component';
import { OptionComponent } from './components/menu/option/option.component';


@NgModule({
  declarations: [
    AuroraSelectComponent,
    ControlComponent,
    MenuComponent,
    OptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuroraSelectComponent
  ],
  entryComponents: [AuroraSelectComponent]
})
export class SelectModule {
}
