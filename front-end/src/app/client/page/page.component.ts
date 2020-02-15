import { Component, OnInit } from "@angular/core";
import { ClientService } from "../client.service";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.styl"]
})
export class PageComponent implements OnInit {
  get headerItems() {
    console.log(this.clientService.headerItems);
    return this.clientService.headerItems;
  }

  get footer() {
    return this.clientService.footer;
  }

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getPage();
  }

  isLinkActive(itemUrl: string) {
    return itemUrl == location.pathname;
  }
}
