import { Component } from "@angular/core";

@Component({
  selector: "shared-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {

  portfolioTitle: string = "Roberto Jacobo's Portfolio";

  menuItems: MenuItem[] = [
    { name: "Home", url: "/home" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Technologies", url: "/technologies" },
    { name: "Networks", url: "/networks" },
  ];
}

interface MenuItem {
  name: string;
  url: string;
}
