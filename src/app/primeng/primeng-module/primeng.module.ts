import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
	exports: [AccordionModule, SidebarModule, ButtonModule, CardModule, TabViewModule],
})
export class PrimengModule {}
