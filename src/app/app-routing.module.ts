import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/pages/home/home.component';
import { ExperiencePageComponent } from './experience/pages/experience-page/experience-page.component';
import { WritingPageComponent } from './writing/pages/writing-page/writing-page.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'experience',
		component: ExperiencePageComponent
	},
	{
		path: 'writing',
		component: WritingPageComponent
	},
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', redirectTo: '/home' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			// Land directly on the linked section instead of keeping the previous
			// scroll position and animating there afterwards.
			anchorScrolling: 'enabled',
			scrollPositionRestoration: 'top',
			onSameUrlNavigation: 'reload',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
