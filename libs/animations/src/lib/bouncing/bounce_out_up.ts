import {
  animate,
  animation,
  AnimationReferenceMetadata,
  AnimationTriggerMetadata,
  keyframes,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';


export const bounce_out_up: AnimationReferenceMetadata = animation(
  [
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([
        style({
          transform: 'translate3d(0, -1rem, 0)',
          offset: 0.2
        }),
        style({
          transform: 'translate3d(0, 2rem, 0)',
          offset: 0.4
        }),
        style({
          transform: 'translate3d(0, 2rem, 0)',
          offset: 0.45
        }),
        style({
          transform: `translate3d(0, -200%, 0)`,
          offset: 1
        })
      ])
    )
  ]
  ,
  { params: { timing: 1000, delay: 0 } }
);

export const bounce_out_up_trigger: AnimationTriggerMetadata = trigger('bounce_out_up', [
  transition('* => *', [
    useAnimation(bounce_out_up)
  ])
]);

