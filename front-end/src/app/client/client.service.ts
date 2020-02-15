import { Injectable } from "@angular/core";
import { RequestService } from "../http/request.service";
import { Block, HeaderItem, Footer } from '../interfaces';

@Injectable({
  providedIn: "root"
})
export class ClientService {
  pageNotFound: boolean = false;
  pageId: number = 0;
  pageBlocks: Block[] = [];
  headerItems: HeaderItem[] = [];
  footer: Footer

  constructor(private http: RequestService) {}

  getPage() {
    this.http
      .get(`api/pages/find`, {
        slug: window.location.pathname
      })
      .subscribe(res => {
        if (!res.success) {
          this.pageNotFound = true;
          return;
        }

        this.pageId = res.data.page.id;
        this.pageBlocks = res.data.page.blocks;
        this.headerItems = res.data.header_items.map((item: any) => ({ title: item.page.title, url: item.page.slug }));
        this.footer = res.data.footer;

        console.log(this)
      });
  }
}
