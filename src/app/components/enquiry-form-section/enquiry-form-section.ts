import { Component } from '@angular/core';
import { figmaAssets } from '../../shared/figma-assets';

interface EnquiryField {
  label: string;
  placeholder: string;
  type: 'text' | 'tel' | 'email';
}

@Component({
  selector: 'app-enquiry-form-section',
  imports: [],
  template: `
    <section class="flex w-full flex-col items-center gap-10 bg-white px-6 py-10 md:px-[100px] md:py-16 lg:flex-row lg:items-center lg:justify-between">
      <div class="flex w-full max-w-[558px] flex-col items-start gap-10">
        <div class="flex flex-col items-start gap-[60px]">
          <div class="flex items-center gap-3">
            <img [src]="assets.lineShortAlt2" alt="" class="h-px w-[46px]" />
            <span class="text-brand-teal text-lg font-medium">Send an Enquiry</span>
          </div>
          <h2 class="text-4xl font-bold text-black md:text-[48px]">
            Let's <span class="text-brand-teal">Connect</span>
          </h2>
        </div>

        <form class="flex w-full flex-col items-center gap-10">
          <div class="flex w-full flex-col items-start gap-[18px]">
            @for (field of fields; track field.label) {
              <label class="flex w-full flex-col items-start gap-3.5">
                <span class="text-brand-teal text-lg font-medium">{{ field.label }}</span>
                <input
                  [type]="field.type"
                  [placeholder]="field.placeholder"
                  class="w-full border-0 border-b border-[#d9d9d9] pb-2 text-sm text-[#474747] outline-none focus:border-brand-teal"
                />
              </label>
            }
          </div>
          <button
            type="submit"
            class="bg-brand-orange flex items-center gap-2.5 self-start rounded p-5 text-lg font-medium text-[#f3f3f3]"
          >
            Submit Your Request
            <img [src]="assets.telegramIcon" alt="" class="size-6" />
          </button>
        </form>
      </div>

      <img
        [src]="assets.admissionsFormIllustration"
        alt=""
        class="aspect-[445/507] w-full max-w-[445px] object-cover"
      />
    </section>
  `,
})
export class EnquiryFormSection {
  protected readonly assets = figmaAssets;

  protected readonly fields: EnquiryField[] = [
    { label: 'Parents Name', placeholder: 'Enter your name', type: 'text' },
    { label: 'Phone Number', placeholder: 'Enter your mobile number', type: 'tel' },
    { label: 'Email Address', placeholder: 'Enter your Email Address', type: 'email' },
    { label: 'Grade Applying for', placeholder: 'Enter Grade', type: 'text' },
  ];
}
