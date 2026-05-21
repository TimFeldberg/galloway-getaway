import { computed, effect, Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

// netlify-identity-widget is loaded as a global script via angular.json.
// Minimal type declaration for the methods we use:
interface NiWidget {
  init(): void;
  open(tab?: 'login' | 'signup'): void;
  close(): void;
  logout(): void;
  currentUser(): NiUser | null;
  on(event: 'login', cb: (user: NiUser) => void): void;
  on(event: 'logout', cb: () => void): void;
}
interface NiUser {
  id: string;
  email: string;
  user_metadata?: Record<string, string>;
}
declare const netlifyIdentity: NiWidget;

// ── Domain interfaces ────────────────────────────────────────────────────────

export interface Bestellung {
  id: string;
  datum: string;
  artikel: { name: string; qty: number; price: number }[];
  typ: 'snack' | 'kalender';
  status: 'verarbeitung' | 'gefuettert' | 'versendet';
  videoUrl?: string;
}

export interface PatenschaftInfo {
  tier: 'mara' | 'bram' | 'nola';
  paket: 'basis' | 'plus' | 'premium';
  seit: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  patenschaft?: PatenschaftInfo[];
  bestellungen?: Bestellung[];
}

// ── Storage key ──────────────────────────────────────────────────────────────

const STORAGE_KEY = 'gg-user';

function loadUser(): User | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}

// ── Demo orders shown when logged in (replace with real API later) ────────────
const DEMO_ORDERS: Bestellung[] = [
  {
    id: 'GG-2026-001',
    datum: '2026-04-15',
    artikel: [{ name: 'Galloway Cookies Classic', qty: 2, price: 6.9 }],
    typ: 'snack',
    status: 'gefuettert',
    // TODO: echtes Video einfügen
    videoUrl: '/media/feeding-video-placeholder.mp4'
  },
  {
    id: 'GG-2026-002',
    datum: '2026-05-02',
    artikel: [{ name: 'Play-Mooo-Kalender', qty: 1, price: 29 }],
    typ: 'kalender',
    status: 'versendet'
  }
];

// ── Demo patenschaft shown when logged in ────────────────────────────────────
const DEMO_PATENSCHAFT: PatenschaftInfo[] = [
  { tier: 'mara', paket: 'plus', seit: '2026-03-01' }
];

// ── Service ──────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly router = inject(Router);

  readonly currentUser = signal<User | null>(loadUser());
  readonly isLoggedIn = computed(() => this.currentUser() !== null);

  constructor() {
    if (typeof netlifyIdentity === 'undefined') return; // not loaded (e.g. test env)

    netlifyIdentity.init();

    // Restore session from Netlify Identity if widget has an active user
    const niUser = netlifyIdentity.currentUser();
    if (niUser) {
      this._applyNetlifyUser(niUser);
    }

    netlifyIdentity.on('login', (niUser) => {
      this._applyNetlifyUser(niUser);
      netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', () => {
      this.currentUser.set(null);
      localStorage.removeItem(STORAGE_KEY);
    });

    // Persist to localStorage whenever user changes
    effect(() => {
      const user = this.currentUser();
      if (user) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      }
    });
  }

  login(): void {
    if (typeof netlifyIdentity === 'undefined') return;
    netlifyIdentity.open('login');
  }

  logout(): void {
    if (typeof netlifyIdentity === 'undefined') return;
    netlifyIdentity.logout();
    this.router.navigate(['/']);
  }

  // ── Private ────────────────────────────────────────────────────────────────

  private _applyNetlifyUser(niUser: NiUser): void {
    const cached = loadUser();
    // Merge: use cached bestellungen / patenschaft or demo data for new users
    const user: User = {
      id: niUser.id,
      email: niUser.email,
      name: niUser.user_metadata?.['full_name'] ?? niUser.email.split('@')[0],
      avatar: niUser.user_metadata?.['avatar_url'],
      patenschaft: cached?.patenschaft ?? DEMO_PATENSCHAFT,
      bestellungen: cached?.bestellungen ?? DEMO_ORDERS
    };
    this.currentUser.set(user);
  }
}
