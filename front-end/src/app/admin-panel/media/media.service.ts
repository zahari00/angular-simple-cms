import { Injectable } from "@angular/core";
import { RequestService } from "src/app/http/request.service";
import { Media } from "src/app/interfaces";

@Injectable({
  providedIn: "root"
})
export class MediaService {
  mediaList: Media[] = [];

  constructor(private http: RequestService) {}

  getAllMedia() {
    this.http
      .get("api/media", { per_page: 24 })
      .subscribe(({ success, data }) => {
        // if (!success) {
        //   this.mediaList[index].status = "error";
        //   return;
        // }
        this.mediaList = data.results.map((media: Media) => {
          media.status = "ready";
          return media;
        });
      });
  }

  uploadMedia(formData: FormData) {
    this.mediaList = [
      {
        id: -1,
        status: "loading",
        path: "loading",
        created_at: "loading",
        updated_at: "loading"
      },
      ...this.mediaList
    ];

    this.http.upload("api/media", formData).subscribe(({ success, data }) => {
      const index = this.getFirstLoadingMediaIndex();

      if (!success) {
        this.mediaList[index].status = "error";
        return;
      }

      this.mediaList[index] = {
        ...data,
        status: "ready"
      };
    });
  }

  getFirstLoadingMediaIndex() {
    const mediaLength = this.mediaList.length;
    for (let i = 0; i < mediaLength; i++) {
      const media = this.mediaList[i];
      if (media.status == "loading") return i;
    }
  }
}
