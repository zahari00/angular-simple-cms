import { Component, OnInit } from '@angular/core';
import { PageListService } from './page-list.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.styl']
})
export class PageListComponent implements OnInit {

  // how many pages to get from the back-end server
  pagesPerPage: number = 10

  // current page (pagination)
  currentPage: number = 1

  get pages() {
    return this.pageListService.pages; 
  }

  constructor(private pageListService: PageListService) { }

  ngOnInit() {
    this.loadPages()
  }

  loadPages() {
    this.pageListService.getPages(this.currentPage, this.pagesPerPage)
  }
}
