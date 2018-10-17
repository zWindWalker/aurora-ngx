import {AbstractControl, Validators} from '@angular/forms';
import _ from 'lodash';

const generate_validators = validator => {
    switch (validator) {
        case 'required':
            return Validators.required;
        case 'confirm_password':
            return confirm_password_validator;
        case 'agreement':
            return agreement_validator;
        case 'email':
            return Validators.email;
    }
};

export const get_validators = config => {
    const {name, validators} = config;

    if (name === 'confirm_password' || name === 'email') {
        const a = (name === 'confirm_password') ? ['required', 'confirm_password'] : ['required', 'email'];
        const tmp = (!validators || validators.length < 0) ? a : validators.concat(a);
        return _.map(tmp, validator => generate_validators(validator));
    } else {
        return (!validators || validators.length < 0) ? [] : _.map(validators, validator => generate_validators(validator));
    }


};

export const confirm_password_validator = (control: AbstractControl): { [key: string]: boolean } | null => {
    if (
        control.value &&
        control.parent.get('password').value !== control.value
    ) {
        return {'confirm_password': true};
    }
    return null;
};

export const agreement_validator = (control: AbstractControl): { [key: string]: boolean } | null => {
    if (!control.parent.get('agreement')) {
        return {'agreement': true};
    }
    return null;
};