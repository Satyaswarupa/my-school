import { Component } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

@Component({
  selector: 'app-gallery-quote-banner',
  imports: [],
  template: `
    <section class="bg-brand-orange flex w-full items-center justify-center gap-3 px-6 py-6 md:px-12 lg:px-[100px] md:py-8">
      <img [src]="assets.quote" alt="" class="size-6 shrink-0" />
      <p class="max-w-[1072px] text-center text-[20px] font-bold text-[#f3f3f3] md:text-[26px] lg:text-[30px]">
        Every photograph here is a memory we are proud to have made together.
      </p>
      <img [src]="assets.quotesR" alt="" class="size-6 shrink-0" />
    </section>
  `,
})
export class GalleryQuoteBanner {
  protected readonly assets = figmaAssets;
}
