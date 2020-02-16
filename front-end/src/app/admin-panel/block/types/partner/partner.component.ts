import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Media } from "src/app/interfaces";

@Component({
  selector: "input-partner",
  templateUrl: "./partner.component.html",
  styleUrls: ["./partner.component.styl"]
})
export class PartnerComponent implements OnInit {
  @Input() data: any;
  @Output() submit: EventEmitter<any> = new EventEmitter();

  trashIcon = faTrashAlt;

  partners: Media[] = [
    {
      id: 0,
      status: "",
      path: "",
      title: "",
      alt: "",
      created_at: "",
      updated_at: ""
    }
  ];

  defaultColor: string = "#fff";

  errors: Errors = {
    partners: {}
  };

  valid: boolean = true;

  ngOnInit() {
    if(!this.data) return

    this.partners =  this.data.partners.map((partner: any) => partner.image)
  }

  handleChange(index: number, value: Media) {
    console.log(index, value);
    let partners = [...this.partners];
    partners[index] = value;

    this.partners = partners;
  }

  addPartner() {
    this.partners = [
      ...this.partners,
      {
        id: 0,
        status: "",
        path: "",
        title: "",
        alt: "",
        created_at: "",
        updated_at: ""
      }
    ];
  }

  removePartner(e: MouseEvent, index: number) {
    e.preventDefault();
    let partners = [...this.partners];
    partners.splice(index, 1);
    this.partners = partners;
  }

  validateData() {
    this.valid = true;
    this.errors = { partners: {} };

    this.partners.map((partner, i) => {
      if (!partner.id) {
        this.errors.partners[i] = "Please choose an image";
        this.valid = false;
      }
    });

    if (!this.valid) return;
    this.submit.emit({
      partners: this.partners.map(partner => ({ image: partner }))
    });
  }
}

interface Errors {
  partners: object;
}
