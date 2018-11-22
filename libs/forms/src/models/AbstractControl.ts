import {Observable} from "rxjs";
import {EventEmitter} from "@angular/core";
import _ from 'lodash'
import {IonarFormGroup} from "./FormGroup";

export const VALID = 'VALID';

/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 */
export const DISABLED = 'DISABLED';

export type FormHooks = 'change' | 'blur' | 'submit';

/**
 * This is the base class for `FormControl`, `FormGroup.ts`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 *
 * @publicApi
 */

export abstract class AbstractControl {
    /**
     * The current value of the control.
     *
     * * For a `FormControl`, the current value.
     * * For a `FormGroup`, the values of enabled controls as an object with a key-value pair for each member of the group.
     * * For a `FormArray`, the values of enabled controls as an array.
     *
     */

    public readonly value: any;
    /**
     * A multicasting observable that emits an event every time the value of the control changes, in
     * the UI or programmatically.
     */
    public readonly value_changes: Observable<any>;


    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param opts Configuration options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), emit the `valueChanges` event
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     */
    updateValueAndValidity(opts: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {
        this._updateValue();

        // if (this.enabled) {
        // this._cancelExistingSubscription();
        // (this as{ errors: ValidationErrors | null }).errors = this._runValidator();
        // (this as{ status: string }).status = this._calculateStatus();

        // if (this.status === VALID || this.status === PENDING) {
        //     this._runAsyncValidator(opts.emitEvent);
        // }
        // }

        if (opts.emitEvent !== false) {
            (this.value_changes as EventEmitter<any>).emit(this.value);
        }

    }

    /** @internal */
    _initObservables() {
        (this as{ value_changes: Observable<any> }).value_changes = new EventEmitter();
    }

    /** @internal */
    _updateValue(): void {

    }



    /**
     * Sets the value of the control. Abstract method (implemented in sub-classes).
     */
    abstract setValue(value: any, options?: Object): void;

    /**
     * Patches the value of the control. Abstract method (implemented in sub-classes).
     */
    abstract patchValue(value: any, options?: Object): void;

    /**
     * Resets the control. Abstract method (implemented in sub-classes).
     */
    abstract reset(value?: any, options?: Object): void;
}


/**
 * Interface for options provided to an `AbstractControl`.
 *
 * @publicApi
 */
export interface AbstractControlOptions {
    /**
     * List of validators applied to control.
     */
    validators?: any;
    /**
     * List of async validators applied to control.
     */
    asyncValidators?: any;
    /**
     * The event name for control to update upon.
     */
    updateOn?: 'change' | 'blur' | 'submit';
}