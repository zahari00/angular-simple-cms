import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageFormComponent } from "./page-form/page-form.component";
import { PageListComponent } from "./page-list/page-list.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/backend/pages/list",
    pathMatch: 'full'
  },
  {
    path: "list",
    component: PageListComponent
  },
  {
    path: "create",
    component: PageFormComponent
  },
  {
    path: ":pageId",
    component: PageFormComponent
  },
  {
    path: "**",
    redirectTo: "/backend/pages/list"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {}
