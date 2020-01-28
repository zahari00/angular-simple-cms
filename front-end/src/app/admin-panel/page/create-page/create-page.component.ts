import { Component, OnInit } from "@angular/core";

@Component({
  selector: "admin-panel-create-page",
  templateUrl: "./create-page.component.html",
  styleUrls: ["./create-page.component.styl"]
})
export class CreatePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  submitHandler(e: Event): void {
    e.preventDefault()
  }
}
