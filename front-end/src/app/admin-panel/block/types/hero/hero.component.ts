import { Component } from "@angular/core";

@Component({
  selector: "block-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.styl"]
})
export class HeroComponent {
  value: Link = {
    target: "_self",
    url: "",
    title: ""
  };

  showPicker: boolean = false

  saveChanges(url: string, title: string, target: any) {
    this.value = {
      target,
      url,
      title
    };
  }

  togglePicker() {
    this.showPicker = !this.togglePicker
  }

  log(data: any) {
    console.log(data);
  }
}

interface Link {
  target: "_self" | "_blank";
  url: string;
  title: string;
}
