import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'home-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
	heroItems: string[] = ['Roberto Jacobo', 'Fullstack Developer'];
}
