import {Component, OnInit} from '@angular/core';
import {AuthService, Logger} from '../../../core/services';

const log = new Logger('LoginComponent');


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    configs = [
        {
            type: 'input',
            name: 'email',
            label: 'Email',
            validators: ['required', 'email']
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

    onLogin = form_data => {
        log.debug(form_data)
        this.authSvs.login(form_data)
    };

}
