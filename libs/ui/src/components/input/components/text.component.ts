import {Component, EventEmitter, Input, OnInit} from '@angular/core';


@Component({
    selector: 'text',
    template: `
        <input
                [type]="input_type"
                [name]="name"
                [value]="value"
                [class.invalid]="invalid"
                (change)=" $event.stopPropagation(); change.emit($event.target.value);"
                (blur)="blur.emit()"
        >

    `,
    styles: [`
        :host {
            display: flex;
            flex: 1;
        }
    `]
})
export class TextComponent implements OnInit {
    @Input() name = '';
    @Input() input_type = 'text';
    @Input() value: any = '';
    @Input() invalid;
    @Input() change: EventEmitter<any>;
    @Input() blur: EventEmitter<any>;


    constructor() {
    }

    ngOnInit() {

    }
}
