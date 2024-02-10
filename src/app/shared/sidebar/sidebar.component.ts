import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Renderer2 } from '@angular/core';

@Component({
	selector: 'shared-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit, OnDestroy {
	items: MenuItem[] = [];
	sidebarVisible: boolean = false;

	constructor(private renderer: Renderer2) { }

	ngOnInit() {
		this.items = [
			{
				label: 'Home',
				icon: 'pi pi-fw pi-home',
				expanded: false,
				items: [
					{
						label: 'Welcome',
						icon: 'pi pi-briefcase',
						routerLink: '/home',
						fragment: 'home'
					},
					{
						label: 'About',
						icon: 'pi pi-user',
						routerLink: '/home',
						fragment: 'about'
					},
					{
						label: 'Hobbies',
						icon: 'pi pi-ticket',
						routerLink: '/home',
						fragment: 'hobbies'
					}
				],
			},
			{
				label: 'Experience',
				icon: 'pi pi-fw pi-briefcase',
				expanded: false,
				items: [
					{
						label: 'Technologies',
						icon: 'pi pi-fw pi-code',
						routerLink: '/experience',
						fragment: 'technologies'
					},
					{
						label: 'Companies',
						icon: 'pi pi-fw pi-building',
						routerLink: '/experience',
						fragment: 'companies'
					},
				],
			},
			{
				label: 'Work Networks',
				icon: 'pi pi-external-link',
				routerLink: '/networks',
				expanded: false,
				items: [
					{
						label: 'Github',
						icon: 'pi pi-fw pi-github',
						externalLink: 'https://github.com/roberjacobo',
					},
					{
						label: 'LinkedIn',
						icon: 'pi pi-linkedin',
						externalLink: 'https://www.linkedin.com/in/roberto-jacobo/'
					}
				],
			},
		];
	}

	toggleSidebar() {
		this.sidebarVisible = !this.sidebarVisible;
		if (this.sidebarVisible) {
			this.renderer.setStyle(document.body, 'overflow', 'hidden');
			window.addEventListener('wheel', this.disableScroll, { passive: false });
		} else {
			this.renderer.removeStyle(document.body, 'overflow');
			window.removeEventListener('wheel', this.disableScroll);
		}
	}

	disableScroll = (event: WheelEvent) => {
		if (this.sidebarVisible) {
			event.preventDefault();
		}
	};

	onSidebarHide() {
		this.renderer.removeStyle(document.body, 'overflow');
		window.removeEventListener('wheel', this.disableScroll);
		this.sidebarVisible = false;
	}

	ngOnDestroy() {
		window.removeEventListener('wheel', this.disableScroll);
	}

	// Ajuste de trackByFn para tipos explícitos
	trackByFn(index: number, item: MenuItem): string {
		// Asume que cada item tiene una propiedad 'label' que es única
		// Si tienes un identificador único, úsalo aquí en su lugar
		return item.label ?? 'defaultLabel'; // Asegúrate de que 'label' es único entre todos tus items
	}
}
