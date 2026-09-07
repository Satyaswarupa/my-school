import { Component } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

interface EligibilityRow {
  grade: string;
  age: string;
  ageColor: 'orange' | 'teal';
  note: string;
}

@Component({
  selector: 'app-eligibility-section',
  imports: [],
  template: `
    <section class="relative flex w-full flex-col items-start gap-5 overflow-hidden px-6 pt-16 pb-10 md:px-[100px]">
      <img [src]="assets.eligibilityPattern" alt="" class="pointer-events-none absolute inset-0 size-full object-cover opacity-20" />

      <div class="relative flex max-w-[478px] flex-col items-start gap-3.5">
        <div class="flex items-center gap-3">
          <img [src]="assets.lineShortAlt2" alt="" class="h-px w-[46px]" />
          <span class="text-brand-teal text-lg font-medium">Eligibility</span>
        </div>
        <h2 class="text-4xl font-bold text-black md:text-[48px]">
          Is Your Child <span class="text-brand-teal">Ready?</span>
        </h2>
      </div>

      <div class="relative flex w-full flex-col items-start gap-5">
        @for (row of rows; track row.grade) {
          <div class="flex w-full flex-col items-start gap-5">
            <img [src]="assets.divider" alt="" class="h-px w-full" />
            <div class="flex w-full items-center justify-between font-bold whitespace-nowrap">
              <p class="text-2xl text-black sm:text-[28px]">{{ row.grade }}</p>
              <p class="text-lg sm:text-[30px]" [class.text-brand-teal]="row.ageColor === 'teal'" [class.text-brand-orange]="row.ageColor === 'orange'">
                {{ row.age }} <span class="text-sm font-normal text-[#535353]">{{ row.note }}</span>
              </p>
            </div>
          </div>
        }
      </div>
    </section>
  `,
})
export class EligibilitySection {
  protected readonly assets = figmaAssets;

  protected readonly rows: EligibilityRow[] = [
    { grade: 'NURSERY', age: '3+ Years', ageColor: 'teal', note: '(CBSE)' },
    { grade: 'LKG', age: '4+ Years', ageColor: 'orange', note: '(CBSE)' },
    { grade: 'UKG', age: '5+ Years', ageColor: 'teal', note: '(CBSE)' },
    { grade: 'Grade 1', age: '6+ Years', ageColor: 'orange', note: '(CBSE)' },
    { grade: 'Grade 2 - 5', age: 'As Applicable', ageColor: 'teal', note: '(CBSE)' },
    { grade: 'Grade 6 - 10', age: 'As Applicable', ageColor: 'orange', note: '(CBSE)' },
  ];
}
