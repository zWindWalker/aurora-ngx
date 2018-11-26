import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Logger } from '../../../../core/services';
import { AbstractControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, switchMap, takeWhile, tap } from 'rxjs/operators';
import { FormService } from '@aurora-ngx/forms';


const log = new Logger('RegisterComponent');

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  config = [];


  constructor(private authSvs: AuthService, private formSvs: FormService) {

  }

  ngOnInit() {
    this.config = [
      {
        type: 'input',
        input_type: 'email',
        name: 'email',
        label: 'Email',
        validators: ['required', this.emailExistedValidator],
        properties: {
          loading: false
        }

      },
      {
        type: 'input',
        name: 'first_name',
        label: 'First Name',
        validators: ['required']
      },
      {
        type: 'input',
        name: 'last_name',
        label: 'Last Name',
        validators: ['required']
      },

      {
        type: 'input',
        input_type: 'password',
        name: 'password',
        label: 'Password',
        validators: ['required']
      },
      {
        type: 'input',
        input_type: 'password',
        name: 'confirm_password',
        label: 'confirm_password',
        validators: ['required', 'confirm_password']
      },
      {
        type: 'input',
        name: 'slug',
        label: 'Slug',
        value: 'client',
        hidden: true
      }
    ];
  }

  onRegister = form_data => {
    log.debug(form_data);
    this.authSvs.register(form_data);
  };

  emailExistedValidator = (control: AbstractControl) => {
    if (control.valueChanges) {
      control.valueChanges
        .pipe(
          takeWhile(() => !(control.hasError('email') || control.hasError('required'))),
          debounceTime(200),
          distinctUntilChanged(),
          tap(() => this.formSvs._showLoading('email')),
          switchMap(email => this.authSvs.checkIfEmailExisted(email)),
          map(res => {
            if (res.status_code === 401) {
              control.setErrors({
                email_existed: true
              });
            }
            this.formSvs._stopLoading('email');
            return null;
          })
        ).subscribe();

    }
    return null;
  };

}
