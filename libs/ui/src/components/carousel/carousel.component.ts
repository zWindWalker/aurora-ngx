import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import { CarouselItemDirective } from './directives/carousel-item.directive';
import { CarouselItemComponent } from './carousel-item.component';


@Component({
  selector: 'aurora-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class AuroraCarouselComponent implements OnInit, AfterViewInit {

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
    if (this.index !== 0) {
      this.index -= 1;
      this.cd.markForCheck();
      const prev_slide = this.item_comp_list.toArray()[this.index];
      prev_slide.vcRef.createEmbeddedView(prev_slide.tplRef);

      prev_slide.createAni('entrance', 'prev');


      const cur_slide = this.item_comp_list.toArray()[this.index + 1];
      cur_slide.createAni('exit', 'prev');
    }
  };

  nextSlide = () => {
    if (this.index !== this.item_comp_list.toArray().length - 1) {
      this.index += 1;
      this.cd.markForCheck();

      const next_slide = this.item_comp_list.toArray()[this.index];
      next_slide.vcRef.createEmbeddedView(next_slide.tplRef);

      next_slide.createAni('entrance', 'next');


      const cur_slide = this.item_comp_list.toArray()[this.index - 1];
      cur_slide.createAni('exit', 'next');
    }
  };

}
