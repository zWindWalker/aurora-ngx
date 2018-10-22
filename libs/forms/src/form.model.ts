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
    options?: Array<{ value: any, label: any }>,
    feedback?: Object,
    hidden?: Boolean,
    template?: string
}

export interface AuroraFormTemplate {
    [name: string]: Array<string>
}