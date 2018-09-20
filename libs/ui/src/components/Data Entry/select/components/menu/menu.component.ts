import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    options = [
        {
            value: '1',
            label: '1'
        },
        {
            value: '2',
            label: '2'
        }
    ]

    constructor() {
    }

    ngOnInit() {
    }

}
