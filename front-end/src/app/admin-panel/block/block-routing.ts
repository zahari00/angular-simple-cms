import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BlockListComponent } from "./block-list/block-list.component";
import { BlockFormComponent } from "./block-form/block-form.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/backend/blocks/list',
    pathMatch: 'full'
  },
  {
    path: "list",
    component: BlockListComponent
  },
  {
    path: "create",
    component: BlockFormComponent
  },
  {
    path: ":blockId",
    component: BlockFormComponent
  },
  {
    path: '**',
    redirectTo: '/backend/blocks/list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockRoutingModule {}
