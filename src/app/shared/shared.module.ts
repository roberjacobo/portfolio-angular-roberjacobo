import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng-module/primeng.module';
import { RouterModule } from '@angular/router';
// Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';

@NgModule({
	declarations: [SidebarComponent, CardComponent],
	imports: [CommonModule, PrimengModule, RouterModule],
	exports: [SidebarComponent, CardComponent],
})
export class SharedModule {}
