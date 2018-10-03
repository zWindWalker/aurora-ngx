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


export const fade_out_up: AnimationReferenceMetadata = animation(
  [
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([
        style({
          opacity: 1
        }),
        style({
          opacity: 0,
          transform: `translate3d(0, -100%, 0)`
        })
      ])
    )
  ]
  ,
  { params: { timing: 750, delay: 0 } }
);

export const fade_out_up_trigger: AnimationTriggerMetadata = trigger('fade_out_up', [
  transition('* => *', [
    useAnimation(fade_out_up)
  ])
]);

