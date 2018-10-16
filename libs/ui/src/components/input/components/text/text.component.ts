import {Component, EventEmitter, Host, HostListener, Input, OnInit, Optional, Output, SkipSelf} from '@angular/core';


@Component({
    selector: 'text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
    @Input() name = '';
    @Input() value: any = '';
    @Input() invalid;
    @Input() change: EventEmitter<any>;
    @Input() blur: EventEmitter<any>;


    constructor() {
    }

    ngOnInit() {

    }
}
