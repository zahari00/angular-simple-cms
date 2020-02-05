import { Component } from "@angular/core";

@Component({
  selector: "input-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.styl"]
})
export class LinkComponent {
  value: Link = {
    target: "_self",
    url: "",
    title: ""
  };

  showPicker: boolean = true;
  showOpenUrlModel: boolean = false;

  saveChanges(url: string, title: string, target: any) {
    this.value = {
      target: target ? '_blank' : '_self',
      url,
      title
    };
    this.showPicker = false
  }

  togglePicker() {
    this.showPicker = !this.showPicker;
  }

  hideUrlModal(e: any = false) {
    if(e) e.preventDefault()

    this.showOpenUrlModel = false
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
