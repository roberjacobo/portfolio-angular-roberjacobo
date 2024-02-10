import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class ScrollService {
	private lastFragment: string | null = null;

	constructor() { }

	handleFragmentChange(route: ActivatedRoute): void {
		route.fragment.subscribe(fragment => {
			if (fragment && this.lastFragment !== fragment) {
				this.scrollToFragment(fragment);
				this.lastFragment = fragment;
			}
		});
	}

	private scrollToFragment(fragment: string): void {
		setTimeout(() => {
			const element = document.getElementById(fragment);
			if (element) {
				const topPos = element.getBoundingClientRect().top + window.pageYOffset;
				window.scrollTo({top: topPos, behavior: 'smooth'});
			}
		}, 500);
	}
}
