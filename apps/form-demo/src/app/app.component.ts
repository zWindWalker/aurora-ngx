import {Component, ViewEncapsulation} from '@angular/core';
import {AuroraForm, AuroraFormTemplate} from '@aurora-ngx/forms';


@Component({
    selector: 'aurora-ngx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    config: AuroraForm[] = [
        {
            type: 'input',
            name: 'username',
            label: 'Username',
            value: 'saldkfjskla',
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
            type: 'input',
            input_type: 'phone',
            name: 'Phone',
            label: 'Phone',
            validators: ['required']

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
            type: 'radio',
            name: 'color',
            value: 'red',
            label: 'Color',
            options: [
                {
                    label: 'Red',
                    value: 'red'
                },
                {
                    label: 'Yellow',
                    value: 'yellow'
                },
                {
                    label: 'Blue',
                    value: 'blue'
                }
            ]
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
            properties: {
                drop: true,
                multiple: true
            },
            name: 'dragger',
            label: 'Dragger'
        }
    ];

    template_config: AuroraFormTemplate = {
        area_1: ['username', 'password', 'confirm_password'],
        area_2: ['email']
    }
    onSubmit = e => {
        console.log(e)
    }

}
