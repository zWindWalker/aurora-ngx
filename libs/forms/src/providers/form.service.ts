import {AfterViewInit, Injectable, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

import {AbstractControl} from "../models/AbstractControl";
import {IonarFormGroup} from "../models/FormGroup";


@Injectable()

export class IonarFormService implements OnInit, AfterViewInit, OnChanges, OnDestroy {

    formGroup: IonarFormGroup

    ngAfterViewInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

    ngOnDestroy(): void {
    }

    ngOnInit(): void {
    }

    /**
     * @description
     * Construct a new `FormGroup.ts` instance.
     *
     * @param controlsConfig A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param legacyOrOpts Configuration options object for the `FormGroup.ts`. The object can
     * have two shapes:
     *
     * 1) `AbstractControlOptions` object (preferred), which consists of:
     * * `validators`: A synchronous validator function, or an array of validator functions
     * * `asyncValidators`: A single async validator or array of async validator functions
     * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
     * submit')
     *
     */
    group(controlsConfig: { [key: string]: any }): IonarFormGroup {

        this.formGroup = new IonarFormGroup(controlsConfig);
        return this.formGroup
    }

    getControlList(): { [k: string]: AbstractControl } | null {
        return this.formGroup.controls
    }
}
