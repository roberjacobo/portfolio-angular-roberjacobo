import { provideZonelessChangeDetection } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import AOS from 'aos';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule, { applicationProviders: [provideZonelessChangeDetection()] })
	.then(() => {
		AOS.init({
			delay: 200,
			once: true,
		});
	})
	.catch(err => console.error(err));
