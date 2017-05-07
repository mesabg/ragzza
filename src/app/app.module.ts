/**
 * Import global modules
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/**
 * Import modules
 */
import { ComponentsModule } from './components';
import { ClientsModule } from './clients';

/**
 * Import Main Layout
 */
import { AppComponent as MainLayout } from './app.component';

/**
 * Import pages
 */
import { _404Component as NotFoundPage } from './pages/404/404.component';


/**
 * Import Router
 */
import { AppRoutingModule as MainRouter } from './app-routing.module';

@NgModule({
  declarations: [
    //-- Main Layout
    MainLayout,
    NotFoundPage
  ],
  imports: [
    //-- Global Modules
    BrowserModule,
    FormsModule,
    HttpModule,

    //-- Shared Modules
    ComponentsModule,

    //-- Router
    ClientsModule,
    MainRouter
  ],
  providers: [],
  bootstrap: [MainLayout]
})
export class AppModule { }
