import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, inject, signal } from '@angular/core';
import {
  animate,
  group,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, startWith } from 'rxjs/operators';
import { siteContent } from './content/site-content';
import { CookieConsentComponent } from './app/cookie-consent/cookie-consent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CookieConsentComponent],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('routeTransition', [
      transition('* <=> *', [
        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              width: '100%',
              inset: 0
            })
          ],
          { optional: true }
        ),
        group([
          query(':leave', [animate('400ms ease', style({ opacity: 0, transform: 'translateY(-18px)' }))], {
            optional: true
          }),
          query(
            ':enter',
            [
              style({ opacity: 0, transform: 'translateY(24px) scale(0.985)' }),
              animate('650ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
            ],
            { optional: true }
          )
        ])
      ])
    ])
  ],
  styleUrl: './app.scss'
})
export class App {
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly headerHovered = signal(false);
  protected readonly ctaVisible = signal(false);
  protected readonly showWhatsApp = signal(false);
  protected readonly brand = siteContent.brand;
  protected readonly navItems = siteContent.navigation;

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        startWith(null),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        let route = this.router.routerState.root;

        while (route.firstChild) {
          route = route.firstChild;
        }

        const routeTitle = (route.snapshot.title as string | undefined) ?? this.brand.name;
        const routeDescription =
          (route.snapshot.data['description'] as string | undefined) ?? this.brand.shortTagline;

        this.title.setTitle(routeTitle);
        this.meta.updateTag({ name: 'description', content: routeDescription });
        this.meta.updateTag({ property: 'og:title', content: routeTitle });
        this.meta.updateTag({ property: 'og:description', content: routeDescription });
      });

    // WhatsApp FAB: sofort auf Mobile, nach 3 Sekunden auf Desktop
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        this.showWhatsApp.set(true);
      } else {
        setTimeout(() => this.showWhatsApp.set(true), 3000);
      }
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
    this.ctaVisible.set(window.scrollY > 200);
  }

  protected onHeaderEnter(): void {
    this.headerHovered.set(true);
  }

  protected onHeaderLeave(): void {
    this.headerHovered.set(false);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected prepareRoute(outlet: RouterOutlet): string {
    return (outlet.activatedRouteData['animation'] as string) ?? 'root';
  }
}
