// Modules
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { CommonModule } from "@angular/common";
import { SharedModule } from './shared/shared.module';
import { InputModule } from './input/input.module';
import { MediaModule } from './media/media.module';

import { DashboardComponent } from "./dashboard/dashboard.component";

// Pages
import { PageListComponent } from "./page/page-list/page-list.component";
import { CreatePageComponent } from "./page/create-page/create-page.component";

// Blocks
import { BlockListComponent } from "./block/block-list/block-list.component";
import { CreateBlockComponent } from "./block/block-form/block-form.component";
import { HeroComponent } from './block/types/hero/hero.component';
import { TwoColumnsComponent } from './block/types/two-columns/two-columns.component';
import { TextComponent } from './block/types/text/text.component';

@NgModule({
  declarations: [
    PageListComponent,
    DashboardComponent,
    BlockListComponent,
    CreatePageComponent,
    CreateBlockComponent,
    HeroComponent,
    TwoColumnsComponent,
    TextComponent
  ],
  exports: [],
  imports: [CommonModule, AppRoutingModule, SharedModule, InputModule, MediaModule]
})
export class AdminPanelModule {}
