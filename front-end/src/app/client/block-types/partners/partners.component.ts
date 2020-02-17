import { Component, Input } from "@angular/core";
import { Block, Media } from "src/app/interfaces";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-partners",
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.styl"]
})
export class PartnersComponent {
  @Input() block: Block;

  imagePath(partnerImage: Media) {
    return (
      environment.apirUrl + "/uploads/original/" + partnerImage.path
    );
  }
}
