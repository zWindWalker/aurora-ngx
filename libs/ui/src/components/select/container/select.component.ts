import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'aurora-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectComponent,
    multi: true
  }]
})

export class SelectComponent implements OnInit, ControlValueAccessor {

  ///-----------------------------------------------  Variables   -----------------------------------------------///
  show_menu: Boolean = false;
  selected_option: any = null;
  propagateChange;
  onTouched;
  disabled;

  @Input() options: any = [];


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  constructor(private eRef: ElementRef) {
  }

  ngOnInit() {

  }

  ///-----------------------------------------------  General Functions   -----------------------------------------------///


  onToggleMenu = () => {
    this.show_menu = !this.show_menu;
  };


  onChange = option => {

    this.options = _.map(this.options, item => {
      if (_.isEqual(item, option)) {
        item.selected = _.isEqual(item, option);
        this.selected_option = item;
      }
      return item;
    });
    this.show_menu = false;

    this.propagateChange(this.selected_option.value);

  };


  ///-----------------------------------------------  ControlValueAccessor Interface   -----------------------------------------------///

  // Allows Angular to update the model .
  // Update the model and changes needed for the view here.
  writeValue(value: any): void {
    this.selected_option = _.find(this.options, ['value', value.toString()]);
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

  ///-----------------------------------------------  Host   -----------------------------------------------///

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.show_menu = false;
    }
  }


}
