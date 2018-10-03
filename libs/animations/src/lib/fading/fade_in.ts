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


export const fade_in: AnimationReferenceMetadata = animation(
  [
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([
        style({ opacity: 0 }),
        style({ opacity: 1 })
      ])
    )
  ],
  { params: { timing: 1000, delay: 0 } }
);

export const fade_in_trigger: AnimationTriggerMetadata = trigger('fade_in', [
  transition('* => *', [
    useAnimation(fade_in)
  ])
]);

