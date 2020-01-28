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

  changeType(e: any) {
    this.blockType = e.target.value
    this.data = {}
  }
}
