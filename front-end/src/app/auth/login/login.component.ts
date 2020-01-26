import { Component, OnInit } from "@angular/core";
import { AuthService } from '../auth.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.styl"]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {}


  get authed() {
    return this.authService.authed
  }

  get errors() {
    return this.authService.errors
  }


  ngOnInit() {}

  login(e: any, email: string, password: string) {
    e.preventDefault();
    const res = this.authService.login(email, password);    
  }
}
