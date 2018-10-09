import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class DatePickerService {

  change_selected_date = new Subject();

  constructor() {
  }


}