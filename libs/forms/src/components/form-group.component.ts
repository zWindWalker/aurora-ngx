import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Host,
  Input,
  OnInit,
  Optional,
  SkipSelf
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormGroupDirective,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { get_validators } from '../utils/validators';

@Component({
  selector: 'form-group',
  template: `
      <form-label [label]="config.label"></form-label>

      <form-field
              [config]="config"
              [control]="control"
              [submitted]="submitted"
              (change)="onChange($event)"
              (blur)="onTouched()"
      ></form-field>

      <form-feedback
              [control]="control"
              [name]="config.name"
              [feedback]="config?.feedback"
              [submitted]="submitted"
      ></form-feedback>
  `,
  //language=SCSS
  styles: [`
      :host {
          display: grid;
          grid-template-areas:
                   "label   field" 
                   ".              feedback";
          grid-template-columns: 30% 70%;
          grid-template-rows: 80% 20%;
          margin-bottom: 1rem;
          
          height: auto;
          min-height: 6rem;
      }

      form-label {
          grid-area: label;
      }

      form-field {
          grid-area: field;
      }

      form-feedback {
          grid-area: feedback;
      }

  `],

  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: FormGroupComponent,
    multi: true
  }]
})
export class FormGroupComponent implements OnInit, ControlValueAccessor {
///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() config: any = null;
  @Input() formControlName: string;
  @Input() submit: EventEmitter<any>;
  submitted: Boolean = false;
  control: AbstractControl;
  disabled;
  onChange = (value: any) => {
  };
  onTouched = () => {
  };


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    @Optional() @Host() @SkipSelf()
    private formGroupDirective: FormGroupDirective,
    private controlContainer: ControlContainer,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {

    this.control = this.controlContainer.control.get(this.formControlName);
    this.control.setValidators(get_validators(this.config));

    this.submit.subscribe(data => {
      this.submitted = this.formGroupDirective.submitted;
      this.cd.markForCheck();
    });
  }


  ///-----------------------------------------------  ControlValueAccessor Interface   -----------------------------------------------///

  writeValue(value: String): void {
  }

  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
