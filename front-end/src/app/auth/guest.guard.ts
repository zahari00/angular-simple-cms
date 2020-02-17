import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class GuestGuard implements CanActivate {
  constructor(private router: Router) {}
  /**
   * Redirect if authenticated
   */
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!localStorage.getItem('token')) return true

    this.router.navigate(['/backend']);
    return false;
  }
}
