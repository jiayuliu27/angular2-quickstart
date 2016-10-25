/*
	Every Angular application has at least one component:
	the root component, in this case 'AppComponent'

	Essential structure of a component
	* import statement to access angular's core @Component
	* A @Component decorator that associates metadata with the `AppComponent` component class
		* a selector that specifies a simple CSS selector fro an HTML elt that represents the component
		* a template that tells Angular how to render the component's view
	* A component class that controls the appearance and behavior of a view through its template.

*/
import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heros',
  template: `
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    <h2>My Heroes</h2>
    <ul class="heros">
      <li *ngFor="let hero of heros"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `,
  providers: [
  	HeroService
  ]
})

export class HerosComponent {
  constructor(private heroService: HeroService) {
  	// simultaneously defines a private heroService property and identifies it as a HeroService injection site
  }

  getHeros() {
  	this.heroService.getHeros()
  		.then(heros => this.heros = heros);
  }

  ngOnInit(): void {
  	this.getHeros();
  }

  heros: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
