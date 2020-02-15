import { Component, Input } from '@angular/core';
import { Block } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.styl']
})
export class HeroComponent {
  @Input() block: Block

  get imagePath() {
    return environment.apirUrl + '/uploads/original/' + this.block.data.image.path
  }
}
