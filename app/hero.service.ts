import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-heros';

// It is a best practice to apply the `Injectable() decorator from the start both for consistency and for future-proofing.
@Injectable() // TypeScript sees this and emits metadata about our service, metadata that Angular may need to inject other dependencies into this service
export class HeroService {
	getHeros(): Promise<Hero[]>/* return type: array of Hero */ {
		return Promise.resolve(HEROS);
	}
	getHero(id: number): Promise<Hero> {
		return this.getHeros()
			.then(heros => heros.find(hero => hero.id === id));
	}
}

/*
	The consumer of our service doesnt know how the service gets the data.
	our HeroService could get Hero data from anywhere.
	It could get the data from a web service or local storage or froma mock data source

	That's the beauty of removing data access from the component.
	We can change our minds about the implementation as often as we like,
	without touching nay of the compoennets that need hero data
*/