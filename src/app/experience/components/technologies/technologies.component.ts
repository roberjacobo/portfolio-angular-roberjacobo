import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TechLogo } from '../../../models/interfaces';
import * as data from '../../../../objects';

@Component({
	selector: 'app-technologies',
	templateUrl: './technologies.component.html',
	styleUrls: ['./technologies.component.css'],
	changeDetection: ChangeDetectionStrategy.Eager,
	standalone: false
})
export class TechnologiesComponent implements OnInit {
	title: string = '';
	logos: TechLogo[] = [];
	disciplinesTitle: string = '';
	disciplines: string[] = [];

	ngOnInit() {
		this.title = data.technologies.title;
		this.logos = data.technologies.logos;
		this.disciplinesTitle = data.technologies.disciplinesTitle;
		this.disciplines = data.technologies.disciplines;
	}
}
