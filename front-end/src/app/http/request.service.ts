import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import Cookies from "js-cookie";
import { ApiResponse } from "../interfaces";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RequestService {
  constructor(private http: HttpClient, private router: Router) {}

  checkAuth() {
    return Cookies.get("token") ? true : false;
  }

  /**
   * Get data from the server
   * @param url
   * @param params
   */
  get(url: string, params: any) {
    return this.http
      .get<ApiResponse>(url, {
        params,
        headers: {
          Authorization: Cookies.get("token") || ""
        }
      })
      .pipe(
        map((data: ApiResponse) => {
          if (!data.success) this.handleErrors(data.code, data.errors);
          return data;
        })
      );
  }

  /**
   * Post data to the server
   * @param url
   * @param body
   */
  post(url: string, body: object) {
    return this.http
      .post<ApiResponse>(
        url,
        {
          body
        },
        {
          headers: {
            Authorization: Cookies.get("token") || ""
          }
        }
      )
      .pipe(
        map((data: ApiResponse) => {
          if (!data.success) this.handleErrors(data.code, data.errors);
          return data;
        })
      );
  }

  /**
   * Upload files to the server
   * @param url
   * @param body
   */
  upload(url: string, formData: FormData) {
    return this.http
      .post<ApiResponse>(url, formData, {
        headers: {
          Authorization: Cookies.get("token") || ""
        }
      })
      .pipe(
        map((data: ApiResponse) => {
          console.log(data);
          // if (!data.success) this.handleErrors(data.code, data.errors);
          return data;
        })
      );
  }

  handleErrors(errorCode: number, errors: string[]): void {
    if (errorCode == 403) {
      Cookies.remove("token");
      this.router.navigate(["/login"]);
    }
  }
}
