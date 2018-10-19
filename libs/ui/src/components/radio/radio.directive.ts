import {ComponentRef, Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2} from '@angular/core';


@Directive({
    selector: '[dynamic-template]'
})
export class RadioDirective implements OnInit, OnDestroy, OnChanges {
    @Input('dynamic-template') template: string;
    @Input() context: any;

    constructor(
        private renderer: Renderer2,
        private el: ElementRef,
        private componentRef: ComponentRef<any>
    ) {
    }

    ngOnInit(): void {
        this.createComponent();
        console.log(this.componentRef)
    }

    ngOnChanges() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.createComponent();
        }
    }

    ngOnDestroy() {
        this.componentRef.destroy();
    }

    createComponent = () => {
        this.renderer.appendChild(this.el.nativeElement, this.template)
    };


}
