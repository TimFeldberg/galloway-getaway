import { TestBed } from '@angular/core/testing';
import { PatenschaftPage } from './patenschaft.page';

describe('PatenschaftPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatenschaftPage]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PatenschaftPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('form is invalid when empty', () => {
    const fixture = TestBed.createComponent(PatenschaftPage);
    const comp = fixture.componentInstance as any;
    expect(comp.form.invalid).toBe(true);
  });

  it('submit() with invalid form does not set sent', () => {
    const fixture = TestBed.createComponent(PatenschaftPage);
    const comp = fixture.componentInstance as any;
    comp.submit();
    expect(comp.sent()).toBe(false);
  });

  it('submit() with valid form sets sent to true', () => {
    const fixture = TestBed.createComponent(PatenschaftPage);
    const comp = fixture.componentInstance as any;
    comp.form.setValue({
      name: 'Anna Muster',
      email: 'anna@example.de',
      animal: 'mara',
      package: 'plus',
      message: ''
    });
    comp.submit();
    expect(comp.sent()).toBe(true);
  });

  it('defaults to "plus" package', () => {
    const fixture = TestBed.createComponent(PatenschaftPage);
    const comp = fixture.componentInstance as any;
    expect(comp.form.get('package').value).toBe('plus');
  });

  it('exposes 3 packages from content', () => {
    const fixture = TestBed.createComponent(PatenschaftPage);
    const comp = fixture.componentInstance as any;
    expect(comp.packages.length).toBe(3);
  });

  it('exposes 3 animals', () => {
    const fixture = TestBed.createComponent(PatenschaftPage);
    const comp = fixture.componentInstance as any;
    expect(comp.animals.length).toBe(3);
  });
});
