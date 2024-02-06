import { Component, OnInit } from '@angular/core';
import { companies } from 'src/objects'; // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companiesList = companies.companies; // Renombrado para claridad

  constructor() { }

  ngOnInit(): void {
  }
}
