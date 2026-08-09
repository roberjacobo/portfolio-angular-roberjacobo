import { Component, ChangeDetectionStrategy } from '@angular/core';
import { about } from '../../../../objects';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css'],
	changeDetection: ChangeDetectionStrategy.Eager,
	standalone: false
})
export class AboutComponent {
	about = about;
}
