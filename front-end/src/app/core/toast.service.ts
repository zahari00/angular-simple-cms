import { Injectable } from "@angular/core";
import { Toast } from "../interfaces";

@Injectable({
  providedIn: "root"
})
export class ToastService {
  toasts: Toast[] = [];

  /**
   * Send Error toast to the user
   * 
   * @param message 
   */
  error(message: string): void {
    this.sendToast(message, "error");
  }

  /**
   * Send success toast to the user
   * 
   * @param message 
   */
  success(message: string): void {
    this.sendToast(message, "success");
  }

  /**
   * Send Toast notification to the user
   * 
   * @param message 
   * @param type enum('error', 'success')
   * 
   */
  private sendToast(message: string, type: string): void {
    const id = Date.now();
    // Add the new toast to the toasts array
    this.toasts = [...this.toasts, { message, status: "render", type, id }];
    const index = this.toasts.length - 1;
    
    // trigger the toast animation
    setTimeout(() => {
      this.toasts[index].status = "show";
    }, 50);

    /**
     * Remove toast after 5 second
     */
    setTimeout(() => {
      this.removeToast(id)
    }, 5000)
  }

  /**
   * Remove toast 
   * 
   * @param id toast's id
   */
  removeToast(id: number): void {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
  }
}
