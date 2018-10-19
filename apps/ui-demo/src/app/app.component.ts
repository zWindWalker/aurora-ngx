import {Component} from '@angular/core';

@Component({
    selector: 'aurora-ngx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    options = [
        {
            label: 'Test 1',
            value: 1
        },
        {
            label: 'Test 2',
            value: 2
        }
    ]
}
