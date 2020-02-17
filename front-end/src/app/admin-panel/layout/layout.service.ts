import { Injectable } from "@angular/core";
import { RequestService } from "../../http/request.service";
import { Footer, Page } from "../../interfaces";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Injectable({
  providedIn: "root"
})
export class LayoutService {
  headerItems: Page[] = [];
  selectedPages: object = {};
  footer: Footer = {
    text: ""
  };

  constructor(private http: RequestService) {}

  /**
   * Save header changes
   */
  saveHeaderItems(): void {
    const items = this.headerItems.map(item => ({
      page_id: item.id
    }));

    this.http.post("api/header", { items }).subscribe(() => {});
  }

  /**
   * Save footer changes
   * 
   * @param text
   */
  saveFooter(text: string): void {
    this.http.put("api/footer", { text }).subscribe(() => {});
  }

  /**
   * Get footer data
   */
  getFooter() {
    this.http.get("api/footer").subscribe(res => {
      if (!res.success) return;

      this.footer = { text: res.data.text };
    });
  }

  /**
   * Get header items
   */
  getHeaderItems() {
    this.http.get("api/header").subscribe(res => {
      if (!res.success) return;
      this.headerItems = res.data.items.map((item: any) => {
        this.selectedPages[item.page.id] = true;

        return item.page;
      });
    });
  }

  /**
   * Add item
   * 
   * @param page 
   */
  addItem(page: Page) {
    this.selectedPages[page.id] = true;
    this.headerItems = [...this.headerItems, page];
  }

  /**
   * Reorder header items
   * 
   * @param event 
   */
  reorderHeaderItems(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.headerItems, event.previousIndex, event.currentIndex);
  }

  /**
   * Remove header items
   * 
   * @param index 
   */
  removeItem(index: number) {
    this.selectedPages[this.headerItems[index].id] = undefined;
    this.headerItems.splice(index, 1);
  }
}
