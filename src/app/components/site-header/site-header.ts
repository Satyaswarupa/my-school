import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { figmaAssets } from '../../shared/figma-assets';

export type SiteHeaderVariant = 'overlay' | 'light';

interface NavLink {
  label: string;
  href: string;
  routed: boolean;
  external?: boolean;
}

@Component({
  selector: 'app-site-header',
  imports: [RouterLink],
  template: `
    <header class="relative flex w-full items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 md:px-12 lg:px-[100px]">
      <a routerLink="/" class="flex shrink-0 items-center gap-1" (click)="menuOpen.set(false)">
        <img [src]="assets.logo" alt="My School logo" class="size-10 object-cover sm:size-[50px]" />
        <div class="flex items-center overflow-hidden rounded-lg">
          <span class="bg-brand-orange px-[5px] py-[5px] text-sm font-bold text-white sm:text-[18px]">MY</span>
          <span class="bg-brand-teal px-[5px] py-[5px] text-sm font-bold text-white sm:text-[18px]">SCHOOL</span>
        </div>
      </a>

      <nav class="hidden items-center gap-8 xl:flex">
        @for (link of navLinks; track link.label) {
          @if (link.routed) {
            <a
              [routerLink]="link.href"
              class="whitespace-nowrap text-[15px]"
              [class.font-bold]="activeLink() === link.label"
              [class.text-brand-orange]="activeLink() === link.label"
              [class.font-semibold]="activeLink() !== link.label"
              [class.text-white]="activeLink() !== link.label && variant() === 'overlay'"
              [class.text-[#2a2a2a]]="activeLink() !== link.label && variant() === 'light'"
            >
              {{ link.label }}
            </a>
          } @else {
            <a
              [href]="link.href"
              [attr.target]="link.external ? '_blank' : null"
              [attr.rel]="link.external ? 'noopener noreferrer' : null"
              class="whitespace-nowrap text-[15px]"
              [class.font-bold]="activeLink() === link.label"
              [class.text-brand-orange]="activeLink() === link.label"
              [class.font-semibold]="activeLink() !== link.label"
              [class.text-white]="activeLink() !== link.label && variant() === 'overlay'"
              [class.text-[#2a2a2a]]="activeLink() !== link.label && variant() === 'light'"
            >
              {{ link.label }}
            </a>
          }
        }
      </nav>

      <div class="flex shrink-0 items-center gap-2">
        <div class="hidden items-end gap-0.5 xl:flex">
          <img [src]="variant() === 'overlay' ? assets.callIcon : assets.callIconDark" alt="" class="size-4" />
          <span class="whitespace-nowrap text-sm font-bold" [class.text-white]="variant() === 'overlay'" [class.text-[#2a2a2a]]="variant() === 'light'">
            +91-8055000123
          </span>
        </div>
        <div class="hidden items-center gap-4 xl:flex">
          <a
            href="#"
            class="whitespace-nowrap rounded border px-5 py-2.5 text-base font-medium"
            [class.border-2]="variant() === 'overlay'"
            [class.border-white]="variant() === 'overlay'"
            [class.border-[#a4a4a4]]="variant() === 'light'"
            [class.text-white]="variant() === 'overlay'"
            [class.text-[#2a2a2a]]="variant() === 'light'"
          >
            Login
          </a>
          <a
            routerLink="/admissions"
            fragment="lets-connect"
            class="bg-brand-orange whitespace-nowrap rounded px-5 py-2.5 text-base font-medium text-white"
          >
            Enquire Now
          </a>
        </div>

        <button
          type="button"
          class="flex size-10 shrink-0 items-center justify-center rounded xl:hidden"
          [attr.aria-expanded]="menuOpen()"
          aria-label="Toggle navigation menu"
          (click)="menuOpen.set(!menuOpen())"
        >
          @if (menuOpen()) {
            <svg viewBox="0 0 24 24" class="size-6" [class.text-white]="variant() === 'overlay'" [class.text-[#2a2a2a]]="variant() === 'light'">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                fill="none"
              />
            </svg>
          } @else {
            <svg viewBox="0 0 24 24" class="size-6" [class.text-white]="variant() === 'overlay'" [class.text-[#2a2a2a]]="variant() === 'light'">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                fill="none"
              />
            </svg>
          }
        </button>
      </div>

      <div
        class="pointer-events-none fixed inset-0 z-40 bg-black/50 opacity-0 transition-opacity duration-300 xl:hidden"
        [class.!opacity-100]="menuOpen()"
        [class.!pointer-events-auto]="menuOpen()"
        (click)="menuOpen.set(false)"
      ></div>

      <aside
        class="bg-brand-ink fixed inset-y-0 right-0 z-50 flex h-dvh w-[80%] max-w-[320px] flex-col gap-1 overflow-y-auto p-4 shadow-2xl translate-x-full transition-transform duration-300 xl:hidden"
        [class.!translate-x-0]="menuOpen()"
        [attr.aria-hidden]="!menuOpen()"
        [attr.inert]="menuOpen() ? null : ''"
      >
          <button
            type="button"
            class="mb-2 flex size-10 items-center justify-center self-end rounded"
            aria-label="Close navigation menu"
            (click)="menuOpen.set(false)"
          >
            <svg viewBox="0 0 24 24" class="size-6 text-white">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" />
            </svg>
          </button>

          @for (link of navLinks; track link.label) {
            @if (link.routed) {
              <a
                [routerLink]="link.href"
                class="rounded px-3 py-3 text-base"
                [class.font-bold]="activeLink() === link.label"
                [class.text-brand-orange]="activeLink() === link.label"
                [class.font-semibold]="activeLink() !== link.label"
                [class.text-white]="activeLink() !== link.label"
                (click)="menuOpen.set(false)"
              >
                {{ link.label }}
              </a>
            } @else {
              <a
                [href]="link.href"
                [attr.target]="link.external ? '_blank' : null"
                [attr.rel]="link.external ? 'noopener noreferrer' : null"
                class="rounded px-3 py-3 text-base"
                [class.font-bold]="activeLink() === link.label"
                [class.text-brand-orange]="activeLink() === link.label"
                [class.font-semibold]="activeLink() !== link.label"
                [class.text-white]="activeLink() !== link.label"
                (click)="menuOpen.set(false)"
              >
                {{ link.label }}
              </a>
            }
          }

          <div class="my-2 flex items-center gap-2 px-3">
            <img [src]="assets.callIcon" alt="" class="size-4" />
            <span class="text-sm font-bold text-white">
              +91-8055000123
            </span>
          </div>

          <div class="mt-auto flex items-center gap-2 px-3 pt-4 pb-2">
            <a
              href="#"
              class="flex-1 rounded border border-[#a4a4a4] px-3 py-2 text-center text-sm font-medium text-white"
              (click)="menuOpen.set(false)"
            >
              Login
            </a>
            <a
              routerLink="/admissions"
              fragment="lets-connect"
              class="bg-brand-orange flex-1 rounded px-3 py-2 text-center text-sm font-medium text-white"
              (click)="menuOpen.set(false)"
            >
              Enquire Now
            </a>
          </div>
      </aside>
    </header>
  `,
})
export class SiteHeader {
  protected readonly assets = figmaAssets;

  readonly variant = input<SiteHeaderVariant>('overlay');
  readonly activeLink = input('Home');

  protected readonly menuOpen = signal(false);

  protected readonly navLinks: NavLink[] = [
    { label: 'Home', href: '/', routed: true },
    { label: 'About Us', href: '/about-us', routed: true },
    { label: 'Admissions & Academics', href: '/admissions', routed: true },
    { label: 'Gallery', href: '/gallery', routed: true },
    { label: 'Our Branches', href: '/branches', routed: true },
    { label: 'Blog', href: 'https://www.monachadda.com/blog', routed: false, external: true },
  ];
}
