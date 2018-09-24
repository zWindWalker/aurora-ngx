import { Component, OnInit } from '@angular/core';
import click from './click.animations';

@Component({
  selector: 'aurora-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  animations: [click]
})
export class SwitchComponent implements OnInit {
  active: Boolean = false;
  animated: Boolean = false
  constructor() {
  }

  ngOnInit() {
  }

  onToggle = () => {
    this.active = !this.active;
    this.animated = true;
    setTimeout(() => this.animated = false, 100)
  };

}
