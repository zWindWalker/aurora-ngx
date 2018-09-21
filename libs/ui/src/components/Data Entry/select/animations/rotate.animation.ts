import { animate, group, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';


export default trigger('rotate', [
  state('default', style({})),
  state('animated', style({
    transform: 'rotate(90deg)'
  }), {params: {deg: 0}}),
  transition('* => *', [
    animate(300)
  ])
]);