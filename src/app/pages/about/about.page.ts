import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ParallaxDirective } from '../../shared/directives/parallax.directive';
import { siteContent } from '../../content/site-content';

@Component({
  selector: 'app-about-page',
  imports: [RevealDirective, ParallaxDirective],
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPage {
  protected readonly content = siteContent.about;
  protected readonly milestones = siteContent.about.milestones;

  protected toWebp(path: string): string {
    return path.replace(/\.jpe?g$/i, '.webp');
  }
}
