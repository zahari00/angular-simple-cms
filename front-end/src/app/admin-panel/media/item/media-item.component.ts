import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Media } from 'src/app/interfaces';
import { MediaService } from '../media.service';

@Component({
  selector: 'media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.styl']
})
export class MediaItemComponent {
  @Input() data: Media
  @Input() isActive: boolean
  @Output() mediaClick: EventEmitter<Media> = new EventEmitter()

  constructor(private mediaService: MediaService) { }


  /**
   * Media click handler
   */
  onClick() {
    this.mediaClick.emit(this.data);  
  }

  /**
   * Get media path
   * 
   * @param path 
   */
  getMediaPath(path: string): string {
    const url = this.mediaService.getMediaImageUrl(path, '130x130')
    return `url(${url})`;
  }
}
