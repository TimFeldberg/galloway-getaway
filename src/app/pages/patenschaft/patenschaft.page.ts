import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { siteContent } from '../../content/site-content';

@Component({
  selector: 'app-patenschaft-page',
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './patenschaft.page.html',
  styleUrl: './patenschaft.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatenschaftPage {
  private readonly fb = inject(FormBuilder);
  protected readonly sent = signal(false);
  protected readonly content = siteContent.patenschaft;
  protected readonly animals = siteContent.farm.animals;
  protected readonly packages = siteContent.patenschaft.packages;

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    animal: ['', Validators.required],
    package: ['plus', Validators.required],
    message: ['']
  });

  protected toWebp(path: string): string {
    return path.replace(/\.jpe?g$/i, '.webp');
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sent.set(true);
    this.form.reset();
  }
}
