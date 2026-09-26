import { Component } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

interface Differentiator {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-differentiators-section',
  imports: [],
  template: `
    <section class="bg-brand-mist flex w-full flex-col items-start gap-10 px-6 py-10 md:px-[100px] md:py-16">
      <div class="flex w-full max-w-[585px] flex-col items-start gap-3">
        <div class="flex flex-col gap-3.5">
          <div class="flex w-full items-center gap-3.5">
            <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
            <span class="text-brand-teal-deep text-[22px] font-medium">Beyond The Curriculum</span>
          </div>
          <div class="flex w-full flex-col items-start">
            <h2 class="text-[48px] font-bold text-black">
              What Makes Us <span class="text-brand-teal">Different</span>
            </h2>
            <img [src]="assets.underlineSquiggle" alt="" class="h-[7px] w-[206px]" />
          </div>
        </div>
        <p class="w-full text-left text-[18px] text-[#5e5e5e]">Six signature programmes you won't find in any typical school.</p>
      </div>

      <div class="flex w-full flex-col items-end gap-5">
        @for (item of items; track item.number) {
          <div class="flex w-full flex-col gap-3">
            <img [src]="assets.divider" alt="" class="h-px w-full" />
            <div class="flex w-full flex-col items-start gap-3 md:flex-row md:items-center md:gap-[85px]">
              <p class="text-brand-orange w-10 shrink-0 text-[14px] font-bold">{{ item.number }}</p>
              <p class="w-full shrink-0 text-[20px] font-bold text-black md:w-[226px]">{{ item.title }}</p>
              <p class="text-[18px] text-[#3d3d3d]">{{ item.description }}</p>
            </div>
          </div>
        }
      </div>
    </section>
  `,
})
export class DifferentiatorsSection {
  protected readonly assets = figmaAssets;

  protected readonly items: Differentiator[] = [
    {
      number: '01',
      title: 'German Language',
      description:
        'Global communication skills from early grades — a rare edge in competitive exams & global opportunities.',
    },
    {
      number: '02',
      title: 'Robotics & Technology',
      description: "Hands-on Machine Learning, Robotics, and digital tools to build tomorrow's innovators today.",
    },
    {
      number: '03',
      title: 'Financial Literacy',
      description: 'Real-world money management from Grade 1 — budgeting, saving, and the value of giving.',
    },
    {
      number: '04',
      title: 'Public Speaking',
      description:
        'Structured debate, speech & presentation to build unshakeable confidence and communication mastery.',
    },
    {
      number: '05',
      title: 'SEWA Programme',
      description:
        'Social Empowerment through Work, Education & Action — community leadership and civic responsibility.',
    },
    {
      number: '06',
      title: 'LOREM IPSUM',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      number: '07',
      title: 'Library Programme',
      description: 'A curated reading culture where children explore, imagine, and fall in love with learning.',
    },
  ];
}
