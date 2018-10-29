import {animate, group, keyframes, query, stagger, state, style, transition, trigger} from '@angular/animations';


export const rotate =
    trigger('rotate', [
        state('default', style({
            transform: 'rotate(0deg)'
        })),
        state('rotated', style({
                transform: 'rotate({{deg}}deg)'
            }),
            {
                params: {deg: 180}
            })
    ]);