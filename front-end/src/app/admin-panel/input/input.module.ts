import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RteComponent } from "./rte/rte.component";
import { LinkComponent } from "./link/link.component";

@NgModule({
  declarations: [RteComponent, LinkComponent],
  imports: [CommonModule],
  exports: [RteComponent, LinkComponent]
})
export class InputModule {}
