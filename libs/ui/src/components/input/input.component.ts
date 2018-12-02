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
              (input)="onChange($event)"
              (blur)="onBlur()"
              (focus)="onFocus()"
              (keydown)="onKeyDown($event)"
              (paste)="onPaste($event)"
              (keypress)="onKeyPress($event)"
      >
      <ng-container
              *ngIf="properties?.loading"
      >
          <svg version="1.1"

               class="loading_icon"
               xmlns="http://www.w3.org/2000/svg"
               x="0px"
               y="0px"
               viewBox="0 0 80 80"
               xml:space="preserve"
          >
          <path
                  fill="#D43B11"
                  d="M10,40c0,0,0-0.4,0-1.1c0-0.3,0-0.8,0-1.3c0-0.3,0-0.5,0-0.8c0-0.3,0.1-0.6,0.1-0.9c0.1-0.6,0.1-1.4,0.2-2.1
            c0.2-0.8,0.3-1.6,0.5-2.5c0.2-0.9,0.6-1.8,0.8-2.8c0.3-1,0.8-1.9,1.2-3c0.5-1,1.1-2,1.7-3.1c0.7-1,1.4-2.1,2.2-3.1
            c1.6-2.1,3.7-3.9,6-5.6c2.3-1.7,5-3,7.9-4.1c0.7-0.2,1.5-0.4,2.2-0.7c0.7-0.3,1.5-0.3,2.3-0.5c0.8-0.2,1.5-0.3,2.3-0.4l1.2-0.1
            l0.6-0.1l0.3,0l0.1,0l0.1,0l0,0c0.1,0-0.1,0,0.1,0c1.5,0,2.9-0.1,4.5,0.2c0.8,0.1,1.6,0.1,2.4,0.3c0.8,0.2,1.5,0.3,2.3,0.5
            c3,0.8,5.9,2,8.5,3.6c2.6,1.6,4.9,3.4,6.8,5.4c1,1,1.8,2.1,2.7,3.1c0.8,1.1,1.5,2.1,2.1,3.2c0.6,1.1,1.2,2.1,1.6,3.1
            c0.4,1,0.9,2,1.2,3c0.3,1,0.6,1.9,0.8,2.7c0.2,0.9,0.3,1.6,0.5,2.4c0.1,0.4,0.1,0.7,0.2,1c0,0.3,0.1,0.6,0.1,0.9
            c0.1,0.6,0.1,1,0.1,1.4C74,39.6,74,40,74,40c0.2,2.2-1.5,4.1-3.7,4.3s-4.1-1.5-4.3-3.7c0-0.1,0-0.2,0-0.3l0-0.4c0,0,0-0.3,0-0.9
            c0-0.3,0-0.7,0-1.1c0-0.2,0-0.5,0-0.7c0-0.2-0.1-0.5-0.1-0.8c-0.1-0.6-0.1-1.2-0.2-1.9c-0.1-0.7-0.3-1.4-0.4-2.2
            c-0.2-0.8-0.5-1.6-0.7-2.4c-0.3-0.8-0.7-1.7-1.1-2.6c-0.5-0.9-0.9-1.8-1.5-2.7c-0.6-0.9-1.2-1.8-1.9-2.7c-1.4-1.8-3.2-3.4-5.2-4.9
            c-2-1.5-4.4-2.7-6.9-3.6c-0.6-0.2-1.3-0.4-1.9-0.6c-0.7-0.2-1.3-0.3-1.9-0.4c-1.2-0.3-2.8-0.4-4.2-0.5l-2,0c-0.7,0-1.4,0.1-2.1,0.1
            c-0.7,0.1-1.4,0.1-2,0.3c-0.7,0.1-1.3,0.3-2,0.4c-2.6,0.7-5.2,1.7-7.5,3.1c-2.2,1.4-4.3,2.9-6,4.7c-0.9,0.8-1.6,1.8-2.4,2.7
            c-0.7,0.9-1.3,1.9-1.9,2.8c-0.5,1-1,1.9-1.4,2.8c-0.4,0.9-0.8,1.8-1,2.6c-0.3,0.9-0.5,1.6-0.7,2.4c-0.2,0.7-0.3,1.4-0.4,2.1
            c-0.1,0.3-0.1,0.6-0.2,0.9c0,0.3-0.1,0.6-0.1,0.8c0,0.5-0.1,0.9-0.1,1.3C10,39.6,10,40,10,40z"
          >
            <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 40 40"
                    to="360 40 40"
                    dur="0.8s"
                    repeatCount="indefinite"
            />
          </path>
              <path
                      fill="#D43B11"
                      d="M62,40.1c0,0,0,0.2-0.1,0.7c0,0.2,0,0.5-0.1,0.8c0,0.2,0,0.3,0,0.5c0,0.2-0.1,0.4-0.1,0.7
            c-0.1,0.5-0.2,1-0.3,1.6c-0.2,0.5-0.3,1.1-0.5,1.8c-0.2,0.6-0.5,1.3-0.7,1.9c-0.3,0.7-0.7,1.3-1,2.1c-0.4,0.7-0.9,1.4-1.4,2.1
            c-0.5,0.7-1.1,1.4-1.7,2c-1.2,1.3-2.7,2.5-4.4,3.6c-1.7,1-3.6,1.8-5.5,2.4c-2,0.5-4,0.7-6.2,0.7c-1.9-0.1-4.1-0.4-6-1.1
            c-1.9-0.7-3.7-1.5-5.2-2.6c-1.5-1.1-2.9-2.3-4-3.7c-0.6-0.6-1-1.4-1.5-2c-0.4-0.7-0.8-1.4-1.2-2c-0.3-0.7-0.6-1.3-0.8-2
            c-0.2-0.6-0.4-1.2-0.6-1.8c-0.1-0.6-0.3-1.1-0.4-1.6c-0.1-0.5-0.1-1-0.2-1.4c-0.1-0.9-0.1-1.5-0.1-2c0-0.5,0-0.7,0-0.7
            s0,0.2,0.1,0.7c0.1,0.5,0,1.1,0.2,2c0.1,0.4,0.2,0.9,0.3,1.4c0.1,0.5,0.3,1,0.5,1.6c0.2,0.6,0.4,1.1,0.7,1.8
            c0.3,0.6,0.6,1.2,0.9,1.9c0.4,0.6,0.8,1.3,1.2,1.9c0.5,0.6,1,1.3,1.6,1.8c1.1,1.2,2.5,2.3,4,3.2c1.5,0.9,3.2,1.6,5,2.1
            c1.8,0.5,3.6,0.6,5.6,0.6c1.8-0.1,3.7-0.4,5.4-1c1.7-0.6,3.3-1.4,4.7-2.4c1.4-1,2.6-2.1,3.6-3.3c0.5-0.6,0.9-1.2,1.3-1.8
            c0.4-0.6,0.7-1.2,1-1.8c0.3-0.6,0.6-1.2,0.8-1.8c0.2-0.6,0.4-1.1,0.5-1.7c0.1-0.5,0.2-1,0.3-1.5c0.1-0.4,0.1-0.8,0.1-1.2
            c0-0.2,0-0.4,0.1-0.5c0-0.2,0-0.4,0-0.5c0-0.3,0-0.6,0-0.8c0-0.5,0-0.7,0-0.7c0-1.1,0.9-2,2-2s2,0.9,2,2C62,40,62,40.1,62,40.1z"
              >
            <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 40 40"
                    to="-360 40 40"
                    dur="0.6s"
                    repeatCount="indefinite"
            />
          </path>
        </svg>
      </ng-container>

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
  @Output() enter = new EventEmitter();
  @Input() invalid: Boolean = false;
  @Input() range = [];
  @Input() properties;

  @HostBinding('class.focus') host_focus: Boolean = false;
  @HostBinding('class.invalid') host_invalid: Boolean = false;


  constructor(private cd: ChangeDetectorRef) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit(): void {

    this.host_invalid = this.invalid;

    this.cd.markForCheck();
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
    const min = parseInt(this.range[0], 10);
    const max = parseInt(this.range[1], 10);
    if (this.range && this.input_type === 'number' && !(min <= value && value <= max)) {
      value = e.target.value = this.range[1];
    }

    this.change.emit(value);

  };

  //  Keyboard & Clipboard Event  //

  onKeyPress = (e: KeyboardEvent) => {
    if (e.keyCode === 13) this.enter.emit();
  };

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
