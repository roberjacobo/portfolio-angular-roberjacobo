import { Component, OnInit } from '@angular/core';
import { TechLogo } from 'src/app/models/interfaces';
import * as data from 'src/objects';

@Component({
	selector: 'app-technologies',
	templateUrl: './technologies.component.html',
	styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
	title: string = '';
	logos: TechLogo[] = [];

	ngOnInit() {
		this.title = data.technologies.title;
		this.logos = data.technologies.logos;
	}
}
