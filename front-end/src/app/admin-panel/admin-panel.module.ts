// Modules
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { CommonModule } from "@angular/common";
import { SharedModule } from "./shared/shared.module";
import { InputModule } from "./input/input.module";
import { MediaModule } from "./media/media.module";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { DashboardComponent } from "./dashboard/dashboard.component";

// Pages
import { PageListComponent } from "./page/page-list/page-list.component";
import { PageFormComponent } from "./page/page-form/page-form.component";

// Blocks
import { BlockListComponent } from "./block/block-list/block-list.component";
import { BlockFormComponent } from "./block/block-form/block-form.component";
import { HeroComponent } from "./block/types/hero/hero.component";
import { TwoColumnsComponent } from "./block/types/two-columns/two-columns.component";
import { TextComponent } from "./block/types/text/text.component";

// Layout
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    PageListComponent,
    DashboardComponent,
    BlockListComponent,
    PageFormComponent,
    BlockFormComponent,
    HeroComponent,
    TwoColumnsComponent,
    TextComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    InputModule,
    MediaModule,
    DragDropModule
  ]
})
export class AdminPanelModule {}
