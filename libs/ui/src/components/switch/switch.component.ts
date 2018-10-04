import { Component, OnInit } from '@angular/core';
import { click } from '../../animations/click.animations';


@Component({
  selector: 'aurora-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  animations: [click]
})
export class AuroraSwitchComponent implements OnInit {
  active: Boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onToggle = () => {
    this.active = !this.active;
  };

}
