import { AbstractControl } from '@angular/forms';

export const confirm_password_validator = (control: AbstractControl): { [key: string]: boolean } | null => {
  if (control.parent.get('password').value !== control.value) {
    return { 'confirm_password': true };
  }
  return null;
};

export const agreement_validator = (control: AbstractControl): { [key: string]: boolean } | null => {
  if (!control.parent.get('agreement')) {
    return { 'agreement': true };
  }
  return null;
};