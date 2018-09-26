import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import DateUtils from '../../utils/DateUtils';
import Helpers from '../../utils/Helpers';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  currentMonth = Helpers.startOfMonth(new Date());

  @Output() select_date = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  _showNextMonth = () => {
    const nextMonth = DateUtils.addMonths(this.currentMonth);

    this.currentMonth = Helpers.startOfMonth(nextMonth);
  };

  _showPreviousMonth = () => {
    const previousMonth = DateUtils.subtractMonths(this.currentMonth);
    this.currentMonth = Helpers.startOfMonth(previousMonth);
  };

}
