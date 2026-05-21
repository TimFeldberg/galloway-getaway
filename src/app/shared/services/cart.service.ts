import { Injectable, signal, computed, effect } from '@angular/core';

export interface CartItem {
  name: string;
  price: number;
  qty: number;
  image?: string;
}

const STORAGE_KEY = 'gg-cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  readonly cart = signal<CartItem[]>(this.loadFromStorage());

  readonly cartCount = computed(() =>
    this.cart().reduce((sum, i) => sum + i.qty, 0)
  );

  readonly cartTotal = computed(() =>
    Number(this.cart().reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2))
  );

  readonly cartSummary = computed(() =>
    this.cart().map(i => `${i.qty}x ${i.name}`).join(', ')
  );

  constructor() {
    effect(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cart()));
      } catch {
        // localStorage nicht verfügbar (z. B. SSR)
      }
    });
  }

  addItem(name: string, price: number, image?: string): void {
    this.cart.update(items => {
      const existing = items.find(i => i.name === name);
      if (existing) {
        return items.map(i => i.name === name ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...items, { name, price, qty: 1, image }];
    });
  }

  removeItem(name: string): void {
    this.cart.update(items => {
      const existing = items.find(i => i.name === name);
      if (!existing) return items;
      if (existing.qty === 1) return items.filter(i => i.name !== name);
      return items.map(i => i.name === name ? { ...i, qty: i.qty - 1 } : i);
    });
  }

  clearCart(): void {
    this.cart.set([]);
  }

  private loadFromStorage(): CartItem[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed as CartItem[];
    } catch {
      // ignore parse errors
    }
    return [];
  }
}
