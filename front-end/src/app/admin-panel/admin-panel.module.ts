// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { SharedModule } from "./shared/shared.module";
import { InputModule } from "./input/input.module";

// Routing
import { AdminPanelRoutingModule } from './admin-panel-routing';

// Components
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
    FooterComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    SharedModule,
    InputModule,
    DragDropModule,
  ]
})
export class AdminPanelModule {}
