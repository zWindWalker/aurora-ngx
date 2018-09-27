import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnChanges {
  @Input() currentMonth;
  @Output() nextMonth = new EventEmitter();
  @Output() prevMonth = new EventEmitter();

  title;


  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.title = moment(this.currentMonth).format('MMMM YYYY');
  }

}
