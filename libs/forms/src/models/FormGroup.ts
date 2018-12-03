import _ from 'lodash';
import {AbstractControl, DISABLED, INVALID, PENDING, VALID} from './AbstractControl';
import {ValidationConfigs, ValidationOptions} from "./Validator";

/**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormArray`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * @usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 *
 * @publicApi
 */
export class FormGroup extends AbstractControl {


    /**
     * Creates a new `FormGroup` instance.
     *
     * @param controls A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     */
    constructor(
        public controls: { [key: string]: AbstractControl }
    ) {
        super();
        this._setUpControls();
        this._initObservables();

        this.updateValueAndValidity({onlySelf: true, emitEvent: false});
    }

    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * @usageNotes
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     * ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you excluding the value of a control.
     *
     * @param value The new value for the control that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {@link IonarAbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     */
    setValue(value: { [key: string]: any }, options: { onlySelf?: boolean, emitEvent?: boolean } = {}):
        void {
        // this._checkAllValuesPresent(value);
        // Object.keys(value).forEach(name => {
        //     this._throwIfControlMissing(name);
        //     this.controls[name].setValue(value[name], {onlySelf: true, emitEvent: options.emitEvent});
        // });
        // this.updateValueAndValidity(options);
    }


    /**
     * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link IonarAbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
     *
     * @usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     */
    reset(value: any = {}, options: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {
        // this._forEachChild((control: IonarAbstractControl, name: string) => {
        //     control.reset(value[name], {onlySelf: true, emitEvent: options.emitEvent});
        // });
        // this.updateValueAndValidity(options);
        // this._updatePristine(options);
        // this._updateTouched(options);
    }

    /**
     * Retrieves a child control given the control's name or path.
     *
     * @param name A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     */
    get(name: string = null): AbstractControl | null {
        if (name == null) return null;

        return this.controls.hasOwnProperty(name as string) ? this.controls[name] : null;
    }

    /** @internal */
    _calculateStatus(): string {
        if (this._allControlsDisabled()) return DISABLED;
        // if (this.errors) return INVALID;
        if (this._anyControlsHaveStatus(PENDING)) return PENDING;
        if (this._anyControlsHaveStatus(INVALID)) return INVALID;
        return VALID;
    }

    /** @internal */
    _setUpControls(): void {
        _.forOwn(this.controls, (value: AbstractControl, key: string) => {
            this.controls[key].setParent(this);
        });
    }


    _setUpValidationOptions(options: ValidationOptions | null): void {

        this.validateOptions = options

        _.forOwn(this.controls, (value: AbstractControl, key: string) => {

            console.log(
                coerceToValidationConfig(value.validateOptions, options)
            )

        });
    }

    /** @internal */
    _updateValue(): void {
        (this as { value: any }).value = this._reduceValue();
    }

    /** @internal */
    _reduceValue() {
        const form_value: { [k: string]: AbstractControl } = {};
        _.each(_.keys(this.controls), k => {
            form_value[k] = this.controls[k].value;
        });
        return form_value;
    }

    /** @internal */
    _allControlsDisabled(): boolean {
        _.mapValues(this.controls, (c: AbstractControl) => {
            if (c.enabled) return false
        })

        return _.keys(this.controls).length > 0 || this.disabled;
    }

    /** @internal */
    _anyControlsHaveStatus(status: string): boolean {
        return _.every(this.controls, ['status', status])
    }

}


function coerceToValidationConfig(control: ValidationOptions | null, parent: ValidationOptions | null) {
    if (!control || !parent) return control || parent || null
    return {
        icons: {
            ...parent.icons,
            ...control.icons
        },
        feedback: {
            ...parent.feedback,
            ...control.feedback
        }
    }

};

