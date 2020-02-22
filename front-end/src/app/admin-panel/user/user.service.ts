import { Injectable } from "@angular/core";
import { RequestService } from "../../http/request.service";
import { User } from "../../interfaces/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[] = [];

  constructor(private http: RequestService) {}

  getAllUsers(): void {
    this.http.get("api/users").subscribe(res => {
      if (!res.success) return;
      this.users = res.data;
    });
  }

  saveUser(username: string, password: string): void {
    this.http.post('api/users', {
      username,
      password
    }).subscribe(res => {
      if(!res.success) return
      this.users = [...this.users, res.data]
    })
  }

  deleteUser(id: number): void {
    const conf = confirm("Are you sure?");
    if(!conf) return;

    this.users = this.users.filter(user => user.id !== id);
    this.http.delete(`api/users/${id}`).subscribe();
  }
}
