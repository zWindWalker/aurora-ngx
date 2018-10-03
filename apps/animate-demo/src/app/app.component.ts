import { Component, ViewEncapsulation } from '@angular/core';
import { bounce_in_down_trigger, bounce_in_trigger, rubber_band_trigger } from '@aurora-ngx/animations';
import { bounce_out_up_trigger } from '../../../../libs/animations/src/lib/bouncing/bounce_out_up';
import { fade_in_down_trigger, fade_in_trigger, fade_out_up_trigger } from '../../../../libs/animations/src/lib/fading';


@Component({
  selector: 'aurora-ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    rubber_band_trigger,

    bounce_in_trigger, bounce_in_down_trigger, bounce_out_up_trigger,

    fade_in_trigger, fade_in_down_trigger, fade_out_up_trigger
  ]
})
export class AppComponent {
  animated: Boolean = false;

  startAnimated = () => {
    this.animated = !this.animated;
  };
}
