import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnInit,
    TemplateRef,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {
    AnimationBuilder,
    AnimationFactory,
    AnimationPlayer,
    AnimationReferenceMetadata,
    useAnimation
} from '@angular/animations';
import {slide_in_left, slide_in_right, slide_out_left, slide_out_right} from "@aurora-ngx/animations";


@Component({
    selector: 'carousel-item',
    template: `
        <ng-container
                #vcRef
        ></ng-container>
    `,
    styles: [`
        :host {
            background-color: transparent;
            display: flex;
            flex-direction: column;
            position: absolute;
            width: 100%;
            height: 100%;
            visibility: hidden;
        }
    `]
})
export class CarouselItemComponent implements OnInit, AfterViewInit {

    @Input() tplRef: TemplateRef<any>;

    @ViewChild('vcRef', {read: ViewContainerRef}) vcRef: ViewContainerRef;

    private ani_player: AnimationPlayer;

    constructor(
        public eleRef: ElementRef,
        private cd: ChangeDetectorRef,
        private hostVcRef: ViewContainerRef,
        private aniBuilder: AnimationBuilder
    ) {
    }

    ngOnInit() {

    }


    ngAfterViewInit(): void {

    }

    createAni = (entrance = 'entrance', direction = 'next') => {
        const ani_factory: AnimationFactory = this.aniBuilder.build(this.getAniType(entrance, direction));

        this.ani_player = ani_factory.create(this.eleRef.nativeElement);
        this.ani_player.play();

        if (entrance === 'exit') {

            this.ani_player.onDone(() => {
                this.vcRef.clear()
            });
        }

    };

    getAniType = (entrance = 'entrance', direction = 'next'): AnimationReferenceMetadata =>
        (entrance === 'entrance')
            ? (direction === 'next') ? useAnimation(slide_in_right, {params: {timing: 500}}) : useAnimation(slide_in_left, {params: {timing: 500}})
            : (direction === 'next') ? useAnimation(slide_out_left, {params: {timing: 500}}) : useAnimation(slide_out_right, {params: {timing: 500}});


}
