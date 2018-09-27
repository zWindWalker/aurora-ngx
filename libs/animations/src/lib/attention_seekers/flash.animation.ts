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


export const flash: AnimationReferenceMetadata = animation(
  [
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([
        style({ opacity: 1 }),
        style({ opacity: 0 }),
        style({ opacity: 1 }),
        style({ opacity: 0 }),
        style({ opacity: 1 })
      ])
    )
  ],
  { params: { timing: 1000, delay: 0 } }
);

export const flash_trigger: AnimationTriggerMetadata = trigger('flash', [
  transition('* => *', [
    useAnimation(flash)
  ])
]);

