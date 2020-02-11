import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from './core/core.module';

// http module
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    CoreModule
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
