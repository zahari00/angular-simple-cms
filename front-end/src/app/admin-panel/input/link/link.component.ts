import { Component, Input, OnInit } from "@angular/core";
import { Link } from "src/app/interfaces";

@Component({
  selector: "input-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.styl"]
})
export class LinkComponent implements OnInit {
  @Input() defaultValue: false|Link = false;

  value: Link = {
    target: "_self",
    url: "",
    title: ""
  };

  ngOnInit() {
    if(!this.defaultValue) return;
    this.value = this.defaultValue;
  }

  valid = true;

  errors: any = {
    title: false,
    url: false
  };

  showPicker: boolean = false;
  showOpenUrlModel: boolean = false;

  saveChanges(url: string, title: string, target: any) {
    this.errors = {
      title: false,
      url: false
    };

    this.valid = true;

    if (!url) {
      this.errors.url = "Url is required";
      this.valid = false;
    }

    if (!title) {
      this.valid = false;
      this.errors.title = "Title is required";
    }

    if (!this.valid) return;

    this.value = {
      target: target ? "_blank" : "_self",
      url,
      title
    };
    this.showPicker = false;
  }

  togglePicker(e: any = false) {
    if (e) e.preventDefault();

    this.showPicker = !this.showPicker;
  }

  toggleUrlModal(e: any = false) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    this.showOpenUrlModel = !this.showOpenUrlModel;
  }

  log(data: any) {
    console.log(data);
  }
}
