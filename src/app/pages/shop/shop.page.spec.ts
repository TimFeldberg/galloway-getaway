import { TestBed } from '@angular/core/testing';
import { IMAGE_LOADER } from '@angular/common';
import { ShopPage } from './shop.page';

describe('ShopPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopPage],
      providers: [
        { provide: IMAGE_LOADER, useValue: (cfg: { src: string }) => cfg.src }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ShopPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('cart starts empty', () => {
    const fixture = TestBed.createComponent(ShopPage);
    const comp = fixture.componentInstance as any;
    expect(comp.cartCount()).toBe(0);
    expect(comp.cartTotal()).toBe(0);
  });

  it('addToCart() increments count and total', () => {
    const fixture = TestBed.createComponent(ShopPage);
    const comp = fixture.componentInstance as any;
    comp.addToCart(14.99);
    comp.addToCart(14.99);
    expect(comp.cartCount()).toBe(2);
    expect(comp.cartTotal()).toBe(29.98);
  });

  it('subtotal reflects cartTotal', () => {
    const fixture = TestBed.createComponent(ShopPage);
    const comp = fixture.componentInstance as any;
    comp.addToCart(9.99);
    expect(comp.subtotal()).toBe(9.99);
  });
});
