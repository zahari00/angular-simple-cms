import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RteComponent } from "./rte/rte.component";
import { LinkComponent } from "./link/link.component";
import { InputComponent } from "./input.component";
import { MediaModule } from '../media/media.module';

@NgModule({
  declarations: [RteComponent, LinkComponent, InputComponent],
  imports: [CommonModule, MediaModule],
  exports: [InputComponent]
})
export class InputModule {}
