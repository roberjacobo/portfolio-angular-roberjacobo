import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ExperiencePageComponent } from './experience-page.component';
import { ExperienceModule } from '../../experience.module';

describe('ExperiencePageComponent', () => {
	let component: ExperiencePageComponent;
	let fixture: ComponentFixture<ExperiencePageComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ExperienceModule],
			providers: [provideRouter([])]
		});
		fixture = TestBed.createComponent(ExperiencePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
