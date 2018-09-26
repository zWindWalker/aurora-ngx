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
      value: 'wind walker'
    },
    {
      type: 'input',
      input_type: 'password',
      name: 'password',
      label: 'Password',
      value: '123456'
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
      label: 'Birthday',
    },
    {
      type: 'submit',
      label: 'Submit'
    }
  ];


  onSubmit = e => {
    console.log(e);
  };

}
