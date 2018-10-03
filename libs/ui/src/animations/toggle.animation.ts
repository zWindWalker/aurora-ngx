import { AnimationTriggerMetadata, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { fade_in_down, fade_out_up } from '@aurora-ngx/animations';

export const toggle_trigger: AnimationTriggerMetadata = trigger('toggle', [
  state('in', style({
    display: 'block'
  })),
  state('out', style({
    display: 'none'
  })),
  transition('out => in', [
    useAnimation(fade_in_down, {
      params: {
        timing: 300
      }
    })
  ]),
  transition('in => out', [
    useAnimation(fade_out_up, {
      params: {
        timing: 300
      }
    })
  ])
]);
