import { Component, Input, HostBinding } from "@angular/core";
import { Block } from "src/app/interfaces";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-two-columns",
  templateUrl: "./two-columns.component.html",
  styleUrls: ["./two-columns.component.styl"]
})
export class TwoColumnsComponent {
  @Input() block: Block;
  @HostBinding('class.twoColumns') field: boolean = true;


  get imagePath() {
    return (
      environment.apirUrl + "/uploads/original/" + this.block.data.image.path
    );
  }
}
