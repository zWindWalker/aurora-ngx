import { Component, OnInit } from '@angular/core';
import LocaleUtils from '../../../utils/LocaleUtils';

@Component({
  selector: 'week-days',
  templateUrl: './week-days.component.html',
  styleUrls: ['./week-days.component.scss']
})
export class WeekDaysComponent implements OnInit {
  week_day = LocaleUtils.getWeekdayShort();

  constructor() {
  }

  ngOnInit() {

  }

}
