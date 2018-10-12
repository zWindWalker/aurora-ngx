import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuroraDatePickerComponent} from './containers/date-picker.component';
import {ControlComponent} from './components/control/control.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {NavBarComponent} from './components/calendar/nav-bar/nav-bar.component';
import {MonthGridComponent} from './components/calendar/month-grid/month-grid.component';
import {WeekDaysComponent} from './components/calendar/week-days/week-days.component';
import {DateCellComponent} from './components/calendar/month-grid/date_cell.component';
import {DatePickerService} from './containers/date-picker.service';
import {ButtonModule} from "../button/button.module";
import {InputModule} from "../input/input.module";


@NgModule({
  declarations: [
    AuroraDatePickerComponent,
    ControlComponent,
    CalendarComponent,
    NavBarComponent,

    MonthGridComponent,
    WeekDaysComponent,
    DateCellComponent,
  ],
  imports: [CommonModule, ButtonModule, InputModule],
  exports: [
    AuroraDatePickerComponent
  ],
  providers: [DatePickerService]
})
export class DatePickerModule {
}
