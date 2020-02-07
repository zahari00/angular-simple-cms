import { Component, OnInit } from "@angular/core";
import { BlockService } from "../block.service";

@Component({
  selector: "app-create-block",
  templateUrl: "./create-block.component.html",
  styleUrls: ["./create-block.component.styl"]
})
export class CreateBlockComponent implements OnInit {
  type: string = 'hero';

  errors: Errors = {
    title: false
  };

  constructor(private blockService: BlockService) {}

  ngOnInit() {}

  changeType(type: string) {
    console.log(type)
    this.type = type
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
