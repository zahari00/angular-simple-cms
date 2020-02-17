import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// admin panel
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PageListComponent } from "./page/page-list/page-list.component";
import { PageFormComponent } from "./page/page-form/page-form.component";
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
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)    
  },
  {
    path: "blocks",
    loadChildren: () => import('./block/block.module').then(m => m.BlockModule)    
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
