import { TestBed } from '@angular/core/testing';
import { PartnershipsPage } from './partnerships.page';

describe('PartnershipsPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnershipsPage]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PartnershipsPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('form is invalid when empty', () => {
    const fixture = TestBed.createComponent(PartnershipsPage);
    const comp = fixture.componentInstance as any;
    expect(comp.form.invalid).toBe(true);
  });

  it('submit() with invalid form does not set sent', () => {
    const fixture = TestBed.createComponent(PartnershipsPage);
    const comp = fixture.componentInstance as any;
    comp.submit();
    expect(comp.sent()).toBe(false);
  });

  it('submit() with valid form sets sent to true', () => {
    const fixture = TestBed.createComponent(PartnershipsPage);
    const comp = fixture.componentInstance as any;
    comp.form.setValue({
      name: 'Max Mustermann',
      company: 'Muster GmbH',
      email: 'max@example.com',
      message: 'Ich bin sehr interessiert an einer Partnerschaft.'
    });
    comp.submit();
    expect(comp.sent()).toBe(true);
  });

  it('submit() resets form after successful submission', () => {
    const fixture = TestBed.createComponent(PartnershipsPage);
    const comp = fixture.componentInstance as any;
    comp.form.setValue({
      name: 'Max Mustermann',
      company: 'Muster GmbH',
      email: 'max@example.com',
      message: 'Ich bin sehr interessiert an einer Partnerschaft.'
    });
    comp.submit();
    expect(comp.form.value.name).toBe('');
  });
});
