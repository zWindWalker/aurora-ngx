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


export const pulse: AnimationReferenceMetadata = animation(
  [
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([
        style({ transform: 'scale3d(1, 1, 1)' }),
        style({ transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})' }),
        style({ transform: 'scale3d(1, 1, 1)' })
      ])
    )
  ],
  { params: { scale: 1.05, timing: 1000, delay: 0 } }
);

export const pulse_trigger: AnimationTriggerMetadata = trigger('pulse', [
  transition('* => *', [
    useAnimation(pulse)
  ])
]);

