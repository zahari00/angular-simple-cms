import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import Cookies from "js-cookie";
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
    return Cookies.get("token") ? true : false;
  }

  login(email: string, password: string) {
    this.http.post("api/login", { email, password }).subscribe(response => {
      if (response.success) {
        this.authed = true;
        Cookies.set("token", response.data.token);
        this.router.navigate(["/backend/dashboard"]);
      }

      this.errors = response.errors || [];

      return response;
    });
  }
}
