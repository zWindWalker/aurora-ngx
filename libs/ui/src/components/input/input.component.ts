import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';


@Component({
    selector: 'aurora-input',
    template: `
        <input
                [type]="input_type"
                [name]="name"
                [placeholder]="placeholder"
                [value]="value"
                (change)="onChange($event)"
                (blur)="onBlur()"
                (focus)="onFocus()"
                (keydown)="onKeyDown($event)"
                (paste)="onPaste($event)"
        >
    `,
    styleUrls: ['./input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuroraInputComponent implements OnInit, OnChanges, OnDestroy {

    ///-----------------------------------------------  Variables   -----------------------------------------------///

    @Input() input_type = '';
    @Input() name = '';
    @Input() placeholder = '';
    @Input() value: any = null;
    @Output() change = new EventEmitter();
    @Output() blur = new EventEmitter();
    @Input() invalid: Boolean = false;
    @Input() range = [];

    @HostBinding('class.focus') host_focus: Boolean = false;
    @HostBinding('class.invalid') host_invalid: Boolean = false;


    constructor(private cd: ChangeDetectorRef) {
    }

    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

    ngOnInit(): void {
        this.host_invalid = this.invalid;
    }

    ngOnChanges(): void {
        this.host_invalid = this.invalid;
        this.cd.markForCheck();
    }

    ngOnDestroy(): void {
    }

    ///-----------------------------------------------  Main Functions   -----------------------------------------------///

    onFocus = () => {
        this.host_focus = true;
    };

    onBlur = () => {
        this.blur.emit();
        this.host_focus = false;
        this.cd.markForCheck();
    };

    onChange = e => {
        e.stopPropagation();
        let value = e.target.value;
        const min = Number.parseInt(this.range[0]);
        const max = Number.parseInt(this.range[1]);
        if (this.range && this.input_type === 'number' && !(min <= value && value <= max)) {
            value = e.target.value = this.range[1];
        }

        this.change.emit(value);

    };

    //  Keyboard & Clipboard Event  //

    onKeyDown = (e: KeyboardEvent) => {
        return (this.input_type === 'number')
            ? this.onNumberKeyDown(e)
            : (this.input_type === 'phone')
                ? this.onPhoneKeyDown(e)
                : null;
    };

    onPaste = (e: ClipboardEvent) => {
        return (this.input_type === 'number')
            ? this.onNumberPaste(e)
            : (this.input_type === 'phone')
                ? this.onPhonePaste(e)
                : null;
    };


    // Ensure that it is a number from [0-9] no decimal_point

    onPhoneKeyDown = (e: KeyboardEvent) => {
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
            return;
        }


        // Reject if not a number or numpad
        if (
            (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&       // not number
            (e.keyCode < 96 || e.keyCode > 105)                                     // not numpad
        ) {
            e.preventDefault();
        }

    };

    // Ensure that pasted value is a number or string of number
    onPhonePaste = (e: ClipboardEvent) => {
        if (!/^\d+$/.test(e.clipboardData.getData('Text'))) {
            e.preventDefault();
        }
    };


    // Ensure that it is a  number: integer || decimal
    onNumberKeyDown = (e: KeyboardEvent) => {
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
            return;
        }


        // Reject if not a number or numpad
        if (
            (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&       // not number
            (e.keyCode < 96 || e.keyCode > 105)                                     // not numpad
        ) {
            e.preventDefault();
        }

    };

    // Ensure that pasted value is a string of number: integer || decimal
    onNumberPaste = (e: ClipboardEvent) => {
        if (!/^\d.+$/.test(e.clipboardData.getData('Text'))) {
            e.preventDefault();
        }
    };


}
