import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CookiesPage } from './cookies.page';

describe('CookiesPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookiesPage],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CookiesPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render Cookie-Hinweis heading', () => {
    const fixture = TestBed.createComponent(CookiesPage);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h1')?.textContent).toContain('Cookies und Tracking');
  });
});
