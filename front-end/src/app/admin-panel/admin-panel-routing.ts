import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// admin panel
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PageListComponent } from "./page/page-list/page-list.component";
import { PageFormComponent } from "./page/page-form/page-form.component";
import { BlockListComponent } from "./block/block-list/block-list.component";
import { BlockFormComponent } from "./block/block-form/block-form.component";
import { MediaComponent } from "./media/page/media.component";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule {}
