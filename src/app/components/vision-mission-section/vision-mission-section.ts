import { Component } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

interface Pillar {
  letter: string;
  label: string;
  labelColor: 'orange' | 'teal';
  description: string;
}

@Component({
  selector: 'app-vision-mission-section',
  imports: [],
  template: `
    <section class="relative flex w-full flex-col items-start overflow-hidden px-6 py-10 md:px-[100px] md:py-16">
      <img [src]="assets.visionPattern" alt="" class="pointer-events-none absolute inset-0 size-full object-cover opacity-[0.07]" />

      <div class="relative flex w-full flex-col items-start gap-10">
        <div class="flex max-w-[555px] flex-col items-start gap-3.5">
          <div class="flex items-center gap-3">
            <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
            <span class="text-brand-teal text-[22px] font-medium">What Drives us</span>
          </div>
          <h2 class="flex flex-wrap gap-x-5 text-[48px] font-bold text-black">
            <span class="text-brand-teal">Vision.</span>
            <span><span class="text-brand-orange">Mission</span>.</span>
            <span class="text-brand-teal">Values.</span>
          </h2>
        </div>

        <div class="flex w-full flex-col items-start gap-8">
          @for (pillar of pillars; track pillar.label) {
            <div class="flex w-full items-start gap-8 md:items-center md:gap-14">
              <p
                class="w-28 shrink-0 text-[130px] leading-none font-bold"
                [class.text-brand-teal]="pillar.labelColor === 'teal'"
                [class.text-brand-orange]="pillar.labelColor === 'orange'"
              >
                {{ pillar.letter }}
              </p>
              <div class="flex flex-col items-start gap-3">
                <p
                  class="text-[22px] font-semibold"
                  [class.text-brand-teal]="pillar.labelColor === 'teal'"
                  [class.text-brand-orange]="pillar.labelColor === 'orange'"
                >
                  {{ pillar.label }}
                </p>
                <p class="text-[18px] font-bold text-black">{{ pillar.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class VisionMissionSection {
  protected readonly assets = figmaAssets;

  protected readonly pillars: Pillar[] = [
    {
      letter: 'V',
      label: 'VISION',
      labelColor: 'teal',
      description:
        'To be a learning community that nurtures the whole child — academically, emotionally, socially, and physically — preparing them for a meaningful and impactful life.',
    },
    {
      letter: 'M',
      label: 'MISSION',
      labelColor: 'orange',
      description:
        'To deliver a conceptual, learner-centric education that bridges traditional values with modern skills, producing responsible citizens and future-ready individuals.',
    },
    {
      letter: 'V',
      label: 'VALUES',
      labelColor: 'teal',
      description:
        'Respect · Responsibility · Empathy · Curiosity · Integrity · Excellence · Compassion · Social Awareness — the invisible curriculum behind everything we do.',
    },
  ];
}
