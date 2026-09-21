import { Component, signal } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

interface TitleSegment {
  text: string;
  accent?: 'orange';
}

interface Reason {
  number: string;
  segments: TitleSegment[];
  description: string;
}

@Component({
  selector: 'app-reasons-section',
  imports: [],
  template: `
    <section class="bg-brand-teal flex w-full flex-col items-start gap-10 px-6 py-10 md:px-[100px] md:py-16">
      <div class="flex flex-col gap-3.5">
        <div class="flex items-center gap-3.5">
          <img [src]="assets.lineShortAlt2" alt="" class="h-px w-[46px]" />
          <span class="text-[18px] font-medium text-white">Why Choose Us</span>
        </div>
        <h2 class="text-[48px] font-bold text-white">
          5 Reasons Parents<br />
          <span class="text-brand-orange">Never Look Back</span>
        </h2>
      </div>

      <div class="flex w-full flex-col items-start gap-5">
        @for (reason of reasons; track reason.number; let i = $index) {
          <div
            class="group relative flex w-full cursor-pointer flex-col items-start border-t border-b border-[rgba(255,255,255,0.2)] px-5 py-5"
            role="button"
            tabindex="0"
            [attr.aria-expanded]="expandedIndex() === i"
            (click)="toggle(i)"
            (keydown.enter)="toggle(i)"
            (keydown.space)="toggle(i); $event.preventDefault()"
          >
            <div
              [class]="
                'pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-opacity duration-300 ease-out group-hover:opacity-100 ' +
                (expandedIndex() === i ? 'opacity-100' : 'opacity-0')
              "
            ></div>

            <div class="relative flex w-full items-center justify-between">
              <div class="flex items-start gap-5 font-bold text-white md:gap-20">
                <p class="text-[24px]">{{ reason.number }}</p>
                <p class="text-[30px]">
                  @for (segment of reason.segments; track segment.text) {
                    <span [class.text-brand-orange]="segment.accent === 'orange'">{{ segment.text }}</span>
                  }
                </p>
              </div>
              <img
                [src]="assets.navigateCircle"
                alt=""
                class="size-[30px] shrink-0 transition-transform duration-300"
                [class.rotate-90]="expandedIndex() === i"
              />
            </div>
            <div
              [class]="
                'relative grid w-full transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] ' +
                (expandedIndex() === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')
              "
            >
              <div class="overflow-hidden">
                <p
                  [class]="
                    'pt-5 text-[14px] text-white transition-opacity duration-300 ease-out group-hover:opacity-100 ' +
                    (expandedIndex() === i ? 'opacity-100' : 'opacity-0')
                  "
                >
                  {{ reason.description }}
                </p>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
})
export class ReasonsSection {
  protected readonly assets = figmaAssets;

  protected readonly expandedIndex = signal<number | null>(null);

  protected toggle(index: number): void {
    this.expandedIndex.set(this.expandedIndex() === index ? null : index);
  }

  protected readonly reasons: Reason[] = [
    {
      number: '01',
      segments: [{ text: 'Holistic ' }, { text: '360° Development', accent: 'orange' }],
      description:
        'Academics, sports, creativity, communication, emotional intelligence, and character — the whole child, not just the exam-taker.',
    },
    {
      number: '02',
      segments: [{ text: 'Conceptual ' }, { text: '& Mindful Teaching' }],
      description:
        'Concepts over rote memorisation — mindful methods that help children understand ideas deeply and retain them for life.',
    },
    {
      number: '03',
      segments: [{ text: 'Individual' }, { text: ' Attention', accent: 'orange' }],
      description:
        'Small class sizes and personalised guidance ensure every child is seen, heard, and supported on their own learning journey.',
    },
    {
      number: '04',
      segments: [{ text: 'Future-Ready ' }, { text: 'Skills' }],
      description:
        "Robotics, coding, financial literacy, and German language — practical skills that prepare children for tomorrow's world.",
    },
    {
      number: '05',
      segments: [{ text: 'Social ' }, { text: 'Responsibility', accent: 'orange' }],
      description:
        'Through the SEWA programme, students learn empathy and civic duty by giving back to the community they grow up in.',
    },
  ];
}
