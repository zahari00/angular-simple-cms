import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { ClientRoutingModule } from './client-routing.module';
import { BlocksComponent } from './blocks/blocks.component';
import { HeroComponent } from './block-types/hero/hero.component';
import { TextComponent } from './block-types/text/text.component';
import { TwoColumnsComponent } from './block-types/two-columns/two-columns.component'

@NgModule({
  declarations: [PageComponent, BlocksComponent, HeroComponent, TextComponent, TwoColumnsComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
