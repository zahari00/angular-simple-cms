import { Component } from "@angular/core";
import {
  faImages,
  faCookieBite,
  faBook,
  faThLarge,
  faHome,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";

@Component({
  selector: "admin-panel-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.styl"]
})
export class NavigationComponent {
  mainIcon = faCookieBite;
  mediaIcon = faImages;
  pagesIcon = faBook;
  blocksIcon = faThLarge;
  layoutIcon = faHome;
  logoutIcon = faSignOutAlt;

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem("token");

    this.router.navigate(["login"]);
  }
}
