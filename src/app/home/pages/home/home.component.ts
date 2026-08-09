import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: false
})
export class HomeComponent {}
