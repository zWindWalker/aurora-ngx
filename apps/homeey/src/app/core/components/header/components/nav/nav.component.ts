import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../../features/auth/providers/auth.service";


@Component({
    selector: 'nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


    constructor(public authSvs: AuthService) {
    }

    ngOnInit() {

    }
}
