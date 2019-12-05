import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { MyformComponent } from "./myform/components/myform.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, MyformComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: "toast-bottom-center",
      preventDuplicates: true,
      progressBar: true,
      closeButton: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
