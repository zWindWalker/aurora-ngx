import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IonarFormService} from '../providers/form.service';
import {ControlConfig} from '../models/ControlConfig';


@Component({
    selector: 'control',
    template: `
        <label [name]="name"></label>

        <field [name]="name"></field>

        <feedback [name]="name"></feedback>
    `,

    styles: [`
        :host-context(.hidden) {
            display: none;
        }

        label {
            grid-area: label;
        }

        field {
            grid-area: field;
        }

        feedback {
            grid-area: feedback;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlComponent implements OnInit, OnDestroy {
    ///-----------------------------------------------  Variables   -----------------------------------------------///
    @Input() name = '';


    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    constructor() {
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {
    }

}
