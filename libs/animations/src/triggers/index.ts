import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';


export const rotate_trigger: AnimationTriggerMetadata = trigger('rotate_trigger', [
  state('default', style({})),
  state('animated', style({
    transform: 'rotate({{deg}}deg)'
  }), { params: { deg: 0 } }),
  transition('* => *', [
    animate(300)
  ])
]);