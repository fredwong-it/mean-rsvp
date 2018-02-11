// src/app/core/expand-collapse.animation.ts
import { trigger, transition, style, animate, state } from '@angular/animations';

// OPTION 1:
export const expandCollapse = trigger('expandCollapse', [
  state('*', style({
    'overflow-y': 'hidden',
    'height': '*'
  })),
  state('void', style({
    'overflow-y': 'hidden',
    'height': '0'
  })),
  transition('* => void', animate('250ms ease-out')),
  transition('void => *', animate('250ms ease-in'))
]);
