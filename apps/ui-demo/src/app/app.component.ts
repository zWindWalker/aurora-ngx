import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'aurora-ngx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    options = [
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

}
