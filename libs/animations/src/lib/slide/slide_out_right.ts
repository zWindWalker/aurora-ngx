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


export const slide_out_right: AnimationReferenceMetadata = animation(
  [
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([
        style({
          transform: `translate3d(0, 0, 0)`
        }),
        style({
          transform: `translate3d(100%, 0, 0)`,
          visibility: 'hidden'
        })
      ])
    )
  ]
  ,
  { params: { timing: 1000, delay: 0 } }
);

export const slide_out_right_trigger: AnimationTriggerMetadata = trigger('slide_out_right', [
  transition('* => *', [
    useAnimation(slide_out_right)
  ])
]);

