import { TemplateRef } from '@angular/core';

/**
 * Interface for configs provided to an `AbstractControl`.
 *
 * @publicApi
 */
export interface ControlConfig {
  state: {
    type: string,
    label?: string,
    value?: any,
    options?: Array<{ value: any, label: any, [property: string]: any }>,
  },
  properties?: {
    type?: string,
    placeholder?: string,
    checkbox_label?: string,
    hidden?: Boolean,
    template?: TemplateRef<any>,
    [name: string]: any
  },
  validators?: String[],
  async_validators?: String[],
}