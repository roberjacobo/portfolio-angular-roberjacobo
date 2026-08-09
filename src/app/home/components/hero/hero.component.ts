import { Component, ChangeDetectionStrategy } from '@angular/core';
import { hero, contact } from '../../../../objects';

@Component({
	selector: 'home-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.css'],
	changeDetection: ChangeDetectionStrategy.Eager,
	standalone: false
})
export class HeroComponent {
	hero = hero;
	contact = contact;
}
