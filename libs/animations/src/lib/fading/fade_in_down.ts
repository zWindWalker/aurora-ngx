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


export const fade_in_down: AnimationReferenceMetadata = animation(
  [
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([
        style({
          opacity: 0,
          transform: ` translate3d(0, -100%, 0)`
        }),
        style({
          opacity: 1,
          transform: `none`
        })
      ])
    )
  ]
  ,
  { params: { timing: 750 , delay: 0 } }
);

export const fade_in_down_trigger: AnimationTriggerMetadata = trigger('fade_in_down', [
  transition('* => *', [
    useAnimation(fade_in_down)
  ])
]);

