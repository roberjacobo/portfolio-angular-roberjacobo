import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/pages/home/home.component';
import { ExperiencePageComponent } from './experience/pages/experience-page/experience-page.component';
import { TechnologiesComponent } from './experience/components/technologies/technologies.component';
import { CompaniesComponent } from './experience/components/companies/companies.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'experience',
		component: ExperiencePageComponent,
		children: [
			{ path: 'technologies', component: TechnologiesComponent },
			{ path: 'companies', component: CompaniesComponent },
		]
	},
	{
		path: '**',
		redirectTo: '/home',
		pathMatch: 'full',
	},
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
