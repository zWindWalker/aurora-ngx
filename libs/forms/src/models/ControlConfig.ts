import {TemplateRef} from '@angular/core';

import {ValidationConfigs} from './Validator';

/**
 * Interface for configs provided to an `AbstractControl`.
 *
 * @publicApi
 */
export interface ControlConfig {
    state: ControlState,
    properties?: ControlProperties,
    validate?: ValidationConfigs
}

export interface ControlState {
    type: string,
    label?: string,
    value?: any,
    options?: Array<{ value: any, label: any, [property: string]: any }>,
}

export interface ControlProperties {
    type?: string,
    placeholder?: string,
    checkbox_label?: string,
    hidden?: Boolean,
    template?: TemplateRef<any>,

    [key: string]: any
}
