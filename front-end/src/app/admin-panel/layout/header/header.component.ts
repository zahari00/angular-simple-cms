import { Component, OnInit } from "@angular/core";
import { LayoutService } from "../layout.service";
import { PageService } from "../../page/page.service";
import { Page } from 'src/app/interfaces';
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: "admin-panel-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.styl"]
})
export class HeaderComponent implements OnInit {
  trashIcon = faTrashAlt;


  get items() {
    return this.layoutService.headerItems;
  }

  get pages() {
    return this.pageService.pages.filter(page => !this.layoutService.selectedPages[page.id]);
  }

  constructor(
    private layoutService: LayoutService,
    private pageService: PageService
  ) {}

  ngOnInit() {
    this.layoutService.getHeaderItems();
    this.pageService.getPages(1, 999999);
  }

  /**
   * Add item
   * 
   * @param page 
   */
  addItem(page: Page) {
    this.layoutService.addItem(page);
  }

  /**
   * Reorder items
   * 
   * @param event 
   */
  reorderItems(event: CdkDragDrop<string[]>) {
    this.layoutService.reorderHeaderItems(event)
  }

  /**
   * Remove item
   * 
   * @param index 
   */
  removeItem(index: number) {
    this.layoutService.removeItem(index)
  }

  /**
   * Save changes
   */
  save() {
    this.layoutService.saveHeaderItems();
  }
}
