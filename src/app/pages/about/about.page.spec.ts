import { TestBed } from '@angular/core/testing';
import { IMAGE_LOADER } from '@angular/common';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { AboutPage } from './about.page';

describe('AboutPage', () => {
  beforeEach(() => {
    (window as any).IntersectionObserver = class {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    };
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPage],
      providers: [
        provideRouter([]),
        { provide: IMAGE_LOADER, useValue: (cfg: { src: string }) => cfg.src }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AboutPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render page title', () => {
    const fixture = TestBed.createComponent(AboutPage);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h1')).not.toBeNull();
  });
});
