import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IonarFormService} from '../providers/form.service';

import {ControlConfig} from '../models/ControlConfig';
import {AbstractControl} from '../models/AbstractControl';


@Component({
    selector: 'label',
    template: `
        {{_controlConfig?.state.label || ''}}
    `,
    styles: [`
        :host {
            display: flex;
            align-items: center;
            color: rgba(0, 0, 0, 0.85);
            font-size: 1.6rem;
            font-weight: 700;
            position: relative
        }
    `]
})
export class LabelComponent implements OnInit, OnDestroy {
    @Input() name: string;
    protected _controlConfig: ControlConfig;
    protected _control: AbstractControl;

    constructor(
        private _formSvs: IonarFormService,
        private cd: ChangeDetectorRef
    ) {
    }

    ngOnInit() {
        this._controlConfig = this._formSvs.getFormGroup().get(this.name)._controlConfig;

    }

    ngOnDestroy(): void {
    }
}
