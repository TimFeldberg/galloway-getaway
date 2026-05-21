import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  input,
  output,
  viewChild
} from '@angular/core';

@Component({
  selector: 'app-video-overlay',
  imports: [],
  templateUrl: './video-overlay.component.html',
  styleUrl: './video-overlay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoOverlayComponent {
  readonly videoUrl = input.required<string>();
  readonly closed = output<void>();

  private readonly videoEl = viewChild<ElementRef<HTMLVideoElement>>('videoEl');

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  protected onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('overlay-backdrop')) {
      this.close();
    }
  }

  protected close(): void {
    this.videoEl()?.nativeElement.pause();
    this.closed.emit();
  }
}
