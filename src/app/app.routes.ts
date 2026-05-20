import { Routes } from '@angular/router';
import { siteContent } from './content/site-content';

export const appRoutes: Routes = [
  {
    path: '',
    title: siteContent.home.seoTitle,
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
    data: { animation: 'home', description: siteContent.home.seoDescription }
  },
  {
    path: 'ueber-uns',
    title: siteContent.about.seoTitle,
    loadComponent: () => import('./pages/about/about.page').then((m) => m.AboutPage),
    data: { animation: 'about', description: siteContent.about.seoDescription }
  },
  {
    path: 'farm',
    title: siteContent.farm.seoTitle,
    loadComponent: () => import('./pages/farm/farm.page').then((m) => m.FarmPage),
    data: { animation: 'farm', description: siteContent.farm.seoDescription }
  },
  {
    path: 'partnerschaften',
    title: siteContent.partnerships.seoTitle,
    loadComponent: () =>
      import('./pages/partnerships/partnerships.page').then((m) => m.PartnershipsPage),
    data: { animation: 'partnerships', description: siteContent.partnerships.seoDescription }
  },
  {
    path: 'patenschaft',
    title: siteContent.patenschaft.seoTitle,
    loadComponent: () =>
      import('./pages/patenschaft/patenschaft.page').then((m) => m.PatenschaftPage),
    data: { animation: 'patenschaft', description: siteContent.patenschaft.seoDescription }
  },
  {
    path: 'shop',
    title: siteContent.shop.seoTitle,
    loadComponent: () => import('./pages/shop/shop.page').then((m) => m.ShopPage),
    data: { animation: 'shop', description: siteContent.shop.seoDescription }
  },
  {
    path: 'kalender',
    title: siteContent.calendarPurchase.seoTitle,
    loadComponent: () => import('./pages/calendar/calendar.page').then((m) => m.CalendarPage),
    data: { animation: 'calendar', description: siteContent.calendarPurchase.seoDescription }
  },
  {
    path: 'impressum',
    title: siteContent.legal.imprint.seoTitle,
    loadComponent: () => import('./pages/imprint/imprint.page').then((m) => m.ImprintPage),
    data: { animation: 'imprint', description: siteContent.legal.imprint.seoDescription }
  },
  {
    path: 'datenschutz',
    title: siteContent.legal.privacy.seoTitle,
    loadComponent: () => import('./pages/privacy/privacy.page').then((m) => m.PrivacyPage),
    data: { animation: 'privacy', description: siteContent.legal.privacy.seoDescription }
  },
  {
    path: 'cookie-hinweis',
    title: siteContent.legal.cookies.seoTitle,
    loadComponent: () => import('./pages/cookies/cookies.page').then((m) => m.CookiesPage),
    data: { animation: 'cookies', description: siteContent.legal.cookies.seoDescription }
  },
  {
    path: '**',
    title: siteContent.notFound.seoTitle,
    loadComponent: () => import('./pages/not-found/not-found.page').then((m) => m.NotFoundPage),
    data: { animation: 'not-found', description: siteContent.notFound.seoDescription }
  }
];
