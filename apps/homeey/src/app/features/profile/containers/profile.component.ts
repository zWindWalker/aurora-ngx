import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/providers/auth.service";
import {ProfileService} from "../providers/profile.service";


@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    constructor(
        private authSvs: AuthService,
        private profileSvs: ProfileService
    ) {
    }

    ngOnInit() {
        this.profileSvs._getUserProfile()
    }

    onLogout = () => {
        this.authSvs.logout();
    };

}
