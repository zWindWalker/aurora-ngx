import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ContentChildren,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { SlideDirective } from './slide.directive';
import {
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  AnimationReferenceMetadata,
  useAnimation
} from '@angular/animations';
import { slide_in_left, slide_in_right, slide_out_left, slide_out_right } from '@aurora-ngx/animations';
import { SlideComponent } from './slide.component';


@Component({
  selector: 'aurora-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class AuroraCarouselComponent implements OnInit, AfterViewInit, OnDestroy {

  @ContentChildren(SlideDirective) item_dir_list: QueryList<SlideDirective>;
  @ViewChild('carousel', { read: ViewContainerRef }) carousel: ViewContainerRef;

  ///-----------------------------------------------  Variables   -----------------------------------------------///
  index = 0;
  private ani_player: AnimationPlayer;
  private slideCompRef: ComponentRef<SlideComponent>;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  constructor(
    private cd: ChangeDetectorRef,
    private vcRef: ViewContainerRef,
    private aniBuilder: AnimationBuilder,
    private resolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {

  }


  ngAfterViewInit(): void {
    this.slideCompRef = this.createSlideComponent(this.index);
  }

  ngOnDestroy() {
    this.slideCompRef.destroy();
  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

  previousSlide = () => {
    if (this.index !== 0) {
      this.index -= 1;
      this.cd.markForCheck();
      const current_slide = this.slideCompRef;
      const prev_slide = this.slideCompRef = this.createSlideComponent(this.index);
      this.createAni(prev_slide, 'entrance', 'prev');
      this.createAni(current_slide, 'exit', 'prev');
    }

  };

  nextSlide = () => {
    if (this.index !== this.item_dir_list.toArray().length - 1) {

      this.index += 1;

      this.cd.markForCheck();
      const current_slide = this.slideCompRef;
      const next_slide = this.slideCompRef = this.createSlideComponent(this.index);


      this.createAni(current_slide, 'exit', 'next');
      this.createAni(next_slide, 'entrance', 'next');
    }
  };


  createSlideComponent = i => {
    const factory = this.resolver.resolveComponentFactory<any>(SlideComponent);
    const compRef = this.carousel.createComponent(factory);

    compRef.instance.template = this.item_dir_list.toArray()[i].tplRef;
    compRef.instance.ngOnInit();
    return compRef;
  };


  createAni = (compRef, entrance = 'entrance', direction = 'next') => {
    const ani_factory: AnimationFactory = this.aniBuilder.build(this.getAniType(entrance, direction));

    this.ani_player = ani_factory.create(compRef.instance.el.nativeElement);
    this.ani_player.play();

    if (entrance === 'exit') {

      this.ani_player.onDone(() => {
        compRef.destroy();
      });
    }

  };

  getAniType = (entrance = 'entrance', direction = 'next'): AnimationReferenceMetadata =>
    (entrance === 'entrance')
      ? (direction === 'next') ? useAnimation(slide_in_right, { params: { timing: 500 } }) : useAnimation(slide_in_left, { params: { timing: 500 } })
      : (direction === 'next') ? useAnimation(slide_out_left, { params: { timing: 500 } }) : useAnimation(slide_out_right, { params: { timing: 500 } });


}
