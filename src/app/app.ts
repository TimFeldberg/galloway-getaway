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
import { CartService } from './shared/services/cart.service';
import { AuthService } from './shared/services/auth.service';

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
  protected readonly accountDropdown = signal(false);
  private readonly authService = inject(AuthService);
  protected readonly isLoggedIn = this.authService.isLoggedIn;
  protected readonly currentUser = this.authService.currentUser;
  protected readonly cartCount = inject(CartService).cartCount;
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

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent): void {
    if (this.accountDropdown() && !(e.target as HTMLElement).closest('.account-menu')) {
      this.accountDropdown.set(false);
    }
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

  protected toggleAccountDropdown(): void {
    this.accountDropdown.update((v) => !v);
  }

  protected closeAccountDropdown(): void {
    this.accountDropdown.set(false);
  }

  protected login(): void {
    this.authService.login();
  }

  protected logout(): void {
    this.accountDropdown.set(false);
    this.authService.logout();
  }

  protected get userInitials(): string {
    const name = this.currentUser()?.name ?? '';
    return name.split(' ').map((w) => w[0]?.toUpperCase() ?? '').slice(0, 2).join('');
  }

  protected prepareRoute(outlet: RouterOutlet): string {
    return (outlet.activatedRouteData['animation'] as string) ?? 'root';
  }
}
