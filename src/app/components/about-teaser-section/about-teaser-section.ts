import { Component } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

@Component({
  selector: 'app-about-teaser-section',
  imports: [],
  template: `
    <section class="relative flex flex-col items-start overflow-hidden bg-white px-6 py-10 md:px-[100px] md:py-10">
      <img [src]="assets.rectangleDecor" alt="" class="pointer-events-none absolute top-0 left-0 hidden h-full w-[738px] md:block" />

      <div class="relative flex w-full flex-col gap-10 lg:flex-row lg:items-center" style="column-gap: 94px">
        <div class="flex flex-col gap-10 lg:w-[542px] lg:shrink-0">
          <div class="flex flex-col gap-3.5">
            <div class="flex items-center gap-3.5">
              <img [src]="assets.lineShort" alt="" class="h-px w-[46px] invert md:invert-0" />
              <p class="text-brand-orange text-lg font-medium md:text-white">Est. 2012 · About Us</p>
            </div>
            <h1 class="text-[48px] leading-tight font-bold text-black md:text-white">
              Bridging Tradition<br />
              with Tomorrow
            </h1>
          </div>
          <div class="flex flex-col gap-4 text-[20px] text-[#3d3d3d] md:text-[#f3f3f3]">
            <p>
              Established in 2012 in Pimpri and now rooted in Wakad, My School is a learner-centric CBSE
              institution committed to nurturing confident, compassionate, and future-ready individuals.
            </p>
            <p>
              We believe education is not about memorising facts — it is about understanding life,
              discovering strengths, and developing the skills needed for the future.
            </p>
          </div>
          <a href="#" class="flex cursor-pointer items-center gap-4">
            <img [src]="assets.arrowLink" alt="" class="h-[19px] w-[70px] invert md:invert-0" />
            <span class="flex items-center gap-1.5">
              <span class="text-sm font-semibold text-[#3d3d3d] underline md:text-[#e5e5e5]">Read Our Full Story</span>
              <img [src]="assets.arrowForward" alt="" class="size-[18px] invert md:invert-0" />
            </span>
          </a>
        </div>

        <img
          [src]="assets.creativeSideImage"
          alt="Students at My School"
          class="h-[300px] w-full rounded-lg object-cover md:h-[480px] lg:mt-16 lg:w-[720px] lg:shrink-0 lg:rounded-none"
        />
      </div>
    </section>
  `,
})
export class AboutTeaserSection {
  protected readonly assets = figmaAssets;
}
