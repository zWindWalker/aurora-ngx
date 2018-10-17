import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    options = [
        {
            value: 1,
            label: 1
        },
        {
            value: 2,
            label: 2
        }
    ]
    constructor() {
    }

    ngOnInit() {
    }

}
