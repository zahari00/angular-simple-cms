import { Component, OnInit } from "@angular/core";
import { PageService } from '../page/page.service';
import { BlockService } from '../block/block.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.styl"]
})
export class DashboardComponent implements OnInit {

  get blocksCount() {
    return this.blockService.blocks.length || '-';
  }

  get pagesCount() {
    return this.pageService.pages.length || '-';
  }
  constructor(private pageService: PageService, private blockService: BlockService) {}

  ngOnInit() {
    this.pageService.getPages(1, 99999);
    this.blockService.getBlocks(1, 99999);
  }
}
