import { Component } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

interface CollagePhoto {
  src: string;
  label: string;
  accent: 'orange' | 'teal';
  leftPct: number;
  topPct: number;
  widthPct: number;
  heightPct: number;
  /** CSS object-position for photos whose subject isn't centred */
  focus?: string;
}

const CIRCLE_WIDTH_PCT = 20;
// The ring container is 1440x1050, so a circle's height % must be scaled by
// that aspect ratio to stay round.
const circleHeightPct = (widthPct: number) => (widthPct * 1440) / 1050;

@Component({
  selector: 'app-gallery-collage',
  imports: [],
  template: `
    <section class="w-full">
      <div class="relative flex h-[140px] w-full md:h-[200px]">
        @for (photo of stripPhotos; track photo) {
          <img [src]="photo" alt="Life at My School" class="h-full min-w-0 flex-1 object-cover max-sm:nth-[n+4]:hidden" />
        }
        <div class="pointer-events-none absolute inset-0 bg-[rgba(12,26,29,0.3)]"></div>
      </div>

      <!-- Mobile: normal-flow layout — the absolute ring below only has room to work at md+ -->
      <div class="flex flex-col items-center gap-8 bg-white px-6 py-10 md:px-12 md:py-14 xl:hidden">
        <div class="flex flex-col items-center gap-3.5 text-center">
          <p class="text-brand-teal-deep text-lg font-medium">Creative Expression</p>
          <h2 class="text-3xl leading-tight font-bold text-black md:text-[40px]">
            Where Every Child <span class="text-brand-teal-deep">Creates.</span>
          </h2>
          <p class="max-w-[380px] text-base text-[#5e5e5e]">
            Music, Dance, Drama, Art — every child finds their voice.
          </p>
        </div>

        <!-- a lone last circle (7th of 3 columns) goes in the middle column -->
        <div class="grid w-full max-w-[720px] grid-cols-3 gap-4 md:gap-8 [&>*:last-child:nth-child(3n+1)]:col-start-2">
          @for (photo of collagePhotos; track photo.src) {
            <div class="flex flex-col items-center gap-2">
              <div class="aspect-square w-full overflow-hidden rounded-full">
                <img [src]="photo.src" alt="Student life at My School" class="size-full object-cover" [style.object-position]="photo.focus" />
              </div>
              <span
                class="text-center text-xs font-medium md:text-sm"
                [class.text-brand-orange]="photo.accent === 'orange'"
                [class.text-brand-teal]="photo.accent === 'teal'"
              >
                {{ photo.label }}
              </span>
            </div>
          }
        </div>
      </div>

      <!-- Tablet/desktop: the original circular ring around the centered text -->
      <div class="relative hidden aspect-[1440/1050] w-full overflow-hidden bg-white xl:block">
        <img [src]="assets.collageBg" alt="" class="absolute inset-0 size-full object-cover opacity-30" />

        @for (photo of collagePhotos; track photo.src) {
          <div
            class="group absolute cursor-default overflow-hidden rounded-full"
            [style.left.%]="photo.leftPct"
            [style.top.%]="photo.topPct"
            [style.width.%]="photo.widthPct"
            [style.height.%]="photo.heightPct"
          >
            <img [src]="photo.src" alt="Student life at My School" class="size-full object-cover" [style.object-position]="photo.focus" />
            <div
              class="absolute inset-0 flex items-center justify-center p-4 text-center opacity-0 backdrop-blur-[2px] transition-opacity duration-300 ease-out group-hover:opacity-100"
              [class.bg-brand-orange/75]="photo.accent === 'orange'"
              [class.bg-brand-teal/75]="photo.accent === 'teal'"
            >
              <span class="text-[22px] font-bold text-white drop-shadow-md lg:text-[28px]">{{ photo.label }}</span>
            </div>
          </div>
        }

        <div class="absolute top-[45.9%] left-[48.19%] z-10 flex w-[26%] max-w-[380px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2.5 text-center">
          <div class="flex flex-col items-center gap-3.5">
            <p class="text-brand-teal-deep text-lg font-medium">Creative Expression</p>
            <h2 class="text-[40px] leading-tight font-bold text-black">
              Where Every Child<br />
              <span class="text-brand-teal-deep">Creates.</span>
            </h2>
          </div>
          <p class="max-w-[340px] text-base text-[#5e5e5e]">
            Music, Dance, Drama, Art — every child finds their voice.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class GalleryCollage {
  protected readonly assets = figmaAssets;

  protected readonly stripPhotos = [
    'https://myschoolpune.org/wp-content/uploads/2025/06/DSC09492.webp',
    'https://res.cloudinary.com/dxlcnrwrq/image/upload/v1791224310/PRK09337.jpg',
    'https://res.cloudinary.com/dxlcnrwrq/image/upload/v1791224204/MS_image_1.webp',
    'https://res.cloudinary.com/dxlcnrwrq/image/upload/v1791224311/PRK00388.jpg',
    'https://res.cloudinary.com/dxlcnrwrq/image/upload/v1791224204/MS_image_03.webp',
  ];

  // Clustered layout (after the reference design); listed clockwise from the top
  protected readonly collagePhotos: CollagePhoto[] = [
    { src: figmaAssets.collage31, label: 'Music', accent: 'teal', leftPct: 43.5, topPct: 9.36, widthPct: 16, heightPct: circleHeightPct(16) },
    { src: figmaAssets.collage32, label: 'Arts & Crafts', accent: 'orange', leftPct: 64.5, topPct: 19.46, widthPct: 16, heightPct: circleHeightPct(16) },
    { src: 'https://res.cloudinary.com/dxlcnrwrq/image/upload/v1791224203/MS_image_02.webp', label: 'Dance', accent: 'teal', leftPct: 60.9, topPct: 43.1, widthPct: 20, heightPct: circleHeightPct(20) },
    { src: 'https://res.cloudinary.com/dxlcnrwrq/image/upload/v1791224310/PRK09337.jpg', label: 'Sports', accent: 'teal', leftPct: 53.53, topPct: 68.79, widthPct: 16, heightPct: circleHeightPct(16) },
    { src: figmaAssets.collage34, label: 'Science & Innovation', accent: 'orange', leftPct: 33.61, topPct: 56.62, widthPct: CIRCLE_WIDTH_PCT, heightPct: circleHeightPct(CIRCLE_WIDTH_PCT) },
    { src: 'https://myschoolpune.org/wp-content/uploads/2025/06/DSC09773.webp', label: 'Drama', accent: 'teal', leftPct: 17, topPct: 42.98, widthPct: 16, heightPct: circleHeightPct(16) },
    { src: figmaAssets.collage36, label: 'Public Speaking', accent: 'orange', leftPct: 18.25, topPct: 13.29, widthPct: 20, heightPct: circleHeightPct(20) },
  ];
}
