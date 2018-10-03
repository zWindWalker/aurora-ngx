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


const base = {
  transform: 'translate3d(0, 0, 0)',
  animationTimingFunction: `cubicBezier(0.2125,0.610,0.355,1.000)`
};

export const bounce: AnimationReferenceMetadata = animation(
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([
        style({
          animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
          transform: 'translate3d(0, -30px, 0)',
          offset: 0.43
        }),
        style({
          ...base,
          offset: 0.53
        }),
        style({
          animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
          transform: 'translate3d(0, -15px, 0)',
          offset: 0.7
        }),
        style({
          ...base,
          offset: 0.8
        }),
        style({
          transform: 'translate3d(0, -4px, 0)',
          offset: 0.9
        }),
        style({
          ...base,
          offset: 1
        })
      ])
    )
  ,
  { params: { timing: 1000, delay: 0 } }
);

export const bounce_trigger: AnimationTriggerMetadata = trigger('bounce', [
  transition('* => *', [
    useAnimation(bounce)
  ])
]);

