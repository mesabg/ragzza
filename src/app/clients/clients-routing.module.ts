/**
 * Module Dependencies
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Importing Layout and Components
 */
import { ClientsLayout } from './components';

/**
 * Importing Pages
 */
import {AllClientsPage, SingleClientPage, UpdateClientPage, DeleteClientPage} from './pages'; 

/**
 * [routes description]
 * @type {Routes}
 */
const routes: Routes = [{
	path: 'ragzza',
	component: ClientsLayout,
	children: [
		{path: '', redirectTo: 'clients', pathMatch: 'full'},
		{path: 'clients', component: AllClientsPage},
		{path: 'create_client', component: SingleClientPage},
		{path: 'update_client/:id', component: UpdateClientPage},
		{path: 'delete_client/:id', component: DeleteClientPage}
	]
}];

/**
 * [NgModule description]
 */
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ClientsRoutingModule { }
