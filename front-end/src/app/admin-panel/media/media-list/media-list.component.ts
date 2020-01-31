import { Component, OnInit } from "@angular/core";
import { MediaService } from "../media.service";

@Component({
  selector: "app-media-list",
  templateUrl: "./media-list.component.html",
  styleUrls: ["./media-list.component.styl"]
})
export class MediaListComponent implements OnInit {

  get mediaList() {
    return this.mediaService.mediaList
  }

  constructor(private mediaService: MediaService) {}

  ngOnInit() {}

  uploadPhotos(e: Event) {
    const files = (<HTMLInputElement>e.target).files;

    const filesLength = files.length;

    for (let i = 0; i < filesLength; i++) {
      const formData = new FormData();
      formData.append("media", files[i]);
      console.log('here')
      this.mediaService.uploadMedia(formData);
    }
  }
}
