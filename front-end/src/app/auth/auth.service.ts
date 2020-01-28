import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import Cookies from 'js-cookie'
import { ApiResponse } from "../interfaces";

const AUTH_URL: string = "http://localhost:8000/api/login";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authed: boolean = false;
  errors: string[]

  constructor(private http: HttpClient, private router: Router) {}

  checkAuth() {
    return Cookies.get('token') ? true : false;
  }

  login(email: string, password: string) {
    this.http.post<ApiResponse>(AUTH_URL, {
        body: { email, password }
      }).subscribe(response => {
        if (response.success) {
          this.authed = true;
          Cookies.set('token', 'response.data.token');
          this.router.navigate(['/backend'])
        }

        this.errors = response.errors || []

        return response;
      });
  }
}
