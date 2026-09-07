import { Component } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

@Component({
  selector: 'app-founder-section',
  imports: [],
  template: `
    <section class="relative flex w-full flex-col items-start gap-10 overflow-hidden px-6 py-10 md:px-[100px] md:py-16">
      <img [src]="assets.founderBg" alt="" class="pointer-events-none absolute inset-0 size-full object-cover opacity-20" />

      <div class="relative flex w-full flex-col items-start gap-8 lg:flex-row lg:gap-10">
        <div class="flex w-full max-w-[480px] flex-col items-start gap-3.5">
          <div class="flex items-center gap-3">
            <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
            <span class="text-brand-teal text-lg font-medium">Meet the Visionary</span>
          </div>
          <h2 class="text-4xl font-bold text-black md:text-[48px]">
            About Our <span class="text-brand-orange">Founder</span>
          </h2>
        </div>

        <div class="flex w-full flex-col items-start gap-6">
          <img [src]="assets.quote" alt="" class="h-9 w-11" />
          <p class="text-brand-teal text-xl font-semibold">
            My School is more than a workplace—it's a family dedicated to shaping confident, responsible, and
            future-ready citizens who make a positive impact on the world.
          </p>
        </div>
      </div>

      <div class="relative flex w-full flex-col items-start gap-8 lg:flex-row lg:gap-10">
        <div class="flex w-full max-w-[580px] flex-col items-start gap-4">
          <img
            [src]="assets.founderPhoto"
            alt="Dr. Mona Chadda, Founder of My School"
            class="h-auto w-full"
          />
          <div class="flex flex-col items-start">
            <p class="w-fit border-b-2 border-black pb-1 text-[22px] font-bold text-black">Dr. Mona Chadda,</p>
            <p class="text-base text-black">Founder, My School</p>
          </div>
        </div>

        <div class="flex w-full flex-col items-start gap-6">
          <p class="w-fit border-b-2 border-black pb-1 text-xl font-bold text-black">"Heart of a Teacher"</p>

          <div class="flex w-full flex-col items-start gap-2 text-lg font-semibold whitespace-pre-line text-[#2a2a2a]">
            @for (stanza of poemStanzas; track $index) {
              <p>{{ stanza }}</p>
            }
            <p>
              {{ lastStanza }}
              <span class="ml-1 inline-flex items-center gap-1 font-medium text-black">Read More →</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class FounderSection {
  protected readonly assets = figmaAssets;

  protected readonly poemStanzas: string[] = [
    [
      'A child arrives like……..a mystery box…..',
      'With puzzle pieces inside .',
      'Some of the pieces are broken and missing',
      'And others just seem to hide',
    ].join('\n'),
    [
      'But heart of a the teacher can sort them out',
      'And help the child to see',
      'The potential for goodness he has within',
      'A picture of what he can be',
    ].join('\n'),
    [
      'Her goal is not just to teach knowledge',
      'By filling the box with more parts its putting the pieces together, ',
      'to create the work of art',
      'The process is painfully slow at times some need more help ',
      'than the other  ,each day for a child is work in progress.',
      'with assorted shapes and colour',
    ].join('\n'),
  ];

  protected readonly lastStanza = 'First she creates a class room.....';
}
