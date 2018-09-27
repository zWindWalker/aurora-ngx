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


export const rubber_band: AnimationReferenceMetadata = animation(
  [
    animate(
      '{{ timing }}ms {{ delay }}ms',
      keyframes([
        style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
        style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
        style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
        style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
        style({ transform: 'scale3d(0.95, 1.05, 1)', offset: 0.65 }),
        style({ transform: 'scale3d(1.05, 0.95, 1)', offset: 0.75 }),
        style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
      ])
    )
  ],
  { params: { timing: 1000, delay: 0 } }
);

export const rubber_band_trigger: AnimationTriggerMetadata = trigger('rubber_band', [
  transition('* => *', [
    useAnimation(rubber_band)
  ])
]);

