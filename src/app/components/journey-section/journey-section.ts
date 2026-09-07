import { Component } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

@Component({
  selector: 'app-journey-section',
  imports: [],
  template: `
    <section class="flex w-full flex-col items-start gap-8 border border-black/10 bg-[#f9f9f9] px-6 py-10 md:px-[100px] md:py-10">
      <div class="flex w-full flex-col items-end gap-12 lg:flex-row lg:gap-[199px]">
        <div class="flex w-full max-w-[530px] flex-col items-start gap-5">
          <div class="flex w-full flex-col items-start gap-3">
            <div class="flex w-full flex-col items-start gap-3.5">
              <div class="flex items-center gap-3">
                <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
                <span class="text-brand-teal text-lg font-medium">Our Journey</span>
              </div>
              <div class="relative aspect-[400/157] w-full overflow-hidden">
                <img
                  [src]="assets.journeyPimpri"
                  alt="Pimpri campus, Est. 2012"
                  class="absolute top-0 left-[-4.96%] h-[193.57%] w-[113.61%] max-w-none"
                />
              </div>
            </div>
            <h3 class="text-4xl font-bold text-black md:text-[48px]">Pimpri, Pune</h3>
          </div>
          <div class="flex items-center gap-3">
            <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
            <span class="text-brand-orange text-base font-medium">ORIGIN CAMPUS</span>
          </div>
          <p class="text-lg text-black">
            Founded with a clear vision — to build a school that goes beyond textbooks and shapes real human beings.
            Started with a handful of classrooms and an ocean of ambition.
          </p>
        </div>

        <div class="flex w-full max-w-[511px] flex-col items-start gap-5">
          <div class="flex w-full flex-col items-start gap-3.5">
            <div class="relative aspect-[400/157] w-full overflow-hidden">
              <img
                [src]="assets.journeyPimpri"
                alt="Wakad campus, Est. 2016"
                class="absolute top-[-97.16%] left-[-4.96%] h-[193.57%] w-[113.61%] max-w-none"
              />
            </div>
            <h3 class="text-4xl font-bold text-black md:text-[48px]">Wakad, Pune</h3>
          </div>
          <div class="flex items-center gap-3">
            <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
            <span class="text-brand-teal text-base font-medium">MAIN CAMPUS TODAY</span>
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
