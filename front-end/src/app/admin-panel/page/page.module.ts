// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { RouterModule } from '@angular/router';
import { AdminPanelRoutingModule } from "../admin-panel-routing";
import { SharedModule } from "../shared/shared.module";
import { PageRoutingModule } from './page-routing'

// Pages
import { PageListComponent } from "./page-list/page-list.component";
import { PageFormComponent } from "./page-form/page-form.component";

@NgModule({
  declarations: [
    PageFormComponent,
    PageListComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    SharedModule,
    DragDropModule,
    PageRoutingModule,
    // RouterModule,
  ]
})
export class PageModule {}
