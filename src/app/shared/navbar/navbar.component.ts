import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "shared-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: "Home",
        icon: "pi pi-fw pi-home",
      },
      {
        label: "Technologies",
        icon: "pi pi-fw pi-code",
      },
      {
        label: "Work Networks",
        icon: "pi pi-fw pi-github",
      },
    ];
  }
}
