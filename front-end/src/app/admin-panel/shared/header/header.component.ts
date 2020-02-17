import { Component } from "@angular/core";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "admin-panel-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.styl"]
})
export class HeaderComponent {
  userIcon = faUserCircle;
}
