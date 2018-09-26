import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import DatePickerService from './date-picker.service';

@Component({
  selector: 'aurora-datepicker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DatePickerComponent,
    multi: true
  }]
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  show_calendar: Boolean = false;
  onTouched;
  disabled;
  propagateChange = (value: any) => {
  };


  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.show_calendar = false;
    }
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  constructor(private eRef: ElementRef, private dpSvs: DatePickerService) {
  }

  ngOnInit() {
    this.dpSvs.change_selected_date.subscribe(selected_date => this.propagateChange(selected_date));
  }

  ///-----------------------------------------------  General Functions   -----------------------------------------------///

  onToggleCalendar = () => {
    this.show_calendar = !this.show_calendar;
  };


  ///-----------------------------------------------  ControlValueAccessor Interface   -----------------------------------------------///

  // Allows Angular to update the model .
  // Update the model and changes needed for the view here.
  writeValue(value: any): void {
    // this.selected_option = _.find(this.options, ['value', value.toString()]);
  }

  // Allows Angular to register a function to call when the model  changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (value: any) => void): void {
    this.propagateChange = fn;
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
