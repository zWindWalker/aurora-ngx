export interface AuroraForm {
  type: string,
  name: string,
  label?: string,
  value?: any,
  input_type?: string,
  checkbox_label?: string,
  properties?: Object,
  validators?: Array<string>,
  options?: Array<{ value: any, label: any }>,
  feedback?: Object
}

export interface AuroraFormTemplate {
  [name: string]: Array<string>
}