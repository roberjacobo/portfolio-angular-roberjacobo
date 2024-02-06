import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
	exports: [AccordionModule, SidebarModule, ButtonModule, CardModule],
})
export class PrimengModule {}
