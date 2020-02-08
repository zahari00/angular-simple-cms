import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";

// http module
import { HttpClientModule } from "@angular/common/http";
import { AdminPanelModule } from "./admin-panel/admin-panel.module";
import { MediaModule } from "./admin-panel/media/media.module";
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    AdminPanelModule,
    MediaModule,
    CoreModule
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
