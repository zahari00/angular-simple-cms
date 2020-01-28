import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { NavigationComponent } from "./layout/navigation/navigation.component";
import { AdminPanelComponent } from "./admin-panel.component";
import { AppRoutingModule } from "../app-routing.module";
// font awesome icons
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PageListComponent } from "./page/page-list/page-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BlockListComponent } from "./block/block-list/block-list.component";
import { ListComponent } from './common/list/list.component';
import { CreatePageComponent } from './page/create-page/create-page.component';
import { CreateBlockComponent } from './block/create-block/create-block.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    AdminPanelComponent,
    PageListComponent,
    DashboardComponent,
    BlockListComponent,
    ListComponent,
    CreatePageComponent,
    CreateBlockComponent
  ],
  imports: [CommonModule, AppRoutingModule, FontAwesomeModule]
})
export class AdminPanelModule {}
