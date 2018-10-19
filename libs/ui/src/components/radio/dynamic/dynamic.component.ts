import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';


@Component({
    selector: 'dynamic',
    template: `        
    `,
    styles: [`

    `]
})
export class DynamicComponent implements OnInit, AfterViewInit {

    constructor(
        private element: ElementRef
    ) {
        this.element.nativeElement.innerHTML = `<h1>sdklfjskl</h1>`
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }
}
