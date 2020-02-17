import { Component } from "@angular/core";
import { ClientService } from "../client.service";
import { AuthService } from "src/app/auth/auth.service";
import { Block } from "src/app/interfaces";
import { Router } from "@angular/router";

@Component({
  selector: "app-blocks",
  templateUrl: "./blocks.component.html",
  styleUrls: ["./blocks.component.styl"]
})
export class BlocksComponent {
  get blocks() {
    return this.clientService.pageBlocks;
  }

  get isAuthed() {
    return this.authService.checkAuth();
  }

  constructor(
    private clientService: ClientService,
    private authService: AuthService,
    private router: Router
  ) {}

  /**
   * Edit block
   */
  editBlock(block: Block) {
    this.router.navigate(["backend", "blocks", block.id]);
  }

  stopPropagation(e: MouseEvent) {
    e.stopPropagation();
  }
}
