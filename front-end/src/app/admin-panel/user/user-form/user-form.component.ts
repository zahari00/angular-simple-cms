import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.styl"]
})
export class UserFormComponent {
  errors: Errors = {};
  valid: boolean = true;

  constructor(private userService: UserService, private router: Router) {}

  /**
   * Add user
   * 
   * @param e 
   * @param username 
   * @param password 
   * @param passwordRe 
   */
  addUser(e: Event, username: string, password: string, passwordRe: string) {
    e.preventDefault();
    this.valid = true;
    this.errors = {};

    // validate form
    if (!username) {
      this.valid = false;
      this.errors.username = "Username is required";
    }
    if (!password) {
      this.valid = false;
      this.errors.password = "Password is required";
    }
    if (password !== passwordRe) {
      this.valid = false;
      this.errors.passwordRe = "Passwords do not match";
    }

    if (!this.valid) return;

    // save the user and redirect the user
    this.userService.saveUser(username, password);
    this.router.navigate(['backend', 'users', 'list'])
  }
}

interface Errors {
  username?: false | string;
  password?: false | string;
  passwordRe?: false | string;
}
