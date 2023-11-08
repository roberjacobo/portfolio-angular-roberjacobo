import { NgModule } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { AccordionModule } from "primeng/accordion";

@NgModule({
  exports: [MenubarModule, AccordionModule],
})
export class PrimengModule {}
