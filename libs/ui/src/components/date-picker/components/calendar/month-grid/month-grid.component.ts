import { Component, Input, OnChanges } from '@angular/core';
import Helpers from '../../../utils/Helpers';

@Component({
  selector: 'month-grid',
  templateUrl: './month-grid.component.html',
  styleUrls: ['./month-grid.component.scss']
})
export class MonthGridComponent implements OnChanges {
  day_in_month;
  @Input() currentMonth;


  constructor() {
  }

  ngOnChanges() {
    this.day_in_month = Helpers.getWeekArray(this.currentMonth);
  }

}
