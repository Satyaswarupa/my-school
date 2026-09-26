import { Component, signal } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-section',
  imports: [],
  template: `
    <section class="relative flex w-full flex-col items-start overflow-hidden bg-[#0c1a1d] px-6 py-10 md:px-[100px] md:py-14">
      <p class="pointer-events-none absolute top-[70%] right-6 -translate-y-1/2 text-[172px] leading-none font-bold whitespace-nowrap text-white/5 select-none md:right-[100px]">
        FAQ
      </p>
      <div class="relative flex w-full flex-col items-start gap-3.5 md:max-w-[254px]">
        <div class="flex items-center gap-3.5">
          <img [src]="assets.lineShortAlt3" alt="" class="h-px w-[46px]" />
          <span class="text-[22px] font-medium whitespace-nowrap text-white">Questions & Answers</span>
        </div>
        <h2 class="text-[48px] leading-tight font-bold text-white">
          Got a<br />
          <span class="text-brand-orange">Question?</span>
        </h2>
      </div>
    </section>

    <section class="flex w-full flex-col items-start gap-5 bg-white px-6 pt-5 pb-10 md:px-[100px] md:pb-16">
      <div class="flex w-full flex-col items-start gap-5">
        @for (faq of faqs; track faq.question; let i = $index) {
          <div class="flex w-full flex-col gap-2.5">
            <button
              type="button"
              class="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
              [attr.aria-expanded]="openIndex() === i"
              (click)="toggle(i)"
            >
              <span class="text-[20px] font-semibold text-black">{{ faq.question }}</span>
              <img
                [src]="assets.chevronDown"
                alt=""
                class="size-12 shrink-0 transition-transform"
                [class.rotate-180]="openIndex() !== i"
              />
            </button>
            <div class="grid w-full transition-[grid-template-rows] duration-300 ease-out" [style.grid-template-rows]="openIndex() === i ? '1fr' : '0fr'">
              <div class="overflow-hidden">
                <p class="pb-4 text-base text-[#5e5e5e] md:text-lg">{{ faq.answer }}</p>
              </div>
            </div>
            <img [src]="assets.dividerThin" alt="" class="h-px w-full" />
          </div>
        }
      </div>
    </section>
  `,
})
export class FaqSection {
  protected readonly assets = figmaAssets;

  protected readonly faqs: FaqItem[] = [
    {
      question: 'What board does My School follow?',
      answer:
        'We are CBSE-affiliated. Our curriculum integrates conceptual, activity-based, and experiential learning within the CBSE framework to create well-rounded, future-ready learners.',
    },
    {
      question: 'What makes My School different from other CBSE schools?',
      answer:
        "Beyond academics, we offer German language, robotics, financial literacy, public speaking, and our SEWA community service programme — signature initiatives you won't find in a typical CBSE school.",
    },
    {
      question: 'What is the SEWA programme?',
      answer:
        "SEWA stands for Social Empowerment through Work, Education & Action. It's our community service initiative that builds leadership and civic responsibility through real-world social projects.",
    },
    {
      question: 'What sports does the school offer?',
      answer:
        'Students have access to a dedicated sports ground and structured coaching across a range of athletics and team sports, building fitness, teamwork, and discipline alongside academics.',
    },
    {
      question: 'What is the minimum age for admission?',
      answer:
        'Children can join our Nursery programme from age 3+. We also admit students directly into LKG, UKG, and Grade 1 onward based on age-appropriate criteria.',
    },
    {
      question: 'How does the school communicate with parents?',
      answer:
        'We share regular updates through parent-teacher meetings, a dedicated communication app, and our monthly newsletter covering academics, events, and school announcements.',
    },
    {
      question: 'Are scholarships available?',
      answer:
        'Yes, merit-based and need-based scholarships are available for eligible students. Please contact our admissions office for eligibility criteria and application details.',
    },
    {
      question: 'Where is My School located?',
      answer:
        'Our main campus is in Wakad, Pune, with our original campus in Pimpri. Visit our Branches page for complete addresses and directions to both locations.',
    },
  ];

  protected readonly openIndex = signal<number | null>(0);

  protected toggle(index: number): void {
    this.openIndex.set(this.openIndex() === index ? null : index);
  }
}
