import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientsListingComponent } from "./components/clients-listing.component";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/material.module";

@NgModule({
  declarations: [ClientsListingComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [ClientsListingComponent]
})
export class ClientsModule {}
