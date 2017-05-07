/**
 * Global Imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Local Modules
 */
import { ComponentsModule } from '../components';
import { DirectivesModule } from '../directives';
import { ApiModule } from '../api';

/**
 * Routing Module Import
 */
import { ClientsRoutingModule } from './clients-routing.module';

/**
 * Components Imports
 */
import { LayoutComponent } from './components/layout/layout.component';
import { AllClientsComponent } from './pages/all-clients/all-clients.component';
import { SingleClientComponent } from './pages/single-client/single-client.component';

/**
 * Services Import
 */
import { ClientsApiService } from './services/clients-api.service';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { UpdateClientComponent } from './pages/update-client/update-client.component';
import { DeleteClientComponent } from './pages/delete-client/delete-client.component';

@NgModule({
	imports: [
		CommonModule,
		ApiModule,
		ClientsRoutingModule,
		DirectivesModule,
		ComponentsModule
	],
	declarations: [
		LayoutComponent, 
		AllClientsComponent, 
		SingleClientComponent, 
		ClientsTableComponent, 
		UpdateClientComponent, 
		DeleteClientComponent
	],
	providers:[
		ClientsApiService
	]
})
export class ClientsModule { }
