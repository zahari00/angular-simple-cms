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

  /**
   * Get all media
   * @param page
   */
  getAllMedia(page: number = this.page): void {
    this.page = page;

    this.http
      .get("api/media", { per_page: 99999, page })
      .subscribe(({ success, data }) => {
        if (!success) {
          return;
        }
        const results = data.results.map((media: Media) => {
          media.status = "ready";
          return media;
        });

        this.mediaList = [ ...results ];
      });
  }

  /**
   * Upload media
   * @param formData
   */
  uploadMedia(formData: FormData): void {
    this.cache = {};

    this.mediaList = [
      {
        id: -1,
        status: "loading",
        path: "loading",
        alt: "",
        title: "",
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

  /**
   * Destroy media
   * @param id
   */
  destroyMedia(id: number) {
    return this.http.delete(`api/media/${id}`).pipe(
      map(({ success }) => {
        if (success) {
          this.getAllMedia();
        }
      })
    );
  }

  /**
   * Update media item
   * @param id
   * @param title
   * @param alt
   */
  updateMedia(id: number, title: string, alt: string) {
    return this.http.put(`api/media/${id}`, { title, alt }).pipe(
      map(({ success }) => {
        if (success) {
          this.getAllMedia();
        }
      })
    );
  }

  /**
   * Get media image url
   * @param path
   * @param size
   */
  getMediaImageUrl(path: string, size: string): string {
    return `${environment.mediaUrl}/${size}/${path}`;
  }

  /**
   * Get the first loading index of the current media array
   */
  getFirstLoadingMediaIndex(): number {
    const mediaLength = this.mediaList.length;
    for (let i = 0; i < mediaLength; i++) {
      const media = this.mediaList[i];
      if (media.status == "loading") return i;
    }
  }
}
