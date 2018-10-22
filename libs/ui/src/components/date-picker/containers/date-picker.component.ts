import {
    AfterViewChecked,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import {DatePickerService} from './date-picker.service';
import moment from 'moment';
import {toggle_trigger} from '../../../animations/toggle.animation';

@Component({
    selector: 'aurora-datepicker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss'],
    animations: [toggle_trigger]
})
export class AuroraDatePickerComponent implements OnInit, OnChanges, AfterViewChecked {

    ///-----------------------------------------------  Variables   -----------------------------------------------///

    show_calendar: Boolean = false;

    @Input() options: any = [];
    @Input() value = null;
    @Output() change = new EventEmitter();
    @Output() blur = new EventEmitter();
    @Input() invalid: Boolean = false;
    @Input() format = 'DD/MM/YYYY'

    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.show_calendar = false;
        }
    }


    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

    constructor(private eRef: ElementRef, private dpSvs: DatePickerService) {
    }

    ngAfterViewChecked() {
        this.dpSvs.change_selected_date.subscribe(selected_date => this.change.emit(moment(selected_date).toISOString()));
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

    ngOnInit(): void {
    }

    ///-----------------------------------------------  General Functions   -----------------------------------------------///

}
