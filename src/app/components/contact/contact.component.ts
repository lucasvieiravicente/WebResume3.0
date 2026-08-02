import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly api = inject(ApiService);
  private readonly fb = inject(FormBuilder);
  readonly i18n = inject(I18nService);

  readonly disabled = signal(false);
  readonly responseMessage = signal('');

  emailForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.maxLength(13)]],
    body: ['', Validators.required],
    subject: ['']
  });

  sendEmail(): void {
    if (this.emailForm.invalid) {
      this.emailForm.markAllAsTouched();
      this.responseMessage.set(this.i18n.t().contact.required);
      return;
    }

    this.responseMessage.set('');
    this.disabled.set(true);

    this.api.sendEmail(this.emailForm.getRawValue()).subscribe({
      next: (data) => {
        this.emailForm.reset();
        this.disabled.set(false);
        this.responseMessage.set(data || this.i18n.t().contact.successFallback);
      },
      error: (error: HttpErrorResponse) => {
        this.catchError(error);
        this.disabled.set(false);
      }
    });
  }

  private catchError(response: HttpErrorResponse): void {
    try {
      const jsonResponse = typeof response.error === 'string' ? JSON.parse(response.error) : response.error;
      const errors = jsonResponse?.errors;
      if (!errors) {
        this.responseMessage.set(this.i18n.t().contact.errorFallback);
        return;
      }

      const messages: string[] = [];
      for (const key of Object.keys(errors)) {
        messages.push(...(errors[key] as string[]));
      }
      this.responseMessage.set(messages.join(' '));
    } catch {
      this.responseMessage.set(this.i18n.t().contact.errorFallback);
    }
  }
}
