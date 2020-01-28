import { Injectable } from "@angular/core";
import { Page } from "../../interfaces";
import { RequestService } from 'src/app/http/request.service';

const REQ_URL: string = "http://localhost:8000/api/pages/";

@Injectable({
  providedIn: "root"
})
export class PageService {
  errors: string[] = [];
  selectedPage: Page|undefined = undefined;
  pages: Page[]|undefined = undefined;

  constructor(private http: RequestService) {}

  getPages(page: number, per_page: number) {
    return this.http
      .get(REQ_URL, { per_page, page })
      .subscribe(res => {
        if(res.success) {
          this.pages =  res.data.results;
        }
      });
  }
}
