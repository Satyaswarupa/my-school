import { Component } from '@angular/core';
import { SiteHeader } from '../site-header/site-header';
import { figmaAssets } from '../../shared/figma-assets';

@Component({
  selector: 'app-about-hero',
  imports: [SiteHeader],
  template: `
    <section class="relative overflow-hidden bg-white">
      <img [src]="assets.aboutHeroTexture" alt="" class="pointer-events-none absolute inset-0 size-full object-cover opacity-10" />
      <p class="pointer-events-none absolute top-[190px] left-[calc(41.67%+21px)] hidden w-[850px] text-[260px] leading-none font-bold whitespace-nowrap text-black/5 select-none md:block">
        ABOUT
      </p>

      <app-site-header variant="light" activeLink="About Us" class="relative" />

      <div class="relative flex flex-col items-start gap-5 px-6 pt-10 pb-16 md:px-[100px]">
        <div class="flex flex-col gap-3.5">
          <div class="flex items-center gap-3.5">
            <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
            <span class="text-brand-orange text-[18px] font-medium">Who We Are</span>
          </div>
          <h1 class="max-w-[680px] text-[48px] leading-tight font-bold text-black">
            Shaping <span class="text-brand-orange">Stories</span><br />
            Since <span class="text-brand-teal">2012</span>
          </h1>
        </div>
        <p class="max-w-[680px] text-[18px] text-black">
          From Pimpri to Wakad — My School has spent over a decade nurturing curious, confident, and compassionate
          individuals.
        </p>
      </div>
    </section>
  `,
})
export class AboutHero {
  protected readonly assets = figmaAssets;
}
