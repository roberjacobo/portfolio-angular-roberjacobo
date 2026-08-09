import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CompaniesInfo } from '../../models/interfaces';

@Component({
	selector: 'shared-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
	changeDetection: ChangeDetectionStrategy.Eager,
	standalone: false
})
export class CardComponent implements OnInit {
  @Input() company!: CompaniesInfo;

  constructor() { }

  ngOnInit(): void {
  }
}
