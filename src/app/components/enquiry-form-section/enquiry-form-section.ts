import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import emailjs from '@emailjs/browser';
import { figmaAssets } from '../../shared/figma-assets';
import { emailjsConfig } from '../../shared/emailjs-config';

interface EnquiryField {
  label: string;
  placeholder: string;
  type: 'text' | 'tel' | 'email';
  model: 'user_name' | 'user_phone' | 'user_email' | 'grade';
  required: boolean;
}

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-enquiry-form-section',
  imports: [FormsModule],
  template: `
    <section id="lets-connect" class="flex w-full scroll-mt-24 flex-col items-start gap-10 bg-white px-6 py-10 md:px-12 lg:px-[100px] md:py-16 xl:flex-row xl:items-center xl:justify-between">
      <div class="flex w-full max-w-[558px] flex-col items-start gap-10">
        <div class="flex flex-col items-start gap-3.5">
          <div class="flex items-center gap-3">
            <span class="h-px w-[46px] bg-[#007381]"></span>
            <span class="text-brand-teal text-[18px] md:text-[22px] font-medium">Send an Enquiry</span>
          </div>
          <h2 class="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-black">
            Let's <span class="text-brand-teal">Connect</span>
          </h2>
        </div>

        <form #enquiryForm="ngForm" class="flex w-full flex-col items-center gap-10" (ngSubmit)="submit(enquiryForm)">
          <div class="flex w-full flex-col items-start gap-2.5">
            @for (field of fields; track field.model) {
              <label class="flex w-full flex-col items-start gap-2">
                <span class="text-brand-teal text-[18px] md:text-[20px] font-medium">{{ field.label }}</span>
                <input
                  [type]="field.type"
                  [placeholder]="field.placeholder"
                  [name]="field.model"
                  [required]="field.required"
                  [(ngModel)]="formData[field.model]"
                  class="w-full border-0 border-b border-[#d9d9d9] pb-2 text-[16px] md:text-[18px] text-[#474747] outline-none focus:border-brand-teal"
                />
              </label>
            }
          </div>

          @if (status() === 'success') {
            <p class="text-brand-teal w-full text-base font-medium">
              Thanks! Your enquiry has been sent — we'll get back to you shortly.
            </p>
          } @else if (status() === 'error') {
            <p class="w-full text-base font-medium text-red-600">
              Something went wrong sending your enquiry. Please try again in a moment.
            </p>
          }

          <button
            type="submit"
            [disabled]="status() === 'sending'"
            class="bg-brand-orange flex items-center gap-2 self-start rounded px-6 py-3 text-[16px] md:text-[18px] font-medium text-[#f3f3f3] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {{ status() === 'sending' ? 'Sending…' : 'Submit Your Request' }}
            <img [src]="assets.telegramIcon" alt="" class="size-6" />
          </button>
        </form>
      </div>

      <img
        [src]="assets.admissionsFormIllustration"
        alt=""
        class="h-[480px] w-[445px] max-w-full shrink-0 self-center object-contain object-center md:h-[640px] md:w-[460px] xl:mr-10 xl:h-[850px] xl:w-[680px] xl:-translate-y-10 xl:object-fill"
      />
    </section>
  `,
})
export class EnquiryFormSection {
  protected readonly assets = figmaAssets;
  private readonly route = inject(ActivatedRoute);

  protected readonly fields: EnquiryField[] = [
    { label: 'Parents Name', placeholder: 'Enter your name', type: 'text', model: 'user_name', required: true },
    { label: 'Phone Number', placeholder: 'Enter your mobile number', type: 'tel', model: 'user_phone', required: true },
    { label: 'Email Address', placeholder: 'Enter your Email Address', type: 'email', model: 'user_email', required: true },
    { label: 'Grade Applying for', placeholder: 'Enter Grade', type: 'text', model: 'grade', required: false },
  ];

  protected formData: Record<EnquiryField['model'], string> = {
    user_name: '',
    user_phone: '',
    user_email: this.route.snapshot.queryParamMap.get('email') ?? '',
    grade: '',
  };

  protected readonly status = signal<SubmitStatus>('idle');

  protected async submit(form: NgForm): Promise<void> {
    if (form.invalid) {
      return;
    }

    this.status.set('sending');
    try {
      await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, { ...this.formData }, {
        publicKey: emailjsConfig.publicKey,
      });
      this.status.set('success');
      form.resetForm();
    } catch {
      this.status.set('error');
    }
  }
}
