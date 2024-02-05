// sidebar.component.ts
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
