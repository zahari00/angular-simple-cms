import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: "**",
    component: PageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
