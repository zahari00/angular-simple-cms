import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from './user-list/user-list.component'
import { UserFormComponent } from './user-form/user-form.component'

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/backend/users/list"
  },
  {
    path: "list",
    component: UserListComponent
  },
  {
    path: "create",
    component: UserFormComponent
  },
  {
    path: ":userId",
    component: UserFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
