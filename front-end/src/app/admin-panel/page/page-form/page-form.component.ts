import { Component, OnInit } from "@angular/core";
import { PageService } from "../page.service";
import { Block } from "src/app/interfaces";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "admin-panel-create-page",
  templateUrl: "./page-form.component.html",
  styleUrls: ["./page-form.component.styl"]
})
export class PageFormComponent implements OnInit {
  dragHandlerIcon = faHamburger;
  pageId: number = 0;

  get defaultSlug() {
    if(!this.pageService.selectedPage) return ''

    return this.pageService.selectedPage.slug
  }

  get defaultTitle() {
    if(!this.pageService.selectedPage) return ''

    return this.pageService.selectedPage.title
  }

  get selectedBlocks() {
    return this.pageService.selectedBlocks;
  }

  get blocks() {
    return this.pageService.blocks;
  }

  get notFound() {
    return this.pageService.pageNotFound;
  }

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.pageService.resetData();
    this.pageService.getAllBlocks();
    this.route.paramMap.subscribe(params => {
      const pageId: number = +params.get("pageId");
      if (!pageId) return;
      this.pageId = pageId;
      this.pageService.getPage(pageId);
    });
  }

  getBlockTitle(title: string): string {
    let result = title.substring(0, 22).trim();
    if (title.length > 22) result += "...";

    return result;
  }

  addBlock(block: Block) {
    this.pageService.addBlock(block);
  }

  removeSelectedBlock(block: Block) {
    this.pageService.removeSelectedBlock(block);
  }

  blocksDrop(event: CdkDragDrop<string[]>) {
    this.pageService.blocksDrop(event);
  }

  submitHandler(e: Event, slug: string, title: string): void {
    e.preventDefault();

    this.pageService.savePage(
      this.pageId,
      slug,
      title,
      this.selectedBlocks.map(block => block.id)
    );
  }
}
