import { Component } from '@angular/core';
import { BranchesHero } from '../../components/branches-hero/branches-hero';
import { BranchCardsSection } from '../../components/branch-cards-section/branch-cards-section';
import { BranchesMapSection } from '../../components/branches-map-section/branches-map-section';
import { SiteFooter } from '../../components/site-footer/site-footer';

@Component({
  selector: 'app-branches',
  imports: [BranchesHero, BranchCardsSection, BranchesMapSection, SiteFooter],
  template: `
    <main class="flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-white">
      <app-branches-hero class="w-full" />
      <app-branch-cards-section class="w-full" />
      <app-branches-map-section class="w-full" />
      <app-site-footer class="w-full" />
    </main>
  `,
})
export class Branches {}
