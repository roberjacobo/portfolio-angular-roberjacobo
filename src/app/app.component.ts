import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AppComponent {
	title = 'portfolio';
}
