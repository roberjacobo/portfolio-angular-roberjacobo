import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
	declarations: [SidebarComponent, CardComponent, IconComponent],
	imports: [CommonModule, RouterModule],
	exports: [SidebarComponent, CardComponent, IconComponent],
})
export class SharedModule {}
