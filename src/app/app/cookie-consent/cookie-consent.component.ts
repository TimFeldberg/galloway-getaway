import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CookieService } from '../../shared/services/cookie.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-consent',
  imports: [RouterLink],
  template: `
    @if (!cookieService.hasPreferences()) {
      <div class="cookie-banner" role="region" aria-label="Cookie-Einwilligung">
        <div class="cookie-banner-content">
          <p>
            Wir nutzen Cookies und Analyse-Tools zur Verbesserung deiner Erfahrung. Mit der
            Akzeptanz akzeptierst du unsere
            <a routerLink="/datenschutz" class="cookie-link">Datenschutzerklärung</a>.
          </p>

          <div class="cookie-banner-actions">
            <button
              type="button"
              class="btn-accept-all"
              (click)="acceptAll()"
              aria-label="Alle Cookies akzeptieren"
            >
              Alle akzeptieren
            </button>

            <button
              type="button"
              class="btn-necessary-only"
              (click)="acceptNecessary()"
              aria-label="Nur notwendige Cookies"
            >
              Notwendig
            </button>

            <a routerLink="/cookie-hinweis" class="btn-details"
              >Details</a
            >
          </div>
        </div>
      </div>
    }
  `,
  styleUrl: './cookie-consent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookieConsentComponent {
  protected readonly cookieService = inject(CookieService);

  acceptAll(): void {
    this.cookieService.acceptAll();
  }

  acceptNecessary(): void {
    this.cookieService.acceptNecessary();
  }
}
