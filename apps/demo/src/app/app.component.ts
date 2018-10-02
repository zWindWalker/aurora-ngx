import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'aurora-ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
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
      label: 'Email'
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
      label: 'Confirm password',
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
    {
      type: 'checkbox',
      name: 'agreement',
      value: false,
      checkbox_label: 'I have read the agreement'
    },
    {
      type: 'textarea',
      name: 'description',
      label: 'Description'
    },

    {
      type: 'upload',
      name: 'upload',
      label: 'Upload'
    },
    {
      type: 'upload',
      config: {
        drop: true,
        multiple: true
      },
      name: 'dragger',
      label: 'Dragger'
    }
  ];

  onSubmit = e => {
    console.log(e);
  };

}
