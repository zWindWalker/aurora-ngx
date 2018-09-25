import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'aurora-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputComponent,
    multi: true
  }]
})

export class InputComponent implements OnInit, ControlValueAccessor {

  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() type: String;
  @Input() name = '';
  onChange;
  onTouched;
  disabled;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {
  }

  ///-----------------------------------------------  ControlValueAccessor Interface   -----------------------------------------------///

  // Allows Angular to update the model .
  // Update the model and changes needed for the view here.
  writeValue(rating: number): void {
    // this.stars = this.stars.map((_, i) => rating > i);
    // this.onChange(this.value);
  }

  // Allows Angular to register a function to call when the model  changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
