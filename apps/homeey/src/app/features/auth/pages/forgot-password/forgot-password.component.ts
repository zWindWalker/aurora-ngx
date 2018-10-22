import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../providers/auth.service";
import {Logger} from "../../../../core/services";

const log = new Logger('ForgotPasswordComponent')

@Component({
    selector: 'forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    ///-----------------------------------------------  Variables   -----------------------------------------------///

    configs = [
        {
            type: 'input',
            input_type: 'email',
            name: 'email',
            label: 'Email',
            validators: ['required', 'email']
        }
    ];

    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


    constructor(private authSvs: AuthService) {
    }

    ngOnInit() {
    }

    ///-----------------------------------------------  General Functions   -----------------------------------------------///


    onForgotPassword = form_data => {
        log.debug(form_data)
        this.authSvs.reset_password(form_data)
    };

}
