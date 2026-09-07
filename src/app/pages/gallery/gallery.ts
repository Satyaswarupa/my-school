import { Component, signal } from '@angular/core';
import { GalleryHero } from '../../components/gallery-hero/gallery-hero';
import { GalleryFilterBar } from '../../components/gallery-filter-bar/gallery-filter-bar';
import { GalleryMosaic } from '../../components/gallery-mosaic/gallery-mosaic';
import { GalleryQuoteBanner } from '../../components/gallery-quote-banner/gallery-quote-banner';
import { SiteFooter } from '../../components/site-footer/site-footer';

@Component({
  selector: 'app-gallery',
  imports: [GalleryHero, GalleryFilterBar, GalleryMosaic, GalleryQuoteBanner, SiteFooter],
  template: `
    <main class="flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-white">
      <app-gallery-hero class="w-full" />
      <app-gallery-filter-bar
        class="w-full"
        [activeCategory]="selectedCategory()"
        (categorySelected)="selectedCategory.set($event)"
      />
      <app-gallery-mosaic class="w-full" [activeCategory]="selectedCategory()" />
      <app-gallery-quote-banner class="w-full" />
      <app-site-footer class="w-full" />
    </main>
  `,
})
export class Gallery {
  protected readonly selectedCategory = signal('All');
}
