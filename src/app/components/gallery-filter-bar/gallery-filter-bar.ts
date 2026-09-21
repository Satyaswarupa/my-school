import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-gallery-filter-bar',
  imports: [],
  template: `
    <nav class="bg-brand-teal w-full overflow-x-auto">
      <ul class="flex w-max items-center gap-[18px] px-6 py-5 text-[16px] whitespace-nowrap text-[#f3f3f3] md:px-[100px]">
        @for (category of categories; track category) {
          <li>
            <button
              type="button"
              class="cursor-pointer"
              [class.underline]="activeCategory() === category"
              [class.font-bold]="activeCategory() === category"
              (click)="categorySelected.emit(category)"
            >
              {{ category }}
            </button>
          </li>
        }
      </ul>
    </nav>
  `,
})
export class GalleryFilterBar {
  protected readonly categories: string[] = [
    'All',
    'Academics',
    'Campus Life',
    'Sports',
    'Arts',
    'Events',
    'Technology',
    'Achievements',
    'Videos',
  ];

  readonly activeCategory = input('All');
  readonly categorySelected = output<string>();
}
