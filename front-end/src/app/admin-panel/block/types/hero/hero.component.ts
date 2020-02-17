import { Component, Output, EventEmitter, Input } from "@angular/core";
import { Link } from "src/app/interfaces";

@Component({
  selector: "block-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.styl"]
})
export class HeroComponent {
  @Input() data: any
  @Output() submit: EventEmitter<any> = new EventEmitter();

  errors: Errors = {
    image: false,
    cta: false,
  };

  valid: boolean = true;

  /**
   * Validate data and emit submit event if valid
   * 
   * @param image 
   * @param cta 
   */
  validateData(image: any, cta: Link) {
    this.valid = true;
    this.errors = { image: false, cta: false };

    if (!image.id) {
      this.errors.image = "Image is required";
      this.valid = false;
    }

    if (!cta.url) {
      this.errors.cta = "CTA is required";
      this.valid = false;
    }

    if (!this.valid) {
      this.submit.emit(false)
      return;
    }
    
    this.submit.emit({ image, cta });
  }
}

interface Errors {
  image: boolean | string;
  cta: boolean | string;
}
