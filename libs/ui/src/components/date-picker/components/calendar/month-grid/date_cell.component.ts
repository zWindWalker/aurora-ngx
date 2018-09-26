import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import DateUtils from '../../../utils/DateUtils';
import DatePickerService from '../../../containers/date-picker.service';

@Component({
  selector: 'date_cell',
  template: `
      {{day?.getDate()}}
  `,
  styleUrls: ['./date_cell.component.scss']
})
export class DateCellComponent implements OnInit {
  @Input() currentMonth;

  @Input() day;
  @Input() selectedDate;

  @HostBinding('class.today') today: Boolean;
  @HostBinding('class.outside') outside: Boolean;
  @HostBinding('class.past_day') past_day: Boolean;
  @HostBinding('class.is_selected') is_selected: Boolean;

  @HostListener('click', ['$event.target'])
  onClick() {
    !this.past_day && this.dpSvs.change_selected_date.next(this.day);

  }

  constructor(private dpSvs: DatePickerService) {
  }

  ngOnInit() {
    this.today = DateUtils.isSameDay(this.day, new Date());
    this.outside = this.day.getMonth() !== this.currentMonth.getMonth();
    this.past_day = DateUtils.isPastDay(this.day);
    this.is_selected = DateUtils.isSameDay(this.day, this.selectedDate);
  }


}
