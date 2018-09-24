import { animate, group, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';


export default trigger('click', [
  state('default', style({
    opacity: 0
  })),
  state('animated', style({
    opacity: 0.4
  })),
  transition('* => *', [
    animate(360)
  ])
]);