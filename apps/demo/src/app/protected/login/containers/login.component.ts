import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthService} from '../../../core/services';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
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

    constructor(private authSvs: AuthService) {
    }

  ngOnInit() {
  }

    onLogin = () => {
        this.authSvs.login();
    };

}
