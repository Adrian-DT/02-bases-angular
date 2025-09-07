import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// Con provideIn indicamos la disponibilidad donde será injectable este servicio como dependencia
@Injectable({providedIn: 'root'})
export class DragonBallService {

  // Indicamos que characters es una señal de arrays de tipo Character
  characters = signal(<Character[]>[
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 9000 },
  ]);

  addCharacter(character: Character) {
    this.characters.update(
      (list) => [...list, character]
    );
  }

  // Funcion que retorna un objeto con la clase text-danger de bootstrap
  // poweredClass = computed(() => {
  //   return {
  //     'text-danger': true,
  //   }
  // });


}
