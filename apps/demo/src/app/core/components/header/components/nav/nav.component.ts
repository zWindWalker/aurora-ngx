import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services';

@Component({
    selector: 'nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    is_authenticated: Boolean = false;

    constructor(private authSvs: AuthService) {
    }

    ngOnInit() {
        this.authSvs.state_change.subscribe(state => {
            this.is_authenticated = !!state;
        });
    }
}
