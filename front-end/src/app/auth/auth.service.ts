import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ApiResponse } from "../interfaces";
import { RequestService } from "../http/request.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authed: boolean = false;
  errors: string[];

  constructor(private http: RequestService, private router: Router) {}

  checkAuth() {
    return localStorage.getItem("token") ? true : false;
  }

  /**
   * Login request
   * 
   * @param username 
   * @param password 
   */
  login(username: string, password: string) {
    this.http
      .post("api/login", { username, password }, false)
      .subscribe(response => {
        if (response.success) {
          this.authed = true;
          localStorage.setItem("token", response.data.token);
          this.router.navigate(["/backend/dashboard"]);
        }

        this.errors = response.errors || [];

        return response;
      });
  }
}
