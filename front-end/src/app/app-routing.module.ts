import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuard } from "./auth/auth.guard";
import { GuestGuard } from "./auth/guest.guard";
import { DashboardComponent } from './admin-panel/dashboard/dashboard.component';
import { PageListComponent } from './admin-panel/page-list/page-list.component';

const routes: Routes = [
  {
    path: "backend",
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "pages",
        component: PageListComponent,
      },
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
