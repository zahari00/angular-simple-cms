import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import Cookies from 'js-cookie'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(Cookies.get('token')) return true

    this.router.navigate(['/login']);
    return false;
  }
}
