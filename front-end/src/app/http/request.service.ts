import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import Cookies from "js-cookie";
import { ApiResponse } from "../interfaces";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

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
  get(url: string, params: any = {}) {
    return this.http
      .get<ApiResponse>(`${environment.apirUrl}/${url}`, {
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
        `${environment.apirUrl}/${url}`,
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
      .post<ApiResponse>(`${environment.apirUrl}/${url}`, formData, {
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
   * Destroy item
   * @param url
   */
  destroy(url: string) {
    return this.http
      .delete<ApiResponse>(`${environment.apirUrl}/${url}`, {
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
   * Edit item
   *
   * @param url
   * @param data
   */
  put(url: string, body: any) {
    return this.http
      .put<ApiResponse>(
        `${environment.apirUrl}/${url}`,
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

  handleErrors(errorCode: number, errors: string[]): void {
    if (errorCode == 403) {
      Cookies.remove("token");
      this.router.navigate(["/login"]);
    }
  }
}
