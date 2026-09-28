import { Component, computed, signal } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

@Component({
  selector: 'app-founder-section',
  imports: [],
  styles: `
    .poem-scroll {
      scrollbar-width: thin;
      scrollbar-color: var(--color-brand-teal) transparent;
    }
    .poem-scroll::-webkit-scrollbar {
      width: 4px;
    }
    .poem-scroll::-webkit-scrollbar-track {
      background: transparent;
    }
    .poem-scroll::-webkit-scrollbar-thumb {
      background-color: var(--color-brand-teal);
      border-radius: 999px;
    }
  `,
  template: `
    <section class="relative mx-auto flex w-full max-w-[1440px] flex-col items-start gap-10 overflow-hidden px-6 py-10 md:px-12 lg:px-[100px] md:py-16 md:min-h-[779px]">
      <div class="relative flex w-full flex-col items-start gap-8 lg:flex-row lg:gap-10">
        <div class="flex w-full max-w-[740px] shrink-0 flex-col items-start gap-3.5 lg:w-[58%]">
          <div class="flex items-center gap-3">
            <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
            <span class="text-brand-teal text-[16px] md:text-[18px] font-medium">Meet the Visionary</span>
          </div>
          <h2 class="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-black">
            About Our <span class="text-brand-orange">Founder</span>
          </h2>
        </div>

        <div class="flex w-full flex-col items-start gap-6">
          <img [src]="assets.quote" alt="" class="h-9 w-11" />
          <p class="text-brand-teal text-[18px] md:text-[20px] font-semibold">
            My School is more than a workplace—it's a family dedicated to shaping confident, responsible, and
            future-ready citizens who make a positive impact on the world.
          </p>
        </div>
      </div>

      <div class="relative flex w-full flex-col items-start gap-8 lg:flex-row lg:gap-10">
        <div class="flex w-full max-w-[740px] shrink-0 flex-col items-start gap-4 lg:-mt-16 lg:w-[58%]">
          <img
            [src]="assets.founderPhoto"
            alt="Dr. Mona Chadda, Founder of My School"
            class="h-auto w-full rounded-lg object-fill lg:h-[400px] xl:h-[500px]"
          />
          <div class="flex w-full flex-col items-center">
            <p class="w-fit border-b-2 border-black pb-1 text-[18px] md:text-[22px] font-bold text-black">Dr. Mona Chadda,</p>
            <p class="text-base text-black">Founder, My School</p>
          </div>
        </div>

        <div class="flex w-full flex-col items-start gap-6">
          <p class="w-fit border-b-2 border-black pb-1 text-[18px] md:text-[20px] font-bold text-black">"Heart of a Teacher"</p>

          <div
            class="flex w-full flex-col gap-2 text-[18px] md:text-[20px] leading-snug font-normal whitespace-pre-line text-[#2a2a2a]"
            [class.poem-scroll]="expanded()"
            [class.max-h-[400px]]="expanded()"
            [class.overflow-y-auto]="expanded()"
            [class.pr-3]="expanded()"
          >
            @for (stanza of visibleStanzas(); track $index; let last = $last) {
              <p>
                {{ stanza }}
                @if (last && !expanded()) {
                  <button
                    type="button"
                    class="ml-1 inline-flex cursor-pointer items-center gap-1 font-medium text-black"
                    (click)="toggleExpanded()"
                  >
                    Read More →
                  </button>
                }
              </p>
            }
          </div>
          @if (expanded()) {
            <button
              type="button"
              class="inline-flex w-fit cursor-pointer items-center gap-1 font-medium text-black"
              (click)="toggleExpanded()"
            >
              Read Less ←
            </button>
          }
        </div>
      </div>
    </section>
  `,
})
export class FounderSection {
  protected readonly assets = figmaAssets;

  protected readonly expanded = signal(false);

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
    [
      'First she creates a class room',
      'Where the child can feel safe in the school',
      'Where he never feels threatened or afraid to try',
      'And kindness is always the rule',
    ].join('\n'),
    [
      'She knows that the child can achieve much more ………',
      'Once he feel secured inside,',
      'When he is valued and loved and beliefs in himself and he has ',
      'A SENSE OF PRIDE',
    ].join('\n'),
    [
      'She models and creates a teaches a good character  and respect one another ,',
      'How to focus on strength……..next weakness……',
      'and to encourage each other …..',
      'She gives the child the freedom he needs……to make choice of its own ',
      'so he learns to become more responsible ……..and is able to stand alone',
      'He is taught to be strong and thin for himself As his soul and print heal ',
      'and the puzzle that ‘s taking shape inside has a much more positive feel .',
    ].join('\n'),
    [
      'The child discover they joy that comes from learning something new…. ',
      'And his vision grows as he begins to see all the things that he can do .',
      'A picture is formed  more pieces fit an image and the child within….',
      'With greater strength confidence and a believe that he can win!!!',
      'All because a hero was there in the “heart of a teacher “',
      'Who cared enabling the child to become much more then he ever imagined or dared',
    ].join('\n'),
    [
      'A teacher with a heart for he children knows',
      'What teaching is all about ……She may have not answered all…… ',
      'but on this …… she has no doubt …..',
      'When asked which subject she loved to teach ,',
      'She answered with a smile',
      '“its not the subject that matters …….',
      'Its all about teaching the CHILD”',
    ].join('\n'),
  ];

  protected readonly previewStanzas = this.poemStanzas.slice(0, 3);

  protected readonly visibleStanzas = computed(() => (this.expanded() ? this.poemStanzas : this.previewStanzas));

  protected toggleExpanded(): void {
    this.expanded.update((value) => !value);
  }
}
