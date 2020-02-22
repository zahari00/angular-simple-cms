import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { User } from 'src/app/interfaces/user';

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.styl"]
})
export class UserListComponent implements OnInit {
  deleteIcon = faTrashAlt;

  get users() {
    return this.userService.users || [];
  }

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers();
  }

  /**
   * Destroy user
   */
  onDelete({ id }: User): void {
    this.userService.deleteUser(id);
  }
}
