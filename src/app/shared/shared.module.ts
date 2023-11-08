import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimengModule } from "../primeng/primeng-module/primeng.module";
// Components
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, PrimengModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
