import { animate, animation, AnimationReferenceMetadata, style } from '@angular/animations';


export const rotate_animation: AnimationReferenceMetadata = animation([

  animate('{{ timings }}', style({
    transform: 'rotate({{deg}}deg)'
  }))
]);