import { Injectable } from "@angular/core";
import { RequestService } from "src/app/http/request.service";
import { Media } from "src/app/interfaces";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MediaService {
  mediaList: Media[] = [];
  cache: object = {};
  page: number = 1;

  constructor(private http: RequestService) {}

  getAllMedia(page: number = this.page) {
    this.page = page;
    if (this.cache[page]) return (this.mediaList = this.cache[page]);

    this.http
      .get("api/media", { per_page: 24, page })
      .subscribe(({ success, data }) => {
        // if (!success) {
        //   this.mediaList[index].status = "error";
        //   return;
        // }
        const results = data.results.map((media: Media) => {
          media.status = "ready";
          return media;
        });

        this.cache[page] = results;
        this.mediaList = results;
      });
  }

  uploadMedia(formData: FormData) {
    this.cache = {};

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

  destroyMedia(id: number) {
    return this.http.destroy(`api/media/${id}`).pipe(
      map(({ success }) => {
        if (success) {
          this.cache[this.page] = undefined;
          this.getAllMedia();
        }
      })
    );
  }

  getMediaImageUrl(path: string, size: string) {
    return `${environment.mediaUrl}/${size}/${path}`;
  }

  getFirstLoadingMediaIndex() {
    const mediaLength = this.mediaList.length;
    for (let i = 0; i < mediaLength; i++) {
      const media = this.mediaList[i];
      if (media.status == "loading") return i;
    }
  }
}
