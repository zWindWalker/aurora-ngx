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


export const bounce_in_down: AnimationReferenceMetadata = animation(
  [
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([

        style({
          animationTimingFunction: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
          transform: `translate3d(0, -800%, 0)`,
          offset: 0
        }),
        style({
          animationTimingFunction: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
          transform: 'translate3d(0, 2.5rem, 0)',
          offset: 0.6
        }),
        style({
          animationTimingFunction: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
          transform: 'translate3d(0, -1rem, 0)',
          offset: 0.75
        }),
        style({
          animationTimingFunction: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
          transform: 'translate3d(0, .5rem, 0)',
          offset: 0.9
        }),
        style({
          animationTimingFunction: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
          transform: `translate3d(0, 0, 0)`,
          offset: 1
        })
      ])
    )
  ]
  ,
  { params: { timing: 1000, delay: 0 } }
);

export const bounce_in_down_trigger: AnimationTriggerMetadata = trigger('bounce_in_down', [
  transition('* => *', [
    useAnimation(bounce_in_down)
  ])
]);

