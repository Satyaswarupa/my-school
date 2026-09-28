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
    <section class="relative flex w-full flex-col items-start gap-5 overflow-hidden px-6 pt-16 pb-10 md:px-12 lg:px-[100px]">
      <img [src]="assets.eligibilityPattern" alt="" class="pointer-events-none absolute inset-0 size-full object-cover opacity-10" />

      <div class="relative flex max-w-[478px] flex-col items-start gap-3.5">
        <div class="flex items-center gap-3">
          <span class="h-px w-[46px] bg-[#007381]"></span>
          <span class="text-brand-teal text-[16px] md:text-[18px] font-medium">Eligibility</span>
        </div>
        <h2 class="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-black">
          Is Your Child <span class="text-brand-teal">Ready?</span>
        </h2>
      </div>

      <div class="relative flex w-full flex-col items-start gap-5">
        @for (row of rows; track row.grade) {
          <div class="flex w-full flex-col items-start gap-5">
            <img [src]="assets.divider" alt="" class="h-px w-full" />
            <div class="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-1 font-bold sm:flex-nowrap sm:whitespace-nowrap">
              <p class="text-[20px] text-black md:text-[28px]">{{ row.grade }}</p>
              <p class="text-[20px] md:text-[30px]" [class.text-brand-teal]="row.ageColor === 'teal'" [class.text-brand-orange]="row.ageColor === 'orange'">
                {{ row.age }} <span class="text-[13px] font-normal text-[#535353] md:text-[16px]">{{ row.note }}</span>
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
