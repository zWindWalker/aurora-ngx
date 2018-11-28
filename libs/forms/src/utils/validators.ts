/**
 * @description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 * @publicApi
 */
import { AbstractControl } from '../models/AbstractControl';
import { ValidationErrors, ValidatorFn } from '../models/Validator';
import _ from 'lodash';

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
    (c.value == null || c.value.length === 0)
      ? { 'required': true }
      : null;

  /**
   * @description
   * Compose multiple validators into a single function that returns the union
   * of the individual error maps for the provided control.
   *
   * @returns A validator function that returns an error map with the
   * merged error maps of the validators if the validation check fails, otherwise `null`.
   */

  static compose(validators: (ValidatorFn | null | undefined)[] | null): ValidatorFn | null {
    if (!validators) return null;
    const presentValidators: ValidatorFn[] = validators.filter(isPresent) as any;
    if (presentValidators.length === 0) return null;
    console.log('present', presentValidators);
    return function(control: AbstractControl) {
      return _mergeErrors(_executeValidators(control, presentValidators));
    };
  }
}

function isPresent(o: any): boolean {
  return o != null;
}

function _executeValidators(control: AbstractControl, validators: ValidatorFn[]): any[] {
  return _.map(validators, v => v(control));
}

function _mergeErrors(arrayOfErrors: ValidationErrors[]): ValidationErrors | null {
  const errors: { [key: string]: any } = {};

  // const res: {[key: string]: any} =
  //   arrayOfErrors.reduce((res: ValidationErrors | null, errors: ValidationErrors | null) => {
  //     return errors != null ? {...res !, ...errors} : res !;
  //   }, {});
  // return Object.keys(res).length === 0 ? null : res;
  console.log(arrayOfErrors);
  // console.log(_.reduce(arrayOfErrors, (result, value, key) => {
  //
  // }));

  return null;
}
