import { Component } from '@angular/core';
import { Media } from 'src/app/interfaces';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.styl']
})
export class MediaComponent {
  selectedMedia: Media = {
    id: -2,
    status: "loading",
    path: "loading",
    created_at: "loading",
    updated_at: "loading"
  };
  
  selectMedia(media: Media) {
    console.log('selete media', media)
    this.selectedMedia = media;
  }
}
