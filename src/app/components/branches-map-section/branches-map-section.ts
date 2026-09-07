import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { StatsTicker } from '../stats-ticker/stats-ticker';

@Component({
  selector: 'app-branches-map-section',
  imports: [StatsTicker],
  template: `
    <app-stats-ticker [badges]="tickerBadges" [bulleted]="false" />

    <section class="relative h-[320px] w-full overflow-hidden bg-white sm:h-[420px] md:h-[500px]">
      <iframe
        [src]="mapEmbedUrl"
        class="absolute inset-0 size-full border-0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
        title="My School Wakad location on Google Maps"
      ></iframe>
    </section>
  `,
})
export class BranchesMapSection {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly mapEmbedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.google.com/maps?q=My+School+Wakad&ll=18.6111205,73.7515798&z=16&output=embed',
  );

  protected readonly tickerBadges: string[] = [
    'Question-Based Learning',
    'Real-Life Concept Integration',
    'Theme-Based Learning',
    'Activity-Based Teaching',
    'German Language',
    'Financial Literacy',
  ];
}
