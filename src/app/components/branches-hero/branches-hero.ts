import { Component } from '@angular/core';
import { SiteHeader } from '../site-header/site-header';
import { figmaAssets } from '../../shared/figma-assets';

@Component({
  selector: 'app-branches-hero',
  imports: [SiteHeader],
  template: `
    <section class="relative overflow-hidden bg-white">
      <img [src]="assets.branchesHeroTexture" alt="" class="pointer-events-none absolute inset-x-0 top-0 h-[313px] w-full object-cover opacity-5" />

      <app-site-header variant="light" activeLink="Our Branches" class="relative" />

      <div class="relative flex flex-col items-start gap-3.5 px-6 pt-10 pb-16 md:px-[100px]">
        <div class="flex items-center gap-3">
          <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
          <span class="text-brand-orange text-[22px] font-medium">Our Footprint</span>
        </div>
        <div class="flex max-w-[917px] flex-col items-start gap-5 text-black">
          <h1 class="text-[48px] leading-tight font-bold">
            Our Learning <span class="text-brand-orange">Hubs</span>
          </h1>
          <p class="text-[18px] leading-snug">
            Wherever you find us, you'll discover a learning environment built on trust, values, and academic
            excellence.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class BranchesHero {
  protected readonly assets = figmaAssets;
}
