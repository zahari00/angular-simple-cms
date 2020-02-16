import { Component, OnInit, OnChanges } from "@angular/core";
import { ClientService } from "../client.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.styl"]
})
export class PageComponent implements OnInit {
  get headerItems() {
    return this.clientService.headerItems;
  }

  get loading() {
    return this.clientService.loading;
  }

  get notFound() {
    return this.clientService.pageNotFound;
  }

  get footer() {
    return this.clientService.footer;
  }

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.clientService.getPage();
    this.router.events.subscribe(val => {
      this.clientService.getPage();
    });
  }

  isLinkActive(itemUrl: string) {
    return itemUrl == location.pathname ? "active" : "inactive";
  }
}
