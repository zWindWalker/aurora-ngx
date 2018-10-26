import {Directive, OnChanges, OnDestroy, OnInit, TemplateRef} from '@angular/core';

@Directive({
    selector: '[carousel_item]'
})
export class CarouselItemDirective implements OnInit, OnDestroy, OnChanges {


    constructor(
        public tplRef: TemplateRef<any>
    ) {
    }


    ngOnInit(): void {

    }

    ngOnChanges() {

    }

    ngOnDestroy() {

    }


}
