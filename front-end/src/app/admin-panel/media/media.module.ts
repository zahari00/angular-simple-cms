import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminPanelRoutingModule } from '../admin-panel-routing';
import { MediaListComponent } from "./list/media-list.component";
import { MediaItemComponent } from "./item/media-item.component";
import { MediaComponent } from "./page/media.component";
import { MediaEditComponent } from "./edit/media-edit.component";
import { PickerComponent } from "./picker/picker.component";
import { SharedModule } from '../shared/shared.module';

// font awesome icons
@NgModule({
  declarations: [
    MediaListComponent,
    MediaItemComponent,
    MediaComponent,
    MediaEditComponent,
    PickerComponent,
  ],
  exports: [PickerComponent],
  imports: [CommonModule, AdminPanelRoutingModule, SharedModule]
})
export class MediaModule {}
