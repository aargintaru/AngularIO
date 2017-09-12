import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.html',
    styleUrls: ['./app.css'],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    name = 'Angular';
    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    constructor(private heroService: HeroService) { }
}