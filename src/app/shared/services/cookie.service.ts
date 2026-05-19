import { Injectable, inject } from '@angular/core';
import { signal, computed } from '@angular/core';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  private readonly storageKey = 'galloway-cookie-consent';
  private readonly preferencesSignal = signal<CookiePreferences | null>(this.loadFromStorage());

  preferences = this.preferencesSignal.asReadonly();
  hasPreferences = computed(() => this.preferencesSignal() !== null);
  consentGiven = computed(() => {
    const prefs = this.preferencesSignal();
    return prefs ? prefs.necessary : false;
  });

  private loadFromStorage(): CookiePreferences | null {
    if (typeof localStorage === 'undefined') {
      return null;
    }

    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }

  setPreferences(prefs: CookiePreferences): void {
    this.preferencesSignal.set(prefs);

    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(prefs));
      } catch {
        console.warn('Unable to save cookie preferences to localStorage');
      }
    }
  }

  acceptAll(): void {
    this.setPreferences({
      necessary: true,
      analytics: true,
      marketing: true
    });
  }

  acceptNecessary(): void {
    this.setPreferences({
      necessary: true,
      analytics: false,
      marketing: false
    });
  }

  reset(): void {
    this.preferencesSignal.set(null);

    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.removeItem(this.storageKey);
      } catch {
        console.warn('Unable to clear cookie preferences from localStorage');
      }
    }
  }
}
