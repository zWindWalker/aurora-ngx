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
  onChange;
  onTouched;
  disabled;

  @Input() options: any = [
    {
      value: '1',
      label: '1'
    },
    {
      value: '2',
      label: '2',
      selected: true
    },
    {
      value: '3',
      label: '3',
      disabled: true
    },
    {
      value: '4',
      label: '4'
    }
  ];


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  constructor(private eRef: ElementRef) {
  }

  ngOnInit() {

  }

  ///-----------------------------------------------  ControlValueAccessor Interface   -----------------------------------------------///

  // Allows Angular to update the model .
  // Update the model and changes needed for the view here.
  writeValue(value: Object): void {
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

  ///-----------------------------------------------  Host   -----------------------------------------------///

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.show_menu = false;
    }
  }


  ///-----------------------------------------------  General Function   -----------------------------------------------///


  onToggleMenu = () => {
    this.show_menu = !this.show_menu;
  };


  onSelectOption = index => {
    this.options = _.map(this.options, (item, i) => {
      item.selected = (index === i);
      return item;
    });
    this.show_menu = false;
    this.selected_option = _.find(this.options, ['selected', true]);
    this.onChange(this.selected_option.value);

  };

}
