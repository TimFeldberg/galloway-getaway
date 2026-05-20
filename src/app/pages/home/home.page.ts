import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ParallaxDirective } from '../../shared/directives/parallax.directive';
import { siteContent } from '../../content/site-content';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, RevealDirective, ParallaxDirective],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements AfterViewInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private animationContext?: gsap.Context;

  protected readonly content = siteContent.home;
  protected readonly highlights = siteContent.home.highlights;

  protected toWebp(path: string): string {
    return path.replace(/\.jpe?g$/i, '.webp');
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    this.animationContext = gsap.context(() => {
      gsap.from('.hero-line', {
        yPercent: 110,
        opacity: 0,
        stagger: 0.14,
        duration: 1.1,
        ease: 'power4.out'
      });
    }, this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.animationContext?.revert();
  }
}
