import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardModule } from "./dashboard/dashboard.module";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () => DashboardModule
  },
  { path: "**", redirectTo: "dashboard" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
