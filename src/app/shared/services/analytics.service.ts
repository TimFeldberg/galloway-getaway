import { Injectable, inject, effect } from '@angular/core';
import { CookieService } from './cookie.service';
import { environment } from '../../../environments/environment';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private readonly cookieService = inject(CookieService);
  private gaInitialized = false;

  constructor() {
    // Reaktive Analytics-Aktivierung basierend auf Cookie-Consent
    effect(() => {
      const prefs = this.cookieService.preferences();
      if (prefs?.analytics && !this.gaInitialized && environment.googleAnalyticsId) {
        this.initializeGoogleAnalytics();
      }
    });
  }

  private initializeGoogleAnalytics(): void {
    if (this.gaInitialized || !environment.googleAnalyticsId) {
      return;
    }

    // Google Analytics Script einfügen
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${environment.googleAnalyticsId}`;
    document.head.appendChild(script);

    // DataLayer initialisieren
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args);
    };

    // GA Configuration
    window.gtag('js', new Date());
    window.gtag('config', environment.googleAnalyticsId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });

    this.gaInitialized = true;
  }

  /**
   * Track a page view event (called automatically by router)
   */
  trackPageView(path: string, title?: string): void {
    if (!this.cookieService.consentGiven() || !environment.googleAnalyticsId) {
      return;
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: title
      });
    }
  }

  /**
   * Track custom events
   */
  trackEvent(eventName: string, eventData?: Record<string, unknown>): void {
    if (!this.cookieService.consentGiven() || !environment.googleAnalyticsId) {
      return;
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventData);
    }
  }
}
