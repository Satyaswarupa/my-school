import { Component, input } from '@angular/core';

const DEFAULT_BADGES: string[] = [
  'Learner-Centric',
  'CBSE Affiliated',
  'Est. 2012',
  'Safe Campus',
  'Future-Ready',
  'Holistic Development',
  'Wakad, Pune',
  'Conceptual Learning',
];

@Component({
  selector: 'app-stats-ticker',
  imports: [],
  template: `
    <div class="bg-brand-teal-dark w-full overflow-x-auto">
      <ul class="flex w-full min-w-max items-center justify-between gap-10 px-7 py-2.5 text-base whitespace-nowrap text-white" [class.tracking-[1.6px]]="!bulleted()">
        @for (badge of badges(); track badge) {
          <li>{{ badge }}</li>
        }
      </ul>
    </div>
  `,
})
export class StatsTicker {
  readonly badges = input<string[]>(DEFAULT_BADGES);
  readonly bulleted = input(true);
}
