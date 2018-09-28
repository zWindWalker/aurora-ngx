import { Component, Host, Input, OnChanges, OnInit, Optional, SimpleChanges, SkipSelf } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators
} from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: FormGroupComponent,
    multi: true
  }]
})
export class FormGroupComponent implements OnInit, OnChanges, ControlValueAccessor {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() form: FormGroup;
  @Input() config: any = null;
  @Input() formControlName: string;

  change = new Subject();
  blur = new Subject();

  protected control: AbstractControl;


  onChange;
  onTouched;
  disabled;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    @Optional() @Host() @SkipSelf()
    private controlContainer: ControlContainer
  ) {
  }

  ngOnInit() {
    this.control = this.controlContainer.control.get(this.formControlName);
    this.control.setValidators([Validators.required]);
    this.change.subscribe(val => this.onChange(val));
    this.blur.subscribe(() => this.onTouched());
  }

  ngOnChanges(changes: SimpleChanges): void {

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
