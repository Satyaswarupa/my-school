import { Component } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

interface AwardItem {
  image: string;
  caption: string;
}

@Component({
  selector: 'app-awards-section',
  imports: [],
  template: `
    <section class="relative flex w-full flex-col items-start gap-10 overflow-hidden px-6 py-10 md:px-[100px] md:py-16">
      <img [src]="assets.awardsPattern" alt="" class="pointer-events-none absolute inset-0 size-full object-cover opacity-5" />

      <div class="flex max-w-[517px] flex-col items-start gap-3.5">
        <div class="flex items-center gap-3">
          <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
          <span class="text-brand-teal text-lg font-medium">Achievements</span>
        </div>
        <h2 class="text-4xl font-bold text-black md:text-[48px]">
          Awards &amp; <span class="text-brand-teal">Recognition</span>
        </h2>
      </div>

      <div class="relative flex w-full flex-col items-start justify-center gap-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-24">
        @for (award of awards; track award.caption) {
          <div class="flex w-full max-w-[280px] flex-col items-center gap-6">
            <img [src]="award.image" alt="" class="aspect-square w-full rounded-full object-cover" />
            <p class="text-center text-lg text-black">{{ award.caption }}</p>
          </div>
        }
      </div>
    </section>
  `,
})
export class AwardsSection {
  protected readonly assets = figmaAssets;

  protected readonly awards: AwardItem[] = [
    {
      image: figmaAssets.awardImage1,
      caption: 'Best CBSE school in western region of Maharashtra',
    },
    {
      image: figmaAssets.awardImage2,
      caption: 'Miss Mona Chadda has been awarded as BharatGuild I Impact Mentor',
    },
    {
      image: figmaAssets.awardImage3,
      caption: 'Brand Impact : Best Emerging school in Pune.',
    },
  ];
}
