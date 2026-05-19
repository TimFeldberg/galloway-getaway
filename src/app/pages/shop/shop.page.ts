import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { siteContent } from '../../content/site-content';

@Component({
  selector: 'app-shop-page',
  imports: [CurrencyPipe, NgOptimizedImage, RevealDirective],
  templateUrl: './shop.page.html',
  styleUrl: './shop.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopPage {
  protected readonly cartCount = signal(0);
  protected readonly cartTotal = signal(0);
  protected readonly content = siteContent.shop;
  protected readonly products = siteContent.shop.products;

  protected readonly subtotal = computed(() => this.cartTotal());

  protected addToCart(price: number): void {
    this.cartCount.update((count) => count + 1);
    this.cartTotal.update((sum) => Number((sum + price).toFixed(2)));
  }
}
