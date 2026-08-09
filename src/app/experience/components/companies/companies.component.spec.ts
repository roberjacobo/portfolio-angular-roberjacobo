import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesComponent } from './companies.component';
import { SharedModule } from '../../../shared/shared.module';

describe('CompaniesComponent', () => {
	let component: CompaniesComponent;
	let fixture: ComponentFixture<CompaniesComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [SharedModule],
			declarations: [CompaniesComponent]
		});
		fixture = TestBed.createComponent(CompaniesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
