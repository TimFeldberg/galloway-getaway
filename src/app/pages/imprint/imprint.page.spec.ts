import { TestBed } from '@angular/core/testing';
import { ImprintPage } from './imprint.page';

describe('ImprintPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprintPage]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ImprintPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render Impressum heading', () => {
    const fixture = TestBed.createComponent(ImprintPage);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h1')?.textContent).toContain('Anbieterkennzeichnung');
  });
});
