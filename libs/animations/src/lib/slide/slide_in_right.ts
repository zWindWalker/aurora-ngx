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


export const slide_in_right: AnimationReferenceMetadata = animation(
  [
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([
        style({
          transform: `translate3d(100%, 0, 0)`,
          visibility: 'visible'
        }),
        style({
          transform: `translate3d(0, 0, 0)`
        })
      ])
    )
  ]
  ,
  { params: { timing: 1000, delay: 0 } }
);

export const slide_in_right_trigger: AnimationTriggerMetadata = trigger('slide_in_right', [
  transition('* => *', [
    useAnimation(slide_in_right)
  ])
]);

