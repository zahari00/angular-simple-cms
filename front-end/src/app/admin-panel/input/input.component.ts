import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'admin-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.styl']
})
export class InputComponent  {
  @Input() name: 'text' | 'rte' | 'link' | 'color' | 'media' 
  @Input() type: string
  @Input() label: string
  @Output() change: EventEmitter<any> = new EventEmitter();

  onChange(value: any, name: string) {
    this.change.emit({ value, name });
  } 
}
