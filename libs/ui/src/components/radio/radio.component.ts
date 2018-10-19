import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import default_template from './templates/default.html'
import {DyCom} from './dynamic/dynamic.component'


@Component({
    selector: 'aurora-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss']
})
export class AuroraRadioComponent implements OnInit, AfterViewInit {

    ///-----------------------------------------------  Variables   -----------------------------------------------///

    @Input() options;
    @Input() name: string;
    @Input() value: any;
    @Output() change = new EventEmitter();

    @ViewChild(TemplateRef) templateRef: TemplateRef<any>

    //language=HTML
    template = default_template

    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    constructor() {
    }

    ngOnInit() {
        console.log(DyCom)
    }

    ngAfterViewInit(): void {
        console.log(this.templateRef)
    }


    ///-----------------------------------------------  Main Functions   -----------------------------------------------///

    onClick = value => {
        this.value = value;
        this.change.emit(value)
    }

}
