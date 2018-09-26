import {
  animate,
  AnimationTriggerMetadata,
  group,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';


export const click: AnimationTriggerMetadata = trigger('click', [
  state('default', style({
    opacity: 0
  })),
  state('animated', style({
    opacity: 0.4
  })),
  transition('* => *', [
    animate(360)
  ])
]);