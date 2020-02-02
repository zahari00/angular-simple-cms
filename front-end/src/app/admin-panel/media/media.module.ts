import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminPanelModule } from '../admin-panel.module';
import { MediaListComponent } from './list/media-list.component';
import { MediaItemComponent } from './item/media-item.component';
import { MediaComponent } from './page/media.component';
import { MediaEditComponent } from './edit/media-edit.component';

// font awesome icons
@NgModule({
  declarations: [
    MediaListComponent,
    MediaItemComponent,
    MediaComponent,
    MediaEditComponent,
  ],
  imports: [CommonModule, AdminPanelModule, AppRoutingModule]
})
export class MediaModule {}
