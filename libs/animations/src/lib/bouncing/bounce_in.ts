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


export const bounce_in: AnimationReferenceMetadata = animation(
  [
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([
        style({
          animationTimingFunction: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
          transform: `scale3d(0.3, 0.3, 0.3)`,
          offset: 0
        }),
        style({
          animationTimingFunction: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
          transform: 'scale3d(1.1, 1.1, 1.1)',
          offset: 0.2
        }),
        style({
          animationTimingFunction: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
          transform: 'scale3d(0.9, 0.9, 0.9)',
          offset: 0.4
        }),
        style({
          animationTimingFunction: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
          transform: 'scale3d(1.03, 1.03, 1.03)',
          offset: 0.6
        }),
        style({
          animationTimingFunction: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
          transform: 'scale3d(0.97, 0.97, 0.97)',
          offset: 0.8
        }),
        style({
          animationTimingFunction: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
          transform: `scale3d(1, 1, 1)`,
          offset: 1
        })
      ])
    )
  ],
  { params: { timing: 750, delay: 0 } }
);

export const bounce_in_trigger: AnimationTriggerMetadata = trigger('bounce_in', [
  transition('* => *', [
    useAnimation(bounce_in)
  ])
]);

