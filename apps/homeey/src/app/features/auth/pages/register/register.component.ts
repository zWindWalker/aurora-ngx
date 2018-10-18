import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../providers/auth.service";
import {Logger} from "../../../../core/services";


const log = new Logger('RegisterComponent');

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
    config = [
        {
            type: 'input',
            input_type: 'email',
            name: 'email',
            label: 'Email',
            validators: ['required']
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
            label: "Slug",
            value: 'client',
            hidden: true
        }
    ];


    constructor(private authSvs: AuthService) {

    }

    ngOnInit() {

    }

    onRegister = form_data => {
        log.debug(form_data);
        this.authSvs.register(form_data)
    }

}
