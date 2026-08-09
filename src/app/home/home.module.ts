import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
// Components
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
	declarations: [
		HomeComponent,
		HeroComponent,
		AboutComponent,
	],
	exports: [],
	imports: [CommonModule, SharedModule],
})
export class HomeModule {}
