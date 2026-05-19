import {
  AfterViewInit,
  Directive,
  ElementRef,
  NgZone,
  OnDestroy,
  Renderer2,
  inject,
  input,
  numberAttribute
} from '@angular/core';
import { fromEvent, Subscription, animationFrameScheduler } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective implements AfterViewInit, OnDestroy {
  readonly intensity = input(0.14, { alias: 'appParallax', transform: numberAttribute });

  private readonly hostEl = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly zone = inject(NgZone);
  private scrollSub?: Subscription;
  private elementTop = 0;

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.elementTop =
      this.hostEl.nativeElement.getBoundingClientRect().top + window.scrollY;

    this.zone.runOutsideAngular(() => {
      this.scrollSub = fromEvent(window, 'scroll')
        .pipe(throttleTime(16, animationFrameScheduler, { leading: true, trailing: true }))
        .subscribe(() => {
          const offset = (window.scrollY - this.elementTop) * this.intensity();
          this.renderer.setStyle(
            this.hostEl.nativeElement,
            'transform',
            `translate3d(0, ${offset}px, 0) scale(1.04)`
          );
        });
    });
  }

  ngOnDestroy(): void {
    this.scrollSub?.unsubscribe();
  }
}
