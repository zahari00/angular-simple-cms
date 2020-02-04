import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-block",
  templateUrl: "./create-block.component.html",
  styleUrls: ["./create-block.component.styl"]
})
export class CreateBlockComponent implements OnInit {
  data: any = {};
  blockType: string = "hero";

  constructor() {}

  ngOnInit() {}

  changeType(type: string): void {
    this.blockType = type;
    this.data = {}
  }

  submitHandler(e: Event) {
    e.preventDefault();

  }
}
