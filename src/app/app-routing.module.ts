/**
 * Global Imports
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Pages Import
 */
import { _404Component as _404Page } from './pages/404/404.component';

const routes: Routes = [
	{path: '', redirectTo: '/ragzza', pathMatch: 'full'},
	{path: '**', component: _404Page }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {useHash: true})],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
