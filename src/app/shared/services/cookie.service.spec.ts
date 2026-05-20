import { TestBed } from '@angular/core/testing';
import { CookieService } from './cookie.service';

describe('CookieService', () => {
  let service: CookieService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with null preferences', () => {
    expect(service.preferences()).toBeNull();
    expect(service.hasPreferences()).toBe(false);
    expect(service.consentGiven()).toBe(false);
  });

  it('acceptAll() sets all preferences to true', () => {
    service.acceptAll();
    const prefs = service.preferences();
    expect(prefs?.necessary).toBe(true);
    expect(prefs?.analytics).toBe(true);
    expect(prefs?.marketing).toBe(true);
    expect(service.hasPreferences()).toBe(true);
    expect(service.consentGiven()).toBe(true);
  });

  it('acceptNecessary() sets only necessary to true', () => {
    service.acceptNecessary();
    const prefs = service.preferences();
    expect(prefs?.necessary).toBe(true);
    expect(prefs?.analytics).toBe(false);
    expect(prefs?.marketing).toBe(false);
  });

  it('reset() clears preferences', () => {
    service.acceptAll();
    service.reset();
    expect(service.preferences()).toBeNull();
    expect(service.hasPreferences()).toBe(false);
  });

  it('persists preferences to localStorage', () => {
    service.acceptAll();
    const stored = localStorage.getItem('galloway-cookie-consent');
    expect(stored).not.toBeNull();
    const parsed = JSON.parse(stored!);
    expect(parsed.analytics).toBe(true);
  });

  it('loads existing preferences from localStorage on init', () => {
    const prefs = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem('galloway-cookie-consent', JSON.stringify(prefs));

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    const freshService = TestBed.inject(CookieService);

    expect(freshService.preferences()?.analytics).toBe(false);
    expect(freshService.hasPreferences()).toBe(true);
  });
});
