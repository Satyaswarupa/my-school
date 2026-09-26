import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { figmaAssets } from '../../shared/figma-assets';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  template: `
    <footer class="bg-brand-ink-soft flex w-full flex-col items-start gap-[78px] px-6 py-10 md:px-[100px] md:py-20">
      <div class="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-start lg:gap-[142px]">
        <div class="flex w-full max-w-[458px] flex-col items-start gap-10">
          <div class="flex items-center gap-3">
            <img [src]="assets.logo" alt="My School logo" class="size-[90px] object-cover" />
            <div class="flex items-center overflow-hidden rounded-lg">
              <span class="bg-brand-orange px-[6px] py-[5px] text-[24px] font-bold text-white">MY</span>
              <span class="bg-brand-teal px-[6px] py-[5px] text-[24px] font-bold text-white">SCHOOL</span>
            </div>
          </div>
          <p class="text-[18px] whitespace-pre-wrap text-[#dedede]">
            Learning Beyond Academics. Growing Beyond Expectations. A learner-centric CBSE institution serving Pune
            since 2012.
          </p>
        </div>

        <div class="flex w-[220px] shrink-0 flex-col items-start gap-10">
          <p class="text-brand-orange w-full text-[20px] font-medium">Navigation</p>
          <nav class="flex w-full flex-col items-start gap-5 text-[18px] text-[#dedede]">
            @for (link of navLinks; track link.label) {
              @if (link.external) {
                <a [href]="link.href" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-brand-orange">
                  {{ link.label }}
                </a>
              } @else {
                <a [routerLink]="link.href" class="transition-colors hover:text-brand-orange">{{ link.label }}</a>
              }
            }
          </nav>
        </div>

        <div class="flex w-full max-w-[376px] flex-col items-start gap-10">
          <p class="text-brand-orange text-[20px] font-medium">Blog</p>
          <div class="flex w-full flex-col items-start gap-5">
            <div class="flex w-full flex-col items-start gap-5">
              <p class="w-full text-[18px] text-[#dedede]">
                Parenting tips, events &amp; school updates — straight to your inbox.
              </p>
              <form class="flex w-full items-stretch" (submit)="goToEnquiry(); $event.preventDefault()">
                <div class="flex flex-1 items-center border border-[#5a7a80] px-2.5 py-5">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    [value]="footerEmail()"
                    (input)="footerEmail.set($any($event.target).value)"
                    class="w-full bg-transparent text-base text-white outline-none placeholder:text-[#b3b3b3]"
                  />
                </div>
                <button
                  type="submit"
                  class="bg-brand-orange flex w-[145px] shrink-0 cursor-pointer items-center justify-center px-4 py-5"
                >
                  <span class="text-base font-semibold text-white">Get Started</span>
                </button>
              </form>
            </div>
            <p class="text-base text-[#dedede]">Mon – Sat · 8:00 am – 4:00 pm</p>
          </div>
          <div class="flex items-center gap-3">
            <img [src]="assets.instagram" alt="Instagram" class="size-6" />
            <img [src]="assets.linkedin" alt="LinkedIn" class="size-6" />
            <img [src]="assets.facebook" alt="Facebook" class="size-6" />
          </div>
        </div>
      </div>

      <div class="flex w-full flex-col items-start gap-5">
        <img [src]="assets.footerDivider" alt="" class="h-px w-full" />
        <div class="flex w-full flex-col items-start justify-between gap-2 text-base text-[#dedede] sm:flex-row sm:items-center">
          <p>© 2025 My School, Wakad. All rights reserved.</p>
          <p>Wakad &amp; Pimpri · Pune · Maharashtra · India</p>
        </div>
      </div>
    </footer>
  `,
})
export class SiteFooter {
  protected readonly assets = figmaAssets;
  private readonly router = inject(Router);

  protected readonly footerEmail = signal('');

  protected readonly navLinks: { label: string; href: string; external?: boolean }[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Admissions & Academics', href: '/admissions' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Our Branches', href: '/branches' },
    { label: 'Blog', href: 'https://www.monachadda.com/blog', external: true },
  ];

  protected goToEnquiry(): void {
    const email = this.footerEmail().trim();
    this.router.navigate(['/admissions'], {
      queryParams: email ? { email } : {},
      fragment: 'lets-connect',
    });
  }
}
