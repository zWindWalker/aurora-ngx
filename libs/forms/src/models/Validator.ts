import {AbstractControl} from "./AbstractControl";

export interface ValidationErrors {
    [key: string]: any
}

/**
 * @publicApi
 */
export interface ValidatorFn { (control: AbstractControl): ValidationErrors|null}