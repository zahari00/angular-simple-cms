// Modules
import { NgModule } from "@angular/core";
import { AdminPanelRoutingModule } from './admin-panel-routing';
import { CommonModule } from "@angular/common";
import { SharedModule } from "./shared/shared.module";
import { InputModule } from "./input/input.module";
import { MediaModule } from "./media/media.module";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BlockModule } from './block/block.module'

import { DashboardComponent } from "./dashboard/dashboard.component";

// Layout
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    SharedModule,
    InputModule,
    MediaModule,
    DragDropModule,
    BlockModule
  ]
})
export class AdminPanelModule {}
