import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component, Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges
} from '@angular/core';

import {IonarFormService} from '../providers/form.service';

import {ControlConfig} from "../models/ControlConfig";


@Component({
    selector: 'field',
    template: `
        <ng-container *ngIf="_control">
            <ng-container
                    dynamic_field
                    [control]="_control"

                    [events]="{
                            change: onChanged,
                            blur: onTouched,
                            enter: onEntered
                    }"
            >
            </ng-container>
        </ng-container>
    `,
    styles: [`
        :host {
            display: flex;
            width: 100%;
            height: 100%;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    ///-----------------------------------------------  Variables   -----------------------------------------------///
    @Input('control') protected _control: ControlConfig;


    // @Input() name
    //
    //
    // submitted: Boolean = false;
    // config: AuroraForm;
    // viewInit = new Subject();


    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    constructor(
        private _formSvs: IonarFormService,
        private cd: ChangeDetectorRef
    ) {
    }

    ngOnInit() {
        console.log(this._control)
    }

    ngAfterViewInit(): void {

    }

    ngOnChanges(changes: SimpleChanges): void {

    }

    ngOnDestroy(): void {
        this.cd.detach();
    }


    ///-----------------------------------------------  Main Functions   -----------------------------------------------///

    onChanged = e => {
        // this._formSvs._setValue(this.name, e);
    };

    onTouched = () => {
        // this.formSvs._onTouched(this.name);
    };

    onEntered = () => {
        // this.formSvs._onEntered()
        // if (this.name === 'password') this.focus = true;
    };

}
