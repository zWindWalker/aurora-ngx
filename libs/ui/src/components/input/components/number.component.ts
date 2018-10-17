import {Component, EventEmitter, Input} from '@angular/core';


@Component({
    selector: 'number',
    template: `
        <input
                [name]="name"
                [placeholder]="placeholder"
                [value]="value"
                [class.invalid]="invalid"
                (change)="onChange($event)"
                (blur)="blur.emit()"
                (paste)="onPaste($event)"
                (keydown)="onKeyDown($event)"
        >

    `,
    styles: [`
        :host {
            display: flex;
            flex: 1;
        }
    `]
})
export class NumberComponent {
    @Input() name = '';
    @Input() placeholder = ''
    @Input() value: any = '';
    @Input() invalid;
    @Input() change: EventEmitter<any>;
    @Input() blur: EventEmitter<any>;
    @Input() range = []

    onKeyDown = (e: KeyboardEvent) => {
        // Allow
        if (
            e.keyCode === 8 ||      // backspace
            e.keyCode === 9 ||          // Tab
            e.keyCode === 13 ||       // enter
            e.keyCode === 188 ||    // comma(",")
            e.keyCode === 110 ||        //   numpad decimal point
            e.keyCode === 190 ||        // period(".")
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||      //  Ctrl + A
            (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||       //  Ctrl + C
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||        //  Ctrl + X
            (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||        //  Ctrl + V
            (e.keyCode >= 35 && e.keyCode <= 39)                             // home, end, left, right
        ) {
            return
        }

        // Ensure that it is a  number: integer || decimal

        if (
            (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&       // not number
            (e.keyCode < 96 || e.keyCode > 105)                                     // not numpad
        ) {
            e.preventDefault();
        }

    }

    // Ensure that pasted value is a string of number: integer || decimal
    onPaste = (e: ClipboardEvent) => {
        if (!/^\d.+$/.test(e.clipboardData.getData('Text'))) {
            e.preventDefault()
        }
    }

    onChange = e => {
        e.stopPropagation()
        let value = e.target.value
        const min = Number.parseInt(this.range[0])
        const max = Number.parseInt(this.range[1])
        if (this.range && !(min <= value && value <= max)) {
            value = e.target.value = this.range[1]
        }

        this.change.emit(value)

    }
}
