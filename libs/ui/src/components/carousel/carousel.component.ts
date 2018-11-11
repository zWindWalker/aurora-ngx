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
import {
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  AnimationReferenceMetadata,
  useAnimation
} from '@angular/animations';
import { slide_in_left, slide_in_right, slide_out_left, slide_out_right } from '@aurora-ngx/animations';
import { SlideComponent } from './component/slide.component';


@Component({
  selector: 'aurora-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class AuroraCarouselComponent implements OnInit, AfterViewInit {

  @ContentChildren(CarouselItemDirective) item_dir_list: QueryList<CarouselItemDirective>;
  @ViewChildren(SlideComponent) slide_list: QueryList<SlideComponent>;

  ///-----------------------------------------------  Variables   -----------------------------------------------///
  index = 0;
  private ani_player: AnimationPlayer;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  constructor(
    private cd: ChangeDetectorRef,
    private vcRef: ViewContainerRef,
    private aniBuilder: AnimationBuilder
  ) {
  }

  ngOnInit() {

  }


  ngAfterViewInit(): void {
    console.log(this.item_dir_list.toArray());
  }


  ///-----------------------------------------------  General Functions   -----------------------------------------------///

  previousSlide = () => {
    const cur_index = this.index;
    let prev_index = null;

    if (this.index !== 0) {
      this.index -= 1;
      prev_index = this.index;
      this.cd.markForCheck();
      const prev_slide = this.item_dir_list.toArray()[prev_index];


      // prev_slide.createAni('entrance', 'prev');


      const cur_slide = this.item_dir_list.toArray()[cur_index];
      // cur_slide.createAni('exit', 'prev');
    }

  };

  nextSlide = () => {
    const cur_index = this.index;
    let next_index = null;
    if (this.index !== this.item_dir_list.toArray().length - 1) {

      this.index += 1;


      next_index = this.index;
      this.cd.markForCheck();

      const next_slide = this.item_dir_list.toArray()[next_index];

      console.log(this.slide_list);

      this.createAni(this.slide_list.toArray()[next_index - 1].el, 'entrance', 'next');


      const cur_slide = this.item_dir_list.toArray()[cur_index];
      // cur_slide.createAni('exit', 'next');
    }


  }
  ;


  getCurrentIndex = () => this.item_dir_list.toArray();

  createAni = (slide, entrance = 'entrance', direction = 'next') => {
    const ani_factory: AnimationFactory = this.aniBuilder.build(this.getAniType(entrance, direction));

    this.ani_player = ani_factory.create(slide.nativeElement);
    this.ani_player.play();

    if (entrance === 'exit') {

      this.ani_player.onDone(() => {
        this.vcRef.clear();
      });
    }

  };

  getAniType = (entrance = 'entrance', direction = 'next'): AnimationReferenceMetadata =>
    (entrance === 'entrance')
      ? (direction === 'next') ? useAnimation(slide_in_right, { params: { timing: 500 } }) : useAnimation(slide_in_left, { params: { timing: 500 } })
      : (direction === 'next') ? useAnimation(slide_out_left, { params: { timing: 500 } }) : useAnimation(slide_out_right, { params: { timing: 500 } });


}
