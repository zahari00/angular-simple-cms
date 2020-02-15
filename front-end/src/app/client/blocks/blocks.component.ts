import { Component } from "@angular/core";
import { ClientService } from "../client.service";

@Component({
  selector: "app-blocks",
  templateUrl: "./blocks.component.html",
  styleUrls: ["./blocks.component.styl"]
})
export class BlocksComponent {
  get blocks() {
    return this.clientService.pageBlocks;
  }
  constructor(private clientService: ClientService) {}
}
