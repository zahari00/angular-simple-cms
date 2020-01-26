import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Page, PageListResponse } from "../../interfaces";

const REQ_URL: string = "http://localhost:8000/api/pages/";

@Injectable({
  providedIn: "root"
})
export class PageListService {
  errors: string[] = [];
  selectedPage: Page|undefined = undefined;
  pages: Page[]|undefined = undefined;

  constructor(private http: HttpClient) {}

  getPages(page: number, per_page: number) {
    return this.http
      .get<PageListResponse>(REQ_URL, {
        params: {
          'body[per_page]': per_page.toString(),
          page: page.toString(),
        }
      })
      .subscribe(res => {
        console.log(res);
        if(res.success) {
          this.pages =  res.data.results;
        }
      });
  }
}
