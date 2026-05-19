import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { siteContent } from '../../content/site-content';

@Component({
  selector: 'app-farm-page',
  imports: [NgOptimizedImage, RevealDirective],
  templateUrl: './farm.page.html',
  styleUrl: './farm.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarmPage {
  protected readonly activeAnimal = signal(0);
  protected readonly content = siteContent.farm;
  protected readonly animals = siteContent.farm.animals;

  protected setAnimal(index: number): void {
    this.activeAnimal.set(index);
  }
}
