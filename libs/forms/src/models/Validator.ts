import {AbstractControl} from './AbstractControl';
import {Observable} from 'rxjs';
import _ from 'lodash';

export interface ValidationErrors {
    [key: string]: any
}

export interface ValidationConfigs {
    validators?: {
        [name: string]: ValidatorType
    },
    async_validator?: {
        [name: string]: ValidatorType
    },
    options?: ValidationOptions | null
}

export interface ValidationOptions {
    icons?: {
        error?: string | { [key: string]: string },
        success?: string | { [key: string]: string },
    },
    feedback?: {
        error?: string | { [key: string]: string },
        success?: string | { [key: string]: string },
    }
}

export type ValidatorType = { [key: string]: any } | true | ValidatorFn | AsyncValidatorFn


/**
 * @publicApi
 */
export interface ValidatorFn {
    (control: AbstractControl): ValidationErrors | null
}


/**
 * @publicApi
 */
export interface AsyncValidatorFn {
    (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
}

/**
 * @description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 * @publicApi
 */
export class Validators {

    /**
     * @description
     * Validator that requires the control have a non-empty value.
     *
     * @usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     */
    static required = (c: AbstractControl): ValidationErrors | null =>
        isEmptyInputValue(c.pendingValue) ? {'required': true} : null;

    /**
     * @description
     * Validator that requires the control's value pass an email validation test.
     *
     * @usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @returns An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     */
    static email = (control: AbstractControl): ValidationErrors | null => {
        if (isEmptyInputValue(control.pendingValue)) {
            return null;  // don't validate empty values to allow optional controls
        }
        return EMAIL_REGEXP.test(control.pendingValue) ? null : {'email': true};
    };


    /**
     * @description
     * Compose multiple validators into a single function that returns the union
     * of the individual error maps for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error maps of the validators if the validation check fails, otherwise `null`.
     */
    static compose = (validators: (ValidatorFn | null | undefined)[] | null): ValidatorFn | null => {
        if (!validators) return null;
        const presentValidators: ValidatorFn[] = validators.filter(isPresent) as any;
        if (presentValidators.length === 0) return null;

        return function (control: AbstractControl) {
            return _mergeErrors(_executeValidators(control, presentValidators));
        };
    };


}


const EMAIL_REGEXP =
    /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;


function isEmptyInputValue(value: any): boolean {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}

function isPresent(o: any): boolean {
    return o != null;
}

function _executeValidators(control: AbstractControl, validators: ValidatorFn[]): any[] {
    return validators.map(v => v(control));
}

function _mergeErrors(arrayOfErrors: ValidationErrors[]): ValidationErrors | null {
    const errors: { [key: string]: any } =
        _.reduce(arrayOfErrors, (result: ValidationErrors | null, err: ValidationErrors | null) => {
            return err ? {...result, ...err} : result;
        }, {});

    return Object.keys(errors).length === 0 ? null : errors;

}
