import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    constructor(private authSvs: AuthService) {
    }

  ngOnInit() {
  }

    onLogout = () => {
        this.authSvs.logout();
    };

}
