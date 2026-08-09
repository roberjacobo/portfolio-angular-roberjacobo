import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { WritingPageComponent } from './pages/writing-page/writing-page.component';

@NgModule({
	declarations: [WritingPageComponent],
	exports: [WritingPageComponent],
	imports: [CommonModule, SharedModule],
})
export class WritingModule {}
