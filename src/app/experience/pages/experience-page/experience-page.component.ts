import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
	selector: 'app-experience-page',
	templateUrl: './experience-page.component.html',
	styleUrls: ['./experience-page.component.css']
})

export class ExperiencePageComponent implements OnInit {
	// Variable para almacenar el último fragmento accedido
	private lastFragment: string | null = null;

	constructor(private route: ActivatedRoute, private scrollService: ScrollService) { }

	ngOnInit(): void {
		this.scrollService.handleFragmentChange(this.route);
	}
}
