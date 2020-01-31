import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuard } from "./auth/auth.guard";
import { GuestGuard } from "./auth/guest.guard";
import { DashboardComponent } from "./admin-panel/dashboard/dashboard.component";
import { PageListComponent } from "./admin-panel/page/page-list/page-list.component";
import { CreatePageComponent } from "./admin-panel/page/create-page/create-page.component";
import { BlockListComponent } from "./admin-panel/block/block-list/block-list.component";
import { CreateBlockComponent } from "./admin-panel/block/create-block/create-block.component";
import { MediaListComponent } from './admin-panel/media/media-list/media-list.component';

const routes: Routes = [
  {
    path: "backend",
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
        component: CreatePageComponent
      },
      {
        path: "blocks",
        component: BlockListComponent
      },
      {
        path: "blocks/create",
        component: CreateBlockComponent
      },
      {
        path: "media",
        component: MediaListComponent
      }
    ],
    canActivate: [AuthGuard]
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
