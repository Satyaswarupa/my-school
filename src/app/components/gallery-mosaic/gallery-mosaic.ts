import { Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
      <section class="grid w-full grid-cols-1 gap-2.5 px-2.5 py-2.5 sm:grid-cols-2 lg:grid-cols-3">
        @for (photo of visibleAllPhotos(); track photo.src + photo.category) {
          <div class="relative aspect-[4/3] overflow-hidden">
            <img [src]="photo.src" [alt]="photo.alt" class="size-full object-cover" />
            <span class="absolute right-2.5 bottom-2.5 rounded bg-[#525252] px-2.5 py-1.5 text-xs font-medium text-white">
              {{ photo.label }}
            </span>
          </div>
        }
      </section>
    } @else if (activeCategory() === 'Videos') {
      <section class="grid w-full grid-cols-1 gap-5 px-6 py-6 md:grid-cols-2 md:px-12 lg:px-[100px]">
        @for (video of videos; track video.id) {
          <div class="min-w-0 overflow-hidden rounded-lg bg-[#111]">
            <iframe
              [src]="video.embedUrl"
              [title]="video.title"
              class="aspect-video w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        }
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

    @if (activeCategory() === 'All' && allPhotos().length > 6) {
      <div class="flex w-full items-center justify-center py-6">
        <button
          type="button"
          class="cursor-pointer text-brand-teal text-[24px] font-semibold underline"
          [attr.aria-expanded]="allPhotosExpanded()"
          (click)="allPhotosExpanded.update((expanded) => !expanded)"
        >
          {{ allPhotosExpanded() ? 'Show Fewer Moments' : 'Many More Moments' }}
        </button>
      </div>
    }
  `,
})
export class GalleryMosaic {
  private readonly sanitizer = inject(DomSanitizer);

  readonly activeCategory = input('All');
  protected readonly allPhotosExpanded = signal(false);

  protected readonly videos: { id: string; title: string; embedUrl: SafeResourceUrl }[] = [
    'tEvX8eNk9ZM',
    'V-I0c2vX0pg',
    'yaVDOc3m0J4',
    'rXKKq36jpPo',
    'Xc7PLrRht9c',
    'YA8BimiRFD0',
    'UIqKAQO8OGM',
    '8Lx-eOsJ2i0',
    'LznVHkFQMBg',
  ].map((id, index) => ({
    id,
    title: `My School video ${index + 1}`,
    embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${id}`),
  }));

  private readonly photos: GalleryPhoto[] = [
    { src: figmaAssets.galleryPhoto1, alt: 'Smart classroom', label: 'Smart Classrooms', category: 'Academics' },
    { src: figmaAssets.galleryPhoto4, alt: 'Arts and crafts', label: 'Arts & Crafts', category: 'Arts' },
    { src: figmaAssets.galleryPhoto5, alt: 'Students in class', label: 'Students', category: 'Academics' },
    { src: 'https://res.cloudinary.com/dxlcnrwrq/image/upload/v1791224312/PRK00384.jpg', alt: 'Campus life photo 1', label: 'Campus Life', category: 'Campus Life' },
    { src: 'https://res.cloudinary.com/dxlcnrwrq/image/upload/v1791224311/PRK00385.jpg', alt: 'Campus life photo 2', label: 'Campus Life', category: 'Campus Life' },
    { src: 'https://res.cloudinary.com/dxlcnrwrq/image/upload/v1791224311/PRK09189.jpg', alt: 'Campus life photo 3', label: 'Campus Life', category: 'Campus Life' },
    { src: 'https://res.cloudinary.com/dxlcnrwrq/image/upload/v1791224309/PRK09191.jpg', alt: 'Campus life photo 4', label: 'Campus Life', category: 'Campus Life' },
    { src: 'https://res.cloudinary.com/dxlcnrwrq/image/upload/v1791224204/MS_image_1.webp', alt: 'Campus life photo 5', label: 'Campus Life', category: 'Campus Life' },
    { src: 'https://drive.google.com/thumbnail?id=1wbSneRuBygVsRQU0bLHZA3HrnwtpIvWh&sz=w1200', alt: 'Sports photo 1', label: 'Sports', category: 'Sports' },
    { src: 'https://drive.google.com/thumbnail?id=1oeR18cBDqSMihe9oJCcFKxoafvUB46wx&sz=w1200', alt: 'Sports photo 2', label: 'Sports', category: 'Sports' },
    { src: 'https://drive.google.com/thumbnail?id=1DhDAm4RuOK93MdO7jtH-w67rdeBXEIPE&sz=w1200', alt: 'Sports photo 3', label: 'Sports', category: 'Sports' },
    { src: 'https://drive.google.com/thumbnail?id=12B_ndCCRZgHpyj1ETd6flI-O7bJRTfid&sz=w1200', alt: 'Sports photo 4', label: 'Sports', category: 'Sports' },
    { src: 'https://drive.google.com/thumbnail?id=1W2Z6GpE9aKfR4i3j19qrFOLa7Ajianf5&sz=w1200', alt: 'Sports photo 5', label: 'Sports', category: 'Sports' },
    { src: 'https://drive.google.com/thumbnail?id=12MjqCTAw1jGbSFIKV-f8K3Zv82IlnzTL&sz=w1200', alt: 'Sports photo 6', label: 'Sports', category: 'Sports' },
    { src: 'https://drive.google.com/thumbnail?id=14dBWxUxmD4QCL6_m8imSZfrJCnuCJgzr&sz=w1200', alt: 'Sports photo 7', label: 'Sports', category: 'Sports' },
    { src: 'https://drive.google.com/thumbnail?id=1ppYOj6fhXsa6tl1TQ8C-EaGX52Hvgxa4&sz=w1200', alt: 'Sports photo 8', label: 'Sports', category: 'Sports' },
    { src: 'https://drive.google.com/thumbnail?id=19iO8cISU2kVeL7VzhYnXsDbWbzAW05HP&sz=w1200', alt: 'Sports photo 9', label: 'Sports', category: 'Sports' },
    { src: 'https://res.cloudinary.com/dxlcnrwrq/image/upload/v1791224311/PRK00385.jpg', alt: 'School event photo 1', label: 'Events', category: 'Events' },
    { src: 'https://res.cloudinary.com/dxlcnrwrq/image/upload/v1791224310/PRK09493.jpg', alt: 'School event photo 2', label: 'Events', category: 'Events' },
    { src: 'https://res.cloudinary.com/dxlcnrwrq/image/upload/v1791224203/MS_image_02.webp', alt: 'School event photo 3', label: 'Events', category: 'Events' },
    { src: 'https://res.cloudinary.com/dxlcnrwrq/image/upload/v1791224204/MS_image_03.webp', alt: 'School event photo 4', label: 'Events', category: 'Events' },
    { src: figmaAssets.awardImage1, alt: 'Best CBSE school in western region of Maharashtra', label: 'Best CBSE school in western region of Maharashtra', category: 'Achievements' },
    { src: figmaAssets.awardImage2, alt: 'Miss Mona Chadda awarded as BharatGuild I Impact Mentor', label: 'BharatGuild I Impact Mentor', category: 'Achievements' },
    { src: figmaAssets.awardImage3, alt: 'Brand Impact: Best Emerging school in Pune', label: 'Best Emerging school in Pune', category: 'Achievements' },
  ];

  protected readonly allPhotos = computed(() =>
    this.photos.filter((photo) => ['Campus Life', 'Sports', 'Events'].includes(photo.category)),
  );

  protected readonly visibleAllPhotos = computed(() =>
    this.allPhotosExpanded() ? this.allPhotos() : this.allPhotos().slice(0, 6),
  );

  protected readonly filteredPhotos = computed(() =>
    this.photos.filter((photo) => photo.category === this.activeCategory()),
  );
}
