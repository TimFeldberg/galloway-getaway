import { vi } from 'vitest';

vi.mock('gsap', () => ({
  default: {
    registerPlugin: vi.fn(),
    context: vi.fn(() => ({ revert: vi.fn() })),
    from: vi.fn(),
    to: vi.fn(),
    fromTo: vi.fn(),
    set: vi.fn()
  }
}));

vi.mock('gsap/ScrollTrigger', () => ({ ScrollTrigger: {} }));

import { TestBed } from '@angular/core/testing';
import { vi as _vi } from 'vitest';
import { IMAGE_LOADER } from '@angular/common';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { HomePage } from './home.page';

describe('HomePage', () => {
  beforeEach(() => {
    (window as any).IntersectionObserver = class {
      observe = _vi.fn();
      unobserve = _vi.fn();
      disconnect = _vi.fn();
    };
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [
        provideRouter([]),
        provideNoopAnimations(),
        { provide: IMAGE_LOADER, useValue: (cfg: { src: string }) => cfg.src }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomePage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render hero section', () => {
    const fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.hero')).not.toBeNull();
  });
});
