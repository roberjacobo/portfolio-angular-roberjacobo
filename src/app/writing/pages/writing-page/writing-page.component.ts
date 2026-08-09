import { Component, ChangeDetectionStrategy } from '@angular/core';
import { writing } from '../../../../objects';

@Component({
	selector: 'app-writing-page',
	templateUrl: './writing-page.component.html',
	styleUrls: ['./writing-page.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: false
})
export class WritingPageComponent {
	title = writing.title;
	intro = writing.intro;
	posts = writing.posts;
}
