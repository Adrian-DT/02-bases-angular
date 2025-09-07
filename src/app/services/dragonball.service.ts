import { effect, Injectable, signal } from '@angular/core';
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

  saveToLocalStorage = effect( () => {
    console.log(`Character count ${this.characters().length}`);
    // Podemos almacenar en el local storage un array convirtiendolo en string con JSON.stringify
    localStorage.setItem('characters', JSON.stringify(this.characters()))
  });

  // Funcion que retorna un objeto con la clase text-danger de bootstrap
  // poweredClass = computed(() => {
  //   return {
  //     'text-danger': true,
  //   }
  // });


}
