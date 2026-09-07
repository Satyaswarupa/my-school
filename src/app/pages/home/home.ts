import { Component } from '@angular/core';
import { HeroSection } from '../../components/hero-section/hero-section';
import { StatsTicker } from '../../components/stats-ticker/stats-ticker';
import { AboutTeaserSection } from '../../components/about-teaser-section/about-teaser-section';
import { DifferentiatorsSection } from '../../components/differentiators-section/differentiators-section';
import { ReasonsSection } from '../../components/reasons-section/reasons-section';
import { GalleryCollage } from '../../components/gallery-collage/gallery-collage';
import { TestimonialSection } from '../../components/testimonial-section/testimonial-section';
import { FaqSection } from '../../components/faq-section/faq-section';
import { CtaSection } from '../../components/cta-section/cta-section';
import { SiteFooter } from '../../components/site-footer/site-footer';

@Component({
  selector: 'app-home',
  imports: [
    HeroSection,
    StatsTicker,
    AboutTeaserSection,
    DifferentiatorsSection,
    ReasonsSection,
    GalleryCollage,
    TestimonialSection,
    FaqSection,
    CtaSection,
    SiteFooter,
  ],
  template: `
    <main class="flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-white">
      <app-hero-section class="w-full" />
      <app-stats-ticker class="w-full" />
      <app-about-teaser-section class="w-full" />
      <app-differentiators-section class="w-full" />
      <app-reasons-section class="w-full" />
      <app-gallery-collage class="w-full" />
      <app-testimonial-section class="w-full" />
      <app-faq-section class="w-full" />
      <app-cta-section class="w-full" />
      <app-site-footer class="w-full" />
    </main>
  `,
})
export class Home {}
