/**
 * Global Modules
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Directives
 */
import { PageOverheadDirective } from './page-overhead/page-overhead.directive';

/**
 * [Module definition]
 */
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		PageOverheadDirective
	],
	exports:[
		PageOverheadDirective
	]
})
export class DirectivesModule { }
