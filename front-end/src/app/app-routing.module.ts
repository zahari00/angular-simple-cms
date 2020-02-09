import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuard } from "./auth/auth.guard";
import { GuestGuard } from "./auth/guest.guard";

// admin panel
import { DashboardComponent } from "./admin-panel/dashboard/dashboard.component";
import { PageListComponent } from "./admin-panel/page/page-list/page-list.component";
import { PageFormComponent } from "./admin-panel/page/page-form/page-form.component";
import { BlockListComponent } from "./admin-panel/block/block-list/block-list.component";
import { BlockFormComponent } from "./admin-panel/block/block-form/block-form.component";
import { MediaComponent } from "./admin-panel/media/page/media.component";
import { LayoutComponent } from './admin-panel/layout/layout.component';

const routes: Routes = [
  {
    path: "backend",
    // canActivate: [AuthGuard],
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "/backend/dashboard"
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "pages",
        component: PageListComponent
      },
      {
        path: "pages/create",
        component: PageFormComponent
      },
      {
        path: "pages/:pageId",
        component: PageFormComponent
      },
      {
        path: "blocks",
        component: BlockListComponent
      },
      {
        path: "blocks/create",
        component: BlockFormComponent
      },
      {
        path: "blocks/:blockId",
        component: BlockFormComponent
      },
      {
        path: "media",
        component: MediaComponent
      },
      {
        path: "layout",
        component: LayoutComponent
      }
    ]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [GuestGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard, GuestGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {}
