import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { figmaAssets } from '../../shared/figma-assets';

@Component({
  selector: 'app-admissions-cta-section',
  imports: [RouterLink],
  template: `
    <section class="flex w-full flex-col items-stretch lg:flex-row">
      <div class="relative flex w-full flex-col items-start justify-center gap-2.5 overflow-hidden bg-[#f6f6f6] px-6 py-16 md:px-[100px] lg:w-[45%] lg:[clip-path:polygon(0_0,100%_0,84%_100%,0_100%)]">
        <div class="flex max-w-[387px] flex-col items-start gap-2.5">
          <div class="flex flex-col items-start gap-3.5">
            <p class="text-[16px] font-medium text-black">Admissions Open 2026–27</p>
            <h2 class="text-[48px] leading-tight font-bold whitespace-nowrap text-black">
              Their story<br />
              begins <span class="text-brand-orange">with you.</span>
            </h2>
          </div>
          <p class="text-[16px] text-black">
            Seats are limited. Schedule a visit and see why hundreds of families choose My School every year.
          </p>
        </div>
      </div>

      <div class="bg-brand-orange relative flex w-full flex-col items-center justify-center gap-10 overflow-hidden px-6 py-16 md:px-[100px] lg:-ml-[9%] lg:w-[64%] lg:[clip-path:polygon(9%_0,100%_0,100%_100%,0_100%)]">
        <p class="pointer-events-none absolute top-1/4 left-6 text-[172px] leading-none font-bold whitespace-nowrap text-black/[0.04] select-none">
          START
        </p>
        <p class="relative max-w-[424px] text-center text-[48px] font-bold text-white">
          Begin Your Child's<br />
          Journey Today
        </p>
        <div class="relative flex w-full max-w-[267px] flex-col items-center gap-5">
          <a
            href="#"
            class="flex w-full items-center justify-center gap-2 rounded-md border border-white/40 bg-white/10 px-10 py-5 text-base font-medium text-white"
          >
            Schedule a Visit
            <img [src]="assets.callIcon" alt="" class="size-4" />
          </a>
          <a
            routerLink="/admissions"
            fragment="lets-connect"
            class="text-brand-orange flex w-full items-center justify-center gap-2 rounded-md bg-white px-10 py-5 text-base font-medium"
          >
            Apply Now
            <img [src]="assets.makiArrow" alt="" class="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  `,
})
export class AdmissionsCtaSection {
  protected readonly assets = figmaAssets;
}
