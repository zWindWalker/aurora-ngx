import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { click } from '../../animations/click.animations';

@Component({
  selector: 'aurora-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  animations: [click]
})
export class AuroraButtonComponent implements OnInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  animated: Boolean = false;

  @Input() type: String = '';

  @HostBinding('class.primary') primary_style: Boolean;
  @HostBinding('class.danger') danger_style: Boolean;

  @HostListener('click')
  onClick = () => {
    this.animated = true;
    setTimeout(() => this.animated = false, 100);
  };

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {
    switch (this.type) {
      case 'primary':
        this.primary_style = true;
        break;
      case 'danger':
        this.danger_style = true;
        break;
    }
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///


}
