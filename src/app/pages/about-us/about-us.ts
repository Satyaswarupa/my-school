import { Component } from '@angular/core';
import { AboutHero } from '../../components/about-hero/about-hero';
import { JourneySection } from '../../components/journey-section/journey-section';
import { VisionMissionSection } from '../../components/vision-mission-section/vision-mission-section';
import { FounderSection } from '../../components/founder-section/founder-section';
import { AwardsSection } from '../../components/awards-section/awards-section';
import { AdmissionsCtaSection } from '../../components/admissions-cta-section/admissions-cta-section';
import { SiteFooter } from '../../components/site-footer/site-footer';

@Component({
  selector: 'app-about-us',
  imports: [
    AboutHero,
    JourneySection,
    VisionMissionSection,
    FounderSection,
    AwardsSection,
    AdmissionsCtaSection,
    SiteFooter,
  ],
  template: `
    <main class="flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-white">
      <app-about-hero class="w-full" />
      <app-journey-section class="w-full" />
      <app-vision-mission-section class="w-full" />
      <app-founder-section class="w-full" />
      <app-awards-section class="w-full" />
      <app-admissions-cta-section class="w-full" />
      <app-site-footer class="w-full" />
    </main>
  `,
})
export class AboutUs {}
