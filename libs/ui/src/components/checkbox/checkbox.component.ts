import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'aurora-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CheckboxComponent,
    multi: true
  }]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {

  checked: Boolean = false;
  propagateChange;
  onTouched;
  disabled;

  @Input() label: any = '';

  @HostListener('click')
  onClick = () => {
    this.checked = !this.checked;
    this.propagateChange(this.checked);
  };

  constructor() {
  }

  ngOnInit() {
  }


  ///-----------------------------------------------  ControlValueAccessor Interface   -----------------------------------------------///

  writeValue(value: any): void {
    this.checked = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
