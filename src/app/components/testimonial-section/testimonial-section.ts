import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarColor: string;
}

const AUTOPLAY_MS = 12000;

@Component({
  selector: 'app-testimonial-section',
  imports: [],
  template: `
    <section
      class="relative flex w-full flex-col items-start gap-6 overflow-hidden bg-[#5e5e5e] px-6 py-8 outline-none md:px-12 lg:px-[100px] md:py-12"
      tabindex="0"
      aria-roledescription="carousel"
      aria-label="Parent testimonials"
      (keydown.arrowleft)="prev()"
      (keydown.arrowright)="next()"
    >
      <img src="assets/creative/school-building-2.jpeg" alt="" class="absolute inset-0 size-full object-fill opacity-20" />
      <div class="absolute inset-0 bg-[rgba(94,94,94,0.52)]"></div>

      <div class="relative flex w-full max-w-[1239px] flex-col items-start gap-4">
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
                class="flex w-full shrink-0 flex-col items-start gap-4"
                role="group"
                aria-roledescription="slide"
                [attr.aria-label]="i + 1 + ' of ' + testimonials.length"
                [attr.aria-hidden]="current() !== i"
              >
                <p class="w-full max-w-[1150px] text-[15px] leading-relaxed font-medium text-white md:text-[17px] lg:text-[18px]">
                  {{ t.quote }}
                </p>

                <div class="flex items-center gap-3">
                  <div
                    class="flex size-[50px] shrink-0 items-center justify-center rounded-full"
                    [style.background-color]="t.avatarColor"
                  >
                    <span class="text-[24px] text-white">P</span>
                  </div>
                  <div class="flex flex-col gap-0.5">
                    <p class="text-[18px] md:text-[22px] text-white">{{ t.name }}</p>
                    @if (t.role) {
                      <p class="text-[16px] text-[#cfcfcf]">{{ t.role }}</p>
                    }
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

  protected readonly testimonials: Testimonial[] = [
    {
      quote: `A school becomes special not because of its building or facilities, but because of the people who make children feel valued. A kind word from a teacher, encouragement during a difficult moment, or simply recognising a child’s efforts can mean so much. These are the things children remember long after they leave school. Thank you to all the educators who make a difference every day. Library is my personal favourite too.

For me too, a school becomes special because of the wonderful people, especially teachers, who make every child feel important, confident and loved. These little gestures create memories that last a lifetime. Truly grateful to all the amazing educators!`,
      name: 'Manoj Gupta',
      role: 'Parent of Jiana Gupta',
      avatarColor: '#61ffff',
    },
    {
      quote: `Marks are important, but good manners, respect, confidence and responsibility are equally important to me. I want my child to grow into a kind and capable person. I appreciate schools that recognise education as something much bigger than exams, and this is what attracted us to My School.`,
      name: 'Parent of Bhoumik Manglani and Hansh Manglani',
      role: '',
      avatarColor: '#f36813',
    },
    {
      quote: `I have known Mona Ma’am since my child attended her little one-room preschool. Seeing My School today is truly amazing! What impresses me most is that Dr Mona Chadda has kept every promise she made back then. Her vision of equality, giving children a voice and encouraging open learning has never changed.

I remember a beautiful thought from her poem Heart of a Teacher - “Subject does not matter, teaching is what teachers need.”

From one classroom to My School today, her vision has only grown stronger. Proud to have been part of this journey!`,
      name: 'Parent of Vanshraj Ladkat',
      role: 'Grade 9',
      avatarColor: '#008080',
    },
    {
      quote: `Teenage years are not always easy, either for children or for parents. At this stage, students need guidance, understanding and encouragement. I appreciate an educational environment where children are motivated to take responsibility for their choices and develop confidence in themselves.`,
      name: 'Sanjay Nathpotani',
      role: 'Parent of Aarav Nathpotani',
      avatarColor: '#8b5cf6',
    },
    {
      quote: `I was honestly surprised to see that Dr Mona Chadda remembers children not just by their names but also by their habits and little personalities! As a parent, that really impressed me. Another thing I appreciate is that the school is literally just a phone call away. Whenever parents need to communicate something, there is a sense of accessibility. It feels good to know that the people running the school actually know the children personally.`,
      name: 'Parent of Khushmeet Singh and Sahebjit Singh',
      role: '',
      avatarColor: '#e11d48',
    },
    {
      quote: `What touched me most during the annual function was seeing Dr Mona Chadda actively involved with the children and teachers. She wasn’t sitting like a chief guest watching the programme. She was right there, sharing the excitement, encouraging the students and being part of their special day. You could see how naturally the children connected with her. For me, that’s what makes My School different. The school leadership is not distant from the children but very much a part of Naman’s growing-up journey. Lots of good wishes.`,
      name: 'Rajeev Verma',
      role: 'Parent of Naman Verma',
      avatarColor: '#f59e0b',
    },
    {
      quote: `One thing I genuinely admire about My School is how approachable Dr Mona Chadda is. She has an open-door policy for students, and it’s lovely to see how comfortable the children are around her. My child talks about Mona Ma’am so naturally, as if she is someone they have known forever. I think it’s rare for children to feel this connected to the person heading their school. It says a lot about the environment she has created. She always says, “My kids are voiced,” and that is proved each day.`,
      name: 'Lehar Devnani',
      role: 'Parent of Nia and Riyan Devnani',
      avatarColor: '#10b981',
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
