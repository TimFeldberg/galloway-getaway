import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ParallaxDirective } from '../../shared/directives/parallax.directive';
import { siteContent } from '../../content/site-content';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, NgOptimizedImage, RevealDirective, ParallaxDirective],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements AfterViewInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private animationContext?: gsap.Context;

  protected readonly content = siteContent.home;
  protected readonly highlights = siteContent.home.highlights;

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

      gsap.from('.hero-cta .btn', {
        y: 20,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        delay: 0.25,
        ease: 'power3.out'
      });

      gsap.utils.toArray<HTMLElement>('.story-block').forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 80,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%'
          }
        });
      });
    }, this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.animationContext?.revert();
  }
}
