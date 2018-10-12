import {EventEmitter, Injectable, Input, Output} from '@angular/core';

@Injectable()
export class InputService {
    type
    name
    value
    change
    blur
    invalid;
    range

    _setInputConfig = (
        type: String = 'text',
        name = '',
        value: any = '',
        change: EventEmitter<any>,
        blur: EventEmitter<any>,
        invalid: Boolean = false,
        range = []
    ) => {
        this.type = type
        this.name = name
        this.value = value
        this.change = change
        this.blur = blur
        this.invalid = invalid
        this.range = range
    }

    _getInputConfig = () => ({
        type: this.type,
        name: this.name,
        value: this.value,
        change: this.change,
        blur: this.blur,
        invalid: this.invalid,
        range: this.range
    })
}
