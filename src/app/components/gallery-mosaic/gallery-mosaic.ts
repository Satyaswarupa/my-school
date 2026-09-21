import { Component, computed, input } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

interface GalleryPhoto {
  src: string;
  alt: string;
  label: string;
  category: string;
}

@Component({
  selector: 'app-gallery-mosaic',
  imports: [],
  template: `
    @if (activeCategory() === 'All') {
      <section class="flex w-full flex-col gap-2.5 overflow-hidden md:aspect-[1440/915] md:flex-row">
        <div class="flex w-full min-h-0 flex-col gap-2.5 md:w-1/2">
          <div class="relative min-h-0 aspect-[812/541] md:aspect-auto md:[flex:541_1_0]">
            <img [src]="assets.galleryPhoto1" alt="Smart classroom" class="size-full object-cover" />
            <span class="absolute right-2.5 bottom-2.5 rounded bg-[#525252] px-2.5 py-1.5 text-xs font-medium text-white">
              Smart Classrooms
            </span>
          </div>
          <div class="relative min-h-0 aspect-[616/374] md:aspect-auto md:[flex:374_1_0]">
            <img [src]="assets.galleryPhoto3" alt="Sports day" class="size-full object-cover" />
            <span class="absolute right-2.5 bottom-2.5 rounded bg-[#525252] px-2.5 py-1.5 text-xs font-medium text-white">
              Sports
            </span>
          </div>
        </div>

        <div class="flex w-full min-h-0 flex-col gap-2.5 md:w-1/2">
          <div class="relative min-h-0 aspect-[628/541] md:aspect-auto md:[flex:541_1_0]">
            <img [src]="assets.galleryPhoto2" alt="Campus life" class="size-full object-cover" />
            <span class="absolute right-2.5 bottom-2.5 rounded bg-[#525252] px-2.5 py-1.5 text-xs font-medium text-white">
              Campus Life
            </span>
          </div>
          <div class="relative min-h-0 aspect-[824/187] md:aspect-auto md:[flex:187_1_0]">
            <img [src]="assets.galleryPhoto4" alt="Arts and crafts" class="size-full object-cover" />
            <span class="absolute right-2.5 bottom-2.5 rounded bg-[#525252] px-2.5 py-1.5 text-xs font-medium text-white">
              Arts & Crafts
            </span>
          </div>
          <div class="relative min-h-0 aspect-[824/187] md:aspect-auto md:[flex:187_1_0]">
            <img [src]="assets.galleryPhoto5" alt="Students in class" class="size-full object-cover" />
            <span class="absolute right-2.5 bottom-2.5 rounded bg-[#525252] px-2.5 py-1.5 text-xs font-medium text-white">
              Students
            </span>
          </div>
        </div>
      </section>
    } @else if (filteredPhotos().length) {
      <section class="grid w-full grid-cols-1 gap-2.5 px-2.5 py-2.5 sm:grid-cols-2 lg:grid-cols-3">
        @for (photo of filteredPhotos(); track photo.src) {
          <div class="relative aspect-[4/3] overflow-hidden">
            <img [src]="photo.src" [alt]="photo.alt" class="size-full object-cover" />
            <span class="absolute right-2.5 bottom-2.5 rounded bg-[#525252] px-2.5 py-1.5 text-xs font-medium text-white">
              {{ photo.label }}
            </span>
          </div>
        }
      </section>
    } @else {
      <p class="w-full py-20 text-center text-lg text-[#5e5e5e]">
        No photos in "{{ activeCategory() }}" yet — check back soon.
      </p>
    }

    <div class="flex w-full items-center justify-center py-6">
      <a href="#" class="text-brand-teal text-[24px] font-semibold underline">Many More Moments</a>
    </div>
  `,
})
export class GalleryMosaic {
  protected readonly assets = figmaAssets;

  readonly activeCategory = input('All');

  private readonly photos: GalleryPhoto[] = [
    { src: figmaAssets.galleryPhoto1, alt: 'Smart classroom', label: 'Smart Classrooms', category: 'Academics' },
    { src: figmaAssets.galleryPhoto2, alt: 'Campus life', label: 'Campus Life', category: 'Campus Life' },
    { src: figmaAssets.galleryPhoto3, alt: 'Sports day', label: 'Sports', category: 'Sports' },
    { src: figmaAssets.galleryPhoto4, alt: 'Arts and crafts', label: 'Arts & Crafts', category: 'Arts' },
    { src: figmaAssets.galleryPhoto5, alt: 'Students in class', label: 'Students', category: 'Academics' },
  ];

  protected readonly filteredPhotos = computed(() =>
    this.photos.filter((photo) => photo.category === this.activeCategory()),
  );
}
