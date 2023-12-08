import { Component } from "@angular/core";

@Component({
  selector: "home-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
})
export class HeroComponent {
  heroItems: string[] = ["Roberto Jacobo", "Fullstack Developer"];
}
