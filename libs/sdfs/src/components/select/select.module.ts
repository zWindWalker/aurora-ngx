import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectComponent } from './container/select.component';
import { ControlComponent } from './components/control/control.component';
import { MenuComponent } from './components/menu/menu.component';
import { OptionComponent } from './components/menu/option/option.component';


@NgModule({
  declarations: [
    SelectComponent,
    ControlComponent,
    MenuComponent,
    OptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule {
}
