import {
  animate,
  animation,
  AnimationReferenceMetadata,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';


export const rotate: AnimationReferenceMetadata = animation([

  animate('{{ timings }}', style({
    transform: 'rotate({{deg}}deg)'
  }))
]);

export const rotate_trigger: AnimationTriggerMetadata = trigger('rotate', [
  state('default', style({})),
  state('animated', style({
    transform: 'rotate({{deg}}deg)'
  }), { params: { deg: 0 } }),
  transition('* => *', [
    animate(300)
  ])
]);