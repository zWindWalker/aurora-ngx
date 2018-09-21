import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'aurora-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  show_menu: Boolean = false;
  selected_option: any = null;

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

  @Input() disabled: Boolean = true;

  constructor(private eRef: ElementRef) {
  }

  ngOnInit() {
    this.parseSelectedOption();
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.show_menu = false;
    }
  }

  onToggleMenu = () => {
    this.show_menu = !this.show_menu;
  };

  parseSelectedOption = () => {
    _.map(this.options, item => {
      if (item.selected) this.selected_option = item;
    });


  };

  onSelectOption = index => {
    this.options = _.map(this.options, (item, i) => {
      item.selected = (index === i);
      return item;
    });

    this.parseSelectedOption();
    this.show_menu = false;
  };

}
