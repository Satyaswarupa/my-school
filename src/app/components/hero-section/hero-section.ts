import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal, viewChild } from '@angular/core';
import { SiteHeader } from '../site-header/site-header';
import { figmaAssets } from '../../shared/figma-assets';

@Component({
  selector: 'app-hero-section',
  imports: [SiteHeader],
  template: `
    <section class="relative h-[500px] w-full overflow-hidden md:h-[736px]">
      <video
        #heroVideo
        [src]="videoUrl"
        autoplay
        muted
        loop
        playsinline
        aria-hidden="true"
        class="absolute inset-0 size-full object-cover"
      ></video>

      <!-- Top gradient so the nav bar stays legible over bright video frames -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 top-0 h-[10%] bg-gradient-to-b from-black/70 via-black/30 to-transparent"
      ></div>

      <app-site-header class="absolute inset-x-0 top-0 z-10" />

      <button
        type="button"
        [attr.aria-label]="isMuted() ? 'Unmute video' : 'Mute video'"
        (click)="toggleMute()"
        class="absolute right-6 bottom-6 z-10 flex size-11 cursor-pointer items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60 md:right-[100px]"
      >
        @if (isMuted()) {
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        } @else {
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        }
      </button>
    </section>
  `,
})
export class HeroSection {
  protected readonly assets = figmaAssets;
  protected readonly videoUrl = 'https://res.cloudinary.com/dxlcnrwrq/video/upload/v1788598685/landscape_01_1.mp4';
  protected readonly isMuted = signal(true);

  private readonly videoRef = viewChild<ElementRef<HTMLVideoElement>>('heroVideo');
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const video = this.videoRef()?.nativeElement;
      if (!video) return;

      // The `muted` attribute alone doesn't reliably mute the element when set
      // via Angular's renderer (vs. HTML parsing) — set the property directly
      // so browser autoplay-without-gesture policies allow playback.
      video.muted = true;
      video.play().catch(() => {});

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        },
        { threshold: 0.25 },
      );
      observer.observe(video);

      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected toggleMute(): void {
    const video = this.videoRef()?.nativeElement;
    if (!video) return;
    video.muted = !video.muted;
    this.isMuted.set(video.muted);
  }
}
