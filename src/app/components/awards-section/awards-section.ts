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
    <section class="relative flex w-full flex-col items-start gap-10 overflow-hidden px-6 py-10 md:px-12 lg:px-[100px] md:py-16">
      <img [src]="assets.awardsPattern" alt="" class="pointer-events-none absolute inset-0 size-full object-cover opacity-5" />

      <div class="flex max-w-[517px] flex-col items-start gap-3.5">
        <div class="flex items-center gap-3">
          <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
          <span class="text-brand-teal text-[18px] md:text-[22px] font-medium">Achievements</span>
        </div>
        <h2 class="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-black">
          Awards &amp; <span class="text-brand-teal">Recognition</span>
        </h2>
      </div>

      <!-- centred single column on phones, 3 across from 640px; the desktop row (unchanged) from 1280px -->
      <div class="relative grid w-full grid-cols-1 justify-items-center gap-8 sm:grid-cols-3 sm:items-start sm:gap-6 md:gap-8 xl:flex xl:flex-row xl:flex-wrap xl:justify-center xl:gap-32">
        @for (award of awards; track award.caption) {
          <div class="flex w-full max-w-[200px] flex-col items-center gap-3 sm:max-w-[240px] md:gap-5 xl:max-w-[280px] xl:gap-6">
            <img [src]="award.image" alt="" class="aspect-square w-full rounded-full object-cover" />
            <p class="text-center text-[15px] text-black sm:text-[16px] md:text-[18px] xl:text-[20px]">{{ award.caption }}</p>
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
