import { Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
    { src: 'assets/gallery/gallery-39.jpg', alt: 'Little graduates in caps and gowns', label: 'Graduation Day', category: 'Events' },
    { src: 'assets/gallery/gallery-40.jpg', alt: 'Students presenting at the science fair', label: 'Science Fair', category: 'Academics' },
    { src: 'assets/gallery/gallery-29.jpg', alt: 'Geostationary satellite model at the science fair', label: 'Science Fair', category: 'Academics' },
    { src: 'assets/gallery/gallery-dance.jpg', alt: 'Students practising in the dance studio', label: 'Dance', category: 'Arts' },
    { src: 'assets/gallery/gallery-round-8.jpg', alt: 'Students learning keyboard in the music room', label: 'Music', category: 'Arts' },
    { src: 'assets/gallery/gallery-round-5.jpg', alt: 'Student playing on the sports turf', label: 'Sports', category: 'Sports' },
    { src: 'assets/gallery/gallery-31.jpg', alt: 'Young children cheering on the lawn', label: 'Campus Life', category: 'Campus Life' },
    { src: 'assets/gallery/gallery-11.jpg', alt: 'Mothers drumming together at a school event', label: 'Events', category: 'Events' },
    { src: 'assets/gallery/gallery-7.jpg', alt: 'Grandparents Day celebration', label: 'Grandparents Day', category: 'Events' },
    { src: 'assets/gallery/gallery-33.jpg', alt: 'Dental health awareness session', label: 'Campus Life', category: 'Campus Life' },
    { src: 'assets/gallery/gallery-round-10.jpg', alt: 'Ganesha idol at the school', label: 'Campus Life', category: 'Campus Life' },
    { src: 'assets/gallery/annual-function-1.jpg', alt: 'Small Steps Big Dreams annual day welcome', label: 'Annual Day', category: 'Events' },
    { src: 'assets/gallery/annual-function-2.jpg', alt: 'Classical dance performance at annual day', label: 'Annual Day', category: 'Events' },
    { src: 'assets/gallery/annual-function-3.jpg', alt: 'Students posing on stage at annual day', label: 'Annual Day', category: 'Events' },
    { src: 'assets/gallery/annual-function-5.jpg', alt: 'Journey Called Life dance performance', label: 'Annual Day', category: 'Events' },
    { src: 'assets/gallery/annual-function-6.jpg', alt: 'Diya dance performance at annual day', label: 'Annual Day', category: 'Events' },
    { src: 'assets/gallery/girl-standing.jpg', alt: 'Student speaking at the podium', label: 'Public Speaking', category: 'Academics' },
    { src: 'assets/gallery/computer-room.jpg', alt: 'My School computer lab', label: 'Computer Lab', category: 'Technology' },
    { src: 'assets/gallery/school-building-2.jpg', alt: 'My School building surrounded by trees', label: 'Our Campus', category: 'Campus Life' },
  ];

  protected readonly allPhotos = computed(() => this.photos);

  protected readonly visibleAllPhotos = computed(() =>
    this.allPhotosExpanded() ? this.allPhotos() : this.allPhotos().slice(0, 6),
  );

  protected readonly filteredPhotos = computed(() =>
    this.photos.filter((photo) => photo.category === this.activeCategory()),
  );
}
