import { ChangeDetectionStrategy, Component, Host, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { get_validators } from '../utils/validators';

@Component({
  selector: 'form-group',
  template: `
      <form-label [label]="config.label"></form-label>

      <form-field
              [config]="config"
              [control]="control"
              [invalid]="control.invalid && (control.touched || control.dirty)"
              (change)="onChange($event)"
              (blur)="onTouched()"
      ></form-field>

      <form-feedback
              [control]="control"
              [name]="config.name"
              [feedback]="config?.feedback"
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

  @Input() form: FormGroup;
  @Input() config: any = null;
  @Input() formControlName: string;

  protected control: AbstractControl;

  disabled;
  onChange = (value: any) => {
  };
  onTouched = () => {
  };


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    @Optional() @Host() @SkipSelf()
    private controlContainer: ControlContainer
  ) {
  }

  ngOnInit() {
    this.control = this.controlContainer.control.get(this.formControlName);
    this.control.setValidators(get_validators(this.config.validators));
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
