import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Media } from 'src/app/interfaces';

@Component({
  selector: "block-two-columns",
  templateUrl: "./two-columns.component.html",
  styleUrls: ["./two-columns.component.styl"]
})
export class TwoColumnsComponent {
  @Input() data: any;
  @Output() submit: EventEmitter<any> = new EventEmitter();

  defaultColor: string = "#fff";

  errors: Errors = {
    body: false,
    image: false
  };

  valid: boolean = true;

  /**
   * Validate data and emit submit event
   * 
   * @param body 
   * @param image 
   */
  validateData(body: string, image: Media) {
    this.valid = true;
    this.errors = { body: false, image: false };

    if (!body) {
      this.errors.body = "Body is required";
      this.valid = false;
    }

    if (!image.id) {
      this.errors.image = "Image is required";
      this.valid = false;
    }

    if (!this.valid) return;
    this.submit.emit({ body, image });
  }
}


interface Errors {
  body: false | string
  image: false | string
}