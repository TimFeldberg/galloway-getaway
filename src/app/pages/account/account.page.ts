import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService, Bestellung, PatenschaftInfo } from '../../shared/services/auth.service';
import { VideoOverlayComponent } from '../../shared/components/video-overlay/video-overlay.component';
import { siteContent } from '../../content/site-content';

type Tab = 'patenschaften' | 'bestellungen' | 'profil';

@Component({
  selector: 'app-account-page',
  imports: [RouterLink, DecimalPipe, VideoOverlayComponent],
  templateUrl: './account.page.html',
  styleUrl: './account.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountPage {
  private readonly auth = inject(AuthService);
  protected readonly animals = siteContent.farm.animals;

  protected readonly activeTab = signal<Tab>('patenschaften');
  protected readonly videoUrl = signal<string | null>(null);

  protected readonly user = this.auth.currentUser;

  protected readonly patenschaften = computed(() => this.user()?.patenschaft ?? []);
  protected readonly bestellungen  = computed(() => this.user()?.bestellungen ?? []);

  protected readonly initials = computed(() => {
    const name = this.user()?.name ?? '';
    return name
      .split(' ')
      .map((w) => w[0]?.toUpperCase() ?? '')
      .slice(0, 2)
      .join('');
  });

  protected setTab(tab: Tab): void {
    this.activeTab.set(tab);
  }

  protected animalForPatenschaft(p: PatenschaftInfo) {
    return this.animals.find((a) => a.name.toLowerCase() === p.tier) ?? this.animals[0];
  }

  protected formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('de-DE', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  protected paketLabel(paket: string): string {
    return { basis: 'Basis', plus: 'Plus', premium: 'Premium' }[paket] ?? paket;
  }

  protected statusLabel(b: Bestellung): string {
    if (b.typ === 'kalender') {
      return b.status === 'verarbeitung' ? '📦 In Bearbeitung' : '🚚 Unterwegs zu dir';
    }
    return b.status === 'gefuettert' ? '🐄 Verfüttert!' : '🌿 Wird vorbereitet';
  }

  protected openVideo(url: string): void {
    this.videoUrl.set(url);
  }

  protected closeVideo(): void {
    this.videoUrl.set(null);
  }

  protected changePassword(): void {
    // Netlify Identity handles this via the widget
    import('netlify-identity-widget').then(({ default: netlifyIdentity }) => {
      netlifyIdentity.open('signup');
    });
  }

  protected logout(): void {
    this.auth.logout();
  }

  protected visitRequest(tierName: string): void {
    const subject = encodeURIComponent(`Besuchstermin anfragen – Patenschaft ${tierName}`);
    window.location.href = `mailto:EMAIL@PLATZHALTER.de?subject=${subject}`;
  }

  protected toWebp(path: string): string {
    return path.replace(/\.jpe?g$/i, '.webp');
  }
}
