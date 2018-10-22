import {
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    ViewEncapsulation
} from '@angular/core';

import default_template from './templates/default.template.html';

@Component({
    selector: 'aurora-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AuroraRadioComponent implements OnInit, OnChanges {

    ///-----------------------------------------------  Variables   -----------------------------------------------///

    @Input() options;
    @Input() name: string;
    @Input() value: any = '';
    @Output() change = new EventEmitter();

    //language=HTML
    template


    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    constructor(private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.template = default_template;
    }

    ///-----------------------------------------------  Main Functions   -----------------------------------------------///

    ngOnChanges(changes): void {
    }

}
