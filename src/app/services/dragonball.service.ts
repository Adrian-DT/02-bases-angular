import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// Función para cargar la información del LocalStorage de los Characters
function loadFromLocalStorage(): Character[] {

  const characters = localStorage.getItem('characters');

  // Aquí sería conveniente comprobar que vayamos a retornar un array de tipo Characters por si ha sido modificado
  // De no ser así, deberiamos lanzar algún tipo de error, ahora de manera rápida simplemente retornamos con
  // el operador ternario, un array vacío.

  return characters ? JSON.parse(characters) : [];
}

// Con provideIn indicamos la disponibilidad donde será injectable este servicio como dependencia
@Injectable({providedIn: 'root'})
export class DragonBallService {

  // Indicamos que characters es una señal de arrays de tipo Character y lo cargamos del LocalStorage
  characters = signal(<Character[]>(loadFromLocalStorage()));

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
