import { TestBed } from '@angular/core/testing';
import { IMAGE_LOADER } from '@angular/common';
import { FarmPage } from './farm.page';

describe('FarmPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmPage],
      providers: [
        { provide: IMAGE_LOADER, useValue: (cfg: { src: string }) => cfg.src }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(FarmPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('starts with first animal selected', () => {
    const fixture = TestBed.createComponent(FarmPage);
    const comp = fixture.componentInstance as any;
    expect(comp.activeAnimal()).toBe(0);
  });

  it('setAnimal() updates active animal', () => {
    const fixture = TestBed.createComponent(FarmPage);
    const comp = fixture.componentInstance as any;
    comp.setAnimal(2);
    expect(comp.activeAnimal()).toBe(2);
  });
});
