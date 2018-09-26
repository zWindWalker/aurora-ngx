import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';


export const rotate: AnimationTriggerMetadata = trigger('rotate', [
  state('default', style({})),
  state('animated', style({
    transform: 'rotate(90deg)'
  }), { params: { deg: 0 } }),
  transition('* => *', [
    animate(300)
  ])
]);