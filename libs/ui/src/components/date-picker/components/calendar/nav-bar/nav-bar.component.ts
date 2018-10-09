import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import moment from 'moment';
import {click} from "../../../../../animations/click.animations";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
    animations: [click]
})
export class NavBarComponent implements OnInit, OnChanges {
  @Input() currentMonth;
  @Output() nextMonth = new EventEmitter();
  @Output() prevMonth = new EventEmitter();
    animated: Boolean = false;
  title;


  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.title = moment(this.currentMonth).format('MMMM YYYY');
  }

}
