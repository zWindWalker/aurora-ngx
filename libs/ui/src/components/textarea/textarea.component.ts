import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
    selector: 'aurora-textarea',
    template: `
        <textarea
                [name]="name"
                [value]="value"
                [class.invalid]="invalid"
                tabindex="0"
                (change)="$event.stopPropagation(); change.emit($event.target.value);"
                (blur)="blur.emit()"
        ></textarea>
    `,
    styles: [`
        :host {
            display: flex;
            flex: 1;
        }

        textarea {
            font-size: 1.5rem;
            padding: 1rem;
            width: 100%;
            max-width: 100%;
            overflow-y: scroll;
        }
    `]
})
export class AuroraTextareaComponent implements OnInit, OnChanges {
    ///-----------------------------------------------  Variables   -----------------------------------------------///
    @Input() name = '';
    @Input() value: any = '';
    @Output() change = new EventEmitter();
    @Output() blur = new EventEmitter();
    @Input() invalid: Boolean = false;

    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
    }


    ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}
