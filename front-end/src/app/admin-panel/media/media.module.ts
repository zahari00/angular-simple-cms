import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminPanelModule } from '../admin-panel.module';
import { MediaListComponent } from './media-list/media-list.component';

// font awesome icons
@NgModule({
  declarations: [
    MediaListComponent,
  ],
  imports: [CommonModule, AdminPanelModule, AppRoutingModule]
})
export class MediaModule {}
