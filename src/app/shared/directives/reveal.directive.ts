import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  OnDestroy,
  inject,
  input,
  signal
} from '@angular/core';

type RevealMode = 'up' | 'left' | 'right' | 'scale';

@Directive({
  selector: '[appReveal]',
  host: {
    '[class.reveal]': "mode() === 'up'",
    '[class.reveal-left]': "mode() === 'left'",
    '[class.reveal-right]': "mode() === 'right'",
    '[class.reveal-scale]': "mode() === 'scale'",
    '[class.in-view]': 'isVisible()'
  }
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  readonly mode = input<RevealMode>('up', { alias: 'appReveal' });

  private readonly hostEl = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly observer = signal<IntersectionObserver | null>(null);

  protected readonly isVisible = signal(false);

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.isVisible.set(true);
            this.cdr.markForCheck();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(this.hostEl.nativeElement);
    this.observer.set(observer);
  }

  ngOnDestroy(): void {
    this.observer()?.disconnect();
  }
}
