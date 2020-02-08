import { Injectable } from "@angular/core";
import { Toast } from "../interfaces";

@Injectable({
  providedIn: "root"
})
export class ToastService {
  toasts: Toast[] = [];

  constructor() {}

  error(message: string): void {
    this.sendToast(message, "error");
  }

  success(message: string): void {
    this.sendToast(message, "success");
  }

  private sendToast(message: string, type: string): void {
    this.toasts = [...this.toasts, { message, status: "render", type }];
    const index = this.toasts.length - 1;

    setTimeout(() => {
      this.toasts[index].status = 'show';
    }, 50)
  }

  removeToast(index: number): void {
    this.toasts.splice(index, 1);
  }
}
