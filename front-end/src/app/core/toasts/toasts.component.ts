import { Component } from "@angular/core";
import { ToastService } from "../toast.service";
import { Toast } from "src/app/interfaces";

@Component({
  selector: "app-toasts",
  templateUrl: "./toasts.component.html",
  styleUrls: ["./toasts.component.styl"]
})
export class ToastsComponent {
  get toasts(): Toast[] {
    return this.toastService.toasts || [];
  }

  constructor(private toastService: ToastService) {}

  /**
   * Get toast classes 
   * 
   * @param toast 
   */
  getToastClasses(toast: Toast) {
    return `toast-${toast.type} toast-status-${toast.status}`;
  }

  /**
   * Remove specific toast
   * @param id 
   */
  removeToast(id: number) {
    this.toastService.removeToast(id);
  }
}
