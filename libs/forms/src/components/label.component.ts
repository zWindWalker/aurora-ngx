import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormService} from '../form.service';
import {Subject} from 'rxjs';
import {AuroraForm} from '../form.model';
import {untilDestroyed} from "@aurora-ngx/ui";
import {ControlConfig} from "../models/ControlConfig";

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
    @Input('controlConfig') protected _controlConfig: ControlConfig;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
    }
}
