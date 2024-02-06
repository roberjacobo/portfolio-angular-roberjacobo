import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { CompaniesComponent } from './components/companies/companies.component';


@NgModule({
	declarations: [
		ExperiencePageComponent,
		TechnologiesComponent,
		CompaniesComponent
	],
	exports: [
		ExperiencePageComponent
	],
	imports: [
		CommonModule,
		SharedModule
	], 
})
export class ExperienceModule { }
