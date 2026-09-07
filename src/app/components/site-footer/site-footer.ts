import { Component } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

@Component({
  selector: 'app-site-footer',
  imports: [],
  template: `
    <footer class="bg-brand-ink-soft flex w-full flex-col items-start gap-[78px] px-6 py-10 md:px-[100px] md:py-20">
      <div class="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-[142px]">
        <div class="flex w-full max-w-[458px] flex-col items-start gap-10">
          <div class="flex items-center gap-3">
            <img [src]="assets.logo" alt="My School logo" class="size-[70px] object-cover" />
            <div class="flex items-center overflow-hidden rounded-lg">
              <span class="bg-brand-orange px-[5px] py-[5px] text-lg font-bold text-white">MY</span>
              <span class="bg-brand-teal px-[5px] py-[5px] text-lg font-bold text-white">SCHOOL</span>
            </div>
          </div>
          <p class="text-base whitespace-pre-wrap text-[#dedede]">
            Learning Beyond Academics. Growing Beyond Expectations. A learner-centric CBSE institution serving Pune
            since 2012.
          </p>
        </div>

        <div class="flex w-[90px] shrink-0 flex-col items-start gap-10">
          <p class="text-brand-orange w-full text-base font-medium">Navigation</p>
          <div class="flex w-full flex-col items-start gap-3 text-sm text-[#dedede]">
            @for (link of navLinks; track link) {
              <p class="w-full">{{ link }}</p>
            }
          </div>
        </div>

        <div class="flex w-full max-w-[376px] flex-col items-start gap-[31px]">
          <p class="text-brand-orange text-base font-medium">Blog</p>
          <div class="flex w-full flex-col items-start gap-5">
            <div class="flex w-full flex-col items-start gap-5">
              <p class="w-full text-sm text-[#dedede]">
                Parenting tips, events &amp; school updates — straight to your inbox.
              </p>
              <div class="flex w-full items-stretch">
                <div class="flex flex-1 items-center border border-[#5a7a80] px-2.5 py-5">
                  <span class="text-sm text-[#b3b3b3]">your@email.com</span>
                </div>
                <div class="bg-brand-orange flex w-[145px] shrink-0 items-center justify-center px-4 py-5">
                  <span class="text-sm font-semibold text-white">Get Started</span>
                </div>
              </div>
            </div>
            <p class="text-sm text-[#dedede]">Mon – Sat · 8:00 am – 4:00 pm</p>
          </div>
          <div class="flex items-center gap-3">
            <img [src]="assets.instagram" alt="Instagram" class="size-5" />
            <img [src]="assets.linkedin" alt="LinkedIn" class="size-5" />
            <img [src]="assets.facebook" alt="Facebook" class="size-5" />
          </div>
        </div>
      </div>

      <div class="flex w-full flex-col items-start gap-5">
        <img [src]="assets.footerDivider" alt="" class="h-px w-full" />
        <div class="flex w-full flex-col items-start justify-between gap-2 text-sm text-[#dedede] sm:flex-row sm:items-center">
          <p>© 2025 My School, Wakad. All rights reserved.</p>
          <p>Wakad &amp; Pimpri · Pune · Maharashtra · India</p>
        </div>
      </div>
    </footer>
  `,
})
export class SiteFooter {
  protected readonly assets = figmaAssets;

  protected readonly navLinks: string[] = [
    'Home',
    'About Us',
    'Admissions',
    'Gallery',
    'Our Branches',
    'Blog',
    'Contact',
  ];
}
