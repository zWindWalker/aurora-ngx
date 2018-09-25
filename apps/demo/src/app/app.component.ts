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
      label: 'Username'
    },
    {
      type: 'input',
      input_type: 'password',
      name: 'password',
      label: 'Password'
    },
    {
      type: 'select',
      name: 'gender',
      label: 'Gender',
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
      type: 'submit',
      label: 'Submit'
    }
  ];


  onSubmit = e => {
    console.log(e)
  }

}
