import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { HerosComponent } from './heros.component';
import { DashboardComponent } from './dashboard.component';

import { AppComponent } from './app.component';

@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
		RouterModule.forRoot([
		  {
		    path: 'heros',
		    component: HerosComponent
		  },
		  {
		  	path: 'dashboard',
		  	component: DashboardComponent
		  },
		  {
		  	path: "",
		  	redirectTo: '/dashboard',
		  	pathMatch: 'full'
		  },
		  {
		  	path: 'detail/:id',
		  	component: HeroDetailComponent
		  }
		])
	],
	declarations: [ 
		AppComponent,
		HerosComponent,
		HeroDetailComponent,
		DashboardComponent
	],
	bootstrap: [ AppComponent ],
	providers: [
		HeroService
	]
})

export class AppModule {

}
