import { Component, OnInit, OnDestroy } from "@angular/core";
import { PageService } from "../page.service";
import { Block } from "src/app/interfaces";
import { faHamburger, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: "admin-panel-create-page",
  templateUrl: "./page-form.component.html",
  styleUrls: ["./page-form.component.styl"]
})
export class PageFormComponent implements OnInit, OnDestroy {
  dragHandlerIcon = faHamburger;
  removeBlockIcon = faTrashAlt;
  pageId: number = 0;
  routeChangeSubscription: Subscription


  get defaultSlug() {
    if (!this.pageService.selectedPage) return "";

    return this.pageService.selectedPage.slug;
  }

  get defaultTitle() {
    if (!this.pageService.selectedPage) return "";

    return this.pageService.selectedPage.title;
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

  ngOnDestroy() {
    this.routeChangeSubscription.unsubscribe()
  }

  /**
   * Get block title
   * 
   * @param title 
   */
  getBlockTitle(title: string): string {
    let result = title.substring(0, 22).trim();
    if (title.length > 22) result += "...";

    return result;
  }

  /**
   * Add block
   * 
   * @param block 
   */
  addBlock(block: Block) {
    this.pageService.addBlock(block);
  }

  /**
   * Remove selected block
   * 
   * @param block 
   */
  removeSelectedBlock(block: Block) {
    this.pageService.removeSelectedBlock(block);
  }

  /**
   * Reorder selected blocks
   * 
   * @param event 
   */
  blocksDrop(event: CdkDragDrop<string[]>) {
    this.pageService.blocksDrop(event);
  }

  /**
   * Handle submit
   * 
   * @param e 
   * @param slug 
   * @param title 
   */
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
