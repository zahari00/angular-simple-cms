// Modules
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { CommonModule } from "@angular/common";
import { SharedModule } from './shared/shared.module';


// Components
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ListComponent } from "./common/list/list.component";

// Page CRUD
import { PageListComponent } from "./page/page-list/page-list.component";
import { CreatePageComponent } from "./page/create-page/create-page.component";

// Block Crud
import { BlockListComponent } from "./block/block-list/block-list.component";
import { CreateBlockComponent } from "./block/create-block/create-block.component";
import { HeroComponent } from './block/types/hero/hero.component';
import { TwoColumnsComponent } from './block/types/two-columns/two-columns.component';
import { TextComponent } from './block/types/text/text.component';
import { InputModule } from './input/input.module';

@NgModule({
  declarations: [
    PageListComponent,
    DashboardComponent,
    BlockListComponent,
    ListComponent,
    CreatePageComponent,
    CreateBlockComponent,
    HeroComponent,
    TwoColumnsComponent,
    TextComponent
  ],
  exports: [],
  imports: [CommonModule, AppRoutingModule, SharedModule, InputModule]
})
export class AdminPanelModule {}
