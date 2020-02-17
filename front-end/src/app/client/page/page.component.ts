import { Component, OnInit, OnChanges, OnDestroy } from "@angular/core";
import { ClientService } from "../client.service";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.styl"]
})
export class PageComponent implements OnInit, OnDestroy {
  routeChangeSubscription: Subscription

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
    this.routeChangeSubscription = this.router.events.subscribe(() => {
      this.clientService.getPage();
    });
  }

  ngOnDestroy() {
    this.routeChangeSubscription.unsubscribe()
  }

  isLinkActive(itemUrl: string) {
    return itemUrl == location.pathname ? "active" : "inactive";
  }
}
