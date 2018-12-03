import {AbstractControl, DISABLED, INVALID, PENDING, VALID} from './AbstractControl';
import {ControlConfig} from './ControlConfig';
import {ValidationConfigs, ValidationOptions, ValidatorFn, Validators, ValidatorType} from './Validator';
import _ from 'lodash';


/**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup.ts` and `FormArray`. It extends the `IonarAbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events.
 *
 * @see `IonarAbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * @usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 *```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a sync validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 * ```
 *
 * @publicApi
 */
export class FormControl extends AbstractControl {

    /**
     * Creates a new `FormControl` instance.
     *
     * @param configs Initializes the control with an object that defines the initial state.
     *
     */
    constructor(configs: ControlConfig) {
        super();

        this._storeControlConfig(configs as ControlConfig);
        this._setUpValidators(configs.validate);
        this._initObservables();
        this._applyControlState(configs.state);
        this.updateValueAndValidity({onlySelf: true, emitEvent: false});
    }


    /**
     * Sets a new value for the form control.
     *
     * @param value The new value for the control.
     * @param options Configuration options that determine how the control proopagates changes
     * and emits events when the value changes.
     * The configuration options are passed to the {@link IonarAbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
     * `onChange` event to
     * update the view.
     * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
     * `ngModelChange`
     * event to update the model.
     *
     */
    setValue(value: any, options: {
        onlySelf?: boolean,
        emitEvent?: boolean
    } = {}): void {
        (this as { pendingValue: string }).pendingValue = value;

        this.updateValueAndValidity(options);
    }


    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     */
    reset(formState: any = null, options: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {
        // this._applyFormState(formState);
        // this.markAsPristine(options);
        // this.markAsUntouched(options);
        // this.setValue(this.value, options);
        // this._pendingChange = false;
    }

    _setUpValidators = (validateConfig: ValidationConfigs | null) => {
        (this as { validateOptions: ValidationOptions | null }).validateOptions = validateConfig.options

        if (validateConfig) {
            (this as { validator: ValidatorFn | null }).validator = coerceToValidator(validateConfig.validators);
        }
    };

    /** @internal */
    _calculateStatus(): string {
        if (this.disabled) return DISABLED;
        if (this.errors) return INVALID;
        if (this.pending) return PENDING;

        return VALID;
    }

    /** @internal */
    _updateValue(): void {
        if (this.valid) {
            (this as { pristine: boolean }).pristine = false;

            (this as { value: any }).value = this.pendingValue;
        }
    }


    private _applyControlState = (state: any) => {

        (this as { value: any }).value = (this as { pendingValue: string }).pendingValue = state.value;
        // state.disabled ? this.disable({onlySelf: true, emitEvent: false}) :
        //         this.enable({onlySelf: true, emitEvent: false});
    };

    private _storeControlConfig = (config: ControlConfig) => {
        this._controlConfig = config;
    };

    /**
     * @internal
     */
    _allControlsDisabled(): boolean {
        return this.disabled;
    }
}


function coerceToValidator(validators: { [key: string]: ValidatorType }): ValidatorFn | null {

    return Validators.compose(convertToValidatorFn(validators))
};

function convertToValidatorFn(validators: { [key: string]: ValidatorType }): ValidatorFn[] {
    return _.map(validators, (value, key) => {
        if (!_.has(Validators, key)) return null

        return Validators[key]
    })
}