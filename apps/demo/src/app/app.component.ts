import { Component, ViewEncapsulation } from '@angular/core';
import { bounce_trigger, flash_trigger, pulse_trigger, rubber_band_trigger } from '@aurora-ngx/animations';

@Component({
  selector: 'aurora-ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    bounce_trigger,
    flash_trigger,
    pulse_trigger,
    rubber_band_trigger
  ],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  animated = 'default';


  startAnimated = () => {
    this.animated = (this.animated === 'default') ? 'animated' : 'default';
  };

}
