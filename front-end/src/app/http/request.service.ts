import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { ApiResponse } from "../interfaces";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ToastService } from "../core/toast.service";

@Injectable({
  providedIn: "root"
})
export class RequestService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: ToastService
  ) {}

  checkAuth() {
    return this.getToken() ? true : false;
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
          Authorization: this.getToken()
        }
      })
      .pipe(map((data: ApiResponse) => this.handleResponse(data, false)));
  }

  /**
   * Post data to the server
   * @param url
   * @param body
   */
  post(url: string, body: object, sendSuccess: boolean = true) {
    return this.http
      .post<ApiResponse>(
        `${environment.apirUrl}/${url}`,
        {
          body
        },
        {
          headers: {
            Authorization: this.getToken()
          }
        }
      )
      .pipe(map((data: ApiResponse) => this.handleResponse(data, sendSuccess)));
  }

  /**
   * Upload files to the server
   * @param url
   * @param body
   */
  upload(url: string, formData: FormData, sendSuccess: boolean = true) {
    return this.http
      .post<ApiResponse>(`${environment.apirUrl}/${url}`, formData, {
        headers: {
          Authorization: this.getToken()
        }
      })
      .pipe(map((data: ApiResponse) => this.handleResponse(data, sendSuccess)));
  }

  /**
   * Destroy item
   * @param url
   */
  delete(url: string, sendSuccess: boolean = true) {
    return this.http
      .delete<ApiResponse>(`${environment.apirUrl}/${url}`, {
        headers: {
          Authorization: this.getToken()
        }
      })
      .pipe(map((data: ApiResponse) => this.handleResponse(data, sendSuccess)));
  }

  /**
   * Edit item
   *
   * @param url
   * @param data
   */
  put(url: string, body: any, sendSuccess: boolean = true) {
    return this.http
      .put<ApiResponse>(
        `${environment.apirUrl}/${url}`,
        {
          body
        },
        {
          headers: {
            Authorization: this.getToken()
          }
        }
      )
      .pipe(map((data: ApiResponse) => this.handleResponse(data, sendSuccess)));
  }

  private handleErrors(errorCode: number, errors: string[]): void {
    errors.map(error => {
      this.toast.error(error);
    });

    if (errorCode == 403) {
      localStorage.removeItem("token");
      this.router.navigate(["/login"]);
    }
  }

  private handleResponse(res: ApiResponse, sendSuccess: boolean) {
    if (!res.success) this.handleErrors(res.code, res.errors);

    if (res.success && sendSuccess)
      this.toast.success("Changes saved successfuly");

    return res;
  }

  getToken(): string {
    return localStorage.getItem("token") || "";
  }
}
