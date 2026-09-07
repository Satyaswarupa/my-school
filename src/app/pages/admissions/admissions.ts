import { Component } from '@angular/core';
import { AdmissionsHero } from '../../components/admissions-hero/admissions-hero';
import { EligibilitySection } from '../../components/eligibility-section/eligibility-section';
import { EnquiryFormSection } from '../../components/enquiry-form-section/enquiry-form-section';
import { SiteFooter } from '../../components/site-footer/site-footer';

@Component({
  selector: 'app-admissions',
  imports: [AdmissionsHero, EligibilitySection, EnquiryFormSection, SiteFooter],
  template: `
    <main class="flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-white">
      <app-admissions-hero class="w-full" />
      <app-eligibility-section class="w-full" />
      <app-enquiry-form-section class="w-full" />
      <app-site-footer class="w-full" />
    </main>
  `,
})
export class Admissions {}
