import { Component, OnInit } from "@angular/core";

@Component({
  selector: "block-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.styl"]
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onChange() {

  }

  log(data: any) {
    console.log(data)
  }
}
