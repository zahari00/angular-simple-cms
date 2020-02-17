import { Component, OnInit } from '@angular/core';
import { BlockService } from '../block.service';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.styl']
})
export class BlockListComponent implements OnInit {

  // how many pages to get from the back-end server
  pagesPerPage: number = 9999

  // current page (pagination)
  currentPage: number = 1

  get blocks() {
    return this.blockService.blocks; 
  }

  constructor(private blockService: BlockService) { }

  ngOnInit() {
    this.loadBlocks()
  }
  
  /**
   * Get all blocks
   */
  loadBlocks() {
    this.blockService.getBlocks(this.currentPage, this.pagesPerPage)
  }

  /**
   * Destroy block
   */
  deleteBlock({ id }) {
    this.blockService.deleteBlock(id);
  }
}
