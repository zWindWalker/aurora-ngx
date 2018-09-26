import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import Helpers from '../../../utils/Helpers';
import DatePickerService from '../../../containers/date-picker.service';

@Component({
  selector: 'month-grid',
  templateUrl: './month-grid.component.html',
  styleUrls: ['./month-grid.component.scss']
})
export class MonthGridComponent implements OnInit, OnChanges {
  day_in_month;
  @Input() currentMonth;
  @Output() date_selected = new EventEmitter();


  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.day_in_month = Helpers.getWeekArray(this.currentMonth);
  }

}
