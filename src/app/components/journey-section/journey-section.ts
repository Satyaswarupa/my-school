import { Component } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

@Component({
  selector: 'app-journey-section',
  imports: [],
  template: `
    <section class="flex w-full flex-col items-start gap-8 border border-black/10 bg-[#f9f9f9] px-6 py-10 md:px-12 lg:px-[100px] md:py-10">
      <div class="flex w-full flex-col items-start gap-12 lg:flex-row lg:items-end lg:gap-[199px]">
        <div class="flex w-full max-w-[530px] flex-col items-start gap-5">
          <div class="flex w-full flex-col items-start gap-3">
            <div class="flex w-full flex-col items-start gap-3.5">
              <div class="flex items-center gap-3">
                <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
                <span class="text-brand-teal text-lg font-medium">Our Journey</span>
              </div>
              <div class="relative aspect-[5/2] w-full">
                <img
                  src="assets/creative/journey-2012.jpeg"
                  alt="Pimpri campus, Est. 2012"
                  class="absolute inset-0 size-full object-contain mix-blend-multiply"
                />
              </div>
            </div>
            <h3 class="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-black">Pimpri, Pune</h3>
          </div>
          <div class="flex items-center gap-3">
            <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
            <span class="text-brand-orange text-[18px] md:text-[20px] font-medium">ORIGIN CAMPUS</span>
          </div>
          <p class="text-[16px] md:text-[18px] text-black">
            Founded with a clear vision — to build a school that goes beyond textbooks and shapes real human beings.
            Started with a handful of classrooms and an ocean of ambition.
          </p>
        </div>

        <div class="flex w-full max-w-[530px] flex-col items-start gap-5">
          <div class="flex w-full flex-col items-start gap-3.5">
            <div class="relative aspect-[5/2] w-full max-w-none lg:w-[110%]">
              <img
                src="assets/creative/journey-2023.jpeg"
                alt="Wakad campus, 2023"
                class="absolute inset-0 size-full object-contain mix-blend-multiply"
              />
            </div>
            <h3 class="text-[32px] leading-[calc(2.5/2.25)] font-bold text-black md:text-[40px] lg:text-[48px]">Wakad, Pune</h3>
          </div>
          <div class="flex items-center gap-3">
            <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
            <span class="text-brand-teal text-[18px] md:text-[20px] font-medium">MAIN CAMPUS TODAY</span>
          </div>
          <p class="text-lg text-black">
            Expanded to Wakad, becoming a thriving campus with smart classrooms, sports ground, robotics lab, and
            600+ students guided by the same founding philosophy.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class JourneySection {
  protected readonly assets = figmaAssets;
}
