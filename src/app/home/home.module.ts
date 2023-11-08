import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// Components
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { HobbiesComponent } from "./components/hobbies/hobbies.component";
import { PrimengModule } from "../primeng/primeng-module/primeng.module";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutComponent,
    HobbiesComponent,
  ],
  exports: [],
  imports: [CommonModule, PrimengModule],
})
export class HomeModule {}
