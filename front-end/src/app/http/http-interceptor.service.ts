import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import Cookies from 'js-cookie';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {    
    request = request.clone({
      headers: request.headers.set("Authorization", Cookies.get('token') || '')
    });

    return next.handle(request).pipe(map((d) => {
      console.log(d);
      
      return d 
    }));
  }
}
