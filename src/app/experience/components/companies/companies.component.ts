import { Component, ChangeDetectionStrategy } from '@angular/core';
import { companies } from '../../../../objects';
@Component({
	selector: 'app-companies',
	templateUrl: './companies.component.html',
	styleUrls: ['./companies.component.css'],
	changeDetection: ChangeDetectionStrategy.Eager,
	standalone: false
})
export class CompaniesComponent {
	title = companies.title;
	// Current role first: the list is stored chronologically, shown newest-first
	companiesList = [...companies.companies].reverse();
}
