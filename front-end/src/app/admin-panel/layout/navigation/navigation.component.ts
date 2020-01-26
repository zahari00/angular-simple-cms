import { Component, OnInit } from "@angular/core";
import { faImages, faCookieBite } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "admin-panel-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.styl"]
})
export class NavigationComponent implements OnInit {
  mainIcon = faCookieBite; 
  mediaIcon = faImages;
  pagesIcon = faImages;
  blocksIcon = faImages;
  layoutIcon = faImages;
  constructor() {}

  ngOnInit() {}
}
