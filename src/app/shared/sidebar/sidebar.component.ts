import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'shared-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
	items: MenuItem[] = [];
	sidebarVisible: boolean = false;

	constructor() {}

	ngOnInit() {
		this.items = [
			{
				label: 'Home',
				icon: 'pi pi-fw pi-home',
				routerLink: '/',
				expanded: false,
				items: [
					{
						label: 'about',
						icon: 'pi pi-user',
						routerLink: '/',
						fragment: 'about'
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
					}
				],
			},
		];
	}
  

	toggleSidebar() {
		this.sidebarVisible = !this.sidebarVisible;
		if (this.sidebarVisible) {
			// Añade el manejador de eventos para deshabilitar el scroll fuera del sidebar
			document.body.style.overflow = 'hidden';
			window.addEventListener('wheel', this.disableScroll, { passive: false });
		} else {
			// Remueve el manejador de eventos cuando el sidebar se oculta
			// y asegura que el desplazamiento se habilita nuevamente
			document.body.style.overflow = '';
			window.removeEventListener('wheel', this.disableScroll);
		}
	}
  

	disableScroll = (event: WheelEvent) => {
		if (this.sidebarVisible) {
			event.preventDefault();
		}
	};

	onSidebarHide() {
		// Asegura que el desplazamiento se habilita nuevamente al cerrar el sidebar
		document.body.style.overflow = '';
		window.removeEventListener('wheel', this.disableScroll);
		// Opcionalmente, restablece sidebarVisible a false si es necesario
		this.sidebarVisible = false;
	}
  
}
