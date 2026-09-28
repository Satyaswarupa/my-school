import { Component } from '@angular/core';
import { SiteHeader } from '../site-header/site-header';
import { figmaAssets } from '../../shared/figma-assets';

@Component({
  selector: 'app-gallery-hero',
  imports: [SiteHeader],
  template: `
    <section class="relative overflow-hidden bg-white">
      <img [src]="assets.galleryHeroTexture" alt="" class="pointer-events-none absolute inset-x-0 top-0 h-[313px] w-full object-cover opacity-10" />

      <app-site-header variant="light" activeLink="Gallery" class="relative" />

      <div class="relative flex flex-col items-start gap-3.5 px-6 pt-10 pb-16 md:px-12 lg:px-[100px]">
        <div class="flex flex-col items-start gap-3.5">
          <div class="flex items-center gap-3">
            <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
            <span class="text-brand-orange text-[18px] md:text-[22px] font-medium">Campus Life</span>
          </div>
          <h1 class="max-w-[656px] text-[32px] md:text-[40px] lg:text-[48px] leading-tight font-bold text-black">
            Life at <span class="text-brand-orange">My School</span>
          </h1>
        </div>
        <p class="max-w-[656px] text-[16px] md:text-[18px] text-black">
          A visual journey through our classrooms, playgrounds, labs, and celebrations.
        </p>
      </div>
    </section>
  `,
})
export class GalleryHero {
  protected readonly assets = figmaAssets;
}
