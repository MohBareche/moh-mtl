import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialModule } from "../shared/material.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { InvoicesModule } from "../invoices/invoices.module";
import { ClientsModule } from "../clients/clients.module";
import { MyformModule } from "../myform/myform.module";

import { DashboardComponent } from "./dashboard.component";
import { MainContentComponent } from "./components/main-content/main-content.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";

@NgModule({
  declarations: [
    DashboardComponent,
    MainContentComponent,
    SideNavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    InvoicesModule,
    ClientsModule,
    MyformModule
  ]
})
export class DashboardModule {}
