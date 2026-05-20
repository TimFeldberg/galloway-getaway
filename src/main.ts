import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withInMemoryScrolling, NavigationEnd, Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID, inject } from '@angular/core';
import { App } from './app/app';
import { appRoutes } from './app/app.routes';
import { AnalyticsService } from './app/shared/services/analytics.service';
import { filter } from 'rxjs/operators';

registerLocaleData(localeDe);

bootstrapApplication(App, {
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
    provideAnimations(),
    provideRouter(
      appRoutes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      })
    ),
    {
      // Initialize Analytics on router events
      provide: 'ANALYTICS_INITIALIZER',
      useFactory: () => {
        const router = inject(Router);
        const analytics = inject(AnalyticsService);

        router.events
          .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
          .subscribe((event: NavigationEnd) => {
            analytics.trackPageView(event.urlAfterRedirects, document.title);
          });

        return () => void 0;
      },
      multi: true
    }
  ]
}).catch((err: unknown) => console.error(err));

