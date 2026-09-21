import { Component } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

@Component({
  selector: 'app-cta-section',
  imports: [],
  template: `
    <section class="bg-brand-teal relative flex w-full items-start justify-center overflow-hidden px-6 py-10 md:py-16">
      <img [src]="assets.ctaBg" alt="" class="absolute inset-0 size-full object-cover" />

      <div class="relative flex w-full max-w-[322px] flex-col items-center gap-10">
        <div class="flex w-full flex-col items-center gap-10">
          <p class="w-full text-center text-[32px] text-white">IT'S TIME TO</p>
          <div class="flex flex-col items-center text-center text-[120px] leading-none font-bold text-white">
            <p>Make</p>
            <p>Your</p>
            <p>Move</p>
          </div>
        </div>
        <img [src]="assets.ctaArrow" alt="" class="h-16 w-5" />
        <a
          href="#"
          class="flex w-full items-center justify-center border-b-2 border-white p-5 text-2xl font-medium text-brand-orange sm:text-[30px]"
        >
          Take The Next Step
        </a>
      </div>
    </section>
  `,
})
export class CtaSection {
  protected readonly assets = figmaAssets;
}
