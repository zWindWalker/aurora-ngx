import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseComponent } from './containers/collapse.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CollapseComponent
  ],
  exports: [CollapseComponent]
})
export class CollapseModule {
}
