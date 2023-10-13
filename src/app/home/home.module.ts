import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// Components
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [HeroComponent, AboutComponent],
  exports: [HeroComponent, AboutComponent],
  imports: [CommonModule],
})
export class HomeModule {}
