import { AbstractControl } from './AbstractControl';
import { Observable } from 'rxjs';

export interface ValidationErrors {
  [key: string]: any
}

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