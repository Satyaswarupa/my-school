import { Component } from '@angular/core';
import { SiteHeader } from '../site-header/site-header';
import { figmaAssets } from '../../shared/figma-assets';

@Component({
  selector: 'app-admissions-hero',
  imports: [SiteHeader],
  template: `
    <section class="relative overflow-hidden bg-white">
      <p class="pointer-events-none absolute top-[110px] left-[calc(41.67%+58px)] hidden w-[682px] text-[200px] leading-none font-bold whitespace-nowrap text-black/[0.08] select-none md:block">
        ADMIT
      </p>

      <app-site-header variant="light" activeLink="Admissions & Academics" class="relative" />

      <div class="relative flex flex-col items-start gap-3.5 px-6 pt-6 pb-4 md:px-12 lg:px-[100px]">
        <div class="flex items-center gap-3">
          <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
          <span class="text-brand-orange text-[18px] md:text-[22px] font-medium">Admissions & Academics</span>
        </div>
        <h1 class="max-w-[380px] text-[32px] md:text-[40px] lg:text-[48px] leading-tight font-bold text-black">
          Seats Are <span class="text-brand-orange">Filling</span><br />
          <span class="text-brand-teal">Fast.</span>
        </h1>
      </div>

      <img [src]="assets.admissionsHero" alt="Admissions process at My School" class="relative w-full object-cover" />
    </section>
  `,
})
export class AdmissionsHero {
  protected readonly assets = figmaAssets;
}
