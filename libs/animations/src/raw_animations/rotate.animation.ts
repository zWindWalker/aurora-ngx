import { animate, animation, style } from '@angular/animations';


export const rotate_animation = animation([

  animate('{{ timings }}', style({
    transform: 'rotate({{deg}}deg)'
  }))
]);