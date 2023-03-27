import { Component } from '@angular/core';

import { Animal } from 'src/app/animal';

import { ListService } from 'src/app/services/list.service';
import { Tempo } from 'src/app/tempo';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[]= [];
  weather = {} as Tempo ;

  animaldetail = '';

  constructor(private listService: ListService){
    this.getAnimals();
    this.getWeather();
  }

  showAge(animal: Animal): void{
    this.animaldetail = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals)=>(this.animals = animals));
  }
  getWeather(): void{
    //this.listService.getwet().subscribe((weather)=>(this.weather = weather));
    this.listService.getwet().subscribe((weather)=>{console.log(this.weather); this.weather = weather;});
  }
}
