import {Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {DatePickerService} from '../../containers/date-picker.service';
import moment from 'moment';
import {rotate_trigger} from '@aurora-ngx/animations';

@Component({
    selector: 'control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss'],
    animations: [rotate_trigger]
})
export class ControlComponent implements OnInit {
    formatted_date: String;

    @Input() format
    @Input() show_calendar = false;
    @Output() open_calendar = new EventEmitter()
    @HostBinding() tabindex = 0;


    constructor(private eRef: ElementRef, private dpSvs: DatePickerService) {
    }

    ngOnInit() {
        this.eRef.nativeElement.focus();

        this.dpSvs.change_selected_date.subscribe(selected_date => this.formatted_date = moment(selected_date).format(this.format));
    }


}
