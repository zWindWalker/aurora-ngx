import {Component, EventEmitter, Input} from '@angular/core';


@Component({
    selector: 'phone',
    template: `
        <input
                [name]="name"
                [placeholder]="placeholder"
                [value]="value"
                [class.invalid]="invalid"
                (change)=" $event.stopPropagation(); change.emit($event.target.value);"
                (blur)="blur.emit()"
                (keydown)="onKeyDown($event)"
                (paste)="onPaste($event)"
        >

    `,
    styles: [`
        :host {
            display: flex;
            flex: 1;
        }
    `]
})
export class PhoneComponent {
    @Input() name
    @Input() placeholder
    @Input() value
    @Input() invalid;
    @Input() change: EventEmitter<any>;
    @Input() blur: EventEmitter<any>;

    onKeyDown = (e: KeyboardEvent) => {
        // Allow
        if (
            e.keyCode === 8 ||      // backspace
            e.keyCode === 9 ||          // Tab
            e.keyCode === 13 ||       // enter
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||      //  Ctrl + A
            (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||       //  Ctrl + C
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||        //  Ctrl + X
            (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||        //  Ctrl + V
            (e.keyCode >= 35 && e.keyCode <= 39)                             // home, end, left, right
        ) {
            return
        }


        // Ensure that it is a number

        if (
            (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&       // not number
            (e.keyCode < 96 || e.keyCode > 105)                                     // not numpad
        ) {
            e.preventDefault();
        }

    }

    // Ensure that pasted value is a number or string of number
    onPaste = (e: ClipboardEvent) => {
        if (!/^\d+$/.test(e.clipboardData.getData('Text'))) {
            e.preventDefault()
        }
    }
}
