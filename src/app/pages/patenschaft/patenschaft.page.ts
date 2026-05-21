import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { siteContent } from '../../content/site-content';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-patenschaft-page',
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './patenschaft.page.html',
  styleUrl: './patenschaft.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatenschaftPage {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  protected readonly sent = signal(false);
  protected readonly content = siteContent.patenschaft;
  protected readonly animals = siteContent.farm.animals;
  protected readonly packages = siteContent.patenschaft.packages;
  protected readonly isLoggedIn = this.auth.isLoggedIn;
  protected readonly currentUser = this.auth.currentUser;

  protected readonly form = this.fb.nonNullable.group({
    name: [this.auth.currentUser()?.name ?? '', [Validators.required, Validators.minLength(2)]],
    email: [this.auth.currentUser()?.email ?? '', [Validators.required, Validators.email]],
    animal: ['', Validators.required],
    package: ['plus', Validators.required],
    message: ['']
  });

  protected login(): void {
    this.auth.login();
  }

  protected toWebp(path: string): string {
    return path.replace(/\.jpe?g$/i, '.webp');
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const body = new URLSearchParams({
      'form-name': 'patenschaft',
      name:        v.name,
      email:       v.email,
      animal:      v.animal,
      package:     v.package,
      message:     v.message
    });
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    })
      .catch(() => { /* dev */ })
      .finally(() => {
        this.sent.set(true);
        this.form.reset();
      });
  }
}
