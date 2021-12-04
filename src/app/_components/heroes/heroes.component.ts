import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/_interfaces/hero';
import { HEROES } from 'src/app/_data/mock-heroes';
import { HeroService } from 'src/app/_services/hero.service';
import { MessageService } from 'src/app/_services/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero = 'Windstorm'
 

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }
  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id = ${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
