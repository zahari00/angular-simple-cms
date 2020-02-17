import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'admin-panel-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.styl']
})
export class OverlayComponent {
  @Output() hideOverlay: EventEmitter<any> = new EventEmitter()

  onBackClick() {
    this.hideOverlay.emit();
  }

  stopPropagation(e: any) {
    e.stopPropagation()
  }

}
