import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng-module/primeng.module';
import { RouterModule } from '@angular/router';
// Components
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
	declarations: [SidebarComponent],
	imports: [CommonModule, PrimengModule, RouterModule],
	exports: [SidebarComponent],
})
export class SharedModule {}
