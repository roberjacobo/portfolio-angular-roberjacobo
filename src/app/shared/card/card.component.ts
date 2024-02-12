import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CompaniesInfo } from 'src/app/models/interfaces';

@Component({
	selector: 'shared-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() company!: CompaniesInfo;

  constructor() { }

  ngOnInit(): void {
  }
}
