// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { RouterModule } from '@angular/router';
import { AdminPanelRoutingModule } from "../admin-panel-routing";
import { MediaModule } from "../media/media.module";
import { SharedModule } from "../shared/shared.module";
import { InputModule } from "../input/input.module";
import { BlockRoutingModule } from './block-routing'

// Blocks
import { BlockListComponent } from "./block-list/block-list.component";
import { BlockFormComponent } from "./block-form/block-form.component";
import { HeroComponent } from "./types/hero/hero.component";
import { TwoColumnsComponent } from "./types/two-columns/two-columns.component";
import { TextComponent } from "./types/text/text.component";
import { PartnerComponent } from './types/partner/partner.component';

@NgModule({
  declarations: [
    BlockFormComponent,
    HeroComponent,
    TwoColumnsComponent,
    TextComponent,
    BlockListComponent,
    PartnerComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    SharedModule,
    InputModule,
    MediaModule,
    DragDropModule,
    BlockRoutingModule,
    RouterModule,
  ]
})
export class BlockModule {}
