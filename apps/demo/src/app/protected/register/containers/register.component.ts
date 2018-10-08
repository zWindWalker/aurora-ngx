import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    config = [
        {
            type: 'input',
            name: 'username',
            label: 'Username',
            validators: ['required']
        },
        {
            type: 'input',
            input_type: 'email',
            name: 'email',
            label: 'Email',
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
            type: 'select',
            name: 'gender',
            label: 'Gender',
            value: 'male',
            options: [
                {
                    label: 'Male',
                    value: 'male'
                },
                {
                    label: 'Female',
                    value: 'female'
                }
            ]
        },
        {
            type: 'datepicker',
            name: 'birthday',
            label: 'Birthday'
        },
    ];

  constructor() { }

  ngOnInit() {
  }

}
