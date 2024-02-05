import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@NgModule({
	exports: [AccordionModule, SidebarModule, ButtonModule],
})
export class PrimengModule {}
