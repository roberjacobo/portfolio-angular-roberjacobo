import { Component } from '@angular/core';

@Component({
    selector: 'home-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css'],
    standalone: false
})
export class HeroComponent {
	heroItems: string[] = ['Roberto Jacobo', 'Fullstack Developer'];
}
