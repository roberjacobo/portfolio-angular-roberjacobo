import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, HostListener, Renderer2 } from '@angular/core';
import { NavItem } from '../../models/interfaces';

@Component({
	selector: 'shared-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: false
})
export class SidebarComponent implements OnInit, OnDestroy {
	items: NavItem[] = [];
	sidebarVisible: boolean = false;

	constructor(private renderer: Renderer2) { }

	ngOnInit() {
		this.items = [
			{
				label: 'Home',
				icon: 'home',
				expanded: false,
				items: [
					{
						label: 'Welcome',
						icon: 'briefcase',
						routerLink: '/home',
						fragment: 'home'
					},
					{
						label: 'About',
						icon: 'user',
						routerLink: '/home',
						fragment: 'about'
					},
					{
						label: 'Hobbies',
						icon: 'ticket',
						routerLink: '/home',
						fragment: 'hobbies'
					}
				],
			},
			{
				label: 'Experience',
				icon: 'briefcase',
				expanded: false,
				items: [
					{
						label: 'Technologies',
						icon: 'code',
						routerLink: '/experience',
						fragment: 'technologies'
					},
					{
						label: 'Companies',
						icon: 'building',
						routerLink: '/experience',
						fragment: 'companies'
					},
				],
			},
			{
				label: 'Writing',
				icon: 'pen',
				routerLink: '/writing',
			},
			{
				label: 'Work Networks',
				icon: 'external-link',
				expanded: false,
				items: [
					{
						label: 'Github',
						icon: 'github',
						externalLink: 'https://github.com/roberjacobo',
					},
					{
						label: 'LinkedIn',
						icon: 'linkedin',
						externalLink: 'https://www.linkedin.com/in/roberto-jacobo/'
					},
					{
						label: 'Email',
						icon: 'mail',
						externalLink: 'mailto:robjacobox@gmail.com'
					}
				],
			},
		];
	}

	toggleSidebar() {
		this.sidebarVisible = !this.sidebarVisible;
		if (this.sidebarVisible) {
			this.renderer.setStyle(document.body, 'overflow', 'hidden');
		} else {
			this.renderer.removeStyle(document.body, 'overflow');
		}
	}

	onSidebarHide() {
		this.renderer.removeStyle(document.body, 'overflow');
		this.sidebarVisible = false;
	}

	@HostListener('document:keydown.escape')
	onEscape() {
		if (this.sidebarVisible) {
			this.onSidebarHide();
		}
	}

	ngOnDestroy() {
		this.renderer.removeStyle(document.body, 'overflow');
	}
}
