import { Component } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

interface BranchCard {
  theme: 'light' | 'orange';
  bgColor: string;
  tag: string;
  titleLine1: string;
  titleLine2: string;
  address: string;
  phone: string;
  amenities: string;
  locationIcon: string;
  callIcon: string;
  lineIcon: string;
  primaryBtnClass: string;
  secondaryBtnClass: string;
}

@Component({
  selector: 'app-branch-cards-section',
  imports: [],
  template: `
    <section class="flex w-full flex-col md:flex-row">
      @for (card of cards; track card.titleLine2) {
        <div
          class="flex w-full flex-col items-start gap-10 px-6 py-10 md:w-1/2 md:px-[75px] md:py-10 md:pl-[100px]"
          [style.backgroundColor]="card.bgColor"
        >
          <div class="flex w-full max-w-[555px] flex-col items-start gap-5">
            <div class="flex flex-col items-start gap-[60px]">
              <div class="flex items-center gap-3">
                <img [src]="card.lineIcon" alt="" class="h-px w-[46px]" />
                <span class="text-base font-medium" [class.text-black]="card.theme === 'light'" [class.text-white]="card.theme === 'orange'">
                  {{ card.tag }}
                </span>
              </div>
              <p class="text-3xl leading-tight font-bold sm:min-h-[110px] sm:text-[40px]" [class.text-black]="card.theme === 'light'" [class.text-white]="card.theme === 'orange'">
                <span class="sm:text-[44px]">{{ card.titleLine1 }}</span> {{ card.titleLine2 }}
              </p>
            </div>

            <div class="flex flex-col items-start gap-5">
              <div class="flex items-start gap-3">
                <img [src]="card.locationIcon" alt="" class="size-6 shrink-0" />
                <p class="text-lg sm:min-h-[56px]" [class.text-black]="card.theme === 'light'" [class.text-white]="card.theme === 'orange'">
                  {{ card.address }}
                </p>
              </div>
              <div class="flex items-center gap-3">
                <img [src]="card.callIcon" alt="" class="size-6" />
                <p class="text-lg" [class.text-black]="card.theme === 'light'" [class.text-white]="card.theme === 'orange'">
                  {{ card.phone }}
                </p>
              </div>
            </div>

            <p class="text-base" [class.text-[#323232]]="card.theme === 'light'" [class.text-[#dcdcdc]]="card.theme === 'orange'">
              {{ card.amenities }}
            </p>
          </div>

          <div class="flex items-center gap-6">
            <a href="#" class="rounded px-10 py-5 text-lg font-semibold" [class]="card.primaryBtnClass">Get Directions</a>
            <a href="#" class="rounded px-10 py-5 text-lg font-semibold" [class]="card.secondaryBtnClass">Book Visit</a>
          </div>
        </div>
      }
    </section>
  `,
})
export class BranchCardsSection {
  protected readonly cards: BranchCard[] = [
    {
      theme: 'light',
      bgColor: 'rgba(220,220,220,0.9)',
      tag: 'Main Campus · Est. 2022',
      titleLine1: 'MY SCHOOL,',
      titleLine2: 'Wakad Campus',
      address:
        'Sr.no. 85/6A, My School, near Decathlon Wakad, Tathawade, Pune, Pimpri-Chinchwad, Maharashtra 411033',
      phone: '+91-9876543210',
      amenities: '· Smart Classrooms   · Library   · CCTV  · Digital Boards  · RO Water',
      locationIcon: figmaAssets.mdiLocation,
      callIcon: figmaAssets.callIconTeal,
      lineIcon: figmaAssets.lineShortAlt,
      primaryBtnClass: 'bg-brand-orange text-white',
      secondaryBtnClass: 'border border-black text-black',
    },
    {
      theme: 'orange',
      bgColor: 'rgba(243,104,19,0.98)',
      tag: 'Orignal Campus · Est. 2012',
      titleLine1: 'First School,',
      titleLine2: 'Pimpri Campus',
      address: 'School Road, Pimpri Station, Pimpri, Pune 411018',
      phone: '+91-9876543210',
      amenities: '· Smart Classrooms  · Library   · CCTV   · Digital Boards  · RO Water',
      locationIcon: figmaAssets.mdiLocationWhite,
      callIcon: figmaAssets.callIconWhite,
      lineIcon: figmaAssets.lineShortAlt2,
      primaryBtnClass: 'bg-brand-teal text-white',
      secondaryBtnClass: 'border border-white text-white',
    },
  ];
}
