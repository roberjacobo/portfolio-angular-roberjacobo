import { Component, OnInit } from '@angular/core';
import { companies } from 'src/objects';
@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.css'],
    standalone: false
})
export class CompaniesComponent implements OnInit {
	companiesList = companies.companies; // Renombrado para claridad

	constructor() { }

	ngOnInit(): void {
	}
}
