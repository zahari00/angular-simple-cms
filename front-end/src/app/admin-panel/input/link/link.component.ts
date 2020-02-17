import { Component, Input, OnInit } from "@angular/core";
import { Link } from "src/app/interfaces";

@Component({
  selector: "input-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.styl"]
})
export class LinkComponent implements OnInit {
  @Input() defaultValue: false | Link = false;

  value: Link = {
    target: "_self",
    url: "",
    title: ""
  };

  valid = true;

  errors: any = {
    title: false,
    url: false
  };

  showPicker: boolean = false;
  showOpenUrlModel: boolean = false;

  ngOnInit() {
    if (!this.defaultValue) return;
    this.value = this.defaultValue;
  }

  /**
   * Save changes and hide link form
   * 
   * @param url 
   * @param title 
   * @param target 
   */
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

  /**
   * Toggle link form
   * 
   * @param e 
   */
  togglePicker(e: any = false) {
    if (e) e.preventDefault();

    this.showPicker = !this.showPicker;
  }

  /**
   * Toggle open url modal
   * 
   * @param e 
   */
  toggleUrlModal(e: any = false) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    this.showOpenUrlModel = !this.showOpenUrlModel;
  }
}
