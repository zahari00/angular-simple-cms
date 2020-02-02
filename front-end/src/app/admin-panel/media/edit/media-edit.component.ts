import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Media } from "src/app/interfaces";
import { MediaService } from "../media.service";

@Component({
  selector: "media-edit",
  templateUrl: "./media-edit.component.html",
  styleUrls: ["./media-edit.component.styl"]
})
export class MediaEditComponent implements OnInit, OnChanges {
  @Input() selectedMedia: Media;
  loading: boolean = false;
  deleted: boolean = false;

  get mediaPath() {
    const url = this.mediaService.getMediaImageUrl(
      this.selectedMedia.path,
      "original"
    );
    return `url(${url})`;
  }

  get media() {
    if(this.deleted) return false

    return this.selectedMedia.id > 0 ? this.selectedMedia : false;
  }

  constructor(private mediaService: MediaService) {}

  ngOnInit() {}

  ngOnChanges(data: any) {
    const { selectedMedia } = data;
    
    if(!selectedMedia || !selectedMedia.previousValue) return

    const prevId = selectedMedia.previousValue.id;
    const currId = selectedMedia.previousValue.id;

    if(prevId !== currId) this.deleted = false;
  }

  deleteMedia(e: MouseEvent) {
    e.preventDefault();
    this.loading = true;

    this.mediaService
      .destroyMedia(this.selectedMedia.id)
      .subscribe(() => {
        this.deleted = true;
        this.loading = false;
      });
  }
}
