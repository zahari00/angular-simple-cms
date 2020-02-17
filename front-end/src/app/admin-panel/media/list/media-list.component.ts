import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { MediaService } from "../media.service";
import { Media } from "src/app/interfaces";

@Component({
  selector: "media-list",
  templateUrl: "./media-list.component.html",
  styleUrls: ["./media-list.component.styl"]
})
export class MediaListComponent implements OnInit {
  @Input() selectedMedia: Media;

  @Output() mediaItemClick: EventEmitter<Media> = new EventEmitter();

  get mediaList() {
    return this.mediaService.mediaList;
  }

  constructor(private mediaService: MediaService) {}

  ngOnInit() {
    this.mediaService.getAllMedia(1);
  }

  /**
   * Upload photo
   * 
   * @param e 
   */
  uploadPhotos(e: Event) {
    const files = (<HTMLInputElement>e.target).files;

    const filesLength = files.length;

    for (let i = 0; i < filesLength; i++) {
      const formData = new FormData();
      formData.append("media", files[i]);
      this.mediaService.uploadMedia(formData);
    }
  }

  selectMedia(media: Media) {
    this.mediaItemClick.emit(media);
  }
}
