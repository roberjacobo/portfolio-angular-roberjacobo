import { Component } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css'],
})
export class AboutComponent {
	content: string = `Experienced full-stack developer with a solid five-year 
    history in the software industry. My core expertise lies in backend development, 
    and I have a demonstrated track record of fostering productive collaborations with prominent 
    companies and global teams, resulting in consistently successful project outcomes.`;
}
