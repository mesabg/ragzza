/**
 * Global Modules
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2OrderModule } from 'ng2-order-pipe';

/**
 * Local Modules
 */
import { DirectivesModule } from '../directives';

/**
 * Form Module
 */
import { FormModule } from './form';

/**
 * Components
 */
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { TableComponent } from './table/table.component';

@NgModule({
	imports: [
		CommonModule,
		FormModule,
		DirectivesModule,
		Ng2OrderModule
	],
	declarations: [
		HeaderComponent, 
		FooterComponent, 
		BannerComponent, 
		TableComponent
	],
	exports: [
		HeaderComponent, 
		FooterComponent, 
		BannerComponent,
		TableComponent,
		FormModule
	]
})
export class ComponentsModule { }
