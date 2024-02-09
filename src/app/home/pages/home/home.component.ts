import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private route: ActivatedRoute, private scrollService: ScrollService) { }

	ngOnInit(): void {
		this.scrollService.handleFragmentChange(this.route);
	}
}
