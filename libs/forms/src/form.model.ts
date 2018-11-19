import { TemplateRef } from '@angular/core';

export interface AuroraForm {
  type?: string,
  name: string,
  placeholder?: string,
  label?: string,
  value?: any,
  input_type?: string,
  checkbox_label?: string,
  properties?: Object,
  validators?: Array<string>,
  options?: Array<{ value: any, label: any, [property: string]: any }>,
  feedback?: Object,
  hidden?: Boolean,
  template?: TemplateRef<any>,

  [property: string]: any
}

export interface AuroraFormTemplate {
  [name: string]: Array<string>
}