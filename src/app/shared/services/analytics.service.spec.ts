import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { AnalyticsService } from './analytics.service';
import { CookieService } from './cookie.service';

describe('AnalyticsService', () => {
  let service: AnalyticsService;
  let cookieService: CookieService;

  beforeEach(() => {
    localStorage.clear();
    (window as any).gtag = undefined;
    TestBed.configureTestingModule({});
    cookieService = TestBed.inject(CookieService);
    service = TestBed.inject(AnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('trackPageView() does nothing without consent', () => {
    const gtagSpy = vi.fn();
    (window as any).gtag = gtagSpy;
    service.trackPageView('/test');
    expect(gtagSpy).not.toHaveBeenCalled();
  });

  it('trackEvent() does nothing without consent', () => {
    const gtagSpy = vi.fn();
    (window as any).gtag = gtagSpy;
    service.trackEvent('click');
    expect(gtagSpy).not.toHaveBeenCalled();
  });

  it('trackPageView() does nothing when only necessary cookies accepted', () => {
    // analytics: false → guard must block the call
    cookieService.acceptNecessary();
    const gtagSpy = vi.fn();
    (window as any).gtag = gtagSpy;
    service.trackPageView('/farm', 'Farm');
    expect(gtagSpy).not.toHaveBeenCalled();
  });

  it('trackEvent() does nothing when only necessary cookies accepted', () => {
    cookieService.acceptNecessary();
    const gtagSpy = vi.fn();
    (window as any).gtag = gtagSpy;
    service.trackEvent('purchase');
    expect(gtagSpy).not.toHaveBeenCalled();
  });
});
