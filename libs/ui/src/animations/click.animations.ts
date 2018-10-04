import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';


export const click: AnimationTriggerMetadata = trigger('click', [
  transition('* => *', [
    animate(400, style({
      opacity: 0.2,
      width: ` calc(100% + 1.2rem)`,
      height: `calc(100% + 1.2rem)`
    }))
  ])
]);