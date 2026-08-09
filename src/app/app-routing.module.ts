import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/pages/home/home.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'experience',
		loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule)
	},
	{
		path: 'writing',
		loadChildren: () => import('./writing/writing.module').then(m => m.WritingModule)
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
