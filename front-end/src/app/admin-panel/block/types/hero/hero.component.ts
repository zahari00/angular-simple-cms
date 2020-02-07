import { Component, Output, EventEmitter } from "@angular/core";
import { Link } from "src/app/interfaces";

@Component({
  selector: "block-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.styl"]
})
export class HeroComponent {
  @Output() submit: EventEmitter<any> = new EventEmitter();

  errors: Errors = {
    image: false,
    cta: false,
    body: false
  };

  valid: boolean = true;

  validateData(image: any, cta: Link, body: string) {
    this.valid = true;
    this.errors = { image: false, cta: false, body: false };

    if (!image.id) {
      this.errors.image = "Image is required";
      this.valid = false;
    }

    if (!cta.url) {
      this.errors.cta = "CTA is required";
      this.valid = false;
    }

    if (!body) {
      this.errors.body = "Body is required";
      this.valid = false;
    }

    if (!this.valid) return;
    alert('emiting');
    this.submit.emit({ image, cta, body });
  }
}

interface Errors {
  image: boolean | string;
  cta: boolean | string;
  body: boolean | string;
}
