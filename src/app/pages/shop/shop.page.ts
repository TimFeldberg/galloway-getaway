import { ChangeDetectionStrategy, Component, computed, signal, inject } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CartService } from '../../shared/services/cart.service';
import { siteContent } from '../../content/site-content';

@Component({
  selector: 'app-shop-page',
  imports: [CurrencyPipe, RevealDirective, ReactiveFormsModule, RouterLink],
  templateUrl: './shop.page.html',
  styleUrl: './shop.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('previewSwap', [
      transition(':increment', [
        style({ opacity: 0, transform: 'translateX(48px)' }),
        animate('420ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':decrement', [
        style({ opacity: 0, transform: 'translateX(-48px)' }),
        animate('420ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ShopPage {
  private readonly fb = inject(FormBuilder);
  private readonly cartService = inject(CartService);

  // ── Shop ──────────────────────────────────────────────────────────────────
  protected readonly content = siteContent.shop;
  protected readonly products = siteContent.shop.products;

  protected readonly cart         = this.cartService.cart;
  protected readonly cartCount    = this.cartService.cartCount;
  protected readonly cartTotal    = this.cartService.cartTotal;
  protected readonly cartSummary  = this.cartService.cartSummary;

  protected readonly showCheckout   = signal(false);
  protected readonly orderSent      = signal(false);
  protected readonly confirmedItems = signal<string>('');

  // Detect whether the confirmed order contains snacks/calendar
  protected readonly confirmedHasCalendar = computed(() => {
    const summary = this.confirmedItems();
    return summary.includes(siteContent.calendarPurchase.heading);
  });

  protected readonly confirmedHasSnacks = computed(() => {
    const summary = this.confirmedItems();
    if (!summary) return false;
    return this.products.some((p) => summary.includes(p.name));
  });

  protected readonly form = this.fb.nonNullable.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required, Validators.minLength(10)]],
    notes:   ['']
  });

  // ── Kalender ──────────────────────────────────────────────────────────────
  protected readonly calContent     = siteContent.calendarPurchase;
  protected readonly calMonths      = siteContent.calendarPurchase.previewMonths;
  protected readonly calUnitPrice   = siteContent.calendarPurchase.unitPrice;

  protected readonly calPreviewIdx  = signal(0);
  protected readonly calQty         = signal(1);
  protected readonly calAdded       = signal(false);

  protected readonly activeMonth    = computed(() => this.calMonths[this.calPreviewIdx()]);
  protected readonly calTotal       = computed(() => this.calQty() * this.calUnitPrice);

  protected calGoTo(i: number): void {
    this.calAdded.set(false);
    this.calPreviewIdx.set(i);
  }

  protected calPrev(): void {
    this.calAdded.set(false);
    this.calPreviewIdx.update(i => (i === 0 ? this.calMonths.length - 1 : i - 1));
  }

  protected calNext(): void {
    this.calAdded.set(false);
    this.calPreviewIdx.update(i => (i === this.calMonths.length - 1 ? 0 : i + 1));
  }

  protected calDecQty(): void {
    this.calAdded.set(false);
    this.calQty.update(n => (n > 1 ? n - 1 : 1));
  }

  protected calIncQty(): void {
    this.calAdded.set(false);
    this.calQty.update(n => n + 1);
  }

  protected addCalendarToCart(): void {
    const qty = this.calQty();
    for (let i = 0; i < qty; i++) {
      this.cartService.addItem(this.calContent.heading, this.calUnitPrice);
    }
    this.calAdded.set(true);
  }

  // ── Shared ────────────────────────────────────────────────────────────────
  protected addToCart(name: string, price: number, image?: string): void {
    this.cartService.addItem(name, price, image);
  }

  protected removeFromCart(name: string): void {
    this.cartService.removeItem(name);
  }

  protected openCheckout(): void {
    this.showCheckout.set(true);
    setTimeout(() =>
      document.getElementById('checkout-section')?.scrollIntoView({ behavior: 'smooth' }), 50
    );
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const summary = this.cartSummary();

    const body = new URLSearchParams({
      'form-name':    'bestellung',
      name:           v.name,
      email:          v.email,
      address:        v.address,
      notes:          v.notes,
      warenkorb:      summary
    });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    })
      .catch(() => { /* dev – Netlify not available */ })
      .finally(() => {
        this.confirmedItems.set(summary);
        this.orderSent.set(true);
        this.showCheckout.set(false);
        this.cartService.clearCart();
        this.form.reset();
        setTimeout(() =>
          document.getElementById('order-confirm')?.scrollIntoView({ behavior: 'smooth' }), 50
        );
      });
  }

  protected toWebp(path: string): string {
    return path.replace(/\.jpe?g$/i, '.webp');
  }
}
