import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuroraCarouselComponent } from './carousel.component';

import { SlideDirective } from './slide.directive';
import { SlideComponent } from './slide.component';


@NgModule({
  imports: [

    CommonModule
  ],
  declarations: [
    AuroraCarouselComponent, SlideDirective, SlideComponent
  ],
  exports: [
    AuroraCarouselComponent, SlideDirective
  ],
  entryComponents: [SlideComponent]
})
export class CarouselModule {
}
