import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-myform",
  templateUrl: "./myform.component.html",
  styleUrls: ["./myform.component.scss"]
})
export class MyformComponent implements OnInit {
  username: string;
  password: string;
  hide = true;
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit() {}

  login(): void {
    if (this.username == "admin" && this.password == "admin") {
      this.toastr.success("You are logged in !", "Bienvenue");
      this.router.navigate(["dashboard/invoices"]);
    } else {
      this.toastr.error("Invalid credentials", "Erreur de données");
    }
  }
}
