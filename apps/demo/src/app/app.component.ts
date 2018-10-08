import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'aurora-ngx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  configs = [
    {
      type: 'input',
      name: 'username',
      label: 'Username',
      validators: ['required']
    },
    {
      type: 'input',
      input_type: 'password',
      name: 'password',
      label: 'Password',
      validators: ['required']
    }
  ];
    constructor() {
    }

    ngOnInit() {
    }

}
