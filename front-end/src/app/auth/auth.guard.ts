import { Injectable } from "@angular/core";
import { CanLoad, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private router: Router) {}
  /**
   * Redirect if not-authenticated
   */
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem("token")) return true;

    this.router.navigate(["/login"]);
    return false;
  }
}
