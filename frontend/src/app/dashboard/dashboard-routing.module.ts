import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { MainContentComponent } from "./components/main-content/main-content.component";
import { InvoiceListingComponent } from "../invoices/components/invoice-listing.component";
import { ClientsListingComponent } from "../clients/components/clients-listing.component";
import { MyformComponent } from "../myform/components/myform.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", component: MainContentComponent },
      {
        path: "invoices",
        component: InvoiceListingComponent
      },
      {
        path: "clients",
        component: ClientsListingComponent
      },
      {
        path: "myform",
        component: MyformComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
