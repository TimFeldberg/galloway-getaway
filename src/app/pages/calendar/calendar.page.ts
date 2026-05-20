import { animate, style, transition, trigger } from '@angular/animations';
import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { siteContent } from '../../content/site-content';

@Component({
  selector: 'app-calendar-page',
  imports: [CurrencyPipe, RevealDirective],
  templateUrl: './calendar.page.html',
  styleUrl: './calendar.page.scss',
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
export class CalendarPage {
  protected readonly activePreview = signal(0);
  protected readonly quantity = signal(1);
  protected readonly purchaseTriggered = signal(false);
  protected readonly content = siteContent.calendarPurchase;
  protected readonly unitPrice = siteContent.calendarPurchase.unitPrice;
  protected readonly features = siteContent.calendarPurchase.features;
  protected readonly previewMonths = siteContent.calendarPurchase.previewMonths;

  protected readonly previewIndex = computed(() => this.activePreview());
  protected readonly activeMonth = computed(() => this.previewMonths[this.activePreview()]);
  protected readonly total = computed(() => this.quantity() * this.unitPrice);

  protected prevMonth(): void {
    this.purchaseTriggered.set(false);
    this.activePreview.update((index) =>
      index === 0 ? this.previewMonths.length - 1 : index - 1
    );
  }

  protected nextMonth(): void {
    this.purchaseTriggered.set(false);
    this.activePreview.update((index) =>
      index === this.previewMonths.length - 1 ? 0 : index + 1
    );
  }

  protected decreaseQuantity(): void {
    this.purchaseTriggered.set(false);
    this.quantity.update((value) => (value > 1 ? value - 1 : 1));
  }

  protected increaseQuantity(): void {
    this.purchaseTriggered.set(false);
    this.quantity.update((value) => value + 1);
  }

  protected buyNow(): void {
    this.purchaseTriggered.set(true);
  }

  protected toWebp(path: string): string {
    return path.replace(/\.jpe?g$/i, '.webp');
  }
}
