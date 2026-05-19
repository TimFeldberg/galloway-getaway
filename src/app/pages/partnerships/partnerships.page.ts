import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { siteContent } from '../../content/site-content';

@Component({
  selector: 'app-partnerships-page',
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './partnerships.page.html',
  styleUrl: './partnerships.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnershipsPage {
  private readonly fb = inject(FormBuilder);
  protected readonly sent = signal(false);
  protected readonly content = siteContent.partnerships;
  protected readonly benefits = siteContent.partnerships.benefits;

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    company: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(15)]]
  });

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sent.set(true);
    this.form.reset();
  }
}
