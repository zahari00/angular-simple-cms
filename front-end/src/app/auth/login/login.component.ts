import { Component } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.styl"]
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  get authed() {
    return this.authService.authed;
  }

  get errors() {
    return this.authService.errors;
  }

  /**
   * On login submit
   * 
   * @param e 
   * @param email 
   * @param password 
   */
  login(e: any, email: string, password: string) {
    e.preventDefault();
    this.authService.login(email, password);
  }
}
