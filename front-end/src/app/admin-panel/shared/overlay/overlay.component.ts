import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'admin-panel-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.styl']
})
export class OverlayComponent implements OnInit {
  @Output() hideOverlay: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onBackClick() {
    this.hideOverlay.emit();
  }

  stopPropagation(e: any) {
    e.stopPropagation()
  }

}
