import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuroraCarouselComponent} from './carousel.component';

import {CarouselItemDirective} from './directives/carousel-item.directive';
import {CarouselItemComponent} from './carousel-item.component';


@NgModule({
    imports: [

        CommonModule
    ],
    declarations: [
        AuroraCarouselComponent, CarouselItemDirective, CarouselItemComponent
    ],
    exports: [
        AuroraCarouselComponent, CarouselItemDirective
    ]
})
export class CarouselModule {
}
