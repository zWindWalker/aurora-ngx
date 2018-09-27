import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { DatePickerService } from '../../containers/date-picker.service';
import moment from 'moment';
import { rotate_trigger } from '@aurora-ngx/animations';

@Component({
  selector: 'control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  animations: [rotate_trigger]
})
export class ControlComponent implements OnInit {
  @Input() show_calendar = false;
  @HostBinding() tabindex = 0;
  formatted_date: String;


  constructor(private eRef: ElementRef, private dpSvs: DatePickerService) {
  }

  ngOnInit() {
    this.eRef.nativeElement.focus();

    this.dpSvs.change_selected_date.subscribe(selected_date => this.formatted_date = moment(selected_date).format('DD/MM/YYYY'));
  }


}
