import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PanelWrapperComponent } from "./panel-wrapper/panel-wrapper.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { OverlayComponent } from "./overlay/overlay.component";
import { ListComponent } from "./list/list.component";
import { AdminPanelRoutingModule } from '../admin-panel-routing';

@NgModule({
  declarations: [
    PanelWrapperComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    OverlayComponent,
    ListComponent
  ],
  imports: [CommonModule, FontAwesomeModule, AdminPanelRoutingModule],
  exports: [
    PanelWrapperComponent,
    FontAwesomeModule,
    OverlayComponent,
    ListComponent
  ]
})
export class SharedModule {}
