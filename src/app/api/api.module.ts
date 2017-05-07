/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Import Services
 */
import { ApiService } from './services/api.service';

/**
 * [Module definition]
 */
@NgModule({
	imports: [
		CommonModule
	],
	providers: [
		ApiService
	],
	declarations: [
	],
	exports:[
		//ApiService
	]
})
export class ApiModule { }
