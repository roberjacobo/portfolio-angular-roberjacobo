import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { CompaniesComponent } from './components/companies/companies.component';


@NgModule({
  declarations: [
    ExperiencePageComponent,
    TechnologiesComponent,
    CompaniesComponent
  ],
  exports: [
    ExperiencePageComponent
  ],
  imports: [
    CommonModule
  ], 
})
export class ExperienceModule { }
