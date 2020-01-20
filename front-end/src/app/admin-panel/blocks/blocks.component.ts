import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.styl']
})
export class BlocksComponent implements OnInit {
  @Input() type: string;
  @Output() change: EventEmitter<any>;
  
  constructor() { }

  ngOnInit() {
  }

}
