import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuroraCarouselComponent } from './containers/carousel.component';
import { ItemComponent } from './components/item/item.component';
import { CarouselDirective } from './directives/carousel.directive';


@NgModule({
  imports: [

    CommonModule
  ],
  declarations: [
    AuroraCarouselComponent, ItemComponent, CarouselDirective
  ],
  exports: [
    AuroraCarouselComponent
  ],
  entryComponents: [
    ItemComponent

  ]
})
export class CarouselModule {
}
