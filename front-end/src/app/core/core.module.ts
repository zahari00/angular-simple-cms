import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsComponent } from './toasts/toasts.component';



@NgModule({
  declarations: [ToastsComponent],
  imports: [
    CommonModule
  ],
  exports: [ToastsComponent]
})
export class CoreModule { }
