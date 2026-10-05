import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarColor: string;
}

const AUTOPLAY_MS = 6000;

@Component({
  selector: 'app-testimonial-section',
  imports: [],
  template: `
    <section
      class="relative flex w-full flex-col items-start gap-12 overflow-hidden bg-[#5e5e5e] px-6 py-14 outline-none md:px-12 lg:px-[100px] md:py-28"
      tabindex="0"
      aria-roledescription="carousel"
      aria-label="Parent testimonials"
      (keydown.arrowleft)="prev()"
      (keydown.arrowright)="next()"
    >
      <img src="https://res.cloudinary.com/dxlcnrwrq/image/upload/v1791224204/MS_Image_05.webp" alt="" class="absolute inset-0 size-full object-cover opacity-20" />
      <div class="absolute inset-0 bg-[rgba(94,94,94,0.52)]"></div>

      <div class="relative flex w-full max-w-[1239px] flex-col items-start gap-6">
        <div class="flex flex-col items-start gap-2">
          <div class="flex items-center gap-3.5">
            <img [src]="assets.lineShortAlt" alt="" class="h-px w-[46px]" />
            <span class="text-[18px] md:text-[22px] font-medium text-white">Voices of Trust</span>
          </div>
          <img [src]="assets.quote" alt="" class="size-10 md:size-12" />
        </div>

        <div class="w-full overflow-hidden" aria-live="polite">
          <div
            class="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
            [style.transform]="'translateX(-' + current() * 100 + '%)'"
          >
            @for (t of testimonials; track t.name; let i = $index) {
              <div
                class="flex w-full shrink-0 flex-col items-start gap-6"
                role="group"
                aria-roledescription="slide"
                [attr.aria-label]="i + 1 + ' of ' + testimonials.length"
                [attr.aria-hidden]="current() !== i"
              >
                <p class="w-full max-w-[1150px] text-[24px] leading-snug font-semibold text-white md:text-[36px] lg:text-[48px]">
                  {{ t.quote }}
                </p>

                <div class="flex items-center gap-3">
                  <div
                    class="flex size-[50px] shrink-0 items-center justify-center rounded-full"
                    [style.background-color]="t.avatarColor"
                  >
                    <span class="text-[24px] text-white">{{ t.name[0] }}</span>
                  </div>
                  <div class="flex flex-col gap-0.5">
                    <p class="text-[18px] md:text-[22px] text-white">{{ t.name }}</p>
                    <p class="text-[16px] text-[#cfcfcf]">{{ t.role }}</p>
                    <div class="flex items-center gap-0.5 pt-0.5">
                      @for (star of stars; track star) {
                        <img [src]="assets.star" alt="" class="size-4" />
                      }
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <div class="relative flex w-full items-center justify-between gap-6">
        <div class="flex items-center gap-2">
          @for (t of testimonials; track t.name; let i = $index) {
            <button
              type="button"
              [attr.aria-label]="'Go to testimonial ' + (i + 1)"
              [attr.aria-current]="current() === i"
              (click)="goTo(i)"
              [class]="
                'h-2 cursor-pointer rounded-full transition-all duration-300 ' +
                (current() === i ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70')
              "
            ></button>
          }
        </div>

        <div class="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            (click)="prev()"
            class="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/40 text-white/80 transition-colors hover:border-white hover:bg-white/10 hover:text-white"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            (click)="next()"
            class="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/40 text-white/80 transition-colors hover:border-white hover:bg-white/10 hover:text-white"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  `,
})
export class TestimonialSection {
  protected readonly assets = figmaAssets;
  protected readonly stars = [1, 2, 3, 4, 5];

  // Demo content — replace with real parent testimonials.
  protected readonly testimonials: Testimonial[] = [
    {
      quote:
        'My daughter has transformed completely. She speaks with confidence, thinks critically, and genuinely loves going to school every day.',
      name: 'Priya Sharma',
      role: 'Parent · Grade 5',
      avatarColor: '#61ffff',
    },
    {
      quote:
        'The teachers know every child by name and by nature. My son’s curiosity is encouraged, not boxed in — that made all the difference.',
      name: 'Rahul Deshmukh',
      role: 'Parent · Grade 3',
      avatarColor: '#f36813',
    },
    {
      quote:
        'German classes, robotics, public speaking — my twins come home excited to share something new every single evening.',
      name: 'Anjali Kulkarni',
      role: 'Parent · Grade 7',
      avatarColor: '#008080',
    },
    {
      quote:
        'We moved from another city and were nervous. Within weeks, the school felt like a second family for our whole household.',
      name: 'Vikram Iyer',
      role: 'Parent · Grade 1',
      avatarColor: '#8b5cf6',
    },
    {
      quote:
        'Safe campus, caring staff, and a real focus on values. I can see the kind of person my daughter is becoming, and I’m proud.',
      name: 'Sneha Patil',
      role: 'Parent · Grade 9',
      avatarColor: '#e11d48',
    },
  ];

  protected readonly current = signal(0);

  private timer?: ReturnType<typeof setInterval>;

  constructor() {
    afterNextRender(() => this.restartAutoplay());
    inject(DestroyRef).onDestroy(() => clearInterval(this.timer));
  }

  protected next(): void {
    this.goTo((this.current() + 1) % this.testimonials.length);
  }

  protected prev(): void {
    this.goTo((this.current() - 1 + this.testimonials.length) % this.testimonials.length);
  }

  protected goTo(i: number): void {
    this.current.set(i);
    // Any change (manual or automatic) restarts the countdown so a manual
    // pick always stays on screen for the full interval.
    this.restartAutoplay();
  }

  private restartAutoplay(): void {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.next(), AUTOPLAY_MS);
  }
}
