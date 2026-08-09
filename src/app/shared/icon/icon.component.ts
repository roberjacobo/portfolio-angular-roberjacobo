import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IconName } from '../../models/interfaces';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: false
})
export class IconComponent {
	@Input({ required: true }) name!: IconName;
}
