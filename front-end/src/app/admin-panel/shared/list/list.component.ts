import { Component, Input, Output, EventEmitter } from "@angular/core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { RequestService } from "src/app/http/request.service";
import { Router } from "@angular/router";

@Component({
  selector: "admin-panel-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.styl"]
})
export class ListComponent {
  @Input() items: any;
  @Input() model: string;
  @Input() hideEdit: boolean =  false;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  deleteIcon = faTrashAlt;

  constructor(private http: RequestService, private router: Router) {}

  /**
   * On edit click
   * 
   * @param e 
   * @param id 
   */
  onEdit(e: MouseEvent, id: string) {
    e.preventDefault();

    this.router.navigate(["backend", this.model, id]);
  }

  /**
   * On destroy 
   * 
   * @param e 
   * @param id 
   */
  onDelete(e: MouseEvent, id: string) {
    e.preventDefault();

    // add confirm message
    this.delete.emit({ id });
  }
}


