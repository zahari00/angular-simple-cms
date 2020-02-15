import { Component, Input } from '@angular/core';
import { Block } from 'src/app/interfaces';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.styl']
})
export class TextComponent {
  @Input() block: Block
}
