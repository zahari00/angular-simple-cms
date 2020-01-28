import { Component, OnInit, Input } from '@angular/core';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'admin-panel-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {
  @Input() items: any
  @Input() model: string

  deleteIcon  = faTrashAlt;

  get itemsget() {
    console.log(this.items)
    return this.items
  }
  constructor() { }

  ngOnInit() {
  }

  onEdit(e: MouseEvent, id: string) {
    e.preventDefault();
  }

  onDelete(e: MouseEvent, id: string) {
    e.preventDefault();
  }

}
