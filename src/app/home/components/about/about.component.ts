import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title: string = 'About me'
  content: string = `Versatile Fullstack Developer with five years of progressive experience in the software industry.
  I started with a focus on full-stack solutions, moved into test automation to ensure software quality,
  and have recently honed my skills in Frontend development, crafting intuitive and engaging user
  interfaces. This path has granted me a comprehensive understanding of the software development
  lifecycle and the ability to collaborate effectively with international teams and top tier companies,
  delivering successful outcomes at each phase.`;
}
