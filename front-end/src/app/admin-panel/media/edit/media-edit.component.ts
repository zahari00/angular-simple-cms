import { Component, Input, OnChanges, OnDestroy } from "@angular/core";
import { Media } from "src/app/interfaces";
import { MediaService } from "../media.service";
import { Subscription } from "rxjs";

@Component({
  selector: "media-edit",
  templateUrl: "./media-edit.component.html",
  styleUrls: ["./media-edit.component.styl"]
})
export class MediaEditComponent implements OnDestroy {
  @Input() selectedMedia: Media;
  loading: boolean = false;
  deleted: boolean = false;
  destroyMediaSubscribtion: Subscription;

  get mediaPath(): string {
    const url = this.mediaService.getMediaImageUrl(
      this.selectedMedia.path,
      "original"
    );
    return `url(${url})`;
  }

  get media() {
    // if the media is deleted return false
    if (this.deleted) return false;
    
    return this.selectedMedia.id > 0 ? { ...this.selectedMedia } : false;
  }

  constructor(private mediaService: MediaService) {}

  ngOnDestroy() {
    if (!this.destroyMediaSubscribtion) return;

    this.destroyMediaSubscribtion.unsubscribe();
  }

  /**
   * Update media alt and title
   *
   * @param e
   * @param title
   * @param alt
   */
  updateMedia(e: Event, title: string, alt: string) {
    e.preventDefault();
    this.loading = true;

    this.mediaService
      .updateMedia(this.selectedMedia.id, title, alt)
      .subscribe(() => {
        this.loading = false;
      });
  }

  /**
   * Destroy media
   *
   * @param e
   */
  deleteMedia(e: MouseEvent) {
    e.preventDefault();
    this.loading = true;

    this.destroyMediaSubscribtion = this.mediaService
      .destroyMedia(this.selectedMedia.id)
      .subscribe(() => {
        this.deleted = true;
        this.loading = false;
      });
  }
}
