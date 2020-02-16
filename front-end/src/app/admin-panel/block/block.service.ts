import { Injectable } from "@angular/core";
import { Block } from "../../interfaces";
import { RequestService } from "src/app/http/request.service";
import { Router } from "@angular/router";

const RESOURCE_PATH: string = "api/blocks/";

@Injectable({
  providedIn: "root"
})
export class BlockService {
  // blockType: string[] = ["hero", "text", "two-col", "partners", "services"];
  type: string = 'partners';

  errors: string[] = [];
  selectedBlock: Block;
  blockNotFound: boolean = false;
  loading: boolean = false;
  blocks: Block[] = [];

  constructor(private http: RequestService, private router: Router) {}

  getBlocks(page: number, per_page: number) {
    return this.http.get(RESOURCE_PATH, { per_page, page }).subscribe(res => {
      if (res.success) {
        this.blocks = res.data.results;
      }
    });
  }

  getBlock(id: number) {
    this.loading = true;

    this.http.get(`api/blocks/${id}`).subscribe(res => {
      if (!res.success) {
        this.loading = false;
        this.blockNotFound = true;
        return;
      }

      this.type = res.data.type;
      this.loading = false;
      this.selectedBlock = res.data;
    });
  }

  saveBlock(id: number = 0, type: string, title: string, data: Block) {
    if (id) {
      this.http
        .put(`api/blocks/${id}`, {
          type,
          title,
          data: JSON.stringify(data)
        })
        .subscribe(() => {});
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
          this.router.navigate(["backend", "blocks", "list"]);
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

  changeBlockType(type: string) {
    this.type = type;
  }

  resetData() {
    this.blockNotFound = false;
    this.selectedBlock = undefined;
  }
}
