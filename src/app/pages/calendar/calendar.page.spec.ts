import { TestBed } from '@angular/core/testing';
import { IMAGE_LOADER } from '@angular/common';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { CalendarPage } from './calendar.page';

describe('CalendarPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarPage],
      providers: [
        provideNoopAnimations(),
        { provide: IMAGE_LOADER, useValue: (cfg: { src: string }) => cfg.src }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CalendarPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('calendar content is loaded', () => {
    const fixture = TestBed.createComponent(CalendarPage);
    const comp = fixture.componentInstance as any;
    expect(comp.content).toBeTruthy();
  });
});
