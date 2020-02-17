import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ApiResponse } from "../interfaces";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ToastService } from "../core/toast.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RequestService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: ToastService
  ) {}

  /**
   * Get data from the server
   *
   * @param url
   * @param params
   */
  get(url: string, params: any = {}) {
    return this.listenForResponse(
      this.http.get<ApiResponse>(this.getFullUrl(url), {
        params,
        headers: {
          ...this.setHeaders()
        }
      }),
      false
    );
  }

  /**
   * Post data to the server
   *
   * @param url
   * @param body
   */
  post(url: string, body: object, sendSuccess: boolean = true) {
    return this.listenForResponse(
      this.http.post<ApiResponse>(
        this.getFullUrl(url),
        {
          body
        },
        {
          headers: {
            ...this.setHeaders()
          }
        }
      ),
      sendSuccess
    );
  }

  /**
   * Upload files to the server
   *
   * @param url
   * @param body
   */
  upload(url: string, formData: FormData, sendSuccess: boolean = true) {
    return this.listenForResponse(
      this.http.post<ApiResponse>(this.getFullUrl(url), formData, {
        headers: {
          ...this.setHeaders()
        }
      }),
      sendSuccess
    );
  }

  /**
   * Destroy item
   *
   * @param url
   */
  delete(url: string, sendSuccess: boolean = true) {
    return this.listenForResponse(
      this.http.delete<ApiResponse>(this.getFullUrl(url), {
        headers: {
          ...this.setHeaders()
        }
      }),
      sendSuccess
    );
  }

  /**
   * Edit item
   *
   * @param url
   * @param data
   */
  put(url: string, body: any, sendSuccess: boolean = true) {
    return this.listenForResponse(
      this.http.put<ApiResponse>(
        this.getFullUrl(url),
        {
          body
        },
        {
          headers: {
            ...this.setHeaders()
          }
        }
      ),
      sendSuccess
    );
  }

  /**
   * Check if the user is authed
   */
  checkAuth() {
    return this.getToken() ? true : false;
  }

  /**
   * Listen for response
   *
   * @param request
   * @param sendSuccess
   */
  private listenForResponse(
    request: Observable<ApiResponse>,
    sendSuccess: boolean
  ) {
    return request.pipe(
      tap((data: ApiResponse) => this.handleResponse(data, sendSuccess))
    );
  }

  /**
   * Handle response
   *
   * @param res
   * @param sendSuccess
   */
  private handleResponse(res: ApiResponse, sendSuccess: boolean): void {
    // If the request is not successful, call handleErrors method
    if (!res.success) this.handleErrors(res.code, res.errors);

    // If the response is successful and sendSuccess is true,
    // send successful toast message to the user
    if (res.success && sendSuccess)
      this.toast.success("Changes saved successfuly");
  }

  /**
   * Handle errors
   *
   * @param errorCode
   * @param errors
   */
  private handleErrors(errorCode: number, errors: string[]): void {
    // send error toast for each error
    errors.map(error => {
      this.toast.error(error);
    });

    // if Error code is 403, this means that the user's token is invalid
    if (errorCode == 403) {
      // remove the token and redirect to login
      localStorage.removeItem("token");
      this.router.navigate(["/login"]);
    }
  }

  /**
   * Set request headers
   */
  private setHeaders(): object {
    return {
      Authorization: this.getToken()
    };
  }

  /**
   * Get auth token
   */
  private getToken(): string {
    return localStorage.getItem("token") || "";
  }

  /**
   * Set full request url
   *
   * @param url
   */
  private getFullUrl(url: string): string {
    return `${environment.apirUrl}/${url}`;
  }
}
