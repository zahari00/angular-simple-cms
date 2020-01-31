import { Injectable } from "@angular/core";
import { RequestService } from "src/app/http/request.service";
import { Media } from 'src/app/interfaces';

@Injectable({
  providedIn: "root"
})
export class MediaService {
  mediaList: Media[] = [];
  mediaLoading: string[] = [];

  constructor(private http: RequestService) {}

  getAllMedia() {
    
  }

  uploadMedia(formData: FormData) {
    this.mediaList.push({
      id: -1,
      status: 'loading',
      path: 'loading',
      created_at: 'loading',
      updated_at: 'loading'
    });

    this.http
      .upload("http://localhost:8000/api/media", formData)
      .subscribe(data => {
        console.log(data)
        this.mediaList.splice(this.mediaList.length - 1, 1);
      });
  }
}
