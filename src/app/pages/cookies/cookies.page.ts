import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cookies-page',
  templateUrl: './cookies.page.html',
  styleUrl: './cookies.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookiesPage {}