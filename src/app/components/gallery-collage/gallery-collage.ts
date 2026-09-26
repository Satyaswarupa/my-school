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
}

const CIRCLE_WIDTH_PCT = 20;
const CIRCLE_HEIGHT_PCT = 27.4;

@Component({
  selector: 'app-gallery-collage',
  imports: [],
  template: `
    <section class="w-full">
      <div class="relative flex h-[140px] w-full md:h-[200px]">
        @for (photo of stripPhotos; track photo) {
          <img [src]="photo" alt="Life at My School" class="h-full flex-1 object-cover" />
        }
        <div class="pointer-events-none absolute inset-0 bg-[rgba(12,26,29,0.3)]"></div>
      </div>

      <!-- Mobile: normal-flow layout — the absolute ring below only has room to work at md+ -->
      <div class="flex flex-col items-center gap-8 bg-white px-6 py-10 md:hidden">
        <div class="flex flex-col items-center gap-3.5 text-center">
          <p class="text-brand-teal-deep text-lg font-medium">Creative Expression</p>
          <h2 class="text-3xl leading-tight font-bold text-black">
            Where Every Child <span class="text-brand-teal-deep">Creates.</span>
          </h2>
          <p class="max-w-[380px] text-base text-[#5e5e5e]">
            Music, Dance, Drama, Art — every child finds their voice.
          </p>
        </div>

        <div class="grid w-full grid-cols-3 gap-4">
          @for (photo of collagePhotos; track photo.src) {
            <div class="flex flex-col items-center gap-2">
              <div class="aspect-square w-full overflow-hidden rounded-full">
                <img [src]="photo.src" alt="Student life at My School" class="size-full object-cover" />
              </div>
              <span
                class="text-center text-xs font-medium"
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
      <div class="relative hidden aspect-[1440/1050] w-full overflow-hidden bg-white md:block">
        <img [src]="assets.collageBg" alt="" class="absolute inset-0 size-full object-cover opacity-30" />

        @for (photo of collagePhotos; track photo.src) {
          <div
            class="group absolute cursor-default overflow-hidden rounded-full"
            [style.left.%]="photo.leftPct"
            [style.top.%]="photo.topPct"
            [style.width.%]="photo.widthPct"
            [style.height.%]="photo.heightPct"
          >
            <img [src]="photo.src" alt="Student life at My School" class="size-full object-cover" />
            <div
              class="absolute inset-0 flex items-center justify-center p-4 text-center opacity-0 backdrop-blur-[2px] transition-opacity duration-300 ease-out group-hover:opacity-100"
              [class.bg-brand-orange/40]="photo.accent === 'orange'"
              [class.bg-brand-teal/40]="photo.accent === 'teal'"
            >
              <span class="text-base font-semibold text-black drop-shadow-sm sm:text-lg">{{ photo.label }}</span>
            </div>
          </div>
        }

        <div class="absolute top-[40%] left-1/2 z-10 flex w-[90%] max-w-[450px] -translate-x-1/2 flex-col items-center gap-2.5 text-center md:w-[31%]">
          <div class="flex flex-col items-center gap-3.5">
            <p class="text-brand-teal-deep text-lg font-medium">Creative Expression</p>
            <h2 class="text-3xl leading-tight font-bold text-black md:text-[48px]">
              Where Every Child<br />
              <span class="text-brand-teal-deep">Creates.</span>
            </h2>
          </div>
          <p class="max-w-[429px] text-base text-[#5e5e5e]">
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
    figmaAssets.photo37,
    figmaAssets.photo38,
    figmaAssets.photo39,
    figmaAssets.photo40,
    figmaAssets.photo41,
  ];

  // Top/bottom stay close in; the left/right pairs are pulled further out to widen the ring into an oval
  protected readonly collagePhotos: CollagePhoto[] = [
    { src: figmaAssets.collage31, label: 'Music', accent: 'teal', leftPct: 40, topPct: 4.11, widthPct: CIRCLE_WIDTH_PCT, heightPct: CIRCLE_HEIGHT_PCT },
    { src: figmaAssets.collage32, label: 'Arts & Crafts', accent: 'orange', leftPct: 69.44, topPct: 20.2, widthPct: CIRCLE_WIDTH_PCT, heightPct: CIRCLE_HEIGHT_PCT },
    { src: figmaAssets.collage33, label: 'Dance', accent: 'teal', leftPct: 69.44, topPct: 52.4, widthPct: CIRCLE_WIDTH_PCT, heightPct: CIRCLE_HEIGHT_PCT },
    { src: figmaAssets.collage34, label: 'Science & Innovation', accent: 'orange', leftPct: 40, topPct: 68.49, widthPct: CIRCLE_WIDTH_PCT, heightPct: CIRCLE_HEIGHT_PCT },
    { src: figmaAssets.collage35, label: 'Drama', accent: 'teal', leftPct: 10.56, topPct: 52.4, widthPct: CIRCLE_WIDTH_PCT, heightPct: CIRCLE_HEIGHT_PCT },
    { src: figmaAssets.collage36, label: 'Public Speaking', accent: 'orange', leftPct: 10.56, topPct: 20.2, widthPct: CIRCLE_WIDTH_PCT, heightPct: CIRCLE_HEIGHT_PCT },
  ];
}
