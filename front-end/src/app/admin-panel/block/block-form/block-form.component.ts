import { Component, OnInit } from "@angular/core";
import { BlockService } from "../block.service";
import { ActivatedRoute } from "@angular/router";
import { Block } from "src/app/interfaces";

@Component({
  selector: "admin-panel-block-form",
  templateUrl: "./block-form.component.html",
  styleUrls: ["./block-form.component.styl"]
})
export class CreateBlockComponent implements OnInit {
  type: string = "hero";

  loading: boolean = true;

  errors: Errors = {
    title: false
  };

  constructor(
    private blockService: BlockService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const blockId: number = +params.get("blockId");
      if (!blockId) {
        this.loading = false;
        return;
      }

      this.blockService.getBlock(blockId);
    });
  }

  get block() {
    return this.blockService.selectedBlock
  }

  changeType(type: string) {
    console.log(type);
    this.type = type;
  }

  submitHandler(title: string, data: any) {
    if (!data) return;

    if (!title) {
      this.errors.title = "Title is required";
      return;
    }

    this.blockService.updateBlock(false, this.type, title, data);
  }
}

interface Errors {
  title: boolean | string;
}
