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
    <div class="bg-brand-teal-dark w-full overflow-hidden">
      <div class="animate-marquee flex w-max items-center py-2.5 text-base whitespace-nowrap text-white" [class.tracking-[1.6px]]="!bulleted()">
        @for (badge of [badges(), badges()]; track $index) {
          <ul class="flex items-center gap-10 pr-10">
            @for (item of badge; track $index) {
              <li>{{ item }}</li>
            }
          </ul>
        }
      </div>
    </div>
  `,
})
export class StatsTicker {
  readonly badges = input<string[]>(DEFAULT_BADGES);
  readonly bulleted = input(true);
}
