import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "block-text",
  templateUrl: "./text.component.html",
  styleUrls: ["./text.component.styl"]
})
export class TextComponent {
  @Input() data: any
  @Output() submit: EventEmitter<any> = new EventEmitter();

  defaultColor: string = '#fff'

  errors: Errors = {
    body: false,
    color: false
  };

  valid: boolean = true;

  /**
   * Validate data and emit submit event
   * 
   * @param body 
   * @param color 
   */
  validateData(body: string, color: string) {
    this.valid = true;
    this.errors = { body: false, color: false };

    if (!body) {
      this.errors.body = "Image is required";
      this.valid = false;
    }
    if (!color) {
      this.errors.color = "Color is required";
      this.valid = false;
    }

    if (!this.valid) return;
    this.submit.emit({ body, color });
  }
}

interface Errors {
  body: boolean | string
  color: boolean | string
}

