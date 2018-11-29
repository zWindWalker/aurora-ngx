import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component, EventEmitter, Input,
    OnChanges,
    OnDestroy,
    OnInit, Output,
    SimpleChanges
} from '@angular/core';

import {IonarFormService} from '../providers/form.service';

import {ControlConfig} from "../models/ControlConfig";
import {AbstractControl} from "../models/AbstractControl";


@Component({
    selector: 'field',
    template: `
        <ng-container *ngIf="_controlConfig">
            <ng-container
                    dynamic_field
                    [control]="_controlConfig"
                    [events]="{
                            change: onChanged,
                            blur: onTouched,
                            enter: onEntered
                    }"

                    [invalid]="_control?.invalid && (_control?.dirty || _control?.touched)"
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
    @Input('controlConfig') protected _controlConfig: ControlConfig;
    @Input() name: string

    protected _control: AbstractControl

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
        this._control = this._formSvs.getControl(this.name)
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
        this._formSvs.getControl(this.name).setValue(e);

        console.log(this._formSvs.getControl(this.name))
    };

    onTouched = () => {
        this._formSvs.getControl(this.name).markAsTouched();
    };

    onEntered = () => {
        // this.formSvs._onEntered()
        // if (this.name === 'password') this.focus = true;
    };

}
