import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export default class DatePickerService {

  change_selected_date = new Subject();

  constructor() {
  }


}