import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash';
import { toggle_trigger } from '../../../animations/toggle.animation';


@Component({
  selector: 'aurora-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations: [toggle_trigger]
})

export class AuroraSelectComponent implements OnInit {

  ///-----------------------------------------------  Variables   -----------------------------------------------///
  show_menu: Boolean = false;
  selected_option: any = null;
  @Input() options: any = null;
  @Input() value = null;
  @Output() change = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Input() invalid: Boolean = false;


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  constructor(private eRef: ElementRef) {
  }

  ngOnInit() {
    this.selected_option = _.find(this.options, ['value', this.value.toString()]);
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

    this.change.emit(this.selected_option.value);

  };

  ///-----------------------------------------------  Host   -----------------------------------------------///

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.show_menu = false;
    }
  }


}
