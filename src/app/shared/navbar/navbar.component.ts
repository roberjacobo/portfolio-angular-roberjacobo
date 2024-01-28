import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'shared-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
	items: MenuItem[] = [];

	ngOnInit() {
		this.items = [
			{
				label: 'Home',
				icon: 'pi pi-fw pi-home',
				routerLink: '/'
			},
			{
				label: 'Experience',
				icon: 'pi pi-fw pi-briefcase',
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
				icon: 'pi pi-fw pi-github',
			},
		];
	}
}
