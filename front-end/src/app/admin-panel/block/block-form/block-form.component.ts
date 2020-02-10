import { Component, OnInit } from "@angular/core";
import { BlockService } from "../block.service";
import { ActivatedRoute } from "@angular/router";
import { Block } from "src/app/interfaces";

@Component({
  selector: "admin-panel-block-form",
  templateUrl: "./block-form.component.html",
  styleUrls: ["./block-form.component.styl"]
})
export class BlockFormComponent implements OnInit {
  type: string = "hero";

  errors: Errors = {
    title: false
  };

  blockId: number;

  get loading() {
    return this.blockService.loading;
  }
  
  get block() {
    return this.blockService.selectedBlock;
  }

  get notFound() {
    return this.blockService.blockNotFound;
  }

  constructor(
    private blockService: BlockService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.blockService.resetData()
    this.route.paramMap.subscribe(params => {
      const blockId: number = +params.get("blockId");
      if (!blockId) return;
      this.blockId = blockId;
      this.blockService.getBlock(blockId);
    });
  }


  changeType(type: string) {
    this.type = type;
  }

  submitHandler(title: string, data: any) {
    if (!data) return;

    if (!title) {
      this.errors.title = "Title is required";
      return;
    }

    this.blockService.saveBlock(this.blockId, this.type, title, data);
  }
}

interface Errors {
  title: boolean | string;
}
