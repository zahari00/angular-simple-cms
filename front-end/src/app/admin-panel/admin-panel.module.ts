import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { NavigationComponent } from "./layout/navigation/navigation.component";
import { AdminPanelComponent } from "./admin-panel.component";
import { AppRoutingModule } from "../app-routing.module";
// font awesome icons
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PageListComponent } from "./page-list/page-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BlockListComponent } from "./block-list/block-list.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    AdminPanelComponent,
    PageListComponent,
    DashboardComponent,
    BlockListComponent
  ],
  imports: [CommonModule, AppRoutingModule, FontAwesomeModule]
})
export class AdminPanelModule {}
