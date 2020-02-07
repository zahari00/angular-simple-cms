import { Injectable } from "@angular/core";
import { Block } from "../../interfaces";
import { RequestService } from "src/app/http/request.service";
import { Router } from "@angular/router";

const RESOURCE_PATH: string = "api/blocks/";

@Injectable({
  providedIn: "root"
})
export class BlockService {
  errors: string[] = [];
  selectedBlock: Block | undefined = undefined;
  blockNotFound: boolean = false;
  loading: boolean = false;
  blocks: Block[] | undefined = undefined;

  constructor(private http: RequestService, private router: Router) {}

  getBlocks(page: number, per_page: number) {
    return this.http.get(RESOURCE_PATH, { per_page, page }).subscribe(res => {
      if (res.success) {
        this.blocks = res.data.results;
      }
    });
  }

  getBlock(id: number) {
    this.loading = true

    this.http.get(`api/blocks/${id}`).subscribe(res => {
      if(!res.success) {
        this.loading = false;
        this.blockNotFound = true;
        return
      }

      this.selectedBlock = res.data
    });
  }

  updateBlock(
    id: boolean | number = false,
    type: string,
    title: string,
    data: Block
  ) {
    if (id) {
      // update
      return;
    }

    this.http
      .post("api/blocks", {
        type,
        title,
        data: JSON.stringify(data)
      })
      .subscribe(res => {
        if (res.success) {
          this.router.navigate(["backend", "blocks"]);
          return;
        }
      });
  }

  deleteBlock(id: number) {
    this.http.delete(`api/blocks/${id}`).subscribe(res => {
      if (!res.success) return;

      this.blocks = this.blocks.filter(block => block.id !== id);
    });
  }
}
