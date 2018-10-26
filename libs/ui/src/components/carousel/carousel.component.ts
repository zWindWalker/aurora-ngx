import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    Input,
    OnInit,
    QueryList,
    ViewChildren,
    ViewContainerRef
} from '@angular/core';
import {CarouselItemDirective} from './directives/carousel-item.directive';
import {CarouselItemComponent} from './carousel-item.component';


@Component({
    selector: 'aurora-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class AuroraCarouselComponent implements OnInit, AfterViewInit {

    @Input() skip = []

    @ContentChildren(CarouselItemDirective) item_dir_list: QueryList<CarouselItemDirective>;
    @ViewChildren(CarouselItemComponent) item_comp_list: QueryList<CarouselItemComponent>;

    ///-----------------------------------------------  Variables   -----------------------------------------------///
    index = 0;

    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

    constructor(
        private cd: ChangeDetectorRef,
        private vcRef: ViewContainerRef
    ) {
    }

    ngOnInit() {

    }


    ngAfterViewInit(): void {
        const first_slide = this.item_comp_list.first;

        first_slide.vcRef.createEmbeddedView(first_slide.tplRef);
    }


    ///-----------------------------------------------  General Functions   -----------------------------------------------///

    previousSlide = () => {
        const cur_index = this.index
        let prev_index = null

        if (this.index !== 0) {
            do {
                this.index -= 1
            } while (this.skip.includes(this.index) && this.index !== 0)
            prev_index = this.index
            this.cd.markForCheck();
            const prev_slide = this.item_comp_list.toArray()[prev_index];
            prev_slide.vcRef.createEmbeddedView(prev_slide.tplRef);

            prev_slide.createAni('entrance', 'prev');


            const cur_slide = this.item_comp_list.toArray()[cur_index];
            cur_slide.createAni('exit', 'prev');
        }

    };

    nextSlide = () => {
        const cur_index = this.index
        let next_index = null
        if (this.index !== this.item_comp_list.toArray().length - 1) {

            do {
                this.index += 1
            } while (this.skip.includes(this.index) && this.index !== this.item_comp_list.toArray().length - 1)


            next_index = this.index
            this.cd.markForCheck();

            const next_slide = this.item_comp_list.toArray()[next_index];
            next_slide.vcRef.createEmbeddedView(next_slide.tplRef);

            next_slide.createAni('entrance', 'next');


            const cur_slide = this.item_comp_list.toArray()[cur_index];
            cur_slide.createAni('exit', 'next');
        }


    }
    ;


    getCurrentIndex = () => this.item_comp_list.toArray()

}
