import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyformComponent } from "./components/myform.component";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/material.module";

@NgModule({
  declarations: [MyformComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [MyformComponent]
})
export class MyformModule {}
