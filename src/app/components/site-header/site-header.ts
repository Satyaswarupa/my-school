import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { figmaAssets } from '../../shared/figma-assets';

export type SiteHeaderVariant = 'overlay' | 'light';

interface NavLink {
  label: string;
  href: string;
  routed: boolean;
}

@Component({
  selector: 'app-site-header',
  imports: [RouterLink],
  template: `
    <header class="flex w-full items-center justify-between gap-8 px-6 py-5 md:px-[100px]">
      <div class="flex shrink-0 items-center gap-1">
        <img [src]="assets.logo" alt="My School logo" class="size-[50px] object-cover" />
        <div class="flex items-center overflow-hidden rounded-lg">
          <span class="bg-brand-orange px-[5px] py-[5px] text-[18px] font-bold text-white">MY</span>
          <span class="bg-brand-teal px-[5px] py-[5px] text-[18px] font-bold text-white">SCHOOL</span>
        </div>
      </div>

      <nav class="hidden items-center gap-[18px] lg:flex">
        @for (link of navLinks; track link.label) {
          <a
            [routerLink]="link.routed ? link.href : null"
            [href]="link.routed ? null : link.href"
            class="whitespace-nowrap text-sm"
            [class.font-bold]="activeLink() === link.label"
            [class.text-brand-orange]="activeLink() === link.label"
            [class.font-semibold]="activeLink() !== link.label"
            [class.text-white]="activeLink() !== link.label && variant() === 'overlay'"
            [class.text-[#2a2a2a]]="activeLink() !== link.label && variant() === 'light'"
          >
            {{ link.label }}
          </a>
        }
      </nav>

      <div class="flex shrink-0 items-center gap-2">
        <div class="hidden items-end gap-0.5 sm:flex">
          <img [src]="variant() === 'overlay' ? assets.callIcon : assets.callIconDark" alt="" class="size-4" />
          <span class="whitespace-nowrap text-sm" [class.text-white]="variant() === 'overlay'" [class.text-[#2a2a2a]]="variant() === 'light'">
            +91-9876543210
          </span>
        </div>
        <div class="flex items-center gap-4">
          <a
            href="#"
            class="whitespace-nowrap rounded border border-[#a4a4a4] px-5 py-2.5 text-base font-medium"
            [class.text-white]="variant() === 'overlay'"
            [class.text-[#2a2a2a]]="variant() === 'light'"
          >
            Login
          </a>
          <a href="#" class="bg-brand-orange whitespace-nowrap rounded px-5 py-2.5 text-base font-medium text-white">
            Enquire Now
          </a>
        </div>
      </div>
    </header>
  `,
})
export class SiteHeader {
  protected readonly assets = figmaAssets;

  readonly variant = input<SiteHeaderVariant>('overlay');
  readonly activeLink = input('Home');

  protected readonly navLinks: NavLink[] = [
    { label: 'Home', href: '/', routed: true },
    { label: 'About Us', href: '/about-us', routed: true },
    { label: 'Admissions & Academics', href: '/admissions', routed: true },
    { label: 'Gallery', href: '/gallery', routed: true },
    { label: 'Our Branches', href: '/branches', routed: true },
    { label: 'Blog', href: '#', routed: false },
  ];
}
