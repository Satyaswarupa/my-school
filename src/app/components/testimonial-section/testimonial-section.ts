import { Component } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

@Component({
  selector: 'app-testimonial-section',
  imports: [],
  template: `
    <section class="relative flex w-full flex-col items-start gap-12 overflow-hidden bg-[#5e5e5e] px-6 py-20 md:px-[100px] md:py-28">
      <img [src]="assets.photo42" alt="" class="absolute inset-0 size-full object-cover opacity-20" />
      <div class="absolute inset-0 bg-[rgba(94,94,94,0.52)]"></div>

      <div class="relative flex w-full max-w-[1239px] flex-col items-start gap-6">
        <div class="flex w-full flex-col items-start gap-3">
          <div class="flex flex-col items-start gap-2">
            <div class="flex items-center gap-3.5">
              <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
              <span class="text-[18px] font-medium text-white">Voices of Trust</span>
            </div>
            <img [src]="assets.quote" alt="" class="size-10 md:size-12" />
          </div>
          <p class="w-full max-w-[1150px] text-[48px] leading-snug font-semibold text-white">
            My daughter has transformed completely. She speaks with confidence, thinks critically, and genuinely
            loves going to school every day.
          </p>
        </div>

        <div class="flex items-center gap-3">
          <div class="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-[#61ffff]">
            <span class="text-[24px] text-white">P</span>
          </div>
          <div class="flex flex-col gap-0.5">
            <p class="text-[22px] text-white">Priya Sharma</p>
            <p class="text-[16px] text-[#cfcfcf]">Parent · Grade 5</p>
            <div class="flex items-center gap-0.5 pt-0.5">
              @for (star of stars; track star) {
                <img [src]="assets.star" alt="" class="size-4" />
              }
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Next testimonial"
        class="absolute right-6 bottom-6 cursor-pointer text-white/70 transition-colors hover:text-white md:right-[100px] md:bottom-8"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </section>
  `,
})
export class TestimonialSection {
  protected readonly assets = figmaAssets;
  protected readonly stars = [1, 2, 3, 4];
}
