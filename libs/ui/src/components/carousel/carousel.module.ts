import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuroraCarouselComponent} from './carousel.component';

import {CarouselItemDirective} from './directives/carousel-item.directive';
import {SlideComponent} from './component/slide.component';


@NgModule({
    imports: [

        CommonModule
    ],
    declarations: [
        AuroraCarouselComponent, CarouselItemDirective, SlideComponent
    ],
    exports: [
        AuroraCarouselComponent, CarouselItemDirective
    ]
})
export class CarouselModule {
}
